import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/fade-in";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <FadeIn className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={cn(
          "text-balance-pretty font-display text-3xl font-medium sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", tone === "dark" ? "text-cream/70" : "text-stone")}>
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
