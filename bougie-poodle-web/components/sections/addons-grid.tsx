import { type LucideIcon, icons } from "lucide-react";
import { ADD_ONS } from "@/lib/constants";
import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";

export function AddonsGrid() {
  return (
    <FadeInStagger className="grid grid-cols-2 gap-5 sm:grid-cols-4">
      {ADD_ONS.map((addOn) => {
        const Icon = (icons[addOn.icon as keyof typeof icons] ?? icons.Sparkles) as LucideIcon;
        return (
          <FadeIn
            key={addOn.slug}
            className="flex flex-col items-center gap-3 rounded-2xl border border-sand/70 bg-white px-4 py-7 text-center"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blush text-bougie-bright">
              <Icon className="h-5 w-5" strokeWidth={1.6} />
            </div>
            <p className="font-display text-base">{addOn.name}</p>
            <p className="text-xs font-semibold text-heading">Call for a Quote</p>
          </FadeIn>
        );
      })}
    </FadeInStagger>
  );
}
