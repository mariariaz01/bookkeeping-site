import Link from "next/link";
import IconBadge from "./IconBadge";
import type { IconName } from "./Icons";

export default function CardLink({
  href,
  title,
  description,
  icon,
  index,
}: {
  href: string;
  title: string;
  description: string;
  icon: IconName;
  index?: number;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-ink-100 dark:border-ink-400/20 bg-white dark:bg-ink-900 p-6 hover:border-gold hover:shadow-card transition-all"
    >
      <div className="flex items-start justify-between">
        <IconBadge name={icon} />
        {typeof index === "number" && (
          <span className="font-mono tabular-num text-xs text-gold-600 mt-1">{String(index).padStart(2, "0")}</span>
        )}
      </div>
      <h3 className="mt-4 font-display font-bold text-lg text-plum dark:text-cream group-hover:text-plum dark:group-hover:text-gold-400 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-ink-400 dark:text-cream/70 leading-relaxed">{description}</p>
      <span className="mt-4 inline-block text-sm font-medium text-plum dark:text-gold-400">Learn more →</span>
    </Link>
  );
}
