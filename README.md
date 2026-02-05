# AlteredCraft Landing Page

Single-scroll marketing page for [AlteredCraft](https://alteredcraft.com). Built with Next.js 16, Tailwind CSS 4, and TypeScript. Deployed as a static export to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`. Hot-reloads on file changes.

## Testing the Production Build Locally

To preview exactly what GitHub Pages serves (static export with `basePath`):

```bash
npm run preview
```

Then open `http://localhost:3000/ac-landing-page/`.

This builds the static export and stages it under `.preview/ac-landing-page/` so the `basePath` resolves correctly, matching the GitHub Pages URL structure.

> `basePath` is set to `/ac-landing-page` in production so assets resolve correctly on `alteredcraft.github.io/ac-landing-page/`. This will be removed when the custom domain (`alteredcraft.com`) is configured.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds and deploys to GitHub Pages automatically.

Live at: https://alteredcraft.github.io/ac-landing-page/

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # All page sections
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   └── globals.css       # Color palette (CSS custom properties)
└── components/
    └── MobileMenu.tsx    # Client component (mobile nav toggle)
public/                   # Static assets (images, logo)
```

## Key Conventions

- **Icons**: Lucide React only, no emojis
- **Colors**: CSS variables defined in `globals.css`, referenced via `var(--color-*)`
- **Components**: Server components by default; client components only when needed
- **Images**: `next/image` with `unoptimized: true` (required for static export)
