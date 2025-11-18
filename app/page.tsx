import listingsData from "../data/listings.json";
import PropertyCard from "../components/PropertyCard";
import Reviews from "../components/Reviews";
export default function HomePage() {
  const featured = (listingsData as any).slice(0, 6);
  return (<>
    <section className="hero-fullbleed" role="banner" aria-label="AZ McKee Realty">
      <div className="hero-media" style={{ backgroundImage: "url('/images/hero.png')" }} />
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-content container text-white py-14">
        <div className="eyebrow">Arizona • Residential • Boutique</div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow">Your Arizona home, curated - without the noise.</h1>
        <p className="max-w-[60ch] text-white/85 mt-2">Local expertise across Phoenix, Scottsdale, and the West Valley. Careful pricing guidance, premium marketing, and negotiation grounded in data.</p>
        <div className="flex flex-wrap gap-3 mt-4">
          <a className="btn btn-alt" href="/listings">Browse Listings</a>
          <a className="btn btn-primary" href="/contact">Request a Valuation</a>
        </div>
      </div>
    </section>
    <section className="container pt-8">
      <h2 className="text-2xl font-bold text-charcoal mb-2">Featured Listings</h2>
      <div className="grid-3">{featured.map((p: any) => (<PropertyCard key={p.slug} property={p} />))}</div>
    </section>
    <section className="container grid md:grid-cols-2 gap-4 py-10">
  <div className="bg-white border border-gray600 rounded-2xl p-5">
    <h3 className="text-xl font-bold text-charcoal">Buy with confidence</h3>
    <p className="text-muted mt-1">Neighborhood-level insights help us spot value and act decisively.</p>
    <a className="btn btn-primary mt-3" href="/listings">Explore the market</a>
  </div>
  <div className="bg-white border border-gray600 rounded-2xl p-5">
    <h3 className="text-xl font-bold text-charcoal">Sell for maximum value</h3>
    <p className="text-muted mt-1">Staging, cinematic media, and modern distribution targeted to Arizona buyers.</p>
    <a className="btn btn-primary mt-3" href="/contact">Start your plan</a>
  </div>
</section>

<Reviews />

  </>); }
