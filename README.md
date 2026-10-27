# Larry & Andrea — Wedding Website

A warm, cinematic one-page wedding website built with Next.js App Router, Tailwind CSS 4, TypeScript, and Motion.

## Quick start

Requires Node.js >= 20.9.

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## What's included

- Original uploaded restaurant portrait optimized to `public/images/larry-andrea-hero.webp` (not AI recreated)
- Official transparent LA monogram in `public/images/la-monogram.webp`
- Accessible desktop and mobile navigation with theme switcher
- Live countdown to May 22, 2027 at 12:00 PM Pacific Daylight Time
- Organic ivory wave from hero into ceremony and reception
- Venue details and Google Maps directions
- Photo gallery scaffold, travel scaffold, and external RSVP link scaffold
- Subtle animations with reduced-motion support

## Customize

1. **All content:** Update `lib/wedding.ts`.
2. **Photos:** Place real venue pictures in `public/images` and set `ceremony.image` or `reception.image` in `lib/wedding.ts` to their paths. These intentionally use tasteful placeholders until the real photos are available. Add gallery images to `wedding.gallery`.
3. **RSVP:** Copy `.env.example` to `.env.local`, enter your actual external RSVP service URL for `NEXT_PUBLIC_RSVP_URL`, then restart the dev server. An absent URL shows “RSVP link coming soon” instead of a broken button.
4. **Theme:** The moon/sun icon switches the ivory page sections between light and dark. Hero and RSVP remain cinematic/dark.
5. **Typography:** Cormorant Garamond / DM Sans load through Google Fonts in CSS; Georgia / Arial provide fallbacks.

## Venue information

- Ceremony: Old Ranch Country Club, 3901 Lampson Avenue, Seal Beach, CA 90740. Ceremony begins at 12:00 PM.
- Reception: Paracel Events & Catering, 15583–15589 Brookhurst Street, Westminster, CA 92683. Exact reception start time has not been provided; site says “To follow.”

Please confirm logistical details and RSVP URL before publishing the site.

## Existing project integration

For a preexisting Next.js App Router project, move `components/`, `lib/wedding.ts`, the two files from `public/images/`, and use `app/page.tsx` or incorporate the components into your current homepage. Merge `app/globals.css` and preserve the existing Tailwind import/config. Install `motion` and `lucide-react`. These files use the `@/*` alias.
