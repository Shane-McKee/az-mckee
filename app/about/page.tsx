export const metadata = { title: "About - AZ McKee Realty" };
export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-charcoal mb-2">About AZ McKee Realty</h1>
      <p>We blend neighborhood insight with crisp, modern marketing to deliver better outcomes for buyers and sellers across the Valley.</p>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Neighborhood-level pricing guidance</li>
        <li>Premium media and staging partners</li>
        <li>Negotiation grounded in data</li>
      </ul>
    </div>
  ); }
