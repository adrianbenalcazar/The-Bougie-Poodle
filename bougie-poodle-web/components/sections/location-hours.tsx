import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/sections/section-heading";

export function LocationHours() {
  return (
    <section className="container-luxury py-24 sm:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="Visit Us" title="A studio worth the drive." />
          <div className="mt-8 space-y-6">
            <FadeIn delay={0.05} className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-bougie" strokeWidth={1.6} />
              <div>
                <p className="font-display text-base text-ink">{BUSINESS.address.line1}</p>
                <p className="text-sm text-stone">
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="flex items-start gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-bougie" strokeWidth={1.6} />
              <div className="space-y-1">
                {BUSINESS.hours.map((h) => (
                  <p key={h.days} className="text-sm text-stone">
                    <span className="font-medium text-ink">{h.days}</span> — {h.time}
                  </p>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="flex items-center gap-4">
              <Phone className="h-5 w-5 shrink-0 text-bougie" strokeWidth={1.6} />
              <a href={BUSINESS.phoneHref} className="text-sm font-medium text-ink transition-colors hover:text-bougie">
                {BUSINESS.phone}
              </a>
            </FadeIn>
            <FadeIn delay={0.2} className="flex items-center gap-4">
              <Mail className="h-5 w-5 shrink-0 text-bougie" strokeWidth={1.6} />
              <a href={`mailto:${BUSINESS.email}`} className="text-sm font-medium text-ink transition-colors hover:text-bougie">
                {BUSINESS.email}
              </a>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.1} className="relative min-h-[320px] overflow-hidden rounded-3xl border border-sand/70 bg-blush/40">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
            <MapPin className="h-8 w-8 text-bougie" strokeWidth={1.4} />
            <p className="font-display text-lg text-ink">{BUSINESS.address.county}</p>
            <p className="max-w-xs text-sm text-stone">
              Interactive map coming soon — call or email and we&apos;ll send door-to-door directions.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
