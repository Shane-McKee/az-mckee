const reviews = [
  { name: "J. Ramirez", text: "Flawless experience selling our Scottsdale home - pricing strategy and marketing were on point.", rating: 5 },
  { name: "A. Chen", text: "Fast, clear communication and hyper-local insight. We landed our dream place in PV.", rating: 5 },
  { name: "D. Walker", text: "Data-driven guidance made every decision easy. Highly recommend AZ McKee Realty.", rating: 5 }
];
export default function Reviews() {
  return (
    <section className="container py-10">
      <h2 className="text-2xl font-bold text-charcoal mb-2">What clients say</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((r, i) => (
          <article key={i} className="bg-white border border-gray600 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-charcoal font-semibold">{r.name}</div>
            <div className="mt-1 text-sm text-muted">{Array.from({length: r.rating}).map((_,i)=>"★").join("")}</div>
            <p className="mt-2 text-ink/80">{r.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
