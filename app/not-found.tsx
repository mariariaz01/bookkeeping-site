import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  return (
    <section className="max-w-content mx-auto px-6 py-24 text-center">
      <p className="font-mono text-brass text-sm">404</p>
      <h1 className="mt-3 font-display text-3xl text-ink dark:text-sage-100">This page doesn't exist</h1>
      <p className="mt-3 text-ink-400 dark:text-sage-100/70 max-w-sm mx-auto">
        The page you're looking for may have moved. Try heading back to the homepage or exploring our services.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <CTAButton href="/">Back to homepage</CTAButton>
        <CTAButton href="/services" variant="secondary">View services</CTAButton>
      </div>
    </section>
  );
}
