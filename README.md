# Sole Shifu

Production-ready Next.js foundation for a luxury single-page Sole Shifu website.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel-ready configuration

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

## Content Replacement

- Replace the reusable wordmark in `src/app/page.tsx` once the final Sole Shifu logo asset is available.
- Replace placeholder image URLs in `src/app/page.tsx` inside `transformations`, `socialImages`, and the hero `Image`.
- Place final brand assets in `public/` when you want to serve them from the site.
