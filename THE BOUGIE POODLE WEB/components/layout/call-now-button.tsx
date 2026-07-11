import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { StickyBookBar } from "@/components/layout/sticky-book-bar";

export function CallNowButton() {
  return (
    <>
      <a
        href={BUSINESS.phoneHref}
        aria-label={`Call ${BUSINESS.name} now`}
        className="group fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-ink text-cream shadow-[0_8px_30px_rgba(27,24,21,0.25)] transition-transform duration-300 hover:scale-105 hover:bg-bougie lg:flex"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bougie/30 opacity-75 group-hover:opacity-0" />
        <Phone className="h-5 w-5" strokeWidth={1.75} />
      </a>
      <StickyBookBar />
    </>
  );
}
