# AlteredCraft Landing Page

Single-scroll marketing landing page for AlteredCraft - Applied AI guidance for software teams.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4 with CSS custom properties
- **Language**: TypeScript
- **Icons**: Lucide React (no emojis anywhere on the site)
- **Font**: Inter from Google Fonts
- **Deployment**: Static export for GitHub Pages (`output: 'export'`)

## Design System

### Color Palette (Deep Teal)

Defined in `src/app/globals.css`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-base` | #F7F7F5 | Page background |
| `--color-text` | #1C1C1C | Primary text |
| `--color-accent` | #0D9488 | CTAs, links, highlights |
| `--color-accent-hover` | #0F766E | Hover states |
| `--color-muted` | #71717A | Secondary text |
| `--color-border` | #E4E4E7 | Borders |
| `--color-surface` | #FFFFFF | Cards, sections |
| `--color-surface-alt` | #F4F4F5 | Alternate surfaces |

### Visual Style

- Clean, professional, light aesthetic
- Simple yet bold
- No emojis - use Lucide React icons exclusively
- Minimal client-side JavaScript (only MobileMenu is a client component)

### Brand Wordmark

Large centered wordmark above hero content:
- Font: Inter
- Weight: font-black (900)
- Style: Uppercase
- Color: `--color-text` (black)
- Sizing: text-5xl / sm:text-6xl / lg:text-8xl

## Project Structure

```
src/
├── app/
│   ├── page.tsx        # Main landing page (all sections)
│   ├── layout.tsx      # Root layout, fonts, SEO metadata
│   └── globals.css     # Color palette, theme config
└── components/
    └── MobileMenu.tsx  # Client component for mobile nav
public/
├── AC-logo.svg
├── sam-headshot-casual-500x500.png  # Hero section
├── Sam_Keen_400x400.jpg             # About section
└── speaker.png
```

## Page Sections

1. **Navigation** - Sticky header with logo and nav links
2. **Hero** - Brand wordmark, headline, CTAs, headshot
3. **Credibility Strip** - Key credentials
4. **Offerings Overview** - Card grid linking to sections
5. **Newsletter** - Free/Premium tiers, Substack embed
6. **Courses** - Coming soon course cards with waitlist
7. **For Teams** - Workshops and Advisory (dark section)
8. **Speaking** - Talk topics and credentials
9. **About** - Bio and social links
10. **Footer** - Navigation, social, newsletter CTA

## External Integrations

- **Newsletter**: Substack at `writing.alteredcraft.com`
- **Booking**: NeetoCal at `altered-craft.neetocal.com/meeting-with-sam-keen`
- **Email**: sam@alteredcraft.com

## Social Links

- LinkedIn: linkedin.com/in/samkeen
- Substack: writing.alteredcraft.com
- X/Twitter: x.com/samkeen

## Development

```bash
npm run dev        # Start dev server (default port 3000)
npm run build      # Generate static export to /out
```

Note: If port 3000 is in use, run with `-p <port>` flag.

## Guidelines for Future Work

1. **Icons**: Always use Lucide React, never emojis
2. **Colors**: Use CSS variables, not hardcoded values
3. **Components**: Keep client components minimal; prefer server components
4. **Images**: Use next/image with unoptimized mode (required for static export)
5. **Styling**: Use Tailwind utilities with CSS variable references like `text-[var(--color-accent)]`
