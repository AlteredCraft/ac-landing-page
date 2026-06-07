import type { Metadata } from "next";
import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { MobileMenu } from "@/components/MobileMenu";
import { ArrowLeft } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { getJournalEntries, formatJournalDate } from "@/lib/journal";

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
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <MobileMenu />
      </nav>

      <main className="max-w-[820px] mx-auto px-6 lg:px-12 pt-20 lg:pt-24">
        {/* Hero */}
        <section className="pt-12 pb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
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
                    <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
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
