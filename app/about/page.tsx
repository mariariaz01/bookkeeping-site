import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import Eyebrow from "@/components/Eyebrow";
import IconBadge from "@/components/IconBadge";
import type { IconName } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Our Company | Canadian Bookkeeping Specialists",
  description:
    "Learn about our approach to bookkeeping — accuracy, confidentiality, and dedicated client service for Canadian small businesses.",
  alternates: { canonical: "/about" },
};

const values: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Accuracy first",
    body: "Every account is reconciled and every entry is checked. We treat your books the way we'd want our own handled.",
    icon: "target",
  },
  {
    title: "Reliability",
    body: "Deadlines matter — for CRA filings, for payroll, for your own peace of mind. Our processes are built to keep things on schedule, every month.",
    icon: "clock",
  },
  {
    title: "Client service",
    body: "You should never feel like a ticket number. Our team takes the time to understand your business and communicates in plain language.",
    icon: "users",
  },
  {
    title: "Technology",
    body: "We work in modern, cloud-based platforms like QuickBooks Online, Xero, and Wave, so your books are accessible and secure wherever you are.",
    icon: "refresh",
  },
  {
    title: "Confidentiality",
    body: "Your financial information is sensitive. It's handled with strict confidentiality and secure tools at every step, by every member of our team.",
    icon: "shield",
  },
];

export default function AboutPage() {
  return (
    <section className="max-w-content mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow>About our company</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl text-plum dark:text-cream">
            Bookkeeping built on accuracy, reliability, and clear communication
          </h1>
          <p className="mt-6 text-lg text-ink-400 dark:text-cream/80 leading-relaxed">
            We started this company to give Canadian small businesses and self-employed professionals what larger firms often can't: dedicated attention, straightforward pricing, and books they can actually understand. Our team brings professional accounting training to the day-to-day work of keeping your finances organized, accurate, and ready whenever you need them.
          </p>
        </div>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-ink-100 dark:border-ink-400/20">
          <Image
            src="/images/hero-office-laptop.jpg"
            alt="A bookkeeping specialist working on a laptop in a bright office"
            fill
            className="object-cover object-[center_30%]"
            sizes="(min-width: 768px) 480px, 100vw"
          />
        </div>
      </div>

      <div className="mt-16">
        <Eyebrow>Our values</Eyebrow>
        <div className="grid sm:grid-cols-2 gap-10">
          {values.map((v) => (
            <div key={v.title} className="flex items-start gap-4">
              <IconBadge name={v.icon} />
              <div>
                <h3 className="font-display font-bold text-xl text-plum dark:text-cream">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-400 dark:text-cream/70 leading-relaxed">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-400/20 shadow-card p-8">
        <h2 className="font-display font-extrabold text-2xl text-plum dark:text-cream">Our mission</h2>
        <p className="mt-3 text-ink-700 dark:text-cream/90 leading-relaxed max-w-2xl">
          To give Canadian small business owners clear, accurate, and up-to-date books every month — so financial confusion never gets in the way of running the business they set out to build.
        </p>
      </div>

      <div className="mt-16 text-center">
        <CTAButton href="/contact">Book a free consultation</CTAButton>
      </div>
    </section>
  );
}
