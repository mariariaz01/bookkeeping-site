import Link from "next/link";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-100 dark:border-ink-400/20 bg-cream-100 dark:bg-ink-900">
      <div className="max-w-content mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <Logo />
          <p className="mt-4 text-sm text-ink-400 dark:text-cream/70 max-w-xs">
            Dedicated virtual bookkeeping for Canadian small businesses and self-employed professionals.
          </p>
          <p className="mt-4 text-sm text-ink-400 dark:text-cream/70">
            hello@countra.ca<br />
            (000) 000-0000
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-600 mb-3">Services</p>
          <ul className="space-y-2">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-ink-700 dark:text-cream/90 hover:text-gold-600">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-sm font-medium text-plum dark:text-gold-400">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-600 mb-3">Industries</p>
          <ul className="space-y-2">
            {industries.slice(0, 6).map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`} className="text-sm text-ink-700 dark:text-cream/90 hover:text-gold-600">
                  {i.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/industries" className="text-sm font-medium text-plum dark:text-gold-400">
                View all industries →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-600 mb-3">Company</p>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-sm text-ink-700 dark:text-cream/90 hover:text-gold-600">About our company</Link></li>
            <li><Link href="/pricing" className="text-sm text-ink-700 dark:text-cream/90 hover:text-gold-600">Pricing</Link></li>
            <li><Link href="/contact" className="text-sm text-ink-700 dark:text-cream/90 hover:text-gold-600">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100 dark:border-ink-400/20">
        <div className="max-w-content mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-ink-400 dark:text-cream/60">
          <p>© {new Date().getFullYear()} Countra. All rights reserved.</p>
          <p>Serving small businesses across Canada, virtually.</p>
        </div>
      </div>
    </footer>
  );
}
