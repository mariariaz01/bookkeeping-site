"use client";

import { useState } from "react";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to your form handler of choice (e.g. Formspree,
    // Resend, a serverless API route, or your CRM's inbound webhook).
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-forest/10 border border-forest/30 p-6 text-center">
        <p className="font-display text-xl text-forest dark:text-brass-400">Thank you — your request is in.</p>
        <p className="mt-2 text-sm text-ink-400 dark:text-sage-100/70">
          A member of our team will reach out within one business day to schedule your free consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Book a free consultation">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink-700 dark:text-sage-100 mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-ink-100 dark:border-ink-400/30 bg-white dark:bg-ink-900 px-4 py-2.5 text-sm focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="business" className="block text-sm font-medium text-ink-700 dark:text-sage-100 mb-1.5">
            Business name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            className="w-full rounded-lg border border-ink-100 dark:border-ink-400/30 bg-white dark:bg-ink-900 px-4 py-2.5 text-sm focus:outline-none"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink-700 dark:text-sage-100 mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-ink-100 dark:border-ink-400/30 bg-white dark:bg-ink-900 px-4 py-2.5 text-sm focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink-700 dark:text-sage-100 mb-1.5">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-ink-100 dark:border-ink-400/30 bg-white dark:bg-ink-900 px-4 py-2.5 text-sm focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-700 dark:text-sage-100 mb-1.5">
          What do you need help with?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-ink-100 dark:border-ink-400/30 bg-white dark:bg-ink-900 px-4 py-2.5 text-sm focus:outline-none"
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-ink-400 dark:text-sage-100/70">
        <input type="checkbox" required className="mt-0.5" />
        I consent to being contacted about my request. My information will be kept confidential.
      </label>

      <button
        type="submit"
        className="w-full sm:w-auto rounded-full bg-forest hover:bg-forest-600 text-white text-sm font-semibold px-8 py-3 transition-colors"
      >
        Book my free consultation
      </button>
    </form>
  );
}
