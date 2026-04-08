# Wine Spectator Grand Tour — Next.js Site

Migration of `grandtour.winespectator.com` (Wix) to Next.js 15 / Tailwind CSS / Vercel.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 3**
- **TypeScript**
- **Fonts:** Cormorant Garamond (serif display) + Jost (sans body) via Google Fonts

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel
# Follow prompts — picks up Next.js automatically
```

Or connect the repo in the Vercel dashboard and it deploys on every push.

## Pages

| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/denver` | `app/denver/page.tsx` |
| `/sandiego` | `app/sandiego/page.tsx` |
| `/tampa` | `app/tampa/page.tsx` |
| `/wineswineries` | `app/wineswineries/page.tsx` |
| `/faq` | `app/faq/page.tsx` |
| `/signupforupdates` | `app/signupforupdates/page.tsx` |

## Components

| Component | Purpose |
|---|---|
| `components/Nav.tsx` | Sticky nav, mobile hamburger |
| `components/Footer.tsx` | Footer with social, terms, refund policy |
| `components/CityHero.tsx` | Shared template for all 3 city pages |

## Design System (`app/globals.css`)

- **Colors:** `charcoal` (#1C1C1C) · `cream` (#F5F0E8) · `gold` (#C9A84C) · `burgundy` (#6B1A2A)
- **Buttons:** `.btn-gold`, `.btn-outline`
- **Cards:** `.ticket-card` (glass border)
- **Nav links:** `.nav-link` with animated underline
- **Animations:** `.marquee-track` (scrolling image strips), `.fade-up`

## Key TODOs After Launch

### 1. Email Sign-Up Form
`app/signupforupdates/page.tsx` — the form currently passes through to the old Wix page.
Replace the `<form action="...">` with your Mailchimp / Klaviyo / HubSpot embed snippet.

### 2. Sponsor Contact Form
`app/page.tsx` — the sponsor form uses `mailto:` as a fallback.
Wire it to a real endpoint (e.g., SendGrid API route, same pattern as your privacy form).

### 3. Wineries & Wines List
`app/wineswineries/page.tsx` — shows "coming soon" per city.
Add winery data once available. Recommended: add a `lib/wineries.ts` data file and map over it.

### 4. Domain / DNS
Point your new domain to Vercel:
- Add a custom domain in Vercel dashboard → Settings → Domains
- Update DNS: CNAME → `cname.vercel-dns.com` (or A record to Vercel's IP)

### 5. Images (Optional)
All images currently load from `static.wixstatic.com` (Wix CDN) — they'll continue to work.
To fully cut ties with Wix, download the key images and host them in `/public` or on your own CDN.

### 6. Restaurant Award Winners (San Diego & Tampa)
`app/sandiego/page.tsx` and `app/tampa/page.tsx` — restaurant award logos/links not in source.
Add them to the `restaurantAwards` prop in each city page when available.

## Environment Variables

None required for the base site. If you add a SendGrid sponsor form:

```env
SENDGRID_API_KEY=your_key_here
CONTACT_TO_EMAIL=events@mshanken.com
```

## Image Domains

`next.config.ts` already allows:
- `static.wixstatic.com`
- `mscwordpresscontent.s3.amazonaws.com`
