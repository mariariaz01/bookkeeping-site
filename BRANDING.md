# Countra — Brand Guide

The business name is **Countra**, tagline **Accounting & Bookkeeping**. This document records the finalized identity so design decisions stay consistent as the site grows.

## Name rationale

"Countra" compresses "count" with the root of **contra account** — the accounting term for an entry that offsets another to reveal the true, net position. Most visitors will read it as a clean, invented name; anyone who's kept a ledger gets a quiet nod.

## Logo

**Concept: the Countra monogram.** A bold, custom "C" letterform — not an icon in a container — with a small gold tally mark resting in its inner curve. Built as a genuine monogram (the way a law firm or bank might use a single custom initial) rather than a pictogram-in-a-rounded-square, which is what most generic app/business icons default to. See `components/Logo.tsx` for the live implementation and `public/logo/` for standalone SVG exports (icon alone, reversed for dark backgrounds, single-color for print, and full lockups).

- Full lockup: monogram + "COUNTRA" (always full caps) + "Accounting & Bookkeeping" subtitle underneath, small and tracked.
- The monogram alone is used for the favicon and anywhere space is tight; below ~24px the gold accent drops away and just the plum "C" remains (see `app/icon.svg`).
- Don't put the mark inside a bounding box, frame, or rounded square — it's a letterform, not an icon, and a container around it undoes the whole point.
- Don't add a gradient, drop shadow, or bevel, and don't recolor it outside the palette below — the flat, plain-color rendering is deliberate.

## Colour palette

| Role | Colour | Hex | Tailwind token |
|---|---|---|---|
| Primary (logo, headlines, buttons) | Plum | `#4A2545` | `plum` |
| Primary hover | Plum, deeper | `#5C3157` | `plum-600` |
| Dark-mode surface | Plum, darkest | `#2E1730` | `plum-900` |
| Accent (icon back card, small highlights) | Gold | `#E0A32E` | `gold` |
| Accent, text-safe | Gold, deeper | `#B08A2E` | `gold-600` |
| Accent, on dark | Gold, lighter | `#F0C368` | `gold-400` |
| Background | Cream | `#FCF8F0` | `cream` |
| Footer / subtle surface | Cream, deeper | `#F5EFE2` | `cream-100` |
| Body text / dark-mode background | Ink | `#201A22` | `ink` |
| Muted text | Ink, lighter | `#6B6270` | `ink-400` |
| Borders | Ink, lightest | `#E4DFD1` | `ink-100` |

Gold is a small-dose accent — eyebrow labels, dividers, the icon's back card — never a full background or button fill. Plum carries the primary weight.

## Typography

- **Display (headlines)**: Archivo, weight 700–900. Bold and plain-spoken rather than a trend geometric face — set the wordmark in weight 900.
- **Body**: IBM Plex Sans, weight 400–600.
- **Numbers / data / labels**: IBM Plex Mono, set with tabular figures so columns of numbers actually line up, and used for the eyebrow labels throughout the site.

All three are free, open-source, and available on Google Fonts.

## Signature device

A short plum (cream in dark mode) bar beside a small tracked mono label — see `.eyebrow` in `globals.css` and the `<Eyebrow>` component. Used at the top of nearly every section as the one recurring visual tie between pages.

## Brand personality

Modern, sophisticated, approachable, trustworthy — a firm with real personality, not a template. Confident about numbers, plain about language. Photography (see `public/images/`) is real people in real working moments, not staged stock-photo clichés — replace the current placeholders with real photos of your own team/office when available.

## Tagline ideas

- "Books that balance. Time that's yours again."
- "Bookkeeping, handled properly."
- "Clarity in your numbers, every month."
