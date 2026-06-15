---
name: new-journal-entry
description: This skill should be used when the user wants to add a journal entry to the AlteredCraft site and open a PR — triggers include "add a journal entry", "new journal entry", "post this to the journal", "publish this journal note", "format this journal entry", "add this to the journal and open a PR", or when the user hands over journal prose to be formatted, committed, and PR'd. Handles formatting near-final prose (typed or dictated) into the AlteredCraft journal directory, deriving frontmatter, validating it, and creating the PR. Works from the local CLI and from Claude Code on the web (including a phone).
version: 0.2.0
---

# New Journal Entry

Turn a piece of near-final prose into a published journal entry on the AlteredCraft
site: format it into a markdown file with correct frontmatter, validate it, and open a
PR for review.

## Where this runs

This skill lives **inside the AlteredCraft landing-page repo** (`.claude/skills/`), so it is
available both ways:

- **Local CLI** — when your working directory is inside this repo on your machine.
- **Claude Code on the web (claude.ai/code), including from a phone** — a cloud session checks
  the repo out at a *different absolute path*, so never hardcode machine paths. Use
  repo-relative paths and discover the root.

Key locations (all **relative to the repo root**):

- **Journal directory:** `content/journal/`
- **Reader (schema reference):** `src/lib/journal.ts`

Run all `git`/`npm` commands from the repo root. If unsure where that is:
`git rev-parse --show-toplevel`.

## Context

Journal entries are markdown files in `content/journal/`, one file per entry, named
`<date>-<slug>.md`. `src/lib/journal.ts` reads the directory at build time, parses
frontmatter with `gray-matter`, sorts by `date` descending, and `/journal/[slug]` prerenders
each via `generateStaticParams`. There is no CMS — publishing is: write the file, commit,
open a PR, merge; the host (Netlify deploy preview / CI) builds and deploys.

The existing entries in `content/journal/` are the canonical reference for voice, length, and
format. **Read them first** before drafting metadata or polishing prose.

## Inputs

The user typically provides near-final prose (the body of the entry), typed or dictated from a
phone. They may also specify a date, title, or tags. Anything not provided is derived and
confirmed in a single review step (below).

## Workflow

Execute these steps in order.

### 1. Establish the date

Run `date '+%Y-%m-%d'` for today. Use today's date unless the user specified a different one.
This date is used both as the filename prefix and the frontmatter `date` (quoted).

### 2. Read the existing entries for reference

Read the files in `content/journal/` to match their voice, length, and structure, and to reuse
the existing tag vocabulary where it fits (e.g. `agents`, `tooling`, `rust`,
`learning-in-public`, `tilth`, `ai-assisted-dev`, `ios`, `models`). New tags are fine when
nothing existing fits.

### 3. Derive frontmatter, polish the body, and present ONE consolidated review

Do the derivation and the light polish together, then present everything in a **single review
message** and wait once for approval/edits. (One round keeps the loop fast on a phone.)

**Derive all four fields:**

- **title** — sentence-case, declarative, can be a full thought (not headline title-case).
  Examples: "Give the agent the tools you already use", "Describe the what, let the agent
  navigate the how".
- **slug** — kebab-case, 3–6 words, derived from the title/theme. Must be unique among existing
  files in `content/journal/` (check for collisions; if one exists, adjust).
- **tags** — 2–4 kebab-case tags, reusing existing vocabulary where sensible.
- **excerpt** — one punchy sentence that hooks the reader (the list/preview blurb).

**Polish the body** — the input is near-final prose, so **preserve the author's voice and
wording**. Make only minimal edits: fix obvious typos, and apply the AlteredCraft writing rules:

- **No em-dashes** — use commas, colons, or parentheses instead.
- **No absolutes** — soften e.g. "Most developers…" → "Many developers…".
- **No emojis** — none anywhere.
- Keep markdown links inline: `[label](https://…)`. Entries often close with a "follow along"
  pointer to a repo/docs — keep one only if the source prose has it; do not invent links.

**Present** the proposed frontmatter block and the polished body together, flag any non-trivial
wording changes (this is the user's writing), and wait for approval or edits before writing.

### 4. Pre-flight and branch

Determine context first:

```bash
git rev-parse --show-toplevel
git branch --show-current
git status --short
```

- **Local CLI:** if the tree is dirty or you are not on `main`, **stop and ask** rather than
  branching off unexpected state. When clean and on `main`, update first:
  `git checkout main && git pull --ff-only`.
- **Claude Code web / cloud:** the session starts on a fresh checkout; do **not** assume `main`
  or require a pull. Branch from the current HEAD.

Then create the entry branch (pick a numeric suffix if the name already exists):

```bash
git checkout -b journal/<slug>
```

### 5. Write the file

Write `content/journal/<date>-<slug>.md` using the frontmatter template below. The `slug` field
in frontmatter must match the slug in the filename.

### 6. Fast validation (no full build)

Do **not** run `npm run build` in a web/cloud or mobile session — it installs and builds the
whole Next.js app, which is slow on a phone and burns shared rate limits. The PR's Netlify deploy-preview / CI
build is the authoritative build gate.

Instead run a portable, tooling-free check:

- `ls content/journal/` and confirm `<date>-<slug>.md` is the only file carrying that slug.
- Re-read the file you wrote and confirm the frontmatter has all five fields
  (`title`, `date`, `slug`, `tags`, `excerpt`), that `date` is **quoted**, and that `tags` is a
  YAML array.

(Optional, local only: if you want extra assurance and `node_modules` is present, you may run
`npm run build`. Skip it on mobile.)

### 7. Commit, push, and open the PR

```bash
git add content/journal/<date>-<slug>.md
git commit -m "Add journal entry: <title>" -m "Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
git push -u origin journal/<slug>
gh pr create --base main --title "Add journal entry: <title>" --body "<body>"
```

Use the non-interactive `-m` form shown above (or a heredoc) so the `Co-Authored-By` trailer is
reliably included without opening an editor.

**If `gh` is unavailable** (can happen in a web session): push the branch as above, then surface
the branch name and have the user open the PR via the Claude Code web "Create PR" action or the
GitHub UI / iOS app.

PR body: a one-line summary, the entry's title and date, and the rendered path
(`/journal/<slug>`). End the PR body with:
`🤖 Generated with [Claude Code](https://claude.com/claude-code)`

Stop after the PR is open and report the PR URL. Do not merge unless the user explicitly asked.
On a phone, the clean single-file PR can be merged from the GitHub iOS app or web UI in a couple
of taps.

## Frontmatter template

```markdown
---
title: "<sentence-case declarative title>"
date: "<YYYY-MM-DD>"
slug: "<kebab-slug>"
tags: ["<tag>", "<tag>"]
excerpt: "<one punchy hook sentence>"
---

<body prose in markdown>
```

Notes:
- `date` and `title`/`slug`/`excerpt` are quoted strings; `tags` is a YAML array.
- Quote `date` explicitly so YAML does not parse it into a Date object.
- The body is plain markdown (GFM); it renders via the brand-styled `<Markdown>` component, so
  no custom HTML or typography classes are needed.

## Edge cases

- **Duplicate slug** — if a file with that slug already exists in `content/journal/`, the new
  file would collide; pick a distinct slug and confirm with the user.
- **Dirty tree / wrong branch (local only)** — never branch off uncommitted work or a non-main
  branch silently; ask first (step 4). In a web/cloud session this check is relaxed: branch from
  the current HEAD.
- **Validation failure** — if a required frontmatter field is missing or malformed, fix the file
  before pushing (usually a quoting/format issue).
- **Multiple entries same day** — filenames stay unique via distinct slugs, e.g.
  `2026-06-09-foo.md` and `2026-06-09-bar.md`; sort order among same-day entries is by date only.

## Not in scope (yet)

- **Substack Notes cross-post** — a future step will optionally draft a short syndication blurb
  (teaser + link back to the canonical entry) for manual paste into Substack Notes. Substack has
  no official write API, so this is draft-and-handoff, not auto-post. Not part of this version.
