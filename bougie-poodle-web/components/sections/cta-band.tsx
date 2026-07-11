import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS, CTA_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function CtaBand({
  title = "Your pet's next best day starts here.",
  subtitle = "New to The Bougie Poodle? Call for a personalized quote. Already one of ours? Book online in under a minute.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(600px circle at 20% 20%, rgba(232,65,44,0.25), transparent 60%), radial-gradient(500px circle at 85% 80%, rgba(251,225,220,0.12), transparent 60%)",
        }}
      />
      <div className="container-luxury relative text-center">
        <FadeIn>
          <h2 className="mx-auto max-w-2xl text-balance-pretty font-display text-3xl font-medium text-cream sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/65 sm:text-lg">{subtitle}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-14 w-full rounded-full bg-bougie px-8 text-base font-semibold text-cream hover:bg-bougie-bright sm:w-auto"
              nativeButton={false}
              render={<Link href={CTA_LINK.href} />}
            >
              {CTA_LINK.label}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 w-full gap-2 rounded-full border-cream/25 bg-transparent px-8 text-base font-semibold text-cream hover:bg-white/10 sm:w-auto"
              nativeButton={false}
              render={<a href={BUSINESS.phoneHref} />}
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              {BUSINESS.phone}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
