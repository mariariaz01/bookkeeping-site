import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About Our Company | Canadian Bookkeeping Specialists",
  description:
    "Learn about our approach to bookkeeping — accuracy, confidentiality, and dedicated client service for Canadian small businesses.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Accuracy first",
    body: "Every account is reconciled and every entry is checked. We treat your books the way we'd want our own handled.",
  },
  {
    title: "Reliability",
    body: "Deadlines matter — for CRA filings, for payroll, for your own peace of mind. Our processes are built to keep things on schedule, every month.",
  },
  {
    title: "Client service",
    body: "You should never feel like a ticket number. Our team takes the time to understand your business and communicates in plain language.",
  },
  {
    title: "Technology",
    body: "We work in modern, cloud-based platforms like QuickBooks Online, Xero, and Wave, so your books are accessible and secure wherever you are.",
  },
  {
    title: "Confidentiality",
    body: "Your financial information is sensitive. It's handled with strict confidentiality and secure tools at every step, by every member of our team.",
  },
];

export default function AboutPage() {
  return (
    <section className="max-w-content mx-auto px-6 py-16 md:py-20">
      <p className="ledger-rule text-xs font-mono uppercase tracking-widest mb-4 max-w-fit pr-4">About our company</p>
      <h1 className="font-display text-4xl text-ink dark:text-sage-100 max-w-2xl">
        Bookkeeping built on accuracy, reliability, and clear communication
      </h1>
      <p className="mt-6 text-lg text-ink-400 dark:text-sage-100/80 max-w-xl leading-relaxed">
        We started this company to give Canadian small businesses and self-employed professionals what larger firms often can't: dedicated attention, straightforward pricing, and books they can actually understand. Our team brings professional accounting training to the day-to-day work of keeping your finances organized, accurate, and ready whenever you need them.
      </p>

      <div className="mt-16">
        <h2 className="ledger-rule text-xs font-mono uppercase tracking-widest mb-8 max-w-fit pr-4">Our values</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="font-display text-xl text-ink dark:text-sage-100">{v.title}</h3>
              <p className="mt-2 text-sm text-ink-400 dark:text-sage-100/70 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-400/20 shadow-card p-8">
        <h2 className="font-display text-2xl text-ink dark:text-sage-100">Our mission</h2>
        <p className="mt-3 text-ink-700 dark:text-sage-100/90 leading-relaxed max-w-2xl">
          To give Canadian small business owners clear, accurate, and up-to-date books every month — so financial confusion never gets in the way of running the business they set out to build.
        </p>
      </div>

      <div className="mt-16 text-center">
        <CTAButton href="/contact">Book a free consultation</CTAButton>
      </div>
    </section>
  );
}
