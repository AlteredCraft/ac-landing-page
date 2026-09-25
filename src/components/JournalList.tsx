"use client";

import { useState } from "react";
import Link from "next/link";
import type { JournalMeta } from "@/lib/journal";
import { PageHeader } from "@/components/PageHeader";
import { card, chip } from "@/lib/styles";

type Entry = JournalMeta & { displayDate: string };

// Journal index: page header (with the tag filter as its aside) and the
// entry list. Entries arrive pre-sorted (newest first) with their dates
// already formatted, so this only filters. `children` is the intro copy.
export function JournalList({
  entries,
  children,
}: {
  entries: Entry[];
  children: React.ReactNode;
}) {
  const [tag, setTag] = useState<string | null>(null);

  // Tags ordered by how many entries use them, then alphabetically.
  const counts = new Map<string, number>();
  for (const e of entries) {
    for (const t of e.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  const tags = [...counts.keys()].sort(
    (a, b) => counts.get(b)! - counts.get(a)! || a.localeCompare(b),
  );

  const visible = tag ? entries.filter((e) => e.tags.includes(tag)) : entries;

  const pill = (active: boolean) =>
    `mono inline-flex items-center h-[30px] px-3 rounded-full text-xs transition-colors cursor-pointer ${
      active
        ? "bg-[var(--color-ink)] text-white"
        : "border border-[var(--color-chip-border)] text-[var(--color-text)] hover:border-[var(--color-ink)]"
    }`;

  const filter =
    tags.length > 0 ? (
      <div className={`${card} flex flex-col gap-3 px-[22px] py-5`}>
        <p className="mono text-[var(--color-muted)]" id="tag-filter-label">
          Filter by tag
        </p>
        <div
          role="group"
          aria-labelledby="tag-filter-label"
          className="flex flex-wrap gap-1.5"
        >
          <button
            type="button"
            aria-pressed={tag === null}
            onClick={() => setTag(null)}
            className={pill(tag === null)}
          >
            all
          </button>
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={tag === t}
              onClick={() => setTag(tag === t ? null : t)}
              className={pill(tag === t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    ) : undefined;

  return (
    <>
      <PageHeader
        back={{ href: "/", label: "home" }}
        kicker="notes from the workbench"
        title="Journal"
        aside={filter}
      >
        {children}
      </PageHeader>

      <section className="pb-16 lg:pb-24">
        {visible.length === 0 ? (
          <p className="py-8 text-[var(--color-muted)]">
            No entries yet. Check back soon.
          </p>
        ) : (
          <ol className="flex flex-col border-t-[1.5px] border-[var(--color-ink)]">
            {visible.map((entry) => (
              <li
                key={entry.slug}
                className="grid gap-2 lg:gap-10 lg:grid-cols-[200px_minmax(0,1fr)_280px] py-5 lg:py-[26px] border-b border-[var(--color-border)] lg:items-baseline"
              >
                <p className="mono text-[var(--color-text)]">
                  <time dateTime={entry.date}>{entry.displayDate}</time>
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href={`/journal/${entry.slug}`}
                    className="serif text-[28px] lg:text-[34px] leading-[1.05] hover:text-[var(--color-blue)] transition-colors"
                  >
                    {entry.title}
                  </Link>
                  {entry.excerpt && (
                    <p className="m-0 text-[15px] lg:text-[15.5px] leading-normal text-[var(--color-body)]">
                      {entry.excerpt}
                    </p>
                  )}
                </div>
                {entry.tags.length > 0 && (
                  <ul
                    className="flex flex-wrap gap-1.5 pt-1 lg:pt-0"
                    aria-label="Tags"
                  >
                    {entry.tags.map((t) => (
                      <li key={t} className={chip}>
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        )}
      </section>
    </>
  );
}
