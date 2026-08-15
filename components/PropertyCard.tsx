"use client";
import Link from "next/link";
import type { Image as SanityImage } from "sanity";
import { urlForImage } from "../lib/sanity/image";
export type Property = {
  slug: string; title: string; status: string; price: number; beds: number; baths: number; sqft: number; image: SanityImage;
  address: { street: string; city: string; state: string; zip: string }; description: string;
};
const fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="bg-white border border-gray600 rounded-2xl overflow-hidden">
      <Link href={`/listing/${property.slug}`} aria-label={`View ${property.title}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-charcoal">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={urlForImage(property.image).width(800).height(600).url()} alt="" className="w-full aspect-[4/3] object-cover" loading="lazy" decoding="async" />
        <div className="p-4 space-y-1">
          <span className="inline-block border border-graphite text-charcoal rounded-full px-2 py-0.5 text-sm">{property.status}</span>
          <h3 className="mt-1 font-semibold text-[18px]">{property.title}</h3>
          <div className="text-[15px] text-muted">{property.address.city}, {property.address.state}</div>
          <div className="font-extrabold text-charcoal">{fmt.format(property.price)}</div>
          <div className="flex gap-4 text-sm mt-1">
            <div><strong>{property.beds}</strong> bd</div>
            <div><strong>{property.baths}</strong> ba</div>
            <div><strong>{property.sqft.toLocaleString?.() ?? property.sqft}</strong> sqft</div>
          </div>
        </div>
      </Link>
    </article>
  );
}
