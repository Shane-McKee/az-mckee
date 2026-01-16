export default function Footer() {
  return (
    <footer className="border-t border-gray600 bg-white mt-12">
      <div className="container grid md:grid-cols-2 gap-4 py-6">
        <div>
          <div className="flex items-center gap-2 font-extrabold tracking-wide text-charcoal mb-2">
            <span className="inline-block size-6 rounded-md bg-charcoal"></span>
            <span>AZ McKee Realty</span>
          </div>
          <p className="max-w-[60ch] text-muted">
            Helping Arizona buyers and sellers make confident real estate moves across Phoenix, Scottsdale, and beyond.
          </p>
        </div>
        <div className="justify-self-end self-center">
          <a className="btn btn-primary" href="/contact">Book a Consultation</a>
        </div>
      </div>
      <div className="container text-sm text-muted pb-6">© {new Date().getFullYear()} AZ McKee Realty. All rights reserved. <span><img src="/images/fairMLS.png" width={150}height={200}/></span></div>
    </footer>
  );
}
