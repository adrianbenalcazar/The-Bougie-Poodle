import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * LogoBadge is a placeholder paw glyph standing in for the illustrated mascot
 * icon (used standalone where only a small circular mark is needed, e.g.
 * MascotMoment). LogoLockup renders the client's real logo file directly.
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
  imgClassName = "h-10",
  priority = false,
  src = "/images/logo.png",
  width = 1663,
  height = 901,
}: {
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  src?: string;
  width?: number;
  height?: number;
}) {
  return (
    <Link href="/" className={cn("group flex shrink-0 items-center", className)} aria-label="The Bougie Poodle — home">
      <Image
        src={src}
        alt="The Bougie Poodle"
        width={width}
        height={height}
        priority={priority}
        className={cn("w-auto object-contain", imgClassName)}
      />
    </Link>
  );
}
