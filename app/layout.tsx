import "./globals.css";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "AZ McKee Realty - Boutique Arizona Real Estate", description: "Helping Arizona buyers & sellers with a refined, data-driven approach." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-charcoal focus:px-4 focus:py-2 focus:rounded-md focus:shadow-soft focus-visible:ring-2 focus-visible:ring-charcoal"
        >
          Skip to main content
        </a>
        <div className="h-1 w-full bg-charcoal" aria-hidden="true" />
        <Header />
        <main id="main-content" tabIndex={-1} className="container py-5">{children}</main>
        <Footer />
      </body>
    </html>
  ); }
