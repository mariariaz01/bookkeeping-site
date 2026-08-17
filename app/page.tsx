import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import CardLink from "@/components/CardLink";
import FAQAccordion from "@/components/FAQAccordion";
import ConsultationForm from "@/components/ConsultationForm";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Virtual Bookkeeping Services for Canadian Small Businesses",
  description:
    "Dedicated virtual bookkeeping for Canadian small businesses, entrepreneurs, and self-employed professionals. Book a free consultation with our team.",
  alternates: { canonical: "/" },
};

const whyUs = [
  {
    title: "Built for small business",
    body: "We work exclusively with Canadian small businesses and self-employed professionals — not enterprise finance departments. Everything we do is sized to fit you.",
  },
  {
    title: "Real people, not just software",
    body: "You get a dedicated bookkeeping specialist who learns your business, not a rotating queue of support tickets.",
  },
  {
    title: "Accuracy you can rely on",
    body: "Every account is reconciled, every month, following consistent processes designed to catch errors before they become problems.",
  },
  {
    title: "Confidential by design",
    body: "Your financial information is handled with strict confidentiality and secure, encrypted tools at every step.",
  },
];

const process = [
  { step: "01", title: "Free consultation", body: "We learn about your business, your current bookkeeping situation, and what you need." },
  { step: "02", title: "Simple onboarding", body: "We connect securely to your accounts and set up (or clean up) your bookkeeping software." },
  { step: "03", title: "Monthly bookkeeping", body: "Your team reconciles accounts and categorizes transactions every month, on schedule." },
  { step: "04", title: "Clear reporting", body: "You receive plain-language reports so you always know where your business stands." },
];

const faqs = [
  {
    q: "Do you work with businesses across all of Canada?",
    a: "Yes. Our bookkeeping services are fully virtual, so we work with small businesses and self-employed professionals across every province and territory.",
  },
  {
    q: "What software do you work with?",
    a: "We support QuickBooks Online, Xero, and Wave. If you're not currently using any of these, our team can help you choose and set one up.",
  },
  {
    q: "How is my financial information kept secure?",
    a: "We use encrypted, industry-standard tools for file sharing and account access, and every team member follows strict confidentiality practices.",
  },
  {
    q: "I'm behind on my bookkeeping. Can you still help?",
    a: "Yes — catch-up bookkeeping is one of our most requested services. Our team can bring months or years of backlogged books current.",
  },
  {
    q: "Do you also file my taxes?",
    a: "We focus on bookkeeping, and prepare clean, accurate books for your accountant or CPA. We're happy to coordinate directly with them.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-content mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="ledger-rule text-xs font-mono uppercase tracking-widest mb-6 max-w-fit pr-4">
            Virtual bookkeeping, Canada-wide
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] text-ink dark:text-sage-100">
            Books that balance. Time that's yours again.
          </h1>
          <p className="mt-6 text-lg text-ink-400 dark:text-sage-100/80 max-w-md">
            Dedicated bookkeeping for Canadian small businesses and self-employed professionals — reconciled monthly, reported clearly, handled by a real team.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/contact">Book a free consultation</CTAButton>
            <CTAButton href="/services" variant="secondary">Explore services</CTAButton>
          </div>
        </div>

        {/* Signature visual: a stylized ledger card, not a stock photo */}
        <div className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-400/20 shadow-card p-6 font-mono text-sm tabular-num">
          <div className="flex justify-between text-xs text-ink-400 dark:text-sage-100/60 uppercase tracking-wide pb-3 border-b border-ink-100 dark:border-ink-400/20">
            <span>Account</span>
            <span>Balance</span>
          </div>
          {[
            ["Operating — Chequing", "$18,204.40"],
            ["Business Visa", "$1,120.65"],
            ["GST/HST Payable", "$2,340.10"],
            ["Accounts Receivable", "$6,750.00"],
          ].map(([label, val]) => (
            <div key={label} className="flex justify-between py-3 border-b border-ink-100 dark:border-ink-400/10 text-ink-700 dark:text-sage-100/90">
              <span className="font-body">{label}</span>
              <span>{val}</span>
            </div>
          ))}
          <div className="flex justify-between pt-4 text-brass font-semibold">
            <span className="font-body">Reconciled</span>
            <span>✓ this month</span>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="max-w-content mx-auto px-6 py-16">
        <p className="ledger-rule text-xs font-mono uppercase tracking-widest mb-4 max-w-fit pr-4">Why choose us</p>
        <h2 className="font-display text-3xl text-ink dark:text-sage-100 max-w-xl">
          Bookkeeping that gives you clarity, not just compliance
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-8">
          {whyUs.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-xl text-ink dark:text-sage-100">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-400 dark:text-sage-100/70 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="max-w-content mx-auto px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="ledger-rule text-xs font-mono uppercase tracking-widest mb-4 max-w-fit pr-4">Services</p>
            <h2 className="font-display text-3xl text-ink dark:text-sage-100">Everything your books need, in one place</h2>
          </div>
          <CTAButton href="/services" variant="secondary">View all services</CTAButton>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.slice(0, 6).map((s, idx) => (
            <CardLink
              key={s.slug}
              href={`/services/${s.slug}`}
              title={s.name}
              description={s.shortDescription}
              index={idx + 1}
            />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-content mx-auto px-6 py-16">
        <p className="ledger-rule text-xs font-mono uppercase tracking-widest mb-4 max-w-fit pr-4">Our process</p>
        <h2 className="font-display text-3xl text-ink dark:text-sage-100 max-w-xl">Simple to start, simple to stay with</h2>
        <ol className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {process.map((p) => (
            <li key={p.step}>
              <span className="font-mono tabular-num text-brass text-sm">{p.step}</span>
              <h3 className="mt-2 font-display text-lg text-ink dark:text-sage-100">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-400 dark:text-sage-100/70 leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="max-w-content mx-auto px-6 py-16">
        <p className="ledger-rule text-xs font-mono uppercase tracking-widest mb-4 max-w-fit pr-4">FAQ</p>
        <h2 className="font-display text-3xl text-ink dark:text-sage-100 mb-8 max-w-xl">Questions we hear often</h2>
        <FAQAccordion items={faqs} />
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-content mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="ledger-rule text-xs font-mono uppercase tracking-widest mb-4 max-w-fit pr-4">Get started</p>
            <h2 className="font-display text-3xl text-ink dark:text-sage-100">Book your free consultation</h2>
            <p className="mt-4 text-ink-400 dark:text-sage-100/70 max-w-sm">
              Tell us a little about your business and where your bookkeeping stands today. We'll follow up within one business day.
            </p>
            <p className="mt-6 text-sm text-ink-400 dark:text-sage-100/70">
              hello@yourbookkeepingbrand.ca<br />
              (000) 000-0000
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-400/20 shadow-card p-8">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
