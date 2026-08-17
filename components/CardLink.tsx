import Link from "next/link";

export default function CardLink({
  href,
  title,
  description,
  index,
}: {
  href: string;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-ink-100 dark:border-ink-400/20 bg-white dark:bg-ink-900 p-6 hover:border-brass hover:shadow-card transition-all"
    >
      {typeof index === "number" && (
        <span className="font-mono tabular-num text-xs text-brass">{String(index).padStart(2, "0")}</span>
      )}
      <h3 className="mt-2 font-display text-lg text-ink dark:text-sage-100 group-hover:text-brass transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-ink-400 dark:text-sage-100/70 leading-relaxed">{description}</p>
      <span className="mt-4 inline-block text-sm font-medium text-forest dark:text-brass-400">Learn more →</span>
    </Link>
  );
}
