import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Photo } from "@/lib/images";
import { FadeIn } from "@/components/motion/fade-in";

export function StoryBanner({
  eyebrow,
  title,
  paragraphs,
  image,
  reverse = false,
  cta,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: Photo;
  reverse?: boolean;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="container-luxury py-24 sm:py-28">
      <div className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <FadeIn className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="text-balance-pretty font-display text-3xl font-medium text-ink sm:text-4xl">{title}</h2>
          <div className="mt-5 space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-stone">
                {p}
              </p>
            ))}
          </div>
          {cta && (
            <Link
              href={cta.href}
              className="mt-7 inline-flex items-center gap-2 font-semibold text-bougie transition-colors hover:text-bougie-bright"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
