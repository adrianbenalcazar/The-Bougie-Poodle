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
  founded: 2019,
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

export type ServiceCategory =
  | "Bath & Spa Essentials"
  | "Cuts & Styling"
  | "Coat & Skin Treatments"
  | "Wellness Essentials"
  | "Finishing Touches";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  description: string;
  icon: string;
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  "Bath & Spa Essentials",
  "Cuts & Styling",
  "Coat & Skin Treatments",
  "Wellness Essentials",
  "Finishing Touches",
];

export const SERVICES: Service[] = [
  {
    slug: "full-bath",
    name: "Full Bath",
    category: "Bath & Spa Essentials",
    description: "A slow, thorough wash with warm water and hand-selected products suited to your pet's coat and skin.",
    icon: "Droplets",
  },
  {
    slug: "blow-dry-brushing",
    name: "Blow Dry & Brushing",
    category: "Bath & Spa Essentials",
    description: "Gentle, low-noise drying and a full brush-out for a coat that's soft, smooth, and mat-free.",
    icon: "Wind",
  },
  {
    slug: "organic-shampoos",
    name: "Organic Shampoos",
    category: "Bath & Spa Essentials",
    description: "Botanical, sulfate-free formulas chosen for sensitive skin, allergies, and coats that deserve better.",
    icon: "Leaf",
  },
  {
    slug: "paw-spa",
    name: "Paw Spa",
    category: "Bath & Spa Essentials",
    description: "A soothing soak, balm, and pad massage that leaves paws soft and city-walk ready.",
    icon: "PawPrint",
  },
  {
    slug: "hydrating-coat-treatments",
    name: "Hydrating Coat Treatments",
    category: "Bath & Spa Essentials",
    description: "Deep-conditioning masks that restore moisture and shine to dry or over-groomed coats.",
    icon: "Sparkles",
  },
  {
    slug: "beauty-masks",
    name: "Beauty Masks",
    category: "Bath & Spa Essentials",
    description: "A spa-grade finishing treatment for coat texture and a visible, camera-ready glow.",
    icon: "Flower2",
  },
  {
    slug: "breed-specific-haircuts",
    name: "Breed-Specific Haircuts",
    category: "Cuts & Styling",
    description: "Precision styling to breed standard, tailored by a groomer fluent in every coat type.",
    icon: "Scissors",
  },
  {
    slug: "custom-haircuts",
    name: "Custom Haircuts",
    category: "Cuts & Styling",
    description: "A one-on-one styling consultation for a look that's entirely, unmistakably your pet's own.",
    icon: "WandSparkles",
  },
  {
    slug: "coat-shaping",
    name: "Coat Shaping",
    category: "Cuts & Styling",
    description: "Fine detail work around the face, feet, and silhouette for a polished, tailored finish.",
    icon: "Layers",
  },
  {
    slug: "hygienic-trimming",
    name: "Hygienic Trimming",
    category: "Cuts & Styling",
    description: "Sanitary trims kept short and clean for comfort, cleanliness, and everyday ease.",
    icon: "Scissors",
  },
  {
    slug: "deshedding-treatments",
    name: "Deshedding Treatments",
    category: "Coat & Skin Treatments",
    description: "A specialized process that lifts loose undercoat at the source, for a lasting reduction in shedding.",
    icon: "Wind",
  },
  {
    slug: "dematting",
    name: "Dematting",
    category: "Coat & Skin Treatments",
    description: "Careful, low-stress mat removal that prioritizes your pet's comfort at every step.",
    icon: "Layers",
  },
  {
    slug: "flea-tick-treatments",
    name: "Flea & Tick Treatments",
    category: "Coat & Skin Treatments",
    description: "Gentle, effective treatments that protect without harsh chemicals.",
    icon: "ShieldCheck",
  },
  {
    slug: "tear-stain-removal",
    name: "Tear Stain Removal",
    category: "Coat & Skin Treatments",
    description: "A delicate facial treatment that brightens and softens the fur beneath the eyes.",
    icon: "Eye",
  },
  {
    slug: "facial-treatments",
    name: "Facial Treatments",
    category: "Coat & Skin Treatments",
    description: "A cleansing, brightening ritual for the face — because first impressions matter.",
    icon: "Sparkle",
  },
  {
    slug: "nail-trimming-filing",
    name: "Nail Trimming & Filing",
    category: "Wellness Essentials",
    description: "Precise trimming and a smooth file finish, handled with a steady, reassuring touch.",
    icon: "Sparkles",
  },
  {
    slug: "ear-cleaning",
    name: "Ear Cleaning",
    category: "Wellness Essentials",
    description: "Thorough, gentle ear care to support comfort and long-term hygiene.",
    icon: "Ear",
  },
  {
    slug: "teeth-brushing",
    name: "Teeth Brushing",
    category: "Wellness Essentials",
    description: "A simple habit for fresher breath and healthier gums, folded into every visit.",
    icon: "Smile",
  },
  {
    slug: "luxury-finishing-touches",
    name: "Luxury Finishing Touches",
    category: "Finishing Touches",
    description: "The final layer of polish — coat gloss, styling balm, and a groomer's eye for detail.",
    icon: "Gem",
  },
  {
    slug: "premium-perfumes",
    name: "Premium Perfumes",
    category: "Finishing Touches",
    description: "A light, pet-safe fragrance to send your companion home smelling as good as they look.",
    icon: "FlaskConical",
  },
  {
    slug: "bows",
    name: "Bows",
    category: "Finishing Touches",
    description: "Hand-tied bows in seasonal colors, the signature last touch of a Bougie Poodle visit.",
    icon: "Ribbon",
  },
  {
    slug: "bandanas",
    name: "Bandanas",
    category: "Finishing Touches",
    description: "Soft, tailored bandanas selected to complement your pet's finished style.",
    icon: "Shirt",
  },
  {
    slug: "safe-creative-coloring",
    name: "Safe Creative Coloring",
    category: "Finishing Touches",
    description: "Pet-safe, vet-approved color accents for owners who want a little more fun in the finish.",
    icon: "Palette",
  },
];

export const SPECIES = ["Dogs", "Cats"] as const;

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
