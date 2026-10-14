# Fundamental IT Solutions website

The public website of Fundamental IT Solutions, a product engineering company in Taguig, Metro Manila. We design, build and run web platforms, mobile apps, backend services, cloud infrastructure and AI automation.

Production: https://www.fundamental-it-solutions.com

## What is in the repository

- `src/app`: routes, metadata files (sitemap, robots, social preview images) and error pages
- `src/components`: feature folders (`layout`, `home`, `work`, `services`, `about`, `contact`, `seo`) and the shared `ui` primitives
- `src/content`: case studies, capabilities and redirects, as typed data
- `src/lib`: site settings and small helpers
- `public`: brand mark, case study screenshots and other static files
- `docs`: feature map and system design

## Stack

- Next.js 16 with the App Router, React 19 and TypeScript in strict mode
- Tailwind CSS v4, with the design tokens in `src/app/globals.css`
- Geist, Geist Mono and Instrument Serif through `next/font`
- Lucide icons
- Resend for contact form email (optional)
- Cloudflare Turnstile to keep bots out of the contact form (optional)
- Vercel for hosting

## Local development

You need Node.js 20.9 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Build the production site, including type checks |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm exec tsc --noEmit` | Type-check without building |

## Editing content

Most of the copy and data lives in typed files. Change these rather than the components.

- **`src/lib/site.ts`**: company name, domain, contact email, postal address, navigation and the main call to action. The `url` here sets canonical links, the sitemap and social preview links.
- **`src/content/work.ts`**: case studies. Each entry holds the client details, summary, challenge, what we built, stack, highlights and two screenshots. Save the screenshots as `public/work/<slug>/desktop.jpg` and `public/work/<slug>/mobile.jpg`. Add a new slug to the `CaseSlug` type before adding the entry.
- **`src/content/services.ts`**: capabilities, with deliverables, stack, related case studies and FAQ. Icon names come from the `CapabilityIcon` type. If you rename or remove a capability slug, add the old slug to `legacyServiceRedirects` with the `/services` path that replaces it, so existing links keep working.

Only publish claims we can back up. The site's statements about our work come from these files, so review them with the same care as the pages.

## Environment variables

Set these in `.env.local` for local development and in the Vercel project settings for production. `.env*` files are git-ignored.

| Variable | Required | What it does |
| --- | --- | --- |
| `RESEND_API_KEY` | For email delivery | Resend API key, used on the server to send contact form messages. |
| `CONTACT_FROM_EMAIL` | For email delivery | Sender address on a domain verified in Resend. |
| `CONTACT_TO_EMAIL` | No | Where contact messages are delivered. Defaults to the address in `src/lib/site.ts`. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID, such as `G-XXXXXXXXXX`. Browsers can read it, so it is not a secret. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | For spam protection | Cloudflare Turnstile site key. The contact form shows the Turnstile check when it is set. Browsers can read it, so it is not a secret. |
| `TURNSTILE_SECRET_KEY` | For spam protection | Cloudflare Turnstile secret key, used on the server to confirm each check with Cloudflare before a message is sent. |

Without `RESEND_API_KEY` and `CONTACT_FROM_EMAIL`, the contact form sends nothing. It says plainly that the message was not sent, and it offers a prefilled email to the company address with what the visitor typed. The form reports success only when Resend accepts the message. Without `NEXT_PUBLIC_GA_MEASUREMENT_ID`, no analytics script loads.

Set the two Turnstile keys together. With only the secret key, every message fails the check, because the form has no widget to pass. With neither, the form relies on its honeypot field and minimum time on the page.

## Deploy on Vercel

1. Import the repository in Vercel. It detects Next.js and runs `pnpm build`.
2. Add the environment variables above to the project for Production. Add them for Preview too if you want to test contact email from preview deployments. Values that start with `NEXT_PUBLIC_` are built into the pages, so redeploy after you change one.
3. Attach `www.fundamental-it-solutions.com` as the production domain.

`vercel.json` sets security headers on every route and long-lived caching for static images. Keep those headers when you change the file.
