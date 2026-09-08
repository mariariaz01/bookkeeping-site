const sizes = {
  sm: { icon: "h-7 w-7", word: "text-lg", sub: "text-[8px]", gap: "gap-2" },
  md: { icon: "h-8 w-8", word: "text-xl", sub: "text-[9px]", gap: "gap-3" },
  lg: { icon: "h-14 w-14", word: "text-4xl", sub: "text-xs", gap: "gap-4" },
};

function Mark({ className, invert }: { className?: string; invert?: boolean }) {
  return (
    <svg viewBox="0 0 72 72" className={className} aria-hidden="true">
      <path
        d="M48 14 A22 22 0 1 0 48 58 L48 49 A13 13 0 1 1 48 23 Z"
        className={invert ? "fill-cream" : "fill-plum dark:fill-cream"}
      />
      {/* A small stack of coins, seen edge-on, resting in the C's opening */}
      <rect x="44" y="26" width="13" height="6" rx="3" className="fill-gold stroke-gold-600" strokeWidth="1" />
      <rect x="44" y="33" width="13" height="6" rx="3" className="fill-gold stroke-gold-600" strokeWidth="1" />
      <rect x="44" y="40" width="13" height="6" rx="3" className="fill-gold stroke-gold-600" strokeWidth="1" />
    </svg>
  );
}

export default function Logo({
  variant = "full",
  size = "md",
  invert = false,
  className = "",
}: {
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg";
  /** Force the light-on-dark colors regardless of the site's light/dark
   *  toggle — for placing the logo on a surface that's always dark, like
   *  the plum footer. */
  invert?: boolean;
  className?: string;
}) {
  const s = sizes[size];

  if (variant === "icon") {
    return <Mark className={`${s.icon} shrink-0 ${className}`} invert={invert} />;
  }

  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      <Mark className={`${s.icon} shrink-0`} invert={invert} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-black uppercase tracking-tight ${s.word} ${
            invert ? "text-cream" : "text-plum dark:text-cream"
          }`}
        >
          Countra
        </span>
        <span
          className={`font-mono uppercase tracking-[0.2em] mt-1 ${s.sub} ${
            invert ? "text-gold-400" : "text-gold-600 dark:text-gold-400"
          }`}
        >
          Accounting &amp; Bookkeeping
        </span>
      </span>
    </span>
  );
}
