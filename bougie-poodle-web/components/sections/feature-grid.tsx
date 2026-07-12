import { type LucideIcon, icons } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";

export type Feature = { icon: string; title: string; description: string };

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((f) => {
        const Icon = (icons[f.icon as keyof typeof icons] ?? icons.Sparkles) as LucideIcon;
        return (
          <FadeIn key={f.title} className="text-center sm:text-left">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-blush text-bougie-bright sm:mx-0">
              <Icon className="h-5 w-5" strokeWidth={1.6} />
            </div>
            <h3 className="mt-4 font-display text-lg">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone">{f.description}</p>
          </FadeIn>
        );
      })}
    </FadeInStagger>
  );
}
