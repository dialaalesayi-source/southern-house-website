# Southern House Company — Website

Production-ready Next.js website for **Southern House Company**, the parent
company behind **Fun Place** (flagship indoor playground brand), **Balloons
& Party Solutions**, and **Toys**.

This repository currently contains the **homepage only**, built as the first
increment of the full site (About, Fun Place, Balloons, Toys, Gallery,
Branches, and Contact pages are planned next, using the same architecture).

---

## 1. Project overview

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS, using the agreed Southern House / Fun Place
  design system (colors, type scale, spacing, shadows — see
  `tailwind.config.ts`)
- **i18n:** Arabic (default, RTL) and English (LTR), via a locale-prefixed
  route (`/ar`, `/en`) and JSON dictionaries — no external i18n library
  required
- **Animation:** Framer Motion for scroll reveals and count-up stats, plus a
  few lightweight CSS keyframes (floating balloons, shimmer, marquee) —
  everything respects `prefers-reduced-motion`
- **Images:** `next/image` throughout, with clearly labeled placeholder SVGs
  standing in for real photography

---

## 2. Folder structure

```
southern-house-website/
├── middleware.ts              # Redirects "/" to the right locale ("/ar" or "/en")
├── messages/
│   ├── en.json                # All English UI copy
│   └── ar.json                # All Arabic UI copy (same key structure as en.json)
├── public/
│   └── images/                # Placeholder art — replace before launch (see §9)
├── src/
│   ├── app/
│   │   ├── sitemap.ts         # Dynamic sitemap.xml (both locales)
│   │   ├── robots.ts          # robots.txt
│   │   ├── manifest.ts        # Web app manifest
│   │   ├── icon.svg           # Auto-detected favicon (Next.js file convention)
│   │   ├── globals.css        # Tailwind entry + base/accessibility styles
│   │   └── [locale]/
│   │       ├── layout.tsx     # <html lang/dir>, fonts, Header, Footer, SEO metadata
│   │       ├── page.tsx       # Homepage — composes all sections in order
│   │       ├── loading.tsx    # Route-level loading skeleton
│   │       ├── error.tsx      # Route-level error boundary
│   │       ├── not-found.tsx  # Bilingual 404
│   │       └── opengraph-image.tsx  # Dynamic OG/Twitter share image
│   ├── components/
│   │   ├── ui/                 # Reusable, brand-agnostic primitives
│   │   │   (Button, Badge, Container, SectionHeading, FadeIn, StatCounter, FloatingBalloons)
│   │   ├── layout/              # Header, Footer, LanguageToggle
│   │   └── sections/            # One file per homepage section (Hero, TrustStrip, OurBrands, …)
│   ├── data/
│   │   ├── branches.ts         # Fun Place branch list — edit this to add/change branches
│   │   └── gallery.ts          # Gallery preview image list
│   ├── i18n/
│   │   ├── config.ts           # Locale list + RTL helper
│   │   └── get-dictionary.ts   # Loads the right JSON dictionary per request
│   └── types/
│       └── index.ts            # Shared TypeScript types (Branch, GalleryImage)
├── tailwind.config.ts           # Full design system: colors, type, radius, shadows, motion
├── next.config.mjs
├── tsconfig.json
└── package.json
```

**Why no `src/app/layout.tsx` at the very root?** Because every route lives
under `/[locale]/...`, the locale layout (`src/app/[locale]/layout.tsx`)
*is* the root layout — it's the only place `<html>`/`<body>` are rendered.
This is the same pattern used in Next.js's own i18n routing examples.

---

## 3. Installation

Requires **Node.js 20+** and npm (or pnpm/yarn, adjusting commands
accordingly).

```bash
cd southern-house-website
npm install
```

> **Note:** this project was built in a sandboxed environment without
> internet access, so `npm install` has **not** been run or verified here.
> Please run it locally and fix any dependency-resolution issues that come
> up (e.g. if a newer Next.js/Tailwind version has introduced breaking
> changes since this was written).

---

## 4. Running locally

```bash
npm run dev
```

Visit `http://localhost:3000` — you'll be redirected to `http://localhost:3000/ar`
automatically. Switch language using the toggle in the top utility bar.

---

## 5. Building for production

```bash
npm run build
npm run start
```

Run `npm run lint` before committing — the project uses
`eslint-config-next` with strict TypeScript.

---

## 6. Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, "Add New Project" → import the repo. Vercel auto-detects
   Next.js — no custom build settings are required.
3. Set the production domain, then update the `siteUrl` placeholder in:
   - `src/app/[locale]/layout.tsx` (`generateMetadata`)
   - `src/app/sitemap.ts`
   - `src/app/robots.ts`
4. Redeploy after updating the domain so canonical URLs and the sitemap are
   correct.

---

## 7. How to add a new branch

Open `src/data/branches.ts` and add an object to the `branches` array:

```ts
{
  id: "branch-4",
  name: { en: "Fun Place — Riyadh Park", ar: "مكان المرح — رياض بارك" },
  city: { en: "Riyadh", ar: "الرياض" },
  status: "open", // or "soon"
  image: "/images/your-branch-photo.jpg",
}
```

The homepage's Branches section renders directly from this array — no other
file needs to change. Drop the branch's photo into `public/images/` and
point `image` at it (use a real photo — `next/image` will optimize it
automatically).

---

## 8. How to add a new business brand

The "Our Brands" section and site navigation are built to scale, but adding
a whole new brand (beyond Fun Place / Balloons / Toys) touches a few files:

1. **`messages/en.json` and `messages/ar.json`** — add a new entry under
   `brands` (name, description, cta) following the existing pattern.
2. **`src/components/sections/OurBrands.tsx`** — add a new `<BrandCard />`
   (or promote it to the large feature-card slot if it becomes the new
   flagship).
3. **`src/components/layout/Header.tsx` and `Footer.tsx`** — add the nav
   link and footer link.
4. **`public/images/`** — add the brand's card image.
5. Eventually give it its own route (`src/app/[locale]/<brand>/page.tsx`)
   once that page is built.

---

## 9. How to update translations

All visible UI copy lives in two files with an identical key structure:

- `messages/en.json`
- `messages/ar.json`

To change any text on the homepage, find the matching key in both files and
edit the value — no component code needs to change. Keep the two files'
**keys** in sync; only the string **values** should differ between
languages. Branch names/cities are the one exception — those live in
`src/data/branches.ts` with inline `en`/`ar` fields, since they're structured
data rather than page copy.

---

## 10. Where placeholder content should be replaced

Everything below is clearly marked in code with `[PLACEHOLDER]` comments —
search the repo for that string to find every instance. Before launch,
replace:

| What | Where | Notes |
|---|---|---|
| All photography | `public/images/placeholder-*.svg` | Currently labeled solid-color placeholders. Swap for real JPG/WebP photos of Fun Place zones, balloons, team, and branches. Keep the same filenames or update the references in `Hero.tsx`, `OurBrands.tsx`, `data/branches.ts`, `data/gallery.ts`. |
| Hero subheadline & Fun Place teaser copy | `messages/en.json` / `ar.json` (`hero.subheadline`, `funplaceTeaser.body`) | Marked `[PLACEHOLDER]` — confirm final tagline and zone names with the team. |
| Branch names, cities, map links | `src/data/branches.ts` | Names are `[Branch name TBD]` until real branch details are confirmed. |
| Testimonial quotes | `messages/en.json` / `ar.json` (`testimonials.quotes`) | Replace with real family quotes once collected. |
| Partner/mall logos | `src/components/sections/Testimonials.tsx` | Currently text-only names (Al-Bunyan, Al-Hamat, Panorama) — swap for real logo images once secured for reuse. |
| Production domain | `src/app/[locale]/layout.tsx`, `sitemap.ts`, `robots.ts` | Replace `https://www.example.com` with the real domain. |
| Favicon / app icons | `src/app/icon.svg`, `src/app/manifest.ts` | Replace with a proper exported icon set (favicon.ico, 192×192 and 512×512 PNGs, apple-touch-icon) generated from the final logo — a placeholder SVG mark is used for now. |
| Social links | `src/components/layout/Footer.tsx` | Icons currently link to `#` — wire up real Instagram/TikTok/Facebook/Snapchat URLs. |
| WhatsApp/phone numbers | `messages/*.json` (`topbar.phone`), `Header.tsx`, `Footer.tsx` | Currently using the number from the company profile — confirm this is still the right number for the website specifically. |

---

## 11. Accessibility notes

- Full keyboard navigation supported, including a focus-trapped mobile menu
  (Escape to close, focus returns to the trigger button).
- Visible, branded focus rings site-wide (`:focus-visible` in `globals.css`).
- All animations respect `prefers-reduced-motion` (global CSS rule + a
  `useReducedMotion` check in the Framer Motion components).
- Semantic landmarks (`<header>`, `<nav aria-label="Primary">`, `<main>`,
  `<footer>`) plus a "skip to main content" link.
- Color pairs (navy/white, coral/white, charcoal/ivory) were chosen to clear
  WCAG AA contrast for body text; double-check any new color combination you
  introduce with a contrast checker before shipping.
- RTL is handled with Tailwind's logical properties (`start-`, `end-`,
  `ps-`, `pe-`, `rtl:` variants) rather than hardcoded `left`/`right`, so the
  entire layout — including card badges, dividers, and section alignment —
  mirrors correctly in Arabic.

**Known follow-up (not yet implemented):** a full focus trap that also
prevents Tab from leaving the mobile menu (currently Escape + return-focus
is implemented, but Tab-cycling within the open menu is not enforced).
Consider swapping the hand-rolled overlay for a headless dialog primitive
(e.g. Radix UI's `Dialog`) if this needs to be airtight for compliance.

---

## 12. Performance notes

- All images use `next/image` with explicit `sizes` for responsive
  loading; only the hero image is `priority`-loaded (it's the LCP element),
  everything else lazy-loads by default.
- Fonts load via `next/font/google` (Fraunces, Inter, IBM Plex Sans Arabic),
  which self-hosts and subsets them at build time — no render-blocking
  Google Fonts request, and `display: swap` avoids invisible text.
- Dictionaries are code-split per locale (`get-dictionary.ts` dynamically
  imports only the active language's JSON).
- No client-side data fetching on the homepage — it's fully server-rendered;
  the only client components are the ones that genuinely need interactivity
  or animation (Header, LanguageToggle, FadeIn, StatCounter,
  FloatingBalloons).
- Before launch, run a Lighthouse pass once real photography is in place —
  compressed JPG/WebP images at the actual rendered size will matter more
  for the real score than anything in this placeholder build.

---

## 13. What's next

This increment is the homepage only. The next logical steps, in the same
architecture:

1. Build out the remaining routes referenced in navigation
   (`/about`, `/brands`, `/fun-place`, `/balloons`, `/toys`, `/gallery`,
   `/branches`, `/contact`), each following the section-component pattern
   established here.
2. Replace all `[PLACEHOLDER]` content per the table in §10.
3. Wire up a real contact form (currently no backend/form handler exists).
4. Add analytics (e.g. Vercel Analytics or GA4) once the domain is live.
