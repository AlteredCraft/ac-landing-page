# AGENTS.md

This file provides guidance to agents (i.e., ADAL) when working with code in this repository.

## Quick Reference

### Commands
```bash
npm run dev        # Dev server at localhost:3000 (add -p <port> if 3000 busy)
npm run build      # Static export to /out directory
npm run lint       # ESLint
```

### Key Files
| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main landing page (all sections) |
| `src/app/layout.tsx` | Root layout, fonts, SEO metadata |
| `src/app/globals.css` | Color palette via CSS variables |
| `src/components/MobileMenu.tsx` | Only client component |
| `next.config.ts` | Static export config |

## Critical Gotchas

1. **Static Export**: This is NOT a server-rendered Next.js app. Uses `output: 'export'` for GitHub Pages deployment.
   - No API routes, no server components with dynamic data
   - Images must use `unoptimized: true`

2. **No Emojis**: Use Lucide React icons exclusively. Never add emojis anywhere.

3. **Colors**: Always use CSS variables from `globals.css`, never hardcode colors:
   ```tsx
   // ✓ Correct
   className="text-[var(--color-accent)]"
   
   // ✗ Wrong
   className="text-teal-600"
   ```

4. **Client Components**: Keep minimal. Only `MobileMenu.tsx` is a client component. Prefer server components.

## Design System

### Color Variables (defined in globals.css)
- `--color-base` (#F7F7F5) - Page background
- `--color-text` (#1C1C1C) - Primary text
- `--color-accent` (#0D9488) - CTAs, links, highlights
- `--color-accent-hover` (#0F766E) - Hover states
- `--color-muted` (#71717A) - Secondary text
- `--color-border` (#E4E4E7) - Borders
- `--color-surface` (#FFFFFF) - Cards
- `--color-surface-alt` (#F4F4F5) - Alternate surfaces

### Brand Wordmark
- Font: Inter, font-black (900), uppercase
- Sizing: text-5xl → sm:text-6xl → lg:text-8xl

## Architecture

### Page Structure (Single Scroll)
`page.tsx` contains all sections in order:
1. Navigation (sticky header)
2. Hero (wordmark, headline, CTAs, headshot)
3. Credibility Strip
4. Offerings Overview (card grid)
5. Newsletter (Substack embed)
6. Courses (coming soon)
7. For Teams (dark section - workshops/advisory)
8. Speaking
9. About
10. Footer

### External Services
| Service | URL |
|---------|-----|
| Newsletter | writing.alteredcraft.com (Substack) |
| Booking | altered-craft.neetocal.com/meeting-with-sam-keen |
| Email | sam@alteredcraft.com |

### Static Assets
All in `/public`:
- `AC-logo.svg` - Logo
- `sam-headshot-casual-500x500.png` - Hero section
- `Sam_Keen_400x400.jpg` - About section
- `speaker.png` - Speaking section

## Tech Stack Summary
- Next.js 16 (App Router, static export)
- Tailwind CSS 4 + CSS custom properties
- TypeScript
- Lucide React (icons)
- Inter font (Google Fonts)

## Path Alias
`@/*` maps to `./src/*` - use for imports:
```tsx
import { MobileMenu } from '@/components/MobileMenu'
```
