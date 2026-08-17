import type { Metadata } from "next";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Bookkeeping Consultation",
  description:
    "Get in touch with our bookkeeping team or book a free consultation. We work with Canadian small businesses and self-employed professionals, virtually.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="max-w-content mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="ledger-rule text-xs font-mono uppercase tracking-widest mb-4 max-w-fit pr-4">Contact</p>
          <h1 className="font-display text-4xl text-ink dark:text-sage-100 max-w-lg">
            Let's talk about your books
          </h1>
          <p className="mt-4 text-ink-400 dark:text-sage-100/70 max-w-sm leading-relaxed">
            Book a free, no-obligation consultation. Tell us a little about your business and where your bookkeeping stands today — our team will follow up within one business day.
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex gap-2">
              <dt className="font-medium text-ink-700 dark:text-sage-100">Email:</dt>
              <dd className="text-ink-400 dark:text-sage-100/70">hello@yourbookkeepingbrand.ca</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-ink-700 dark:text-sage-100">Phone:</dt>
              <dd className="text-ink-400 dark:text-sage-100/70">(000) 000-0000</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-ink-700 dark:text-sage-100">Service area:</dt>
              <dd className="text-ink-400 dark:text-sage-100/70">Virtual — all provinces and territories</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-400/20 shadow-card p-8">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
