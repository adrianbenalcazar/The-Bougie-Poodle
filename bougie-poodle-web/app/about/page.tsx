import type { Metadata } from "next";
import { HERO_IMAGES, STORY_IMAGES } from "@/lib/images";
import { breadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { StoryBanner } from "@/components/sections/story-banner";
import { SectionHeading } from "@/components/sections/section-heading";
import { FeatureGrid, type Feature } from "@/components/sections/feature-grid";
import { TeamGrid } from "@/components/sections/team-grid";
import { MascotMoment } from "@/components/sections/mascot-moment";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "About Us — Our Story & Philosophy",
  description:
    "Meet the team behind The Bougie Poodle, Westchester's luxury dog and cat grooming studio. Learn about our fear-free, organic-first approach to pet care.",
  alternates: { canonical: "/about" },
};

const STANDARDS: Feature[] = [
  {
    icon: "ShieldCheck",
    title: "Fear-Free Certified",
    description: "Every groomer is trained in low-stress handling, reading body language before reaching for a single tool.",
  },
  {
    icon: "Sparkles",
    title: "Hospital-Grade Sanitation",
    description: "Every station, tool, and towel is sanitized between appointments — no exceptions, no shortcuts.",
  },
  {
    icon: "Leaf",
    title: "Organic-First Products",
    description: "Sulfate-free, botanical formulas chosen for sensitive skin, allergies, and long-term coat health.",
  },
  {
    icon: "Award",
    title: "Continually Trained",
    description: "Our team trains year-round in breed-specific styling, feline handling, and the latest coat-care science.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About", href: "/about" }])} />
      <PageHero
        eyebrow="Our Story"
        title="Grooming, the way it should feel."
        subtitle="Founded by groomers who believe your pet's comfort and your trust are never optional extras."
        image={HERO_IMAGES.about}
        breadcrumb="About"
      />

      <StoryBanner
        eyebrow="How We Started"
        title="A studio built on a simple frustration."
        paragraphs={[
          "The Bougie Poodle began in 2019, when our founder Marisol grew tired of rushed, assembly-line grooming — the kind that treats pets like items on a conveyor belt rather than family members deserving patience.",
          "She opened a small studio in Westchester County with one rule: no appointment would ever be rushed. That rule still governs every visit today, whether it's a first-time puppy trim or a monthly ritual for a longtime client.",
          "What started as a single-chair studio has grown into Westchester's most requested luxury grooming destination — without ever compromising on that founding promise.",
        ]}
        image={STORY_IMAGES[1]}
      />

      <StoryBanner
        eyebrow="Our Philosophy"
        title="Unhurried, unfiltered, uncompromising."
        paragraphs={[
          "We don't believe in sedation, and we don't believe in rushing. Every pet is handled at their own pace, with breaks built into the schedule for anxious or elderly animals.",
          "We also don't believe in guesswork. Every product on our shelves is chosen for a reason — organic, sulfate-free, and safe for the most sensitive skin.",
          "The result isn't just a good-looking pet. It's a pet who genuinely doesn't mind coming back.",
        ]}
        image={STORY_IMAGES[2]}
        reverse
      />

      <section className="container-luxury py-24 sm:py-28">
        <SectionHeading
          eyebrow="Our Standards"
          title="What 'bougie' actually means here."
          subtitle="Not extravagance for its own sake — a standard of care most studios simply don't offer."
        />
        <div className="mt-12">
          <FeatureGrid features={STANDARDS} />
        </div>
      </section>

      <MascotMoment />

      <section className="container-luxury py-24 sm:py-28">
        <SectionHeading eyebrow="Meet the Team" title="The hands your pet is in." align="center" className="mx-auto" />
        <div className="mt-12">
          <TeamGrid />
        </div>
      </section>

      <CtaBand
        title="Come see the studio for yourself."
        subtitle="New clients start with a quick call so we can get to know your pet before their first visit."
      />
    </>
  );
}
