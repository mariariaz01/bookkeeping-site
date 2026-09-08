import CTAButton from "./CTAButton";

export default function PricingCard({
  name,
  startingAt,
  description,
  features,
  featured = false,
}: {
  name: string;
  startingAt: string;
  description: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col ${
        featured
          ? "bg-plum text-cream shadow-card md:-translate-y-3"
          : "bg-plum/[0.04] dark:bg-cream/5 border border-plum/15 dark:border-cream/15"
      }`}
    >
      {featured && (
        <span className="text-xs font-semibold uppercase tracking-wide text-gold mb-3">Most popular</span>
      )}
      <h3 className={`font-display font-extrabold text-2xl ${featured ? "text-cream" : "text-plum dark:text-cream"}`}>{name}</h3>
      <p className={`mt-2 text-sm ${featured ? "text-cream/80" : "text-ink-400 dark:text-cream/70"}`}>{description}</p>
      <p className="mt-6 font-mono tabular-num text-3xl">
        <span className="align-top text-base mr-1">Starting at</span>
        {startingAt}
        <span className="text-sm font-body"> /mo</span>
      </p>
      <ul className="mt-6 space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-sm">
            <span className={featured ? "text-gold" : "text-gold-600"}>✓</span>
            <span className={featured ? "text-cream/90" : "text-ink-700 dark:text-cream/90"}>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <CTAButton
          href="/contact"
          variant={featured ? "secondary" : "primary"}
          className={featured ? "!border-cream/50 !text-cream hover:!bg-cream/10" : ""}
        >
          Book a free consultation
        </CTAButton>
      </div>
    </div>
  );
}
