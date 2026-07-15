import type { Metadata } from "next";
import { HERO_IMAGES } from "@/lib/images";
import { breadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { BookingFlow } from "@/components/sections/booking-flow";
import { TrustBar } from "@/components/sections/trust-bar";

export const metadata: Metadata = {
  title: "Request Service — Book Your Appointment",
  description:
    "Request a grooming appointment at The Bougie Poodle. New clients: request a callback for a personalized quote. Existing clients: book your next visit online.",
  alternates: { canonical: "/request-service" },
};

export default function RequestServicePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Request Service", href: "/request-service" }])} />
      <PageHero
        eyebrow="Book a Visit"
        title="Ready when you are."
        subtitle="Two simple paths — one for new clients, one for our regulars. Pick the one that fits."
        image={HERO_IMAGES.requestService}
        breadcrumb="Request Service"
      />

      <section className="container-luxury py-24 sm:py-28">
        <div className="mx-auto max-w-3xl rounded-3xl border border-sand/70 bg-white p-8 sm:p-10">
          <BookingFlow />
        </div>
      </section>

      <TrustBar />
    </>
  );
}
