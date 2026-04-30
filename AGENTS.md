# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Single-scroll marketing landing page for AlteredCraft — writing and teaching on AI-assisted development. Built with Next.js 16 (App Router), Tailwind CSS 4, and TypeScript.

## Commands

```bash
npm run dev        # Dev server (localhost:3000, use -p <port> if taken)
npm run build      # Production build
npm run preview    # Build + serve static export locally
npm run lint       # ESLint (flat config, eslint.config.mjs)
```

## Architecture

Almost entirely server-rendered. The main page (`src/app/page.tsx`) contains all sections inline — no per-section component files. Client components are limited to:

- `MobileMenu` — mobile nav toggle
- `LatestPosts` — fetches recent Substack posts client-side via `/api/posts`

The Substack RSS integration works as: `src/lib/substack.ts` parses the RSS feed -> `src/app/api/posts/route.ts` exposes it as JSON -> `LatestPosts` component fetches on mount.

### Pages

- `/` — main landing page (all sections: hero, writing, teaching, engagements, about)
- `/press-kit` — brand assets, logos, colors, typography guidelines
- Custom `not-found.tsx` with terminal-style 404

### Key Components

- `BrandLockup` — reusable brand mark (icon + "/altered craft" wordmark), supports horizontal/stacked variants and light/dark themes
- `CodeBarDivider` — decorative colored bar divider element

## Design System

### Color Palette (Warm Gold)

Defined in `src/app/globals.css` as CSS custom properties:

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-base` | #F5F3EF | Page background |
| `--color-text` | #1F1D1D | Primary text, dark sections |
| `--color-accent` | #D4B84A | CTAs, links, gold slash mark |
| `--color-accent-hover` | #C4A83A | Hover states |
| `--color-muted` | #8A877E | Secondary text |
| `--color-border` | #E0DDD6 | Borders |
| `--color-surface` | #FDFCF9 | Cards, sections |
| `--color-surface-alt` | #EFECE5 | Alternate surfaces |

Tailwind 4 `@theme inline` block maps these to theme tokens so both `var(--color-accent)` and `bg-accent` work.

### Typography

Three Google Fonts loaded in `layout.tsx`:

- **Inter** (`--font-sans`) — body text
- **Plus Jakarta Sans** (`--font-display`) — headings, wordmark, section titles
- **Space Grotesk** (`--font-space-grotesk`) — available but not primary

Headings use `font-[family-name:var(--font-plus-jakarta)]` with `font-bold` or `font-semibold`.

### Visual Style

- Clean, professional, warm aesthetic
- No emojis anywhere — use Lucide React icons exclusively
- Dark nav bar and footer (`bg-[#1F1D1D]`), light content sections
- Brand wordmark format: gold `/` followed by `altered craft` in Plus Jakarta Sans

## External Integrations

- **Newsletter**: Substack at `writing.alteredcraft.com`
- **Workshops**: Maven at `maven.com/altered-craft-learning`
- **Booking**: Fantastical at `fantastical.app/samkeen/meet-with-sam-keen`
- **Email**: sam@alteredcraft.com

## Social Links

- LinkedIn: linkedin.com/in/samkeen
- Substack: writing.alteredcraft.com
- Threads: threads.net/@sam.keen
- X/Twitter: x.com/samkeen

## Guidelines

1. **Icons**: Always use Lucide React, never emojis
2. **Colors**: Use CSS variables, not hardcoded values (exception: dark sections use `#1F1D1D` directly)
3. **Components**: Keep client components minimal; prefer server components
4. **Images**: Use `next/image` with `unoptimized` prop (required for static export)
5. **Styling**: Use Tailwind utilities with CSS variable references like `text-[var(--color-accent)]` or theme tokens like `bg-accent`
6. **Headings**: Use Plus Jakarta Sans via `font-[family-name:var(--font-plus-jakarta)]`
