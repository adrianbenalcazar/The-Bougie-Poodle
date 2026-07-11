import type { Metadata } from "next";
import { HERO_IMAGES, GALLERY_PAIRS } from "@/lib/images";
import { breadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { BeforeAfterCard } from "@/components/sections/before-after-card";
import { PortraitGallery } from "@/components/sections/portrait-gallery";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description:
    "Real before-and-after grooming transformations from The Bougie Poodle. Drag the slider to see the difference our organic, breed-specific grooming makes.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Gallery", href: "/gallery" }])} />
      <PageHero
        eyebrow="Real Transformations"
        title="Every coat tells a story."
        subtitle="No filters, no staging — just real results from real appointments. Drag the slider to see the difference."
        image={HERO_IMAGES.gallery}
        breadcrumb="Gallery"
      />

      <section className="container-luxury py-24 sm:py-28">
        <SectionHeading eyebrow="Before & After" title="Drag the line. See the difference." />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_PAIRS.map((pair, i) => (
            <BeforeAfterCard key={pair.label} {...pair} delay={i * 0.08} />
          ))}
        </div>
      </section>

      <section className="bg-blush/30 py-24 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="The Portfolio"
            title="A gallery of very good clients."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <PortraitGallery />
          </div>
        </div>
      </section>

      <CtaBand title="Want results like these?" subtitle="Call for a personalized quote, or book online if you're already one of ours." />
    </>
  );
}
