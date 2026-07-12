"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS, CTA_LINK, NAV_LINKS } from "@/lib/constants";
import { LogoLockup } from "@/components/brand/logo-mark";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-sand/70 bg-cream/85 backdrop-blur-lg shadow-[0_1px_0_0_rgba(27,24,21,0.04)]"
          : "border-transparent bg-cream/40 backdrop-blur-sm",
      )}
    >
      <div className="container-luxury flex items-center justify-between py-3">
        <LogoLockup imgClassName="h-[68px]" priority />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-bougie",
                  active ? "text-bougie" : "text-ink/80",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-1.5 text-sm font-medium text-ink/80 transition-colors hover:text-bougie"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            {BUSINESS.phone}
          </a>
          <Button
            size="lg"
            className="h-10 rounded-full bg-bougie px-6 text-sm font-semibold text-cream hover:bg-bougie/90"
            nativeButton={false}
            render={<Link href={CTA_LINK.href} />}
          >
            {CTA_LINK.label}
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
