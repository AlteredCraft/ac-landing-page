import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getJournalEntries, formatJournalDate } from "@/lib/journal";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Kicker } from "@/components/Kicker";

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
  const entries = getJournalEntries();

  return (
    <div className="min-h-screen bg-[var(--color-base)]">
      <SiteNav />

      <main id="main-content" className="max-w-[820px] mx-auto px-6 lg:px-12 pt-20 lg:pt-24">
        {/* Hero */}
        <section className="pt-12 pb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-link)] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <Kicker className="mb-4">Notes from the workbench</Kicker>
          <h1 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-4xl sm:text-5xl text-[var(--color-text)]">
            Journal
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted)] max-w-[680px]">
            Short notes from the workbench: project updates, things I learned,
            and links worth a comment. Lower stakes than the newsletter, more
            frequent.
          </p>
        </section>

        {/* Entries */}
        <section className="pt-8 pb-16 border-t border-[var(--color-border)]">
          {entries.length === 0 ? (
            <p className="py-8 text-[var(--color-muted)]">
              No entries yet. Check back soon.
            </p>
          ) : (
            <ul className="divide-y divide-[var(--color-border)]">
              {entries.map((entry) => (
                <li key={entry.slug} className="py-8">
                  <Link href={`/journal/${entry.slug}`} className="group block">
                    <div className="text-xs font-semibold tracking-widest text-[var(--color-muted)] uppercase mb-2">
                      {formatJournalDate(entry.date)}
                    </div>
                    <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl text-[var(--color-text)] group-hover:text-[var(--color-link)] transition-colors">
                      {entry.title}
                    </h2>
                    {entry.excerpt && (
                      <p className="mt-2 text-[var(--color-muted)]">
                        {entry.excerpt}
                      </p>
                    )}
                  </Link>
                  {entry.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs bg-[var(--color-surface-alt)] text-[var(--color-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
