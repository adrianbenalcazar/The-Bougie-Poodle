"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { Photo } from "@/lib/images";
import { DOG_PORTRAITS, CAT_PORTRAITS } from "@/lib/images";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";

type Filter = "all" | "dogs" | "cats";

const ITEMS: { photo: Photo; species: "dogs" | "cats" }[] = [
  ...DOG_PORTRAITS.map((photo) => ({ photo, species: "dogs" as const })),
  ...CAT_PORTRAITS.map((photo) => ({ photo, species: "cats" as const })),
];

export function PortraitGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Photo | null>(null);

  const filtered = ITEMS.filter((item) => filter === "all" || item.species === filter);

  return (
    <div>
      <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)}>
        <TabsList className="mx-auto w-fit rounded-full bg-blush/60 p-1">
          <TabsTrigger value="all" className="rounded-full px-5 data-active:bg-white">
            All
          </TabsTrigger>
          <TabsTrigger value="dogs" className="rounded-full px-5 data-active:bg-white">
            Dogs
          </TabsTrigger>
          <TabsTrigger value="cats" className="rounded-full px-5 data-active:bg-white">
            Cats
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <FadeInStagger className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4">
        {filtered.map((item, i) => (
          <FadeIn key={item.photo.src + i} delay={(i % 4) * 0.05} className="mb-4 break-inside-avoid">
            <button
              onClick={() => setActive(item.photo)}
              className="group relative block w-full overflow-hidden rounded-xl"
              aria-label={`Open larger image: ${item.photo.alt}`}
            >
              <Image
                src={item.photo.src}
                alt={item.photo.alt}
                width={480}
                height={i % 3 === 0 ? 600 : 400}
                sizes="(min-width: 1024px) 24vw, 45vw"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
            </button>
          </FadeIn>
        ))}
      </FadeInStagger>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent showCloseButton={false} className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{active?.alt}</DialogTitle>
          {active && (
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[16/10]">
              <Image src={active.src} alt={active.alt} fill sizes="90vw" className="object-cover" />
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/60 text-cream backdrop-blur-sm"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
