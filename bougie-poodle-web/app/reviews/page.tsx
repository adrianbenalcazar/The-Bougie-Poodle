import type { Metadata } from "next";
import { TESTIMONIALS } from "@/lib/constants";
import { HERO_IMAGES } from "@/lib/images";
import { breadcrumbJsonLd, reviewsJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { GoogleRatingCard } from "@/components/sections/google-rating-card";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Reviews — What Westchester Pet Parents Say",
  description:
    "Read verified 5-star reviews from The Bougie Poodle's Westchester County clients. See why local dog and cat owners trust us with their most bougie companions.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Reviews", href: "/reviews" }])} />
      <JsonLd data={reviewsJsonLd(TESTIMONIALS)} />
      <PageHero
        eyebrow="Loved, Locally"
        title="214+ five-star reviews (and counting)."
        subtitle="Don't just take our word for it — hear from the Westchester pet parents who trust us every month."
        image={HERO_IMAGES.reviews}
        breadcrumb="Reviews"
      />

      <section className="container-luxury py-24 sm:py-28">
        <GoogleRatingCard />
      </section>

      <section className="bg-blush/30 py-24 sm:py-28">
        <div className="container-luxury">
          <SectionHeading eyebrow="In Their Words" title="Real reviews from real pet parents." align="center" className="mx-auto" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={(i % 3) * 0.08}>
                <TestimonialCard testimonial={t} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to become our next 5-star review?" />
    </>
  );
}
