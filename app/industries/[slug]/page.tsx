import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTAButton from "@/components/CTAButton";
import Eyebrow from "@/components/Eyebrow";
import IconBadge from "@/components/IconBadge";
import { industries, getIndustry } from "@/lib/data/industries";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = getIndustry(params.slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug);
  if (!industry) notFound();

  return (
    <article className="max-w-content mx-auto px-6 py-16 md:py-20">
      <Eyebrow>Industries</Eyebrow>
      <div className="flex items-center gap-4">
        <IconBadge name={industry.icon} size="md" />
        <h1 className="font-display font-extrabold text-4xl text-plum dark:text-cream max-w-2xl">
          Bookkeeping for {industry.name}
        </h1>
      </div>
      <p className="mt-4 text-lg text-ink-400 dark:text-cream/80 max-w-xl">{industry.shortDescription}</p>

      <div className="mt-10 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <p className="text-ink-700 dark:text-cream/90 leading-relaxed">{industry.intro}</p>
          <h2 className="mt-10 font-display font-bold text-xl text-plum dark:text-cream">What we handle</h2>
          <ul className="mt-4 space-y-3">
            {industry.points.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-ink-700 dark:text-cream/90">
                <span className="text-gold-600">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-2xl bg-plum/[0.04] dark:bg-cream/5 border border-plum/15 dark:border-cream/15 shadow-card p-6 h-fit">
          <h2 className="font-display font-bold text-lg text-plum dark:text-cream">Ready to get started?</h2>
          <p className="mt-2 text-sm text-ink-400 dark:text-cream/70">
            Book a free consultation and tell us about your business — we'll confirm the right fit.
          </p>
          <div className="mt-5">
            <CTAButton href="/contact">Book a free consultation</CTAButton>
          </div>
        </aside>
      </div>
    </article>
  );
}
