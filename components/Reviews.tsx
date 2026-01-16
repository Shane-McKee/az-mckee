const reviews = [
  { name: "ironeagle2000", text: "Austin was amazing to work with. He quickly found out what I was looking for and helped find the perfect home. The house we found had all the checkmarks I was looking for plus more. Thank you Austin!!", rating: 5 },
  { name: "zuser20171213131947795", text: "We recently had the pleasure of working with Austin Mckee. He met our very high expectations and was such a lifesaver while making my husband and I feel so at ease throughout the entire home buying process.", rating: 5 },
  { name: "jacksonfried638", text: "I had a great experience with Austin, easy going, helpful and knowledgeable. Made my first home buying process easy.", rating: 5 }
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
