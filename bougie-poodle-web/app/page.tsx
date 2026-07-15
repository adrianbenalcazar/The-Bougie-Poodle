import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICE_TIERS } from "@/lib/constants";
import { STORY_IMAGES } from "@/lib/images";
import { HomeHero } from "@/components/sections/home-hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceTierCard } from "@/components/sections/service-tier-card";
import { StoryBanner } from "@/components/sections/story-banner";
import { GallerySection } from "@/components/sections/gallery-section";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { LocationHours } from "@/components/sections/location-hours";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Luxury Dog & Cat Grooming in Westchester, NY",
  description:
    "The Bougie Poodle is Westchester County's premier luxury pet spa — breed-specific haircuts, organic treatments, and white-glove grooming for dogs and cats. Call for a personalized quote.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />

      <section className="container-luxury py-24 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="The Bougie Groom"
            title="Every detail, considered."
            subtitle="One signature groom, tailored to your dog's size — with an optional breed-specific finish and add-ons for whatever they need most."
          />
          <Link
            href="/services"
            className="hidden shrink-0 items-center gap-2 font-semibold text-bougie transition-colors hover:text-heading sm:flex"
          >
            View full menu
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {SERVICE_TIERS.map((tier, i) => (
            <ServiceTierCard key={tier.slug} tier={tier} delay={i * 0.1} />
          ))}
        </div>
        <Link href="/services" className="mt-8 flex items-center gap-2 font-semibold text-bougie sm:hidden">
          View full menu
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <StoryBanner
        eyebrow="Why Bougie"
        title="Because your pet isn't 'just a pet.'"
        paragraphs={[
          "The Bougie Poodle was founded on a simple belief: the animals who greet us at the door, curl up beside us, and ask for nothing but love deserve to be treated like family — because they are.",
          "Every visit is unhurried. Every product is chosen for comfort, not convenience. And every groomer on our team is trained to read your pet's temperament, not just their coat.",
          "The result is grooming that feels less like a chore and more like a ritual — for you, and for them.",
        ]}
        image={STORY_IMAGES[0]}
        cta={{ label: "Our story", href: "/about" }}
      />

      <GallerySection />

      <section className="bg-blush/40 py-24 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Loved, Locally"
            title="Westchester's most bougie pet parents agree."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      <LocationHours />
      <NewsletterSignup />
      <FaqAccordion />
      <CtaBand />
    </>
  );
}
