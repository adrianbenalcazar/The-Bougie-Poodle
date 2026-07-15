import { Check, Phone, type LucideIcon, icons } from "lucide-react";
import type { ServiceTier } from "@/lib/constants";
import { BUSINESS, SERVICE_SIZES } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/sections/booking-modal";

export function ServiceTierCard({ tier, delay = 0 }: { tier: ServiceTier; delay?: number }) {
  const Icon = (icons[tier.icon as keyof typeof icons] ?? icons.Sparkles) as LucideIcon;

  return (
    <FadeIn
      delay={delay}
      className="flex h-full flex-col rounded-3xl border border-sand/70 bg-white p-8"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blush text-bougie-bright">
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </div>
      <h3 className="mt-5 font-display text-2xl">{tier.name}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-stone">{tier.description}</p>

      <ul className="mt-6 space-y-2.5">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-bougie" strokeWidth={2} />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-7 space-y-1 border-t border-sand/60 pt-6">
        {SERVICE_SIZES.map((size) => (
          <div key={size} className="flex items-center justify-between py-1 text-sm">
            <span className="text-ink">{size}</span>
            <span className="font-semibold text-heading">Call for a Quote</span>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button
          variant="outline"
          size="lg"
          className="h-11 flex-1 gap-2 rounded-full border-ink/15 bg-white text-sm font-semibold text-ink"
          nativeButton={false}
          render={<a href={BUSINESS.phoneHref} />}
        >
          <Phone className="h-4 w-4" strokeWidth={1.75} />
          Call for a Quote
        </Button>
        <BookingModal
          defaultService={tier.slug}
          trigger={
            <Button size="lg" className="h-11 flex-1 rounded-full bg-bougie text-sm font-semibold text-white hover:bg-bougie/90">
              Book Now
            </Button>
          }
        />
      </div>
    </FadeIn>
  );
}
