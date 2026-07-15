import type { Metadata } from "next";
import { Phone, Sparkles } from "lucide-react";
import { BUSINESS, CTA_LINK, SERVICE_TIERS } from "@/lib/constants";
import { HERO_IMAGES } from "@/lib/images";
import { breadcrumbJsonLd, servicesJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceTierCard } from "@/components/sections/service-tier-card";
import { AddonsGrid } from "@/components/sections/addons-grid";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grooming Services — The Bougie Groom",
  description:
    "The Bougie Groom at The Bougie Poodle: a full-service bath, blow dry, and haircut, with an optional breed-specific cut and add-ons like dematting and deskunking. Call for a personalized quote.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", href: "/services" }])} />
      <JsonLd data={servicesJsonLd()} />
      <PageHero
        eyebrow="Full Menu"
        title="One groom. Zero compromises."
        subtitle="The Bougie Groom, tailored to your dog's size and coat — with an optional breed-specific finish and add-ons for whatever they need most."
        image={HERO_IMAGES.services}
        breadcrumb="Services"
      />

      <section className="border-b border-sand/70 bg-blush/40">
        <div className="container-luxury flex flex-col items-center gap-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 shrink-0 text-bougie" strokeWidth={1.6} />
            <p className="text-sm text-ink">
              <span className="font-semibold">New here?</span> Call for a personalized quote.{" "}
              <span className="font-semibold">Existing client?</span> Book online in under a minute.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Button
              variant="outline"
              size="sm"
              className="h-10 gap-2 rounded-full border-ink/15 bg-white px-4 text-xs font-semibold text-ink"
              nativeButton={false}
              render={<a href={BUSINESS.phoneHref} />}
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
              Call Now
            </Button>
            <Button
              size="sm"
              className="h-10 rounded-full bg-bougie px-4 text-xs font-semibold text-white hover:bg-bougie/90"
              nativeButton={false}
              render={<Link href={CTA_LINK.href} />}
            >
              {CTA_LINK.label}
            </Button>
          </div>
        </div>
      </section>

      <section className="container-luxury py-20 sm:py-24">
        <SectionHeading
          eyebrow="The Bougie Groom"
          title="Priced by size, never by guesswork."
          subtitle="Every groom is quoted for your dog's size — Small, Medium, Large, or XL — so you always know what to expect before you book."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {SERVICE_TIERS.map((tier, i) => (
            <ServiceTierCard key={tier.slug} tier={tier} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <section className="bg-blush/30 py-20 sm:py-24">
        <div className="container-luxury">
          <SectionHeading eyebrow="Add-Ons" title="A little extra, whenever they need it." align="center" className="mx-auto" />
          <div className="mt-12">
            <AddonsGrid />
          </div>
        </div>
      </section>

      <section className="container-luxury py-20 sm:py-24">
        <SectionHeading
          eyebrow="Every Visit"
          title="Every breed. Every coat. Every size."
          subtitle="From tiny toy breeds to double-coated giants, our team is trained to handle every dog with equal patience."
          align="center"
          className="mx-auto"
        />
      </section>

      <CtaBand />
    </>
  );
}
