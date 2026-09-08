import type { Metadata } from "next";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Bookkeeping Pricing Packages | Canadian Bookkeeping Specialists",
  description:
    "Transparent bookkeeping pricing packages for Canadian small businesses — Starter, Growth, and Premium. Book a free consultation for a custom quote.",
  alternates: { canonical: "/pricing" },
};

const packages = [
  {
    name: "Starter",
    tagline: "For solo consultants and freelancers",
    startingAt: "$375",
    description: "For new and small businesses with straightforward, single-account bookkeeping needs.",
    features: [
      "Monthly transaction categorization",
      "One bank/credit card reconciliation",
      "Monthly profit & loss statement",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tagline: "For agencies and growing consulting firms",
    startingAt: "$650",
    description: "For growing businesses with multiple accounts and more moving pieces.",
    features: [
      "Everything in Starter",
      "Up to 4 account reconciliations",
      "Monthly balance sheet",
      "GST/HST tracking",
      "Accounts payable & receivable tracking",
    ],
    featured: true,
  },
  {
    name: "Premium",
    tagline: "For established firms and government contractors",
    startingAt: "$1,100",
    description: "For established businesses that want fuller reporting and dedicated support.",
    features: [
      "Everything in Growth",
      "Unlimited account reconciliations",
      "Custom financial reporting",
      "Payroll support",
      "Priority response times",
      "Direct coordination with your accountant",
    ],
  },
];

const pricingFaqs = [
  {
    q: "Why don't you list exact prices?",
    a: "Bookkeeping needs vary with transaction volume, number of accounts, and industry. We provide an exact quote after a short, free consultation.",
  },
  {
    q: "Are there any setup fees?",
    a: "Some accounts — particularly catch-up cleanups or new QuickBooks Online setups — may involve a one-time onboarding fee, which we'll always confirm upfront.",
  },
  {
    q: "Can I change packages later?",
    a: "Yes. As your business grows, you can move between packages at any time.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="dot-watermark" aria-hidden="true" />
        <div className="relative z-10 max-w-content mx-auto px-6 py-16 md:py-20">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl text-plum dark:text-cream max-w-2xl">
            Straightforward packages, sized to your business
          </h1>
          <p className="mt-4 text-ink-400 dark:text-cream/70 max-w-xl">
            Every business's bookkeeping needs are a little different, so exact pricing is confirmed after a free consultation. Here's what to expect at each level.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <PricingCard key={p.name} {...p} />
            ))}
          </div>

          <p className="mt-6 text-sm text-ink-400 dark:text-cream/70">
            Exact pricing is confirmed after a free 20-minute consultation — most Growth-tier clients land between $650 and $850 a month.
          </p>
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 pb-16 md:pb-20">
        <div className="max-w-2xl">
          <h2 className="font-display font-extrabold text-2xl text-plum dark:text-cream mb-6">Pricing questions</h2>
          <FAQAccordion items={pricingFaqs} />
        </div>
      </section>
    </>
  );
}
