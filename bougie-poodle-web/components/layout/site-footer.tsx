import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICE_CATEGORIES } from "@/lib/constants";
import { LogoLockup } from "@/components/brand/logo-mark";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/icons/social-icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-sand/50 bg-blush text-ink">
      <div className="container-luxury grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr] lg:gap-8">
        <div className="space-y-5">
          <LogoLockup imgClassName="h-11" />
          <p className="max-w-xs text-sm leading-relaxed text-ink/70">
            Westchester County&apos;s most bougie dog and cat grooming studio — breed-specific styling,
            organic spa treatments, and white-glove care for pets who deserve the best.
          </p>
          <div className="flex items-center gap-4 pt-1 text-ink/60">
            <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-bougie">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-bougie">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href={BUSINESS.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="transition-colors hover:text-bougie">
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-stone">Explore</h3>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink/75 transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/request-service" className="text-sm text-ink/75 transition-colors hover:text-ink">
                Request Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-stone">Services</h3>
          <ul className="mt-4 space-y-3">
            {SERVICE_CATEGORIES.map((category) => (
              <li key={category}>
                <Link href="/services" className="text-sm text-ink/75 transition-colors hover:text-ink">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-stone">Visit the Studio</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bougie" strokeWidth={1.75} />
                <span>
                  {BUSINESS.address.line1}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                </span>
              </li>
              <li>
                <a href={BUSINESS.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-bougie">
                  <Phone className="h-4 w-4 shrink-0 text-bougie" strokeWidth={1.75} />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2.5 transition-colors hover:text-bougie">
                  <Mail className="h-4 w-4 shrink-0 text-bougie" strokeWidth={1.75} />
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-stone">Stay in the Loop</h3>
            <p className="mt-2 mb-3 text-sm text-ink/70">Grooming tips, seasonal offers, studio news.</p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-sand/50">
        <div className="container-luxury flex flex-col items-center justify-between gap-3 py-6 text-xs text-stone sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>{BUSINESS.address.county} · Serving Westchester&apos;s most bougie pets since {BUSINESS.founded}</p>
        </div>
      </div>
    </footer>
  );
}
