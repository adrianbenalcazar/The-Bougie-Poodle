"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { BUSINESS, CTA_LINK, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LogoLockup } from "@/components/brand/logo-mark";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/icons/social-icons";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={<Button variant="ghost" size="icon" aria-label="Open menu" className="h-10 w-10" />}
        >
          <Menu className="h-5 w-5" />
        </SheetTrigger>
        <SheetContent
          side="right"
          showCloseButton={false}
          className="flex w-[86vw] max-w-sm flex-col gap-0 bg-cream p-0 sm:max-w-sm"
        >
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <SheetHeader className="flex flex-row items-center justify-between border-b border-sand/70 px-6 py-5">
            <LogoLockup wordmarkClassName="text-sm" badgeClassName="h-8 w-8" />
            <SheetClose render={<Button variant="ghost" size="icon" aria-label="Close menu" />}>
              <X className="h-5 w-5" />
            </SheetClose>
          </SheetHeader>

          <nav className="flex flex-1 flex-col gap-1 px-4 py-6" aria-label="Mobile">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <SheetClose
                  key={link.href}
                  nativeButton={false}
                  render={
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-lg px-3 py-3 font-display text-xl text-ink transition-colors hover:bg-blush",
                        active && "bg-blush text-bougie-bright",
                      )}
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              );
            })}
          </nav>

          <div className="space-y-4 border-t border-sand/70 px-6 py-6">
            <SheetClose
              nativeButton={false}
              render={
                <Button
                  size="lg"
                  className="h-12 w-full rounded-full bg-bougie text-base font-semibold text-cream hover:bg-bougie-bright"
                  nativeButton={false}
                  render={<Link href={CTA_LINK.href} />}
                />
              }
            >
              {CTA_LINK.label}
            </SheetClose>
            <a href={BUSINESS.phoneHref} className="flex items-center justify-center gap-2 text-sm font-medium text-ink/80">
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              {BUSINESS.phone}
            </a>
            <div className="flex items-center justify-center gap-5 pt-1 text-ink/60">
              <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href={BUSINESS.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
