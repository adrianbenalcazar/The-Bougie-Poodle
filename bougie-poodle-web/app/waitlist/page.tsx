import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Gift, Tag } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { FadeIn, FadeInStagger } from "@/components/motion/fade-in";
import { WaitlistForm } from "@/components/forms/waitlist-form";

export const metadata: Metadata = {
  title: "Founding Members Waitlist",
  description:
    "Join The Bougie Poodle's founding members waitlist for exclusive opening pricing, priority scheduling, and a welcome gift for your pup in Peekskill, NY.",
  alternates: { canonical: "/waitlist" },
};

const PERKS = [
  {
    icon: Tag,
    title: "Founding Member Pricing",
    text: "Lock in a special rate reserved only for our first wave of clients.",
  },
  {
    icon: CalendarCheck,
    title: "Priority Booking",
    text: "Be first in line for appointments the moment our doors open.",
  },
  {
    icon: Gift,
    title: "Welcome Gift",
    text: "A little something bougie for your pup on their very first visit.",
  },
];

export default function WaitlistPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Waitlist", href: "/waitlist" }])} />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#fbf3de] via-blush/30 to-cream">
        <div className="container-luxury py-28 text-center sm:py-32">
          <FadeIn>
            <nav aria-label="Breadcrumb" className="mb-6 text-xs text-stone">
              <Link href="/" className="transition-colors hover:text-heading">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-heading/80">Waitlist</span>
            </nav>

            <span className="mx-auto mb-6 flex w-fit items-center gap-2 whitespace-nowrap rounded-full border border-[#c9a227]/50 bg-[#f2dfa8]/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8a6d10] sm:px-4 sm:text-xs sm:tracking-[0.2em]">
              Opening Soon · Founding Members
            </span>

            <h1 className="mx-auto max-w-2xl text-balance-pretty font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Reserve Your Spot Before We Open Our Doors.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-stone">
              Join the waitlist for exclusive founding-member pricing, priority scheduling, and a welcome gift for
              your pup — before The Bougie Poodle opens in Peekskill.
            </p>
          </FadeIn>

          <FadeInStagger className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {PERKS.map((perk, i) => (
              <FadeIn
                key={perk.title}
                delay={i * 0.08}
                className="flex flex-col items-center gap-3 rounded-2xl border border-sand/60 bg-white/70 px-5 py-7 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blush via-cream to-[#f2dfa8] ring-1 ring-[#c9a227]/30">
                  <perk.icon className="h-5 w-5 text-[#c9a227]" strokeWidth={1.6} />
                </div>
                <p className="font-display text-base text-ink">{perk.title}</p>
                <p className="text-sm leading-relaxed text-stone">{perk.text}</p>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <section className="container-luxury py-24 sm:py-28">
        <FadeIn className="mx-auto max-w-2xl rounded-3xl border border-sand/70 bg-white p-8 sm:p-10">
          <p className="eyebrow mb-2 text-center">Join the Waitlist</p>
          <h2 className="text-center font-display text-2xl font-medium sm:text-3xl">
            Tell us about you and your pup.
          </h2>
          <p className="mx-auto mt-3 mb-8 max-w-md text-center text-sm leading-relaxed text-stone">
            Takes less than a minute — we&apos;ll follow up as soon as we&apos;re ready to welcome you in.
          </p>
          <WaitlistForm />
        </FadeIn>
      </section>
    </>
  );
}
