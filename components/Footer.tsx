import Link from "next/link";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import Logo from "./Logo";

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold-400 mb-3">
      <span className="h-0.5 w-3.5 bg-gold-400 shrink-0" aria-hidden="true" />
      {children}
    </p>
  );
}

export default function Footer() {
  return (
    <footer className="mt-24 bg-plum text-cream">
      <div className="max-w-content mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <Logo invert />
          <p className="mt-4 text-sm text-cream/70 max-w-xs">
            Dedicated virtual bookkeeping for Canadian small businesses and self-employed professionals.
          </p>
          <p className="mt-4 text-sm text-cream/70">
            countra@gmail.com<br />
            613-302-7429
          </p>
        </div>

        <div>
          <ColumnHeading>Services</ColumnHeading>
          <ul className="space-y-2">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-cream/85 hover:text-gold-400">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-sm font-medium text-gold-400">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ColumnHeading>Industries</ColumnHeading>
          <ul className="space-y-2">
            {industries.slice(0, 6).map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`} className="text-sm text-cream/85 hover:text-gold-400">
                  {i.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/industries" className="text-sm font-medium text-gold-400">
                View all industries →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ColumnHeading>Company</ColumnHeading>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-sm text-cream/85 hover:text-gold-400">About our company</Link></li>
            <li><Link href="/pricing" className="text-sm text-cream/85 hover:text-gold-400">Pricing</Link></li>
            <li><Link href="/contact" className="text-sm text-cream/85 hover:text-gold-400">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="max-w-content mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Countra. All rights reserved.</p>
          <p>Based in Ottawa. Serving independent consultants and small professional-service firms across Ontario and Canada, virtually.</p>
        </div>
      </div>
    </footer>
  );
}
