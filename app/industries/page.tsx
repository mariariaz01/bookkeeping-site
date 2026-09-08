import type { Metadata } from "next";
import CardLink from "@/components/CardLink";
import CTAButton from "@/components/CTAButton";
import Eyebrow from "@/components/Eyebrow";
import { industries } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Bookkeeping by Industry | Canadian Bookkeeping Specialists",
  description:
    "Bookkeeping tailored to your industry — contractors, consultants, real estate, medical professionals, restaurants, e-commerce, and more.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <section className="max-w-content mx-auto px-6 py-16 md:py-20">
      <Eyebrow>Industries</Eyebrow>
      <h1 className="font-display font-extrabold text-4xl text-plum dark:text-cream max-w-2xl">
        Bookkeeping that understands your industry
      </h1>
      <p className="mt-4 text-ink-400 dark:text-cream/70 max-w-xl">
        Every industry runs a little differently. Our team builds your books around how your business actually earns and spends.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {industries.map((i, idx) => (
          <CardLink key={i.slug} href={`/industries/${i.slug}`} title={i.name} description={i.shortDescription} icon={i.icon} index={idx + 1} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <CTAButton href="/contact">Book a free consultation</CTAButton>
      </div>
    </section>
  );
}
