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

1. **Logo files.** The header/footer/favicon currently use a placeholder wordmark + monogram (`components/brand/logo-mark.tsx`, `app/icon.svg`). Drop the real logo files in and swap them in, then delete the placeholder mark.
2. **Photography.** Every image on the site is sourced from free-license Unsplash photography, centralized in `lib/images.ts`. Replace the `src` values there with the studio's own photography — nothing else needs to change.
3. **Business details.** Phone, email, address, hours, and social links are placeholders in `lib/constants.ts` (`BUSINESS` object) — update with the real studio info.
4. **Forms.** The contact form, new-client request form, and existing-client booking form (`components/forms/`) currently simulate a submission (a timeout + success state) with no backend. Wire them to a real endpoint, email service (e.g. Resend), or CRM.
5. **Online booking.** The "existing client" booking form collects a request but doesn't hit a real scheduling system. Connect it to whatever booking platform the studio uses (Square Appointments, Acuity, etc.), or replace the form with an embedded booking widget.
6. **AI chat widget.** `components/chat/ai-chat-widget.tsx` is a styled UI shell with a canned response — connect it to a real assistant/backend if desired.
7. **Google Reviews.** `components/sections/google-rating-card.tsx` shows a static rating; wire it to the Google Places API (or embed a real reviews widget) and update the "Read all reviews on Google" link.
8. **`SITE_URL`** in `lib/constants.ts` should be updated to the real production domain (it feeds metadata, sitemap, and JSON-LD).

## Project structure

```
app/                    Routes (Home, About, Services, Gallery, Reviews, Contact, Request Service)
  layout.tsx            Root layout, fonts, sitewide metadata, Organization/LocalBusiness schema
  sitemap.ts, robots.ts
  opengraph-image.tsx   Dynamically generated OG image
components/
  layout/               Header, mobile nav, footer, sticky mobile call/book bar
  sections/             Page sections shared across routes (hero, services grid, testimonials, etc.)
  forms/                Contact, new-client, existing-client, newsletter forms (RHF + Zod)
  ui/                    shadcn/ui primitives
  chat/                 AI chat widget shell
  seo/                  JSON-LD renderer
lib/
  constants.ts          Business info, nav, services, testimonials, FAQs
  images.ts             Central photography map
  schema.ts             JSON-LD builders (Organization, LocalBusiness, FAQPage, Review, Breadcrumb, Service)
  validations.ts        Zod schemas for all forms
```

## Design system

Brand colors, fonts, and spacing live in `app/globals.css` (Tailwind v4 `@theme`). The palette is derived from the client's logo:

- `bg-cream` / `text-ink` — primary background/text
- `bg-blush` — soft secondary background
- `bg-bougie` / `text-bougie` — accessible default red (7:1 contrast on cream/white, used for buttons, links, active states)
- `bg-bougie-bright` / `text-bougie-bright` — the vivid logo red, reserved for hover states and non-text/logo marks
- Display type: **Fraunces** (`font-display`). Body/UI type: **Inter** (`font-sans`).

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. No environment variables are required for the current build. Add any once a real booking/chat/CRM backend is connected.
4. Update `SITE_URL` in `lib/constants.ts` to match the assigned domain before the first deploy.
