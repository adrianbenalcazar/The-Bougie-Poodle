import type { Metadata } from "next";
import { Phone, Sparkles } from "lucide-react";
import { BUSINESS, CTA_LINK, SERVICES, SERVICE_CATEGORIES } from "@/lib/constants";
import { HERO_IMAGES } from "@/lib/images";
import { breadcrumbJsonLd, servicesJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grooming Services — Dogs & Cats",
  description:
    "Explore all 23 luxury grooming services at The Bougie Poodle: breed-specific haircuts, organic spa treatments, deshedding, dematting, and premium finishing touches for dogs and cats.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", href: "/services" }])} />
      <JsonLd data={servicesJsonLd()} />
      <PageHero
        eyebrow="Full Menu"
        title="23 ways to spoil them."
        subtitle="Every service, performed with organic products, breed expertise, and zero rushing. Mix and match to build your pet's perfect visit."
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
              className="h-10 rounded-full bg-bougie px-4 text-xs font-semibold text-cream hover:bg-bougie-bright"
              nativeButton={false}
              render={<Link href={CTA_LINK.href} />}
            >
              {CTA_LINK.label}
            </Button>
          </div>
        </div>
      </section>

      {SERVICE_CATEGORIES.map((category, i) => {
        const items = SERVICES.filter((s) => s.category === category);
        return (
          <section key={category} className={`container-luxury py-16 sm:py-20 ${i === 0 ? "pt-20 sm:pt-24" : ""}`}>
            <FadeIn>
              <p className="eyebrow mb-2">
                {String(i + 1).padStart(2, "0")} / {SERVICE_CATEGORIES.length.toString().padStart(2, "0")}
              </p>
              <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">{category}</h2>
            </FadeIn>
            <div className="mt-10">
              <ServicesGrid services={items} />
            </div>
          </section>
        );
      })}

      <section className="container-luxury pb-24">
        <SectionHeading
          eyebrow="Every Visit"
          title="Dogs. Cats. Every coat, every size."
          subtitle="From Persian cats to double-coated Newfoundlands, our team is trained to handle every breed and temperament with equal patience."
          align="center"
          className="mx-auto"
        />
      </section>

      <CtaBand />
    </>
  );
}
