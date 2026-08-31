import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { FadeIn } from "@/components/motion/fade-in";
import { WaitlistForm } from "@/components/forms/waitlist-form";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "The Bougie Poodle is getting ready to open in Peekskill, NY. Add your dog to the waitlist and you'll be one of the first we call when we start booking.",
  alternates: { canonical: "/waitlist" },
};

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
              Opening Soon · Peekskill, NY
            </span>

            <h1 className="mx-auto max-w-2xl text-balance-pretty font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Add your pup to the list before we open.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-stone">
              I&apos;m getting the studio ready here in Peekskill, and I&apos;d rather know now who&apos;s coming
              than scramble later. Put your name and your dog&apos;s info down, and when I start booking
              appointments, you and your pup get first pick.
            </p>
            <p className="mt-3 text-sm italic text-stone/80">— Johanna, founder &amp; lead groomer</p>

            <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-sand/60 bg-white/70 px-4 py-2 text-sm text-ink">
              <CalendarCheck className="h-4 w-4 text-bougie" strokeWidth={1.6} />
              First pick of appointment times when we open
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-luxury py-24 sm:py-28">
        <FadeIn className="mx-auto max-w-2xl rounded-3xl border border-sand/70 bg-white p-8 sm:p-10">
          <p className="eyebrow mb-2 text-center">Join the Waitlist</p>
          <h2 className="text-center font-display text-2xl font-medium sm:text-3xl">
            Tell me about you and your pup.
          </h2>
          <p className="mx-auto mt-3 mb-8 max-w-md text-center text-sm leading-relaxed text-stone">
            Takes about a minute. I&apos;ll reach out myself once we&apos;re ready to start booking.
          </p>
          <WaitlistForm />
        </FadeIn>
      </section>
    </>
  );
}
