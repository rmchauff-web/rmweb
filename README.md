# RM Chauffeur London

Marketing and booking website for RM Chauffeur London — a premium chauffeur
service operating across London and the United Kingdom.

**Driven by excellence. Defined by trust.**

## Pages

- **Home** — hero banner, services overview, fleet preview, values and booking call-to-action
- **Services** — airport transfers (all six London airports), weddings, special occasions and private hire
- **Fleet** — Mercedes-Benz S-Class, V-Class and the Mercedes party bus
- **About** — the brand story and values
- **Booking** — full booking form with journey details, vehicle choice and instant reference number
- **Contact** — contact channels and frequently asked questions
- Privacy policy, terms of service, custom 404, sitemap, robots and Open Graph image

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) with the brand palette (`#0A0A0A` / `#1A1A1A` / `#D4AF37` / `#F2D97D` / `#FFFFFF`)
- [shadcn/ui](https://ui.shadcn.com) components
- [Zod](https://zod.dev) validation on the booking API route

## Publish on GitHub

This folder is a complete Next.js project. **Do not upload the `.zip` as a single file** — unzip it first, then put the contents in a GitHub repository.

### Option A — GitHub website (no Git required)

1. Unzip `rm-chauffeur-london.zip`. You should see `package.json` inside the `rm-chauffeur-london` folder.
2. On [github.com/new](https://github.com/new) create a new repository (for example `rm-chauffeur-london`). Leave it empty — do not add a README.
3. Open the new repo and click **uploading an existing file**.
4. Drag in **everything inside** the unzipped `rm-chauffeur-london` folder (`package.json`, `src`, `public`, and the rest).
5. Commit the files.

### Option B — Git command line (recommended)

Unzip, then from the `rm-chauffeur-london` folder:

```bash
git init
git add .
git commit -m "Initial commit: RM Chauffeur London website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rm-chauffeur-london.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username (and the repo name if you chose a different one).

## Deploy (after it is on GitHub)

The easiest host for this app is [Vercel](https://vercel.com):

1. Sign in at vercel.com with GitHub.
2. **Add New Project** and import `rm-chauffeur-london`.
3. Leave the defaults and click Deploy.

You will get a public `*.vercel.app` URL to send the client.

## Run locally

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000 by default (`npm run dev -- -p <port>` to change).

## Booking requests

The booking form posts to `POST /api/booking`. Without configuration, accepted
bookings are written to the server log so the site works out of the box. To
forward bookings to email, Slack or an automation platform, set:

```bash
BOOKING_WEBHOOK_URL=https://your-webhook-endpoint
```

Each request is validated and given a reference like `RM-260829-XXXX`.

## Things to update before going live

- `src/lib/site.ts` — replace the placeholder telephone number (`+44 7XXX XXXXXX`)
  and confirm the public URL and email address.
- Fleet photography in `public/images/` can be swapped for your own shots —
  keep the same filenames and no code changes are needed.
