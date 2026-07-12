import type { Metadata } from "next";
import { HERO_IMAGES } from "@/lib/images";
import { breadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { LocationHours } from "@/components/sections/location-hours";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/icons/social-icons";
import { BUSINESS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Contact Us — Get a Personalized Quote",
  description:
    "Contact The Bougie Poodle in Westchester County, NY. Call, email, or send a message to get a personalized grooming quote for your dog or cat.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", href: "/contact" }])} />
      <PageHero
        eyebrow="Get in Touch"
        title="Let's talk about your pet."
        subtitle="New clients: call for a personalized quote. Have a question first? Send us a message below."
        image={HERO_IMAGES.contact}
        breadcrumb="Contact"
      />

      <section className="container-luxury py-24 sm:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr]">
          <FadeIn>
            <p className="eyebrow mb-3">Send a Message</p>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">We&apos;d love to hear from you.</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
              Whether you have a question about services, want to discuss your pet&apos;s specific needs, or are ready
              to book — we typically respond within one business day.
            </p>
            <div className="mt-8 flex items-center gap-5 text-ink/60">
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
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-3xl border border-sand/70 bg-white p-8 sm:p-10">
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      <LocationHours />
    </>
  );
}
