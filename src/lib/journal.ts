// Build-time reader for journal entries stored as markdown files in content/journal/.
// Publishing flow: write content/journal/<date>-<slug>.md, commit, push, it appears.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const JOURNAL_DIR = path.join(process.cwd(), "content", "journal");

export type JournalMeta = {
  title: string;
  date: string; // YYYY-MM-DD
  slug: string;
  tags: string[];
  excerpt: string;
};

export type JournalEntry = JournalMeta & {
  content: string;
};

// YAML may parse an unquoted `date: 2026-06-07` into a Date; normalize to YYYY-MM-DD.
function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

function readEntry(filename: string): JournalEntry {
  const raw = fs.readFileSync(path.join(JOURNAL_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const slug = (data.slug as string) ?? filename.replace(/\.mdx?$/, "");
  return {
    title: (data.title as string) ?? slug,
    date: normalizeDate(data.date),
    slug,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    excerpt: (data.excerpt as string) ?? "",
    content,
  };
}

export function getJournalEntries(): JournalEntry[] {
  if (!fs.existsSync(JOURNAL_DIR)) return [];
  return fs
    .readdirSync(JOURNAL_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map(readEntry)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getJournalEntry(slug: string): JournalEntry | undefined {
  return getJournalEntries().find((entry) => entry.slug === slug);
}

// "2026-06-07" -> "June 7, 2026" (UTC to avoid timezone date shifts).
export function formatJournalDate(date: string): string {
  if (!date) return "";
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
