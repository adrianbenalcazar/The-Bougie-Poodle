import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS, CTA_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function StickyBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand/70 bg-cream/95 px-4 py-3 backdrop-blur-lg [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="flex items-center gap-2.5">
        <Button
          variant="outline"
          size="lg"
          className="h-12 flex-1 gap-2 rounded-full border-ink/15 bg-white text-sm font-semibold text-ink"
          nativeButton={false}
          render={<a href={BUSINESS.phoneHref} />}
        >
          <Phone className="h-4 w-4" strokeWidth={1.75} />
          Call Now
        </Button>
        <Button
          size="lg"
          className="h-12 flex-1 rounded-full bg-bougie text-sm font-semibold text-cream hover:bg-bougie/90"
          nativeButton={false}
          render={<Link href={CTA_LINK.href} />}
        >
          {CTA_LINK.label}
        </Button>
      </div>
    </div>
  );
}
