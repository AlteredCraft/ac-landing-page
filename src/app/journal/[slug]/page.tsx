import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Markdown } from "@/components/Markdown";
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
    <div className="min-h-screen bg-[var(--color-base)]">
      <SiteNav />

      <main className="max-w-[760px] mx-auto px-6 lg:px-12 pt-20 lg:pt-24">
        <article className="pt-12 pb-16">
          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-link)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Journal
          </Link>

          <div className="text-xs font-semibold tracking-widest text-[var(--color-muted)] uppercase mb-3">
            {formatJournalDate(entry.date)}
          </div>
          <h1 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-3xl sm:text-4xl text-[var(--color-text)] leading-tight mb-8">
            {entry.title}
          </h1>

          <div className="text-base">
            <Markdown>{entry.content}</Markdown>
          </div>

          {entry.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-wrap gap-2">
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
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
