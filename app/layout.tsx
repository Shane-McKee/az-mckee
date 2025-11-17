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
        <div className="h-1 w-full bg-charcoal" aria-hidden="true" />
        <Header />
        <main className="container py-5">{children}</main>
        <Footer />
      </body>
    </html>
  ); }
