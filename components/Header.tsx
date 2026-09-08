"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-plum border-b border-cream/10">
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Countra home">
          <Logo invert />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/90 hover:text-gold-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle className="!border-cream/30 text-cream hover:!bg-cream/10" />
          <Link
            href="/contact"
            className="rounded-lg bg-cream hover:bg-cream/90 text-plum text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            Book a free consultation
          </Link>
        </div>

        <button
          className="md:hidden text-cream"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-cream/10 px-6 py-4 flex flex-col gap-4 bg-plum" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-cream"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-cream text-plum text-sm font-semibold px-5 py-3 text-center"
            onClick={() => setOpen(false)}
          >
            Book a free consultation
          </Link>
          <div className="pt-2">
            <ThemeToggle className="!border-cream/30 text-cream hover:!bg-cream/10" />
          </div>
        </nav>
      )}
    </header>
  );
}
