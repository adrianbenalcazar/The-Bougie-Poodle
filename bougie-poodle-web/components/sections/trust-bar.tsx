import { Award, Leaf, ShieldCheck, Star } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { FadeInStagger, FadeIn } from "@/components/motion/fade-in";

const ITEMS = [
  { icon: Star, label: `${BUSINESS.ratingValue}-Star Rated`, sub: `${BUSINESS.reviewCount}+ reviews` },
  { icon: Award, label: "Local Favorite", sub: "Westchester, NY" },
  { icon: ShieldCheck, label: "Certified Groomers", sub: "Dogs & cats" },
  { icon: Leaf, label: "Organic Products", sub: "Sensitive-skin safe" },
];

export function TrustBar() {
  return (
    <section className="border-y border-sand/70 bg-white/60">
      <FadeInStagger className="container-luxury grid grid-cols-2 gap-8 py-10 sm:grid-cols-4 sm:gap-6 sm:py-12">
        {ITEMS.map((item) => (
          <FadeIn key={item.label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
            <item.icon className="h-6 w-6 shrink-0 text-bougie" strokeWidth={1.5} />
            <div>
              <p className="font-display text-base leading-none text-ink">{item.label}</p>
              <p className="mt-1 text-xs text-stone">{item.sub}</p>
            </div>
          </FadeIn>
        ))}
      </FadeInStagger>
    </section>
  );
}
