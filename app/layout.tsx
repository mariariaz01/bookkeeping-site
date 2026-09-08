import type { Metadata } from "next";
import { Libre_Franklin, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeScript from "@/components/ThemeScript";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.countra.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bookkeeping for Consultants & Small Firms | Countra",
    template: "%s | Countra",
  },
  description:
    "Dedicated bookkeeping for Canadian small businesses, entrepreneurs, and self-employed professionals. Monthly bookkeeping, catch-up cleanups, and CRA-ready reporting.",
  keywords: [
    "virtual bookkeeping Canada",
    "small business bookkeeper",
    "online bookkeeping services Canada",
    "QuickBooks Online bookkeeper",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Countra",
    title: "Bookkeeping for Consultants & Small Firms | Countra",
    description:
      "Dedicated bookkeeping for Canadian small businesses and self-employed professionals. Book a free consultation.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Countra",
    description:
      "Bookkeeping services for Canadian small businesses, entrepreneurs, and self-employed professionals.",
    areaServed: "CA",
    url: siteUrl,
    priceRange: "$$",
  };

  return (
    <html lang="en-CA" className={`${libreFranklin.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-plum focus:text-cream focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
