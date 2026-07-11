import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/constants";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-sand/70 bg-white p-7">
      <Quote className="h-6 w-6 text-bougie/50" strokeWidth={1.5} />
      <div className="mt-4 flex gap-0.5 text-bougie">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/85">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-6 border-t border-sand/60 pt-4">
        <p className="font-display text-sm text-ink">{testimonial.name}</p>
        <p className="text-xs text-stone">{testimonial.pet}</p>
      </div>
    </div>
  );
}
