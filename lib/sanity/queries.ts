import groq from "groq";

const listingProjection = groq`{
  _id,
  title,
  "slug": slug.current,
  status,
  price,
  beds,
  baths,
  sqft,
  image,
  address,
  description
}`;

export const listingsQuery = groq`*[_type == "listing"] | order(_createdAt desc)${listingProjection}`;

export const listingBySlugQuery = groq`*[_type == "listing" && slug.current == $slug][0]${listingProjection}`;

export const listingSlugsQuery = groq`*[_type == "listing"]{"slug": slug.current}`;
