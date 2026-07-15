# The Bougie Poodle — Website

Luxury dog & cat grooming studio website for Westchester County, NY. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui (Base UI primitives), Framer Motion, React Hook Form, and Zod.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## What still needs to be wired up before launch

This is a fully designed, production-ready front end. A few things are intentionally placeholders and need real assets/integrations before going live:

1. **Logo files.** The favicon uses a placeholder monogram (`app/icon.svg`). The header/footer/nav logo itself is already wired to the real file at `public/images/logo.png`.
2. **Photography.** Every image on the site is sourced from free-license Unsplash photography, centralized in `lib/images.ts`. Replace the `src` values there with the studio's own photography — nothing else needs to change.
3. **Business details.** Phone, email, address, hours, and social links live in `lib/constants.ts` (`BUSINESS` object) — social links are still placeholders, update with real handles.
4. **Quote request form doesn't email anyone yet.** The "I'm New Here" form (`components/forms/quote-request-form.tsx`) collects the full intake (contact info, dog details, health/behavior, photo upload, service, add-ons, preferred date) and simulates a submission — nothing is actually sent to `hello@thebougiepoodleny.com`. Wire it to a real API route (e.g. a Next.js route handler calling Resend/SendGrid) to actually deliver requests, including the uploaded photo.
5. **Existing-client lookup is a mock.** The "I'm an Existing Client" tab (`components/forms/existing-client-lookup.tsx`) looks up the phone number against a small hardcoded fake client list in `lib/mock-clients.ts` — try `(914) 221-0048`, `(914) 555-0187`, or `(914) 555-0142` to see it prefill a name/dog. Replace `findClientByPhone` with a real CRM/database lookup, and connect the booking submission to a real scheduling system.
6. **Contact form.** `components/forms/contact-form.tsx` also just simulates a submission — same email-wiring gap as above.
7. **AI chat widget.** `components/chat/ai-chat-widget.tsx` is a styled UI shell with a canned response — connect it to a real assistant/backend if desired.
8. **Google Reviews.** `components/sections/google-rating-card.tsx` shows a static rating; wire it to the Google Places API (or embed a real reviews widget) and update the "Read all reviews on Google" link.
9. **`SITE_URL`** in `lib/constants.ts` should be updated to the real production domain (it feeds metadata, sitemap, and JSON-LD).

## Project structure

```
app/                    Routes (Home, About, Services, Gallery, Reviews, Contact, Request Service)
  layout.tsx            Root layout, fonts, sitewide metadata, Organization/LocalBusiness schema
  sitemap.ts, robots.ts
  opengraph-image.tsx   Dynamically generated OG image
components/
  layout/               Header, mobile nav, footer, sticky mobile call/book bar
  sections/             Page sections (hero, service-tier-card, addons-grid, booking-flow, booking-modal, testimonials, etc.)
  forms/                Contact, quote-request (new client), existing-client-lookup, newsletter forms (RHF + Zod)
  ui/                    shadcn/ui primitives
  chat/                 AI chat widget shell
  seo/                  JSON-LD renderer
lib/
  constants.ts          Business info, nav, service tiers, add-ons, testimonials, FAQs
  images.ts             Central photography map
  mock-clients.ts       Fake "existing client" directory for the phone-lookup demo (see gap #5 above)
  schema.ts             JSON-LD builders (Organization, LocalBusiness, FAQPage, Review, Breadcrumb, Service)
  validations.ts        Zod schemas for all forms
```

## Design system

Brand colors, fonts, and spacing live in `app/globals.css` (Tailwind v4 `@theme`). Colors are client-mandated (non-negotiable hex values):

- `bg-cream` (`#FFF5F5`) — main page background; plain white is used for cards/sections
- `bg-blush` (`#FFDCDC`) — card / highlighted-section background
- `bg-sand` (`#FFB3B3`) — secondary accent: hover states, dividers, subtle highlights
- `bg-bougie` / `text-bougie` (`#FF1D1D`) — primary red, reserved for buttons, CTAs, active links, and icon accents only (~10% of the page)
- `text-ink` (`#1A1A1A`) — body text
- `text-heading` (`#5C2B2B`) — headings and small accent/label text (used instead of red where red would fail text contrast, e.g. eyebrow labels and form errors)
- Display type: **Fraunces** (`font-display`), wordmark type: **Bagel Fat One** (`font-wordmark`). Body/UI type: **Inter** (`font-sans`).

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. No environment variables are required for the current build. Add any once a real booking/chat/CRM backend is connected.
4. Update `SITE_URL` in `lib/constants.ts` to match the assigned domain before the first deploy.
