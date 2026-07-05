import { notFound } from "next/navigation";
import { client } from "../../../lib/sanity/client";
import { listingBySlugQuery, listingSlugsQuery } from "../../../lib/sanity/queries";
import { urlForImage } from "../../../lib/sanity/image";
import type { Property } from "../../../components/PropertyCard";

const fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(listingSlugsQuery);
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await client.fetch<Property | null>(listingBySlugQuery, { slug });
  return { title: property ? `${property.title} - AZ McKee Realty` : "Listing - AZ McKee Realty" };
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await client.fetch<Property | null>(listingBySlugQuery, { slug });
  if (!property) notFound();

  return (
    <div>
      <a href="/listings" className="text-sm text-muted underline underline-offset-4">&larr; Back to all listings</a>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={urlForImage(property.image).width(1000).height(750).url()} alt={property.title} className="w-full rounded-2xl object-cover aspect-[4/3]" />
        <div>
          <div className="inline-block border border-graphite text-charcoal rounded-full px-2 py-0.5 text-sm">{property.status}</div>
          <h1 className="mt-2 text-3xl font-bold text-charcoal">{property.title}</h1>
          <div className="text-muted mt-1">
            {property.address.street !== "-" ? `${property.address.street}, ` : ""}
            {property.address.city}, {property.address.state} {property.address.zip}
          </div>
          <div className="font-extrabold text-2xl text-charcoal mt-3">{fmt.format(property.price)}</div>
          <div className="flex gap-4 text-sm mt-2">
            <div><strong>{property.beds}</strong> bd</div>
            <div><strong>{property.baths}</strong> ba</div>
            <div><strong>{property.sqft.toLocaleString?.() ?? property.sqft}</strong> sqft</div>
          </div>
          <p className="mt-4 text-ink/80">{property.description}</p>
          <a className="btn btn-primary mt-5" href="/contact">Ask about this home</a>
        </div>
      </div>
    </div>
  );
}
