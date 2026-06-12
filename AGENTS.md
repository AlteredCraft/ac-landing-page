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

- `/` — main landing page. Single-scroll narrative: hero → newsletter → projects preview → community (workshops + speaking) → about, with section ids `#writing`, `#projects`, `#community`, `#about`. (The newsletter section's anchor is still `#writing`; only the nav label changed to "Newsletter".)
- `/projects` — expanded view of the homepage projects section; full grid of the curated list
- `/journal` — reverse-chronological stream of short dated notes; `/journal/[slug]` renders each entry
- `/speaking` — talks, panels, demos (also surfaced inline in the homepage Community section; both render from `src/lib/speaking.ts`)
- `/previous-workshops` — full archive of past workshops/teaching engagements
- `/press-kit` — brand assets, logos, colors, typography guidelines
- Custom `not-found.tsx` with terminal-style 404

### Navigation model

`NAV_LINKS` (`src/lib/nav.ts`) drives desktop nav, `MobileMenu`, and the footer, in this order: Newsletter, Journal, Projects, Community, About. Labels render through `NavLabel` (`src/components/NavLabel.tsx`), which prefixes an optional Lucide icon — Journal carries a `PenLine` pen icon. Two link kinds:

- **Section links** scroll to homepage sections: Newsletter (`/#writing`), Projects, Community, About (`/#…`).
- **Subpage links** navigate to standalone pages: Journal.

A homepage section that has an expanded/detail page links to it via a "See all →" link (Projects → `/projects`; Community → `/previous-workshops` for workshops and → `/speaking` for talks). Every detail/subpage carries a top-left back link (`ArrowLeft` + destination name) to its parent: `/projects` → `/#projects`, `/previous-workshops` → `/#community`, `/speaking` → `/#community`, `/journal/[slug]` → `/journal`, and `/journal` → `/` ("Home").

### Community content model (Workshops + Speaking)

The **Community** section on `/` (`src/app/page.tsx`, `id="community"`) has two sub-groups: **Workshops** and **Speaking**.

The **Workshops** sub-group has three labeled subsections. Place new entries based on what kind of offering it is — not when it happens.

| Subsection | What goes here | Date shown? |
|------------|----------------|-------------|
| **Always available** | Evergreen / on-demand offerings (recorded lightning lessons, self-paced courses). Live indefinitely. | No |
| **Upcoming** | Scheduled future workshops with a specific date. Promote until they happen. | Yes |
| **Previous** | Past workshops, capped at **2 most recent**. Older items move to `/previous-workshops`. | Optional |

Rules:
- **Cap "Previous" at 2 cards on `/`**. Additional past items belong on `/previous-workshops` only. There is a `FUTURE-AGENT NOTE` comment in `page.tsx` reinforcing this.
- **Do not duplicate "Always available" items on `/previous-workshops`.** Evergreen offerings are not "previous" — they are still available.
- **When an Upcoming workshop happens**, move it: either to "Previous" on `/` (which may displace an older entry down to `/previous-workshops`) or directly to `/previous-workshops`.
- Update dates and links inline in `src/app/page.tsx` and `src/app/previous-workshops/page.tsx`. There is no data source — these are hand-edited.

The **Speaking** sub-group (past engagements + recordings) is sourced from `src/lib/speaking.ts` (`UPCOMING`, `PAST`) and rendered by the shared `EngagementRow` and `SpeakingRecordings` components — the same data and components power the full `/speaking` page, so edit them in one place. The homepage Community section shows the past engagements and recordings inline and links out to `/speaking` ("See all talks & panels →") for the full archive, upcoming engagements, and the inquire CTA.

### Key Components

- `BrandLockup` — reusable brand mark (icon + "/altered craft" wordmark), supports horizontal/stacked variants and light/dark themes
- `CodeBarDivider` — decorative colored bar divider element

### Projects content model

The project cards on `/projects` and the 3-card homepage preview are driven by one array: `PROJECTS` in `src/lib/projects.ts`. `ProjectCard` (`src/components/ProjectCard.tsx`) renders each. The homepage shows `PROJECTS.slice(0, 3)`, so list order matters (lead with the strongest evidence).

- Each project maps to the dev-rel triad via `signals`: `Build`, `Teach`, `Empathy` (rendered as Lucide-icon badges).
- A link with `href: "#"` is a **placeholder**: `ProjectCard` renders it as a visible "(add link)" marker so a missing URL is caught in review, not shipped. Replace `#` with the real repo/post URL.
- Set `inProgress: true` for work that isn't public yet (shows an "In progress" badge).

### Journal content model

Entries are markdown files in `content/journal/` (one file per entry, `<date>-<slug>.md`). Publishing flow: write the file, commit, push, it appears.

- `src/lib/journal.ts` reads the directory at build time (`gray-matter` for frontmatter), sorts by `date` desc, and exposes `getJournalEntries()` / `getJournalEntry(slug)` / `formatJournalDate()`.
- `/journal/[slug]` uses `generateStaticParams`, so new files prerender on build.
- Bodies render via `<Markdown>` (`src/components/Markdown.tsx`, react-markdown + remark-gfm) with a brand-styled component map (no typography plugin).
- Frontmatter schema: `title`, `date` (quoted `"YYYY-MM-DD"`), `slug`, `tags: string[]`, `excerpt`.

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
