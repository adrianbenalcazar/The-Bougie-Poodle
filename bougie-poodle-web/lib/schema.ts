import { BUSINESS, FAQS, SERVICE_TIERS, SITE_URL } from "@/lib/constants";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook, BUSINESS.social.tiktok],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "PetGroomer",
    name: BUSINESS.name,
    image: `${SITE_URL}/images/logo.png`,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.line1,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Westchester County, NY",
    },
    openingHoursSpecification: BUSINESS.hoursSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook, BUSINESS.social.tiktok],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.ratingValue,
      reviewCount: BUSINESS.reviewCount,
    },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[] = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Pet Grooming",
    provider: {
      "@type": "PetGroomer",
      name: BUSINESS.name,
    },
    areaServed: "Westchester County, NY",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Grooming Services",
      itemListElement: SERVICE_TIERS.map((tier) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: tier.name,
          description: tier.description,
        },
      })),
    },
  };
}

export function reviewsJsonLd(
  reviews: { name: string; quote: string; rating: number }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "PetGroomer",
    name: BUSINESS.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.ratingValue,
      reviewCount: BUSINESS.reviewCount,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.quote,
    })),
  };
}
