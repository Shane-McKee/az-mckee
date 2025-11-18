import listingsData from "../../data/listings.json";
import PropertyCard from "../../components/PropertyCard";
export const metadata = { title: "Listings - AZ McKee Realty" };
export default function ListingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-charcoal mb-2">All Listings</h1>
      <p className="text-muted max-w-[60ch] mb-4">A curated selection of homes we love right now. Looking for something specific? <a href="/contact" className="underline underline-offset-4">Tell us your wish list.</a></p>
      <div className="grid-3">
        {(listingsData as any).map((p: any) => (<PropertyCard key={p.slug} property={p} />))}
      </div>
    </div>
  ); }
