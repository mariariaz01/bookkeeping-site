import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTAButton from "@/components/CTAButton";
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
      <p className="ledger-rule text-xs font-mono uppercase tracking-widest mb-4 max-w-fit pr-4">Industries</p>
      <h1 className="font-display text-4xl text-ink dark:text-sage-100 max-w-2xl">
        Bookkeeping for {industry.name}
      </h1>
      <p className="mt-4 text-lg text-ink-400 dark:text-sage-100/80 max-w-xl">{industry.shortDescription}</p>

      <div className="mt-10 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <p className="text-ink-700 dark:text-sage-100/90 leading-relaxed">{industry.intro}</p>
          <h2 className="mt-10 font-display text-xl text-ink dark:text-sage-100">What we handle</h2>
          <ul className="mt-4 space-y-3">
            {industry.points.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-ink-700 dark:text-sage-100/90">
                <span className="text-brass">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-400/20 shadow-card p-6 h-fit">
          <h2 className="font-display text-lg text-ink dark:text-sage-100">Ready to get started?</h2>
          <p className="mt-2 text-sm text-ink-400 dark:text-sage-100/70">
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
