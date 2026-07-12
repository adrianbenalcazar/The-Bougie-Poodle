import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { StickyBookBar } from "@/components/layout/sticky-book-bar";

export function CallNowButton() {
  return (
    <>
      <a
        href={BUSINESS.phoneHref}
        aria-label={`Call ${BUSINESS.name} now`}
        className="group fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-bougie text-white shadow-[0_8px_30px_rgba(255,29,29,0.35)] transition-transform duration-300 hover:scale-105 lg:flex"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bougie/40 opacity-75 group-hover:opacity-0" />
        <Phone className="h-5 w-5" strokeWidth={1.75} />
      </a>
      <StickyBookBar />
    </>
  );
}
