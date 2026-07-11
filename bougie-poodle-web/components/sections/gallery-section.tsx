import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GALLERY_PAIRS } from "@/lib/images";
import { SectionHeading } from "@/components/sections/section-heading";
import { BeforeAfterCard } from "@/components/sections/before-after-card";

export function GallerySection() {
  return (
    <section className="container-luxury py-24 sm:py-28">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="The Transformation"
          title="Drag the line. See the difference."
          subtitle="A glimpse of the everyday magic — real coats, real transformations, zero filters."
        />
        <Link
          href="/gallery"
          className="hidden shrink-0 items-center gap-2 font-semibold text-bougie transition-colors hover:text-bougie-bright sm:flex"
        >
          View full gallery
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {GALLERY_PAIRS.map((pair, i) => (
          <BeforeAfterCard key={pair.label} {...pair} delay={i * 0.08} />
        ))}
      </div>

      <Link href="/gallery" className="mt-8 flex items-center gap-2 font-semibold text-bougie sm:hidden">
        View full gallery
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
