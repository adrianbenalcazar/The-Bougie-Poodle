import Image from "next/image";
import Link from "next/link";
import type { Photo } from "@/lib/images";
import { FadeIn } from "@/components/motion/fade-in";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: Photo;
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/35" />
      </div>
      <div className="container-luxury relative py-32 sm:py-36">
        <FadeIn>
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-cream/55">
            <Link href="/" className="transition-colors hover:text-cream">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cream/80">{breadcrumb}</span>
          </nav>
          <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-cream/85">
            <span className="h-1.5 w-1.5 rounded-full bg-bougie-bright" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="max-w-2xl text-balance-pretty font-display text-4xl font-medium leading-tight text-cream sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/70">{subtitle}</p>
        </FadeIn>
      </div>
    </section>
  );
}
