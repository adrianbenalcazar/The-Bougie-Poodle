# Graph Report - .  (2026-07-16)

## Corpus Check
- Large corpus: 108 files · ~1,937,182 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 451 nodes · 922 edges · 42 communities (19 shown, 23 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.72)
- Token cost: 1,323,003 input · 0 output

## Community Hubs (Navigation)
- App Pages & Metadata
- Header & Footer UI
- SEO & Marketing Sections
- Booking & Contact Forms
- Site Config & Mock Data
- NPM Dependencies
- TypeScript Config
- Booking Modal & Gallery
- Build Tooling Config
- shadcn/ui Config
- Layout Fonts & CTAs
- FAQ Section
- Brand Logo Family
- Favicon Brand Colors
- Jesse Grooming Photo
- Small Logo Badge
- Project Docs Rules
- Salon Grooming Scene
- Logo Composition
- ESLint Config File
- Next Config File
- PostCSS Config File
- Sky Goldendoodle Photo
- Tilly Poodle Mix Photo
- Tucker Black Poodle Photo
- Running White Poodle Photo
- Afghan Hound Portrait
- Beagle on Dirt Path
- Samoyed Confetti Portrait
- Shiba Inu Teeth Brushing (Gallery 14)
- Jack Russell Portrait
- Shiba Inu Teeth Brushing (Hero)
- Shiba Inu Teeth Brushing (Gallery 17)
- Wet Yorkshire Terrier Photo
- Yorkshire Terrier Combing Photo
- Groomed Terrier Portrait
- Bully Breed Bath Photo
- Poodle Face Trim Photo
- Nine Dogs Lineup Photo
- Pomeranian Towel Photo
- Retriever Blanket Photo
- Shiba Inu Teeth Brushing (Gallery 16)

## God Nodes (most connected - your core abstractions)
1. `cn()` - 83 edges
2. `The Bougie Poodle Website README` - 23 edges
3. `BUSINESS` - 21 edges
4. `FadeIn()` - 18 edges
5. `Button()` - 17 edges
6. `compilerOptions` - 16 edges
7. `breadcrumbJsonLd()` - 13 edges
8. `SectionHeading()` - 11 edges
9. `JsonLd()` - 9 edges
10. `SERVICE_TIERS` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Business Constants (lib/constants.ts)` --references--> `BUSINESS`  [EXTRACTED]
  README.md → lib/constants.ts
- `Mock Clients Directory (lib/mock-clients.ts)` --references--> `findClientByPhone()`  [EXTRACTED]
  README.md → lib/mock-clients.ts
- `DialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dialog.tsx → lib/utils.ts
- `DialogHeader()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dialog.tsx → lib/utils.ts
- `DialogFooter()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dialog.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Core Frontend Tech Stack** — readme_nextjs16_app_router, readme_typescript, readme_tailwindcss_v4, readme_shadcn_ui, readme_framer_motion, readme_react_hook_form, readme_zod [EXTRACTED 1.00]
- **React Hook Form + Zod Form Stack** — lib_validations_module, components_forms_quote_request_form_module, components_forms_existing_client_lookup_module, components_forms_contact_form_module [EXTRACTED 1.00]
- **Pre-Launch Placeholder Integration Gaps** — components_forms_quote_request_form_module, components_forms_contact_form_module, components_forms_existing_client_lookup_module, components_chat_ai_chat_widget_module, components_sections_google_rating_card_module, lib_mock_clients_module [EXTRACTED 1.00]
- **Bougie Poodle Logo Variant Family** — public_images_logos_large_logo_mainmark, public_images_logos_medium_logo_mainmark, public_images_logos_small_logo_mainmark, public_images_logos_dog_body_logo_mainmark, public_images_logos_dog_face_logo_mainmark, public_images_logos_merch_logo_mainmark [INFERRED 0.75]

## Communities (42 total, 23 thin omitted)

### Community 0 - "App Pages & Metadata"
Cohesion: 0.08
Nodes (45): AboutPage(), metadata, STANDARDS, ContactPage(), metadata, GalleryPage(), metadata, metadata (+37 more)

### Community 1 - "Header & Footer UI"
Cohesion: 0.08
Nodes (41): LogoLockup(), NewsletterForm(), FacebookIcon(), IconProps, InstagramIcon(), TikTokIcon(), MobileNav(), SiteFooter() (+33 more)

### Community 2 - "SEO & Marketing Sections"
Cohesion: 0.07
Nodes (28): size, ROUTES, AddonsGrid(), TestimonialCard(), TestimonialsCarousel(), Carousel(), CarouselApi, CarouselContent() (+20 more)

### Community 3 - "Booking & Contact Forms"
Cohesion: 0.11
Nodes (26): ContactForm(), ExistingClientLookup(), QuoteRequestForm(), Checkbox(), Label(), SelectContent(), SelectGroup(), SelectItem() (+18 more)

### Community 4 - "Site Config & Mock Data"
Cohesion: 0.09
Nodes (29): Placeholder Favicon (app/icon.svg), Root Layout (app/layout.tsx), AI Chat Widget (components/chat/ai-chat-widget.tsx), Contact Form (components/forms/contact-form.tsx), Existing Client Lookup (components/forms/existing-client-lookup.tsx), Quote Request Form (components/forms/quote-request-form.tsx), Google Rating Card (components/sections/google-rating-card.tsx), Business Constants (lib/constants.ts) (+21 more)

### Community 5 - "NPM Dependencies"
Cohesion: 0.07
Nodes (29): @base-ui/react, class-variance-authority, clsx, embla-carousel-react, framer-motion, @hookform/resolvers, lucide-react, next (+21 more)

### Community 6 - "TypeScript Config"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 7 - "Booking Modal & Gallery"
Cohesion: 0.12
Nodes (19): BookingFlow(), BookingModal(), Filter, ITEMS, PortraitGallery(), Dialog(), DialogContent(), DialogDescription() (+11 more)

### Community 8 - "Build Tooling Config"
Cohesion: 0.08
Nodes (25): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+17 more)

### Community 9 - "shadcn/ui Config"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 10 - "Layout Fonts & CTAs"
Cohesion: 0.16
Nodes (13): bagelFatOne, fraunces, inter, metadata, RootLayout(), AiChatWidget(), Message, WELCOME (+5 more)

### Community 11 - "FAQ Section"
Cohesion: 0.36
Nodes (7): FaqAccordion(), Accordion(), AccordionContent(), AccordionItem(), AccordionTrigger(), FAQS, faqJsonLd()

### Community 12 - "Brand Logo Family"
Cohesion: 0.50
Nodes (9): Full-Body Spa Poodle Mascot Illustration (coral line art, sunglasses, turban, robe, stool), Dog Face Logo (Poodle Head Illustration), Large Logo Variant, Bougie Poodle Mascot Character (sunglasses, seated on stool), THE BOUGIE POODLE Bubble-Letter Wordmark, Medium Logo Variant, Merch Logo Variant, Small Logo Variant (+1 more)

### Community 13 - "Favicon Brand Colors"
Cohesion: 0.50
Nodes (5): Brand Red #FF1D1D, Bougie Poodle App Icon (favicon.svg), Off-White #FFF5F5, Stylized Paw Print / Heart Mark, The Bougie Poodle (dog-themed brand)

### Community 14 - "Jesse Grooming Photo"
Cohesion: 0.50
Nodes (5): Jesse the Poodle (Cream/Apricot), Before/After Grooming Gallery, Teddy Bear Fluffy Groom Style, Mobile Dog Grooming Van/Trailer Interior, Jesse (After) - Groomed Cream Poodle in Mobile Grooming Van

### Community 15 - "Small Logo Badge"
Cohesion: 0.83
Nodes (4): Bougie Poodle Logo Variant Set (logos/ directory), Small Logo - Circular Badge Mark, "THE BOUGIE POODLE" Circular Bubble-Letter Wordmark, Sunglasses Poodle Head Illustration (small-logo)

### Community 16 - "Project Docs Rules"
Cohesion: 0.67
Nodes (3): node_modules/next/dist/docs/ Guide, Next.js Breaking Changes Rule, CLAUDE.md Project Instructions

### Community 17 - "Salon Grooming Scene"
Cohesion: 1.00
Nodes (3): Groomer's Hands with Grooming Shears, Close-Up Pet Grooming Salon Scene, Freshly Groomed White Fluffy Poodle

### Community 18 - "Logo Composition"
Cohesion: 1.00
Nodes (3): The Bougie Poodle Logo, Bougie Poodle Mascot Character, "The Bougie Poodle" Wordmark

## Knowledge Gaps
- **146 isolated node(s):** `metadata`, `STANDARDS`, `metadata`, `metadata`, `fraunces` (+141 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **23 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Header & Footer UI` to `App Pages & Metadata`, `SEO & Marketing Sections`, `Booking & Contact Forms`, `Booking Modal & Gallery`, `Layout Fonts & CTAs`, `FAQ Section`?**
  _High betweenness centrality (0.221) - this node is a cross-community bridge._
- **Why does `dependencies` connect `NPM Dependencies` to `Build Tooling Config`, `SEO & Marketing Sections`?**
  _High betweenness centrality (0.164) - this node is a cross-community bridge._
- **Why does `react` connect `SEO & Marketing Sections` to `NPM Dependencies`?**
  _High betweenness centrality (0.159) - this node is a cross-community bridge._
- **What connects `metadata`, `STANDARDS`, `metadata` to the rest of the system?**
  _146 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Pages & Metadata` be split into smaller, more focused modules?**
  _Cohesion score 0.08209255533199195 - nodes in this community are weakly interconnected._
- **Should `Header & Footer UI` be split into smaller, more focused modules?**
  _Cohesion score 0.08065458796025717 - nodes in this community are weakly interconnected._
- **Should `SEO & Marketing Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.0728744939271255 - nodes in this community are weakly interconnected._