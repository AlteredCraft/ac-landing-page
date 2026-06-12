import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BrandLockup } from "@/components/BrandLockup";
import { MobileMenu } from "@/components/MobileMenu";
import { Markdown } from "@/components/Markdown";
import { NAV_LINKS } from "@/lib/nav";
import { NavLabel } from "@/components/NavLabel";
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
      {/* Navigation - Dark nav bar (matches home) */}
      <nav className="fixed top-0 left-0 right-0 py-5 px-6 lg:px-12 flex justify-between items-center bg-[#1F1D1D] z-50">
        <Link href="/" className="sm:hidden">
          <BrandLockup variant="horizontal" size="sm" theme="dark" />
        </Link>
        <Link href="/" className="hidden sm:block">
          <BrandLockup variant="horizontal" size="md" theme="dark" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-wide text-white hover:text-[var(--color-accent)] transition-colors"
              >
                <NavLabel link={link} />
              </Link>
            </li>
          ))}
        </ul>

        <MobileMenu />
      </nav>

      <main className="max-w-[760px] mx-auto px-6 lg:px-12 pt-20 lg:pt-24">
        <article className="pt-12 pb-16">
          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-8"
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

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 bg-[#1F1D1D]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <BrandLockup variant="horizontal" size="sm" theme="dark" />
          <div className="flex items-center gap-6 text-sm text-[var(--color-muted)]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/press-kit"
              className="hover:text-white transition-colors"
            >
              Press Kit
            </Link>
            <a
              href="mailto:sam@alteredcraft.com"
              className="hover:text-white transition-colors"
            >
              sam@alteredcraft.com
            </a>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto mt-8 pt-6 border-t border-white/10 text-center text-[var(--color-muted)] text-sm">
          &copy; {new Date().getFullYear()} Altered Craft, LLC. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
