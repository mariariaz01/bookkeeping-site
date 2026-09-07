import Link from "next/link";

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-plum hover:bg-plum-600 text-cream"
      : "border border-ink-700 dark:border-cream/40 text-ink-700 dark:text-cream hover:bg-ink-100 dark:hover:bg-ink-400/20";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
