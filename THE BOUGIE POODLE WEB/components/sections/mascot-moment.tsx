import { LogoBadge } from "@/components/brand/logo-mark";
import { FadeIn } from "@/components/motion/fade-in";

export function MascotMoment() {
  return (
    <section className="bg-blush/50 py-20 sm:py-24">
      <div className="container-luxury">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <LogoBadge className="h-16 w-16" />
          <p className="font-display text-2xl italic leading-relaxed text-ink sm:text-3xl">
            &ldquo;Bougie isn&apos;t about excess — it&apos;s about not settling for less than your best friend deserves.&rdquo;
          </p>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone">The Bougie Poodle Philosophy</p>
        </FadeIn>
      </div>
    </section>
  );
}
