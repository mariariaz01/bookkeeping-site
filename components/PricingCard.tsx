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
          ? "bg-ink-700 text-sage-100 shadow-card md:-translate-y-3"
          : "bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-400/20"
      }`}
    >
      {featured && (
        <span className="text-xs font-semibold uppercase tracking-wide text-brass-400 mb-3">Most popular</span>
      )}
      <h3 className={`font-display text-2xl ${featured ? "text-white" : "text-ink dark:text-sage-100"}`}>{name}</h3>
      <p className={`mt-2 text-sm ${featured ? "text-sage-100/80" : "text-ink-400 dark:text-sage-100/70"}`}>{description}</p>
      <p className="mt-6 font-mono tabular-num text-3xl">
        <span className="align-top text-base mr-1">Starting at</span>
        {startingAt}
        <span className="text-sm font-body"> /mo</span>
      </p>
      <ul className="mt-6 space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-sm">
            <span className={featured ? "text-brass-400" : "text-brass"}>✓</span>
            <span className={featured ? "text-sage-100/90" : "text-ink-700 dark:text-sage-100/90"}>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <CTAButton href="/contact" variant={featured ? "secondary" : "primary"}>
          Book a free consultation
        </CTAButton>
      </div>
    </div>
  );
}
