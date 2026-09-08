import type { Metadata } from "next";
import ConsultationForm from "@/components/ConsultationForm";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Bookkeeping Consultation",
  description:
    "Get in touch with COUNTRA or book a free consultation. We work with Canadian small businesses and self-employed professionals, virtually.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="max-w-content mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl text-plum dark:text-cream max-w-lg">
            Let's talk about your books
          </h1>
          <p className="mt-4 text-ink-400 dark:text-cream/70 max-w-sm leading-relaxed">
            Book a free, no-obligation consultation. Tell us a little about your business and where your bookkeeping stands today — you'll hear back within one business day.
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex gap-2">
              <dt className="font-medium text-ink-700 dark:text-cream">Email:</dt>
              <dd className="text-ink-400 dark:text-cream/70">countra@gmail.com</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-ink-700 dark:text-cream">Phone:</dt>
              <dd className="text-ink-400 dark:text-cream/70">613-302-7429</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-ink-700 dark:text-cream">Service area:</dt>
              <dd className="text-ink-400 dark:text-cream/70">Virtual — all provinces and territories</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-2xl bg-plum/[0.04] dark:bg-cream/5 border border-plum/15 dark:border-cream/15 shadow-card p-8">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
