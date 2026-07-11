import { NewsletterForm } from "@/components/forms/newsletter-form";
import { SectionHeading } from "@/components/sections/section-heading";

export function NewsletterSignup() {
  return (
    <section className="bg-blush/60 py-20 sm:py-24">
      <div className="container-luxury">
        <div className="mx-auto max-w-xl text-center">
          <SectionHeading
            eyebrow="The Inner Circle"
            title="Grooming tips, seasonal offers, first access."
            subtitle="Join our list for coat-care advice and the occasional bougie surprise — no spam, just good taste."
            align="center"
            className="mx-auto"
          />
          <NewsletterForm className="mx-auto mt-8 max-w-sm" />
        </div>
      </div>
    </section>
  );
}
