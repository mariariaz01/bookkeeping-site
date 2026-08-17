import type { Metadata } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeScript from "@/components/ThemeScript";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://www.yourbookkeepingbrand.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Virtual Bookkeeping Services for Canadian Small Businesses",
    template: "%s | Ledger & Co. Bookkeeping",
  },
  description:
    "Dedicated virtual bookkeeping for Canadian small businesses, entrepreneurs, and self-employed professionals. Monthly bookkeeping, catch-up cleanups, and CRA-ready reporting.",
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
    siteName: "Ledger & Co. Bookkeeping",
    title: "Virtual Bookkeeping Services for Canadian Small Businesses",
    description:
      "Dedicated virtual bookkeeping for Canadian small businesses and self-employed professionals. Book a free consultation.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Ledger & Co. Bookkeeping",
    description:
      "Virtual bookkeeping services for Canadian small businesses, entrepreneurs, and self-employed professionals.",
    areaServed: "CA",
    url: siteUrl,
    priceRange: "$$",
  };

  return (
    <html lang="en-CA" className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable}`} suppressHydrationWarning>
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
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-ink-700 focus:text-white focus:px-4 focus:py-2 focus:rounded"
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
