# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Single-scroll marketing landing page for AlteredCraft — writing and teaching on AI-assisted development. Built with Next.js 16 (App Router), Tailwind CSS 4, and TypeScript.

## Commands

```bash
npm run dev        # Dev server (localhost:3000, use -p <port> if taken)
npm run build      # Production build
npm run preview    # Production build + `next start` (localhost:3000)
npm run lint       # ESLint (flat config, eslint.config.mjs)
```

## Architecture

Almost entirely server-rendered. The main page (`src/app/page.tsx`) contains all sections inline — no per-section component files. Client components are limited to:

- `MobileMenu` — mobile nav toggle
- `LatestPosts` — fetches recent Substack posts client-side via `/api/posts`
- `UpcomingMeetups` — fetches upcoming Portland AI Engineers meetups client-side via `/api/meetups`
- `JournalList` — the `/journal` index with its tag filter (the page passes entry metadata, not markdown bodies)

The Substack RSS integration works as: `src/lib/substack.ts` parses the RSS feed -> `src/app/api/posts/route.ts` exposes it as JSON -> `LatestPosts` component fetches on mount.

The Luma meetup integration follows the same shape: `src/lib/luma.ts` fetches the Portland AI Engineers calendar JSON API (`api.lu.ma/calendar/get-items`, `period=future`, hourly revalidate) -> `src/app/api/meetups/route.ts` exposes it as JSON -> `UpcomingMeetups` component fetches on mount and renders a callout at the top of the Community section. The calendar id (`cal-DfQe2kBQ7UiNr4y`) is hardcoded in `luma.ts`. Both lib functions degrade to `[]` on any error, so the components render nothing rather than break the page. Note: Luma `start_at` is UTC — `UpcomingMeetups` formats each date in the event's own `timezone` (e.g. a `00:00Z` start is the prior evening in PT), so never format in the viewer's local zone.

### Pages

- `/` — main landing page. Single-scroll narrative: hero → credentials strip → newsletter → projects preview ("Built in the open") → Community (workshops + speaking) → about, with section ids `#writing`, `#projects`, `#community`, `#about`. (The newsletter section's anchor is still `#writing`; only the nav label changed to "Newsletter".)
- `/projects` — expanded view of the homepage projects section; full grid of the curated list
- `/journal` — reverse-chronological stream of short dated notes with a client-side tag filter; `/journal/[slug]` renders each entry
- `/speaking` — talks, panels, demos (also surfaced inline in the homepage Community section; both render from `src/lib/speaking.ts`)
- `/previous-workshops` — full archive of past workshops/teaching engagements
- `/press-kit` — brand assets, logos, colors, typography guidelines
- Custom `not-found.tsx` with terminal-style 404

### Navigation model

`NAV_LINKS` (`src/lib/nav.ts`) drives desktop nav, `MobileMenu`, and the footer, in this order: Newsletter, Journal, Projects, Community, About. Labels render through `NavLabel` (`src/components/NavLabel.tsx`), which prefixes an optional Lucide icon (none are set today). `SiteNav` takes `current` (e.g. `"/journal"`) to mark the active subpage with `aria-current`. Two link kinds:

- **Section links** scroll to homepage sections: Newsletter (`/#writing`), Projects, Community, About (`/#…`).
- **Subpage links** navigate to standalone pages: Journal.

A homepage section that has an expanded/detail page links to it via a "See all →" link (Projects → `/projects`; Community → `/previous-workshops` for workshops and → `/speaking` for talks). Every detail/subpage carries a top-left back link (`ArrowLeft` + destination name, the mono breadcrumb in `PageHeader`) to its parent: `/projects` → `/#projects`, `/previous-workshops` → `/#community`, `/speaking` → `/#community`, `/journal/[slug]` → `/journal`, and `/journal` → `/` ("home"). `/press-kit` also links back to `/`.

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

- `SiteNav` — sticky light header shared by every page (wordmark, nav links, ink Subscribe pill, `MobileMenu`)
- `SiteFooter` — shared light (white) footer; `variant="full"` (homepage: lime subscribe CTA + link columns) or `variant="compact"` (subpages, the default)
- `Wordmark` — text brand mark: blue `/` + "altered craft" in Geist semibold
- `Kicker` — mono `/ label` eyebrow (lowercase Geist Mono, muted; pass a class to recolor, e.g. lime on ink)
- `SectionHeading` — homepage section header: ink top rule, serif title left, mono `/ label` right
- `PageHeader` — subpage hero: mono breadcrumb (back link + kicker), large serif title, intro, optional right-hand `aside`
- `JournalList` — client component for `/journal`: page header with the tag-filter card, plus the filtered entry list
- `src/lib/styles.ts` — shared class strings: `container` (page gutter), `btn.primary|outline|lime|blue` pill buttons, `badge.lime|blue|soft`, `chip`, `monoLink`, `proseLink`, `card`, `lift` (hover shadow)

### Projects content model

The project cards on `/projects` and the 3-card homepage preview are driven by one array: `PROJECTS` in `src/lib/projects.ts`. `ProjectCard` (`src/components/ProjectCard.tsx`) renders each. The homepage shows `PROJECTS.slice(0, 3)`, so list order matters (lead with the strongest evidence).

- Each project carries `tags` (categorical labels, Title-Case) and `stack` (tech/tools in their natural casing), rendered lowercase in mono (`tags` as chips, `stack` top-right of the card). `status` is an optional badge string (e.g. `"Active-Development"`) shown as a lime badge, and a project with a status gets the emphasized ink-bordered card. `kind` (e.g. `"Desktop App"`, `"IoT"`) is an optional blue-soft badge shown when there is no status. Badges lowercase plain Title-Case words only, so acronyms keep their casing.
- A link with `href: "#"` is a **placeholder**: `ProjectCard` renders it as a visible "(add link)" marker so a missing URL is caught in review, not shipped. Replace `#` with the real repo/post URL.

### Journal content model

Entries are markdown files in `content/journal/` (one file per entry, `<date>-<slug>.md`). Publishing flow: write the file, commit, push, it appears.

- `src/lib/journal.ts` reads the directory at build time (`gray-matter` for frontmatter), sorts by `date` desc, and exposes `getJournalEntries()` / `getJournalEntry(slug)` / `formatJournalDate()`.
- `/journal/[slug]` uses `generateStaticParams`, so new files prerender on build.
- Bodies render via `<Markdown>` (`src/components/Markdown.tsx`, react-markdown + remark-gfm) with a brand-styled component map (no typography plugin).
- Frontmatter schema: `title`, `date` (quoted `"YYYY-MM-DD"`), `slug`, `tags: string[]`, `excerpt`.

## Design System

The current look (Sept 2026 rebrand) is the "AlteredCraft Rebrand" design: paper neutrals, ink, a serif display face, mono labels, and two accents.

### Color Palette

Defined in `src/app/globals.css` as CSS custom properties.

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-base` | #F7F8FA | Page background (paper) |
| `--color-surface` | #FFFFFF | Cards, footer |
| `--color-text` / `--color-ink` | #10151B | Primary text, primary buttons, dark panels |
| `--color-body` | #3C4550 | Body copy |
| `--color-muted` | #5B6573 | Mono labels, secondary text |
| `--color-border` | #D9DDE3 | Card borders |
| `--color-hairline` | #E6E9ED | Dividers inside cards, header/footer rules |
| `--color-chip-border` | #D3D8DE | Tag chip outlines |
| `--color-blue` / `-hover` / `-soft` | #2B3FE0 / #1F2FB8 / #E4E8FD | Brand slash, links, link underlines; soft = secondary badges |
| `--color-lime` / `-hover` | #D4F53C / #C4E52A | Highlights, status badges, CTAs on ink |
| `--color-ink-raised`, `--color-ink-border`, `--color-ink-input-border` | #1A2129, #2C3440, #3A4350 | Surfaces/rules/inputs inside ink panels |
| `--color-on-ink`, `--color-on-ink-body`, `--color-on-ink-muted` | #F2F4F7, #C3CAD3, #9AA4B1 | Text on ink panels |

Tailwind 4's `@theme inline` block maps these to theme tokens (`bg-ink`, `text-blue`, …), **except `--color-base`**: a `base` color token makes `text-base` emit a color as well as a font size, painting text in the page background color. Use `var(--color-base)` directly, and use `text-[16px]` rather than `text-base`.

Accent rule: **blue** for the brand slash, text links (text color with a blue underline, or blue mono links), and the live-feed dot; **lime** for the marker highlight (`.highlight`), status badges, and CTAs on ink surfaces. Primary buttons on light surfaces are solid ink pills; the consulting "Let's talk" button is the one blue button.

### Typography

Three Google Fonts loaded in `layout.tsx`:

- **Geist** (`--font-geist`, `font-sans`) — body text, wordmark, buttons
- **Instrument Serif** (`--font-instrument-serif`, `.serif` utility) — all headings and display type; ships only in weight 400, so never bold it
- **Geist Mono** (`--font-geist-mono`, `.mono` utility, 12.5px) — kickers, meta lines, dates, chips, footer column labels

### Visual Style

- Light sticky header and white footer with hairline rules; the ink panel is reserved for the newsletter block, the live-cohort card, and CTA panels
- No emojis anywhere — use Lucide React icons exclusively (`ArrowUpRight` for external links, `ArrowRight` for internal)
- Homepage sections open with `SectionHeading` (1.5px ink rule on top); subpages open with `PageHeader`
- Cards: `rounded-[10px]`, white, 1px `--color-border`; emphasized cards use a 1.5px ink border; hover adds a soft shadow
- Pill buttons are 48px tall (`btn.*` in `src/lib/styles.ts`)

## External Integrations

- **Newsletter**: Substack at `writing.alteredcraft.com`
- **Workshops**: Maven at `maven.com/altered-craft-learning`
- **Meetups**: Luma — Portland AI Engineers calendar at `luma.com/portland-ai-engineers` (live feed, see Architecture)
- **Booking**: Fantastical at `fantastical.app/samkeen/meet-with-sam-keen`
- **Email**: sam@alteredcraft.com

## Social Links

- LinkedIn: linkedin.com/in/samkeen
- Substack: writing.alteredcraft.com
- Threads: threads.net/@sam.keen
- X/Twitter: x.com/samkeen

## Guidelines

1. **Icons**: Always use Lucide React, never emojis
2. **Colors**: Use CSS variables, not hardcoded values (dark panels use `var(--color-ink)`; text on ink uses the `--color-on-ink*` tokens)
3. **Components**: Keep client components minimal; prefer server components
4. **Images**: Use `next/image` with `unoptimized` prop (required for static export)
5. **Styling**: Use Tailwind utilities with CSS variable references like `text-[var(--color-blue)]`; reuse the class strings in `src/lib/styles.ts` for buttons, chips, and cards
6. **Headings**: Use Instrument Serif via the `serif` utility (weight 400 only); labels use the `mono` utility

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
