export default function Eyebrow({
  children,
  invert = false,
}: {
  children: React.ReactNode;
  /** Force the light-on-dark colors regardless of the site's light/dark
   *  toggle — for placing on a surface that's always dark, like the plum hero. */
  invert?: boolean;
}) {
  if (invert) {
    return (
      <p className="mb-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-400">
        <span className="h-0.5 w-4 shrink-0 bg-cream" aria-hidden="true" />
        {children}
      </p>
    );
  }
  return <p className="eyebrow mb-4">{children}</p>;
}
