import type { Metadata } from "next";
import { getJournalEntries, formatJournalDate } from "@/lib/journal";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { JournalList } from "@/components/JournalList";
import { container } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Journal | AlteredCraft",
  description:
    "Short, dated notes from the workbench: project updates, things learned, and links with commentary.",
  openGraph: {
    title: "Journal | AlteredCraft",
    description:
      "Short, dated notes from the workbench: project updates, things learned, and links with commentary.",
    url: "https://alteredcraft.com/journal",
    siteName: "AlteredCraft",
    type: "website",
  },
};

export default function JournalPage() {
  // Only the metadata goes to the client list, not the markdown bodies.
  const entries = getJournalEntries().map((entry) => ({
    title: entry.title,
    date: entry.date,
    slug: entry.slug,
    tags: entry.tags,
    excerpt: entry.excerpt,
    displayDate: formatJournalDate(entry.date),
  }));

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-base)]">
      <SiteNav current="/journal" />

      <main id="main-content" tabIndex={-1} className={`${container} flex-grow`}>
        <JournalList entries={entries}>
          Short notes from the workbench: project updates, things I learned,
          and links worth a comment.{" "}
          <span className="highlight px-1">
            Lower stakes than the newsletter, more frequent.
          </span>
        </JournalList>
      </main>

      <SiteFooter />
    </div>
  );
}
