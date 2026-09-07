# Countra — Bookkeeping Website

A production-ready Next.js 14 (App Router) + TypeScript + Tailwind CSS website for a virtual Canadian bookkeeping business. Photography is free-license stock (see "Photography" below) standing in until real team/office photos are available.

## What's included

- **10 service pages** (`/services/[slug]`) — monthly bookkeeping, catch-up, reconciliations, reporting, AP, AR, payroll, GST/HST, year-end, QuickBooks Online — each with its own SEO metadata, intro, feature list, and FAQ.
- **12 industry pages** (`/industries/[slug]`) — contractors, consultants, real estate, medical professionals, dentists, lawyers, marketing agencies, restaurants, retail, e-commerce, trades, startups.
- **Home, Pricing, About Our Company, Contact** pages with full copy.
- Dark/light mode (class-based, no flash on load, respects OS preference, persists via localStorage).
- `sitemap.xml` and `robots.txt` generated automatically from the services/industries data.
- JSON-LD (`AccountingService`) structured data in the root layout.
- Accessible by default: skip link, visible focus states, semantic headings, native `<details>` FAQ accordions, reduced-motion support.
- No fake testimonials, client logos, or reviews anywhere — per the "new business" trust-building approach.

## Photography

`public/images/` holds free-license stock photos (Pexels) used on the homepage and About page as placeholders. Swap them for real photos of your team, office, or workspace when you have them — real photography reads as far more credible than even well-chosen stock, and is the single highest-leverage change once available.

## Getting started locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Before you deploy — required changes

1. **Domain**: `countra.ca` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` is a placeholder — update `siteUrl` once you've registered your actual domain.
2. **Contact details**: Replace the placeholder email (`hello@countra.ca`) and phone `(000) 000-0000` in `Footer.tsx`, `app/contact/page.tsx`, and `app/page.tsx`.
3. **Pricing**: `app/pricing/page.tsx` has `startingAt: "$XXX"` placeholders — fill in real numbers once you've priced your packages.
4. **Contact form backend**: `components/ConsultationForm.tsx` currently just shows a success state on submit — it isn't wired to send anywhere yet. Connect it to a form service (Formspree, Resend, etc.) or a Next.js API route/server action.
5. **Photography**: `public/images/` holds stock photos standing in for real ones — see "Photography" above.

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

Colors, fonts, and spacing live in `tailwind.config.ts` and `app/globals.css`. The recurring "eyebrow" (a short plum bar beside a small tracked mono label) is the site's one signature visual device — see `.eyebrow` in `globals.css` and `components/Eyebrow.tsx`. Full brand rationale — logo, palette, type — lives in `BRANDING.md`.

> Note: `npm run build` needs internet access, because `next/font/google` fetches Archivo, IBM Plex Sans, and IBM Plex Mono at build time. This works automatically on Vercel; if you build in a sandboxed/offline environment first, the font fetch step is the one thing that needs a normal internet connection.

## Pre-launch checklist

- [ ] Register your domain and set up a professional business email on it (not a personal Gmail)
- [ ] Connect the contact form to a real backend so leads actually reach you
- [ ] Replace placeholder phone/email and fill in real pricing figures
- [ ] Register your business structure and confirm whether you need to register for GST/HST
- [ ] Look into professional liability (E&O) insurance for bookkeeping services
- [ ] Confirm your CPA program's rules on advertising bookkeeping services while still a candidate
- [ ] Pick a secure, client-facing tool for document/file sharing
- [ ] Set up analytics (e.g., Plausible or Google Analytics) and Google Search Console
- [ ] Test the contact form and read through the site on a phone before launch
- [ ] Swap the stock photos in `public/images/` for real ones of your team/office
