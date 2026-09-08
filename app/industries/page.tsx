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

const primaryIndustries = industries.filter((i) => i.tier === "primary");
const secondaryIndustries = industries.filter((i) => i.tier === "secondary");

export default function IndustriesPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="dot-watermark" aria-hidden="true" />
      <div className="relative z-10 max-w-content mx-auto px-6 py-16 md:py-20">
        <Eyebrow>Industries</Eyebrow>
        <h1 className="font-display font-extrabold text-4xl text-plum dark:text-cream max-w-2xl">
          Bookkeeping that understands how consultants and agencies get paid
        </h1>
        <p className="mt-4 text-ink-400 dark:text-cream/70 max-w-xl">
          Every industry runs a little differently. COUNTRA builds your books around how your business actually earns and spends — with particular depth in Ottawa's consulting, agency, and government-contracting community.
        </p>
        <p className="mt-6 text-sm text-ink-400 dark:text-cream/70 max-w-2xl border-l-2 border-gold pl-4">
          Ottawa is home to Kanata North — Canada's largest technology park, with 800+ companies — and one of the country's highest concentrations of federal government contractors and independent consultants. COUNTRA is built around that community.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {primaryIndustries.map((i, idx) => (
            <CardLink key={i.slug} href={`/industries/${i.slug}`} title={i.name} description={i.shortDescription} icon={i.icon} index={idx + 1} />
          ))}
        </div>

        <h2 className="mt-16 font-display font-bold text-lg text-plum dark:text-cream">We also work well with</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {secondaryIndustries.map((i, idx) => (
            <CardLink
              key={i.slug}
              href={`/industries/${i.slug}`}
              title={i.name}
              description={i.shortDescription}
              icon={i.icon}
              index={primaryIndustries.length + idx + 1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <CTAButton href="/contact">Book a free consultation</CTAButton>
        </div>
      </div>
    </section>
  );
}
