import { Star } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";

export function GoogleRatingCard() {
  return (
    <FadeIn className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-3xl border border-sand/70 bg-white px-8 py-10 text-center shadow-[0_20px_50px_rgba(27,24,21,0.06)]">
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <path fill="#4285F4" d="M43.6 20.5H24v7.4h11.3c-1.1 5.6-6 9.6-11.3 9.6-6.9 0-12.5-5.6-12.5-12.5S17.1 12.5 24 12.5c3.1 0 6 1.1 8.2 3l5.6-5.6C34.6 6.7 29.6 4.7 24 4.7 12.9 4.7 4 13.6 4 24.7s8.9 20 20 20c11.5 0 19.2-8.1 19.2-19.5 0-1.3-.1-2.3-.3-3.7Z" />
        <path fill="#34A853" d="M6.6 14.7 13 19.3c1.7-4.1 5.8-6.8 11-6.8 3.1 0 6 1.1 8.2 3l5.6-5.6C34.6 6.7 29.6 4.7 24 4.7c-7.7 0-14.3 4.4-17.4 10Z" />
        <path fill="#FBBC05" d="M24 44.7c5.5 0 10.4-1.8 13.9-4.9l-6.4-5.4c-1.9 1.3-4.4 2.1-7.5 2.1-5.3 0-9.7-3.6-11.3-8.4l-6.5 5c3.1 6.2 9.6 10.6 17.8 10.6Z" />
        <path fill="#EA4335" d="M43.6 20.5H24v7.4h11.3c-.5 2.7-2 5-4.1 6.5l6.4 5.4c3.7-3.4 5.8-8.4 5.8-14.6 0-1.3-.1-2.3-.3-3.7Z" />
      </svg>
      <div className="flex items-center gap-1 text-bougie">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" />
        ))}
      </div>
      <p className="font-display text-3xl text-ink">{BUSINESS.ratingValue} out of 5</p>
      <p className="text-sm text-stone">Based on {BUSINESS.reviewCount}+ verified Google reviews</p>
      <a
        href="#"
        className="text-sm font-semibold text-bougie transition-colors hover:text-bougie-bright"
      >
        Read all reviews on Google →
      </a>
    </FadeIn>
  );
}
