import Link from "next/link";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-100 dark:border-ink-400/20 bg-sage-100 dark:bg-ink-900">
      <div className="max-w-content mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <p className="font-display text-lg font-semibold text-ink dark:text-sage-100">Ledger &amp; Co.</p>
          <p className="mt-3 text-sm text-ink-400 dark:text-sage-100/70 max-w-xs">
            Dedicated virtual bookkeeping for Canadian small businesses and self-employed professionals.
          </p>
          <p className="mt-4 text-sm text-ink-400 dark:text-sage-100/70">
            hello@yourbookkeepingbrand.ca<br />
            (000) 000-0000
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brass mb-3">Services</p>
          <ul className="space-y-2">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-ink-700 dark:text-sage-100/90 hover:text-brass">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-sm font-medium text-forest dark:text-brass-400">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brass mb-3">Industries</p>
          <ul className="space-y-2">
            {industries.slice(0, 6).map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`} className="text-sm text-ink-700 dark:text-sage-100/90 hover:text-brass">
                  {i.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/industries" className="text-sm font-medium text-forest dark:text-brass-400">
                View all industries →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brass mb-3">Company</p>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-sm text-ink-700 dark:text-sage-100/90 hover:text-brass">About our company</Link></li>
            <li><Link href="/pricing" className="text-sm text-ink-700 dark:text-sage-100/90 hover:text-brass">Pricing</Link></li>
            <li><Link href="/contact" className="text-sm text-ink-700 dark:text-sage-100/90 hover:text-brass">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100 dark:border-ink-400/20">
        <div className="max-w-content mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-ink-400 dark:text-sage-100/60">
          <p>© {new Date().getFullYear()} Ledger &amp; Co. Bookkeeping. All rights reserved.</p>
          <p>Serving small businesses across Canada, virtually.</p>
        </div>
      </div>
    </footer>
  );
}
