# LT Commercial Group — Walnut Park

Marketing site for LT Commercial Group's executive suites, team offices, and
meeting rooms at Walnut Park Crossing, Austin, TX.

Built with **Next.js (App Router)**, **React 19**, **Tailwind CSS v4** and
**Motion**. Every page is server-rendered / statically generated so the full
content is present in the HTML — which is what lets Google and AI crawlers
index the site (an SPA only ships an empty `<div>` + JavaScript).

## SEO / crawlability features

- Server-rendered static HTML — all copy, headings and FAQs are in the source.
- Per-page `metadata` (title, description, canonical, Open Graph, Twitter card).
- JSON-LD structured data: `RealEstateAgent` (business info) and `FAQPage`
  (eligible for FAQ rich results).
- `app/sitemap.ts` → `/sitemap.xml` and `app/robots.ts` → `/robots.txt`
  (all crawlers, including AI bots, allowed).
- A branded Open Graph image at `/og.png`.
- `next/font` for zero-layout-shift, self-hosted Google Fonts.

## Run locally

**Prerequisites:** Node.js 18.18+.

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build & serve

```bash
npm run build
npm run start
```

## Configuration

Set your production domain so canonical URLs, the sitemap, robots.txt and
Open Graph tags resolve correctly. Create `.env.local` (or set it in your
hosting provider):

```
NEXT_PUBLIC_SITE_URL=https://www.your-domain.com
```

It defaults to `http://localhost:3000` when unset. Business details
(address, phone, geo, keywords) live in `src/lib/site.ts`.
