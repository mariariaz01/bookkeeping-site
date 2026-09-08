import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import CardLink from "@/components/CardLink";
import FAQAccordion from "@/components/FAQAccordion";
import ConsultationForm from "@/components/ConsultationForm";
import Eyebrow from "@/components/Eyebrow";
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
          <Eyebrow>Virtual bookkeeping, Canada-wide</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-[1.1] text-plum dark:text-cream">
            Books that balance. Time that's yours again.
          </h1>
          <p className="mt-6 text-lg text-ink-400 dark:text-cream/80 max-w-md">
            Dedicated bookkeeping for Canadian small businesses and self-employed professionals — reconciled monthly, reported clearly, handled by a real team.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/contact">Book a free consultation</CTAButton>
            <CTAButton href="/services" variant="secondary">Explore services</CTAButton>
          </div>
        </div>

        {/* Signature visual: a stylized ledger card, not a stock photo */}
        <div className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-400/20 shadow-card p-6 font-mono text-sm tabular-num">
          <div className="flex justify-between text-xs text-ink-400 dark:text-cream/60 uppercase tracking-wide pb-3 border-b border-ink-100 dark:border-ink-400/20">
            <span>Account</span>
            <span>Balance</span>
          </div>
          {[
            ["Operating — Chequing", "$18,204.40"],
            ["Business Visa", "$1,120.65"],
            ["GST/HST Payable", "$2,340.10"],
            ["Accounts Receivable", "$6,750.00"],
          ].map(([label, val]) => (
            <div key={label} className="flex justify-between py-3 border-b border-ink-100 dark:border-ink-400/10 text-ink-700 dark:text-cream/90">
              <span className="font-body">{label}</span>
              <span>{val}</span>
            </div>
          ))}
          <div className="flex justify-between pt-4 text-gold-600 dark:text-gold-400 font-semibold">
            <span className="font-body">Reconciled</span>
            <span>✓ this month</span>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="max-w-content mx-auto px-6 py-16">
        <Eyebrow>Why choose us</Eyebrow>
        <h2 className="font-display font-extrabold text-3xl text-plum dark:text-cream max-w-xl">
          Bookkeeping that gives you clarity, not just compliance
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-8">
          {whyUs.map((item) => (
            <div key={item.title}>
              <h3 className="font-display font-bold text-xl text-plum dark:text-cream">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-400 dark:text-cream/70 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we work with */}
      <section className="max-w-content mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-ink-100 dark:border-ink-400/20 order-2 md:order-1">
            <Image
              src="/images/small-business-owner.jpg"
              alt="A small business owner in her shop"
              fill
              className="object-cover object-[center_15%]"
              sizes="(min-width: 768px) 480px, 100vw"
            />
          </div>
          <div className="order-1 md:order-2">
            <Eyebrow>Who we work with</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl text-plum dark:text-cream">
              Built for the business you actually run
            </h2>
            <p className="mt-4 text-ink-400 dark:text-cream/70 leading-relaxed max-w-md">
              Not an enterprise finance department — a real small business, with real seasons, real cash-flow questions, and better things to do than reconcile a spreadsheet at midnight.
            </p>
            <p className="mt-4 text-ink-400 dark:text-cream/70 leading-relaxed max-w-md">
              Every client gets a dedicated bookkeeping specialist who learns the specifics of their business, not a rotating queue of support tickets.
            </p>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="max-w-content mx-auto px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <Eyebrow>Services</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl text-plum dark:text-cream">Everything your books need, in one place</h2>
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
        <Eyebrow>Our process</Eyebrow>
        <h2 className="font-display font-extrabold text-3xl text-plum dark:text-cream max-w-xl">Simple to start, simple to stay with</h2>

        <div className="mt-10 relative rounded-2xl overflow-hidden border border-ink-100 dark:border-ink-400/20 aspect-[21/9]">
          <Image
            src="/images/consultation-review.jpg"
            alt="A bookkeeper reviewing a document with a client"
            fill
            className="object-cover object-[center_20%]"
            sizes="100vw"
          />
          <span className="absolute left-4 bottom-4 bg-plum/90 text-cream font-mono text-xs uppercase tracking-widest px-3 py-2 rounded">
            Monthly walkthrough, together
          </span>
        </div>

        <ol className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {process.map((p) => (
            <li key={p.step}>
              <span className="font-mono tabular-num text-gold-600 text-sm">{p.step}</span>
              <h3 className="mt-2 font-display font-bold text-lg text-plum dark:text-cream">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-400 dark:text-cream/70 leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="max-w-content mx-auto px-6 py-16">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="font-display font-extrabold text-3xl text-plum dark:text-cream mb-8 max-w-xl">Questions we hear often</h2>
        <FAQAccordion items={faqs} />
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-content mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow>Get started</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl text-plum dark:text-cream">Book your free consultation</h2>
            <p className="mt-4 text-ink-400 dark:text-cream/70 max-w-sm">
              Tell us a little about your business and where your bookkeeping stands today. We'll follow up within one business day.
            </p>
            <p className="mt-6 text-sm text-ink-400 dark:text-cream/70">
              countra@gmail.com<br />
              613-302-7429
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
