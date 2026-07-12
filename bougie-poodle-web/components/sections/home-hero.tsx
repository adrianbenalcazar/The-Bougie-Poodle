"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import { BUSINESS, CTA_LINK } from "@/lib/constants";
import { HERO_IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink text-cream">
      <motion.div
        initial={{ scale: 1.08, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={HERO_IMAGES.home.src}
          alt={HERO_IMAGES.home.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </motion.div>

      <div className="container-luxury relative z-10 pb-20 pt-40 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/20 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="flex items-center gap-0.5 text-bougie-bright">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-current" />
            ))}
          </span>
          <span className="text-xs font-medium tracking-wide text-cream/80">
            {BUSINESS.ratingValue} rated · {BUSINESS.reviewCount}+ Westchester pet parents
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-balance-pretty font-display text-5xl font-medium leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
        >
          Grooming, elevated to a{" "}
          <span className="italic text-bougie-bright">love language.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75 sm:text-xl"
        >
          Westchester County&apos;s most bougie dog and cat grooming studio — breed-specific styling,
          organic spa treatments, and white-glove care for pets who deserve nothing less.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="h-14 gap-2 rounded-full bg-bougie px-8 text-base font-semibold text-cream hover:bg-bougie/90"
            nativeButton={false}
            render={<Link href={CTA_LINK.href} />}
          >
            {CTA_LINK.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 gap-2 rounded-full border-cream/25 bg-white/5 px-8 text-base font-semibold text-cream backdrop-blur-sm hover:bg-white/10"
            nativeButton={false}
            render={<a href={BUSINESS.phoneHref} />}
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            Call for a Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
