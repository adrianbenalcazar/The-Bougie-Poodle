"use client";

import { useState } from "react";
import Image from "next/image";
import type { Photo } from "@/lib/images";
import { FadeIn } from "@/components/motion/fade-in";

export function BeforeAfterCard({
  before,
  after,
  label,
  delay = 0,
}: {
  before: Photo;
  after: Photo;
  label: string;
  delay?: number;
}) {
  const [percent, setPercent] = useState(50);

  return (
    <FadeIn delay={delay} className="group">
      <div className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-2xl bg-sand">
        <Image src={after.src} alt={after.alt} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}>
          <Image src={before.src} alt={before.alt} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover" />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-cream/90 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
          style={{ left: `${percent}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink shadow-md">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path d="M9 6 4 12l5 6M15 6l5 6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-cream backdrop-blur-sm">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-bougie/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-cream backdrop-blur-sm">
          After
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={percent}
          onChange={(e) => setPercent(Number(e.target.value))}
          aria-label={`${label} before and after slider`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-3 text-center font-display text-sm text-ink">{label}</p>
    </FadeIn>
  );
}
