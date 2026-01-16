import Link from "next/link";
export default function Header() {
  const nav = [
    { href: "/", label: "Home" },
    { href: "/listings", label: "Listings" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray600">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-wide text-charcoal">
          <span className="inline-block size-7 rounded-md bg-white"><img src="/images/icon.png" /></span>
          <span>AZ McKee Realty</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 text-[15px] font-semibold text-ink/90">
            {nav.map(i => (
              <li key={i.href}><Link className="hover:underline underline-offset-4" href={i.href}>{i.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
