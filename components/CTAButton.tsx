import Link from "next/link";

export default function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-forest hover:bg-forest-600 text-white"
      : "border border-ink-700 dark:border-sage-100/40 text-ink-700 dark:text-sage-100 hover:bg-sage-200 dark:hover:bg-ink-400/20";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
