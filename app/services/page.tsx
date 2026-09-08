import type { Metadata } from "next";
import CardLink from "@/components/CardLink";
import CTAButton from "@/components/CTAButton";
import Eyebrow from "@/components/Eyebrow";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Bookkeeping Services for Canadian Small Businesses",
  description:
    "Monthly bookkeeping, catch-up cleanups, payroll, GST/HST, and year-end preparation for Canadian small businesses. Explore our full range of bookkeeping services.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="dot-watermark" aria-hidden="true" />
      <div className="relative z-10 max-w-content mx-auto px-6 py-16 md:py-20">
        <Eyebrow>Services</Eyebrow>
        <h1 className="font-display font-extrabold text-4xl text-plum dark:text-cream max-w-2xl">
          Bookkeeping services built for how small businesses actually run
        </h1>
        <p className="mt-4 text-ink-400 dark:text-cream/70 max-w-xl">
          From day-to-day bookkeeping to year-end preparation, our team covers every part of keeping your books accurate — so you can focus on running your business.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <CardLink key={s.slug} href={`/services/${s.slug}`} title={s.name} description={s.shortDescription} icon={s.icon} index={idx + 1} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <CTAButton href="/contact">Book a free consultation</CTAButton>
        </div>
      </div>
    </section>
  );
}
