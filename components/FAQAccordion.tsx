export default function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-ink-100 dark:divide-ink-400/20 border-y border-ink-100 dark:border-ink-400/20">
      {items.map((item, i) => (
        <details key={i} className="group py-5">
          <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-ink-700 dark:text-sage-100">
            <span>{item.q}</span>
            <span className="ml-4 shrink-0 text-brass transition-transform group-open:rotate-45 text-xl leading-none">+</span>
          </summary>
          <p className="mt-3 text-sm text-ink-400 dark:text-sage-100/70 leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
