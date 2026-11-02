# BEEDSTITCHES Fashion Website

Production-quality bespoke fashion portfolio, fashion training lead generation, and online consultation booking website for **BEEDSTITCHES Fashion** (Founder & Creative Director: **Iwunna Uchenna Michael**, Enugu, Nigeria).

## Tech Stack

- **Framework:** Next.js App Router (`src/app`)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS (`tailwind.config.ts`)
- **Motion:** Framer Motion (`src/components/Reveal.tsx`, respecting `prefers-reduced-motion`)
- **Deployment:** Vercel-compatible

## Architecture & Content Configuration

All business facts, portfolio assets, and services are separated from presentation so future portfolio batches or a headless CMS can be connected without redesigning any page:

- `src/data/siteConfig.ts` — Brand identity, founder credentials, contact info, WhatsApp helper (`+2348132884507`), process steps, fashion training curriculum, and feature flags for items awaiting client verification.
- `src/data/portfolio.ts` — Authentic client portfolio items (`portfolioItems`), behind-the-scenes atelier media (`craftsmanshipAssets`), and isolated pending testimonials (`pendingTestimonials`).
- `src/data/services.ts` — Structured data for all 7 BEEDSTITCHES service categories.
- `src/lib/bookingValidation.ts` & `src/app/api/bookings/route.ts` — Isolated client/server validation, spam protection, and request-based consultation handling.

## Items Isolated Pending Client Confirmation

Per `beedstitches_antigravity_build_spec_v2.yml`:

1. **Client Email (`Mykelbeed@gmail`)**: Stored in `siteConfig.contact.email` with `verified: false` so it is hidden from public pages until the complete valid email address is confirmed.
2. **Exact Social Profile URLs**: Handles (`@Mickeybeed`, `Iwunna Mykel Beed`, `@Mykelbeed`) are displayed without fabricating URLs. Set `url` in `siteConfig.contact.social` when exact links are supplied.
3. **Founder Portrait**: Isolated in `src/components/FounderPortraitSlot.tsx`. Set `portraitAvailable: true` and `portraitSrc` in `siteConfig.founder` once dedicated founder portrait photos are provided.
4. **Budget Range Field on Booking Form**: Hidden via `siteConfig.booking.enableBudgetField = false` until the client defines actual budget brackets.
5. **Visible Price Marker (`80k`) on `(28).jpeg`**: Removed in `public/assets/beedstitches/derived/white-contemporary-two-piece-clean.jpeg` while preserving the original file untouched.
6. **Customer Testimonial (`Ray` — `(22).jpeg`)**: Isolated in `src/data/portfolio.ts` (`pendingTestimonials`) with `approvedForPublicDisplay: false` until client publication approval is confirmed.

## Running Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run typecheck
npm run build
npm start
```
