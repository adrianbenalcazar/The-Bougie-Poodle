export const SITE_URL = "https://www.thebougiepoodleny.com";

export const BUSINESS = {
  name: "The Bougie Poodle",
  tagline: "Luxury Dog & Cat Grooming, Westchester County",
  phone: "(914) 221-0048",
  phoneHref: "tel:+19142210048",
  email: "hello@thebougiepoodleny.com",
  address: {
    line1: "1831 Main St, Suite 6",
    city: "Peekskill",
    state: "NY",
    zip: "10566",
    county: "Westchester County",
  },
  geo: {
    latitude: 41.2901,
    longitude: -73.9204,
  },
  hours: [
    { days: "Tuesday – Friday", time: "9:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 4:00 PM" },
    { days: "Sunday – Monday", time: "By appointment only" },
  ],
  hoursSchema: [
    { day: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { day: ["Saturday"], opens: "09:00", closes: "16:00" },
  ],
  social: {
    instagram: "https://www.instagram.com/thebougiepoodle",
    facebook: "https://www.facebook.com/thebougiepoodle",
    tiktok: "https://www.tiktok.com/@thebougiepoodle",
  },
  founded: 2026,
  ratingValue: "5.0",
  reviewCount: "214",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;

export const CTA_LINK = { label: "Request Service", href: "/request-service" } as const;

export const SERVICE_SIZES = ["Small", "Medium", "Large", "XL"] as const;
export type ServiceSize = (typeof SERVICE_SIZES)[number];

export type ServiceTier = {
  slug: string;
  name: string;
  description: string;
  includes: string[];
  icon: string;
};

export const SERVICE_TIERS: ServiceTier[] = [
  {
    slug: "the-bougie-groom",
    name: "The Bougie Groom",
    description: "Our signature full-service groom — a spa day, not just a bath.",
    includes: [
      "Bath with premium shampoo & conditioner",
      "Blow dry",
      "Nail clipping & filing",
      "Ear cleaning",
      "Teeth brushing (upon request only)",
      "Perfume",
      "Bandana",
      "Regular haircut",
    ],
    icon: "Sparkles",
  },
  {
    slug: "the-bougie-groom-breed-specific",
    name: "The Bougie Groom — Breed-Specific Cut",
    description: "Everything in The Bougie Groom, finished with a precision breed-standard haircut.",
    includes: ["Everything in The Bougie Groom", "Breed-specific haircut"],
    icon: "Scissors",
  },
];

export type AddOn = {
  slug: string;
  name: string;
  icon: string;
};

export const ADD_ONS: AddOn[] = [
  { slug: "anal-glands", name: "Anal Glands", icon: "Stethoscope" },
  { slug: "dematting", name: "Dematting", icon: "Layers" },
  { slug: "deskunking", name: "Deskunking", icon: "SprayCan" },
  { slug: "coloring", name: "Coloring", icon: "Palette" },
];

export type Testimonial = {
  name: string;
  pet: string;
  quote: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alexandra R.",
    pet: "Milo, Standard Poodle",
    quote:
      "Milo comes home looking like he stepped out of a magazine. The studio itself is spotless, calm, and smells incredible — I trust them completely.",
    rating: 5,
  },
  {
    name: "Jonathan P.",
    pet: "Coco, Maltese",
    quote:
      "This is the first groomer that's ever made Coco relaxed instead of anxious. The attention to detail on her cut is unreal.",
    rating: 5,
  },
  {
    name: "Priya M.",
    pet: "Basil, Ragdoll Cat",
    quote:
      "I never thought I'd trust anyone with my cat's grooming, let alone love the results. Basil's coat has never looked better.",
    rating: 5,
  },
  {
    name: "Whitney S.",
    pet: "Bear, Bernedoodle",
    quote:
      "Worth every penny. Bear's deshedding treatment alone has saved my furniture. The team clearly, genuinely loves animals.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    pet: "Luna, Shih Tzu",
    quote:
      "Booking is effortless, the studio feels like a five-star spa, and Luna practically skips through the door every visit.",
    rating: 5,
  },
  {
    name: "Elena G.",
    pet: "Otis, Goldendoodle",
    quote:
      "From the organic shampoo to the finishing bow, every detail is intentional. This is grooming done the right way.",
    rating: 5,
  },
];

export type FaqItem = { question: string; answer: string };

export const FAQS: FaqItem[] = [
  {
    question: "Do you groom both dogs and cats?",
    answer:
      "Yes. Our groomers are trained and certified in both canine and feline grooming, with handling techniques suited to each species' temperament and needs.",
  },
  {
    question: "How much does grooming cost?",
    answer:
      "Every pet is different — coat condition, size, breed, and temperament all factor into pricing. Call us for a personalized quote tailored to your pet. Existing clients can skip the call and book directly online.",
  },
  {
    question: "What should I expect at my pet's first visit?",
    answer:
      "New clients begin with a brief phone consultation so we can understand your pet's coat, health history, and styling goals before their first appointment. This helps us prepare the right products and give an accurate quote.",
  },
  {
    question: "Are your grooming products safe for sensitive skin?",
    answer:
      "Yes. We use organic, sulfate-free, vet-approved products throughout every service, and we're happy to accommodate specific allergies or sensitivities — just let us know when you book.",
  },
  {
    question: "Do you offer mobile grooming?",
    answer:
      "We offer select mobile grooming appointments across Westchester County for existing clients. Call our studio to check availability in your area.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking one to two weeks ahead, especially for weekend appointments. Existing clients can check real-time availability through our online booking.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We ask for at least 24 hours' notice for cancellations or rescheduling so we can offer the appointment to another pet on our waitlist.",
  },
];
