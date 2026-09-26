# AlteredCraft Landing Page

Single-scroll marketing page for [AlteredCraft](https://alteredcraft.com), plus a few detail pages (projects, journal, speaking, previous workshops, press kit). Built with Next.js 16, Tailwind CSS 4, and TypeScript.

## Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`. Hot-reloads on file changes.

## Testing the Production Build Locally

```bash
npm run preview
```

Runs `next build`, then serves the result with `next start` at `http://localhost:3000`. The site is not a static export: the `/api/posts` (Substack) and `/api/meetups` (Luma) routes run on the server.

## Deployment

Deployed on Netlify, which builds with `npm run build` (see `netlify.toml`). The config also redirects `/p/*` and `/i/*` to the newsletter at `writing.alteredcraft.com`.

## Project Structure

```
content/journal/          # Journal entries (markdown + frontmatter)
src/
├── app/
│   ├── page.tsx          # Homepage: all sections inline
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   ├── globals.css       # Color tokens, `mono` / `serif` utilities
│   ├── api/              # Substack posts + Luma meetups JSON routes
│   └── */page.tsx        # journal, projects, speaking, previous-workshops, press-kit
├── components/           # SiteNav, SiteFooter, PageHeader, ProjectCard, …
└── lib/                  # Data (projects, speaking, nav), feeds, shared styles
public/                   # Static assets (images, logos, llms.txt)
```

## Key Conventions

See `CLAUDE.md` for the full design system and content models. In short:

- **Type**: Instrument Serif headings, Geist body, Geist Mono labels
- **Colors**: CSS variables defined in `globals.css`, referenced via `var(--color-*)`
- **Icons**: Lucide React only, no emojis
- **Components**: Server components by default; client components only when needed
- **Images**: `next/image` (image optimization is disabled in `next.config.ts`)
