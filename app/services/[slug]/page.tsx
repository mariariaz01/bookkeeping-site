import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import { services, getService } from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <article className="max-w-content mx-auto px-6 py-16 md:py-20">
      <p className="ledger-rule text-xs font-mono uppercase tracking-widest mb-4 max-w-fit pr-4">Services</p>
      <h1 className="font-display text-4xl text-ink dark:text-sage-100 max-w-2xl">{service.name}</h1>
      <p className="mt-4 text-lg text-ink-400 dark:text-sage-100/80 max-w-xl">{service.shortDescription}</p>

      <div className="mt-10 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <p className="text-ink-700 dark:text-sage-100/90 leading-relaxed">{service.intro}</p>

          <h2 className="mt-10 font-display text-xl text-ink dark:text-sage-100">What's included</h2>
          <ul className="mt-4 space-y-3">
            {service.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-ink-700 dark:text-sage-100/90">
                <span className="text-brass">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-xl text-ink dark:text-sage-100">Frequently asked questions</h2>
          <div className="mt-4">
            <FAQAccordion items={service.faqs} />
          </div>
        </div>

        <aside className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-400/20 shadow-card p-6 h-fit">
          <h2 className="font-display text-lg text-ink dark:text-sage-100">Ready to get started?</h2>
          <p className="mt-2 text-sm text-ink-400 dark:text-sage-100/70">
            Book a free consultation and our team will confirm the right fit for your business.
          </p>
          <div className="mt-5">
            <CTAButton href="/contact">Book a free consultation</CTAButton>
          </div>
        </aside>
      </div>
    </article>
  );
}
