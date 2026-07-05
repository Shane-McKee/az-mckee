import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";
import { createClient } from "@sanity/client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

config({ path: path.join(rootDir, ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN.\n" +
    "Create a .env.local with these values (see .env.local.example) before running this script."
  );
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

const listings = JSON.parse(fs.readFileSync(path.join(rootDir, "data/listings.json"), "utf-8"));

async function uploadImage(imagePath) {
  const absolutePath = path.join(rootDir, "public", imagePath.replace(/^\//, ""));
  const asset = await client.assets.upload("image", fs.createReadStream(absolutePath), {
    filename: path.basename(absolutePath),
  });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function migrate() {
  for (const listing of listings) {
    const existing = await client.fetch(`*[_type == "listing" && slug.current == $slug][0]._id`, { slug: listing.slug });
    if (existing) {
      console.log(`Skipping "${listing.slug}" — already exists in Sanity.`);
      continue;
    }

    const image = await uploadImage(listing.image);
    const doc = {
      _type: "listing",
      title: listing.title,
      slug: { _type: "slug", current: listing.slug },
      status: listing.status,
      price: listing.price,
      beds: listing.beds,
      baths: listing.baths,
      sqft: listing.sqft,
      image,
      address: listing.address,
      description: listing.description,
    };

    const created = await client.create(doc);
    console.log(`Created "${listing.title}" (${created._id})`);
  }
}

migrate().catch((err) => {
  console.error(err);
  process.exit(1);
});
