import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Wordmark uses Bagel Fat One to match the client's real bubble-letter logotype.
 * The badge is still a placeholder paw glyph standing in for the illustrated
 * mascot — swap in the real logo files (public/logo/) once supplied.
 */

export function LogoBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-bougie-bright text-cream",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-[58%] w-[58%]">
        <path
          d="M12 21c-3.5-2.4-7-5.1-7-8.8 0-2 1.5-3.6 3.4-3.6 1.4 0 2.3.7 3.6 2.1 1.3-1.4 2.2-2.1 3.6-2.1 1.9 0 3.4 1.6 3.4 3.6 0 3.7-3.5 6.4-7 8.8Z"
          fill="currentColor"
        />
        <circle cx="7.2" cy="6.3" r="1.6" fill="currentColor" />
        <circle cx="12" cy="4.4" r="1.6" fill="currentColor" />
        <circle cx="16.8" cy="6.3" r="1.6" fill="currentColor" />
      </svg>
    </span>
  );
}

export function LogoLockup({
  className,
  badgeClassName = "h-9 w-9",
  wordmarkClassName = "text-lg",
}: {
  className?: string;
  badgeClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)} aria-label="The Bougie Poodle — home">
      <LogoBadge className={badgeClassName} />
      <span className={cn("font-wordmark leading-none text-bougie-bright", wordmarkClassName)}>
        <span className="block text-[0.42em] tracking-[0.2em]">THE</span>
        <span className="block">BOUGIE POODLE</span>
      </span>
    </Link>
  );
}
