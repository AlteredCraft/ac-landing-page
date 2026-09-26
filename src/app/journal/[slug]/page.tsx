import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Markdown } from "@/components/Markdown";
import { chip, container } from "@/lib/styles";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import {
  getJournalEntries,
  getJournalEntry,
  formatJournalDate,
} from "@/lib/journal";

export function generateStaticParams() {
  return getJournalEntries().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getJournalEntry(slug);
  if (!entry) return { title: "Journal | AlteredCraft" };
  return {
    title: `${entry.title} | AlteredCraft`,
    description: entry.excerpt,
    openGraph: {
      title: `${entry.title} | AlteredCraft`,
      description: entry.excerpt,
      url: `https://alteredcraft.com/journal/${entry.slug}`,
      siteName: "AlteredCraft",
      type: "article",
    },
  };
}

export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getJournalEntry(slug);
  if (!entry) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-base)]">
      <SiteNav current="/journal" />

      <main id="main-content" tabIndex={-1} className={`${container} flex-grow`}>
        <article className="max-w-[720px] mx-auto pt-10 lg:pt-[72px] pb-16 lg:pb-24">
          <p className="mono flex flex-wrap items-center gap-x-2 text-[var(--color-muted)] mb-5 lg:mb-6">
            <Link
              href="/journal"
              className="inline-flex items-center gap-1 min-h-6 hover:text-[var(--color-blue)] transition-colors"
            >
              <ArrowLeft aria-hidden="true" className="w-3.5 h-3.5" />
              journal
            </Link>
            <span aria-hidden="true">/</span>
            <time dateTime={entry.date} className="text-[var(--color-text)]">
              {formatJournalDate(entry.date)}
            </time>
          </p>
          <h1 className="serif m-0 text-[44px] lg:text-[64px] leading-[1] mb-8 lg:mb-10">
            {entry.title}
          </h1>

          <div className="border-t-[1.5px] border-[var(--color-ink)] pt-8 text-[17px]">
            <Markdown>{entry.content}</Markdown>
          </div>

          {entry.tags.length > 0 && (
            <ul
              aria-label="Tags"
              className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-wrap gap-1.5"
            >
              {entry.tags.map((tag) => (
                <li key={tag} className={chip}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
