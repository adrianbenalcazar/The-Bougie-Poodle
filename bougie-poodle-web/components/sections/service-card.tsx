import Link from "next/link";
import { ArrowUpRight, type LucideIcon, icons } from "lucide-react";
import type { Service } from "@/lib/constants";
import { BUSINESS, CTA_LINK } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  const Icon = (icons[service.icon as keyof typeof icons] ?? icons.Sparkles) as LucideIcon;

  return (
    <FadeIn
      delay={delay}
      className="group relative flex h-full flex-col rounded-2xl border border-sand/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-bougie/30 hover:shadow-[0_20px_45px_rgba(27,24,21,0.08)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blush text-bougie-bright transition-colors duration-300 group-hover:bg-bougie group-hover:text-cream">
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </div>
      <h3 className="mt-5 font-display text-xl text-ink">{service.name}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-stone">{service.description}</p>
      <div className="mt-6 flex items-center justify-between border-t border-sand/60 pt-4 text-xs">
        <a href={BUSINESS.phoneHref} className="font-medium text-stone transition-colors hover:text-bougie">
          Call for a quote
        </a>
        <Link
          href={CTA_LINK.href}
          className="flex items-center gap-1 font-semibold text-bougie transition-colors hover:text-bougie-bright"
        >
          Book now
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </FadeIn>
  );
}
