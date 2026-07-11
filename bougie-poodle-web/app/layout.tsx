import type { Metadata } from "next";
import { Bagel_Fat_One, Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL, BUSINESS } from "@/lib/constants";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CallNowButton } from "@/components/layout/call-now-button";
import { AiChatWidget } from "@/components/chat/ai-chat-widget";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const bagelFatOne = Bagel_Fat_One({
  variable: "--font-wordmark",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} | Luxury Dog & Cat Grooming in Westchester, NY`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Westchester County's most bougie dog and cat grooming studio. Breed-specific styling, organic spa treatments, and white-glove care for pets who deserve the best. Call for a personalized quote.",
  keywords: [
    "Dog Grooming Westchester NY",
    "Luxury Dog Grooming",
    "Premium Pet Spa",
    "Best Dog Groomer Near Me",
    "Mobile Grooming",
    "Luxury Pet Grooming",
    "Dog Spa",
    "Cat Grooming",
    "Pet Salon",
    "Pet Groomer Westchester",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Luxury Dog & Cat Grooming in Westchester, NY`,
    description:
      "Breed-specific styling, organic spa treatments, and white-glove grooming for dogs and cats in Westchester County.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Luxury Dog & Cat Grooming`,
    description:
      "Westchester County's most bougie dog and cat grooming studio. Call for a personalized quote.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${bagelFatOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-3 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1 pb-[76px] lg:pb-0">
          {children}
        </main>
        <SiteFooter />
        <CallNowButton />
        <AiChatWidget />
      </body>
    </html>
  );
}
