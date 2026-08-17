# Ledger & Co. — Bookkeeping Website

A production-ready Next.js 14 (App Router) + TypeScript + Tailwind CSS website for a virtual Canadian bookkeeping business. Built anonymously — no founder name, photo, or personal details anywhere in the copy or metadata.

## What's included

- **10 service pages** (`/services/[slug]`) — monthly bookkeeping, catch-up, reconciliations, reporting, AP, AR, payroll, GST/HST, year-end, QuickBooks Online — each with its own SEO metadata, intro, feature list, and FAQ.
- **12 industry pages** (`/industries/[slug]`) — contractors, consultants, real estate, medical professionals, dentists, lawyers, marketing agencies, restaurants, retail, e-commerce, trades, startups.
- **Home, Pricing, About Our Company, Contact** pages with full copy.
- Dark/light mode (class-based, no flash on load, respects OS preference, persists via localStorage).
- `sitemap.xml` and `robots.txt` generated automatically from the services/industries data.
- JSON-LD (`AccountingService`) structured data in the root layout.
- Accessible by default: skip link, visible focus states, semantic headings, native `<details>` FAQ accordions, reduced-motion support.
- No fake testimonials, client logos, or reviews anywhere — per the "new business" trust-building approach.

## Getting started locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Before you deploy — required changes

1. **Business name & domain**: Replace "Ledger & Co." throughout (`Header.tsx`, `Footer.tsx`, `app/layout.tsx` metadata, `lib/data` files if you reference the name there) with your actual chosen name. Update `siteUrl` in `app/layout.tsx` and `app/sitemap.ts`/`app/robots.ts`.
2. **Contact details**: Replace the placeholder email (`hello@yourbookkeepingbrand.ca`) and phone `(000) 000-0000` in `Footer.tsx` and `app/contact/page.tsx`.
3. **Pricing**: `app/pricing/page.tsx` has `startingAt: "$XXX"` placeholders — fill in real numbers once you've priced your packages.
4. **Contact form backend**: `components/ConsultationForm.tsx` currently just shows a success state on submit — it isn't wired to send anywhere yet. Connect it to a form service (Formspree, Resend, etc.) or a Next.js API route/server action.
5. **Favicon/logo**: `app/icon.svg` is a placeholder favicon built from the site's "ledger" motif (Next.js picks it up automatically). Replace it with your real logo once you have one.

## Deploying to Vercel

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: Vercel auto-detects Next.js — no config changes needed.
4. Click **Deploy**. Vercel builds and hosts it; you'll get a `*.vercel.app` URL immediately.
5. Once you've registered your domain (see checklist below), add it under Project → Settings → Domains and follow Vercel's DNS instructions.

## Editing content

All service and industry copy lives in two files, so you can update or add entries without touching page templates:

- `lib/data/services.ts`
- `lib/data/industries.ts`

Each entry automatically gets its own page, its own metadata, and shows up in the relevant listing/overview page and footer.

## Design tokens

Colors, fonts, and spacing live in `tailwind.config.ts` and `app/globals.css`. The recurring "ledger rule" divider (a hairline with a small mono label) is the site's one signature visual device — see `.ledger-rule` in `globals.css`.

> Note: `npm run build` needs internet access, because `next/font/google` fetches Fraunces, Public Sans, and IBM Plex Mono at build time. This works automatically on Vercel; if you build in a sandboxed/offline environment first, the font fetch step is the one thing that needs a normal internet connection.

## Pre-launch checklist

- [ ] Choose your business name and confirm the domain is available (see `BRANDING.md`)
- [ ] Register your domain and set up a professional business email on it (not a personal Gmail)
- [ ] Connect the contact form to a real backend so leads actually reach you
- [ ] Replace placeholder phone/email and fill in real pricing figures
- [ ] Register your business structure and confirm whether you need to register for GST/HST
- [ ] Look into professional liability (E&O) insurance for bookkeeping services
- [ ] Confirm your CPA program's rules on advertising bookkeeping services while still a candidate
- [ ] Pick a secure, client-facing tool for document/file sharing
- [ ] Set up analytics (e.g., Plausible or Google Analytics) and Google Search Console
- [ ] Test the contact form and read through the site on a phone before launch
- [ ] Replace `app/icon.svg` with a real logo once you have one
