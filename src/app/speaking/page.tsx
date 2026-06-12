import type { Metadata } from "next";
import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { MobileMenu } from "@/components/MobileMenu";
import { NavLabel } from "@/components/NavLabel";
import { ArrowRight, ArrowLeft, Mic } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { UPCOMING, PAST } from "@/lib/speaking";
import { EngagementRow } from "@/components/EngagementRow";
import { SpeakingRecordings } from "@/components/SpeakingRecordings";

export const metadata: Metadata = {
  title: "Speaking | AlteredCraft",
  description:
    "Talks, panels, and demos by Sam Keen on AI-assisted software development.",
  openGraph: {
    title: "Speaking | AlteredCraft",
    description:
      "Talks, panels, and demos by Sam Keen on AI-assisted software development.",
    url: "https://alteredcraft.com/speaking",
    siteName: "AlteredCraft",
    type: "website",
  },
};

export default function SpeakingPage() {
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

      <main className="max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 lg:pt-24">
        {/* Hero */}
        <section className="pt-12 pb-10">
          <Link
            href="/#community"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Community
          </Link>
          <h1 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-4xl sm:text-5xl text-[var(--color-text)]">
            Speaking
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted)] max-w-[680px]">
            Talks, panels, and demos on AI-assisted software development.
          </p>
          <div className="mt-6">
            <a
              href="mailto:sam@alteredcraft.com?subject=Speaking%20inquiry"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--color-accent)] text-[#1F1D1D] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg"
            >
              <Mic className="w-4 h-4" />
              Inquire about speaking
            </a>
          </div>
        </section>

        {/* Upcoming */}
        <section className="pt-8 pb-16 border-t border-[var(--color-border)]">
          <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-2xl sm:text-3xl text-[var(--color-text)] mb-8">
            Upcoming engagements
          </h2>

          {UPCOMING.length === 0 ? (
            <p className="text-[var(--color-muted)] max-w-[680px]">
              Nothing scheduled right now. If you&apos;re putting together an
              event, I&apos;d be glad to talk,{" "}
              <a
                href="mailto:sam@alteredcraft.com?subject=Speaking%20inquiry"
                className="text-[var(--color-accent)] hover:underline"
              >
                reach out
              </a>
              .
            </p>
          ) : (
            <ul className="divide-y divide-[var(--color-border)]">
              {UPCOMING.map((event) => (
                <EngagementRow key={event.title} event={event} />
              ))}
            </ul>
          )}
        </section>

        {/* Past */}
        <section className="pt-8 pb-16 border-t border-[var(--color-border)]">
          <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-2xl sm:text-3xl text-[var(--color-text)] mb-8">
            Past engagements
          </h2>

          {PAST.length > 0 && (
            <ul className="divide-y divide-[var(--color-border)] mb-12">
              {PAST.map((event) => (
                <EngagementRow key={event.title} event={event} />
              ))}
            </ul>
          )}

          <h3 className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-xl text-[var(--color-text)] mb-6">
            Recordings
          </h3>
          <SpeakingRecordings />
        </section>

        {/* CTA */}
        <section className="pb-20">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-8 sm:p-10 text-center">
            <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-2xl text-[var(--color-text)] mb-3">
              Looking for a speaker?
            </h2>
            <p className="text-[var(--color-muted)] max-w-[560px] mx-auto mb-6">
              I speak on AI-assisted development, context engineering for
              coding agents, and what&apos;s actually working in production.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:sam@alteredcraft.com?subject=Speaking%20inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[#1F1D1D] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-text)] transition-colors rounded-lg"
              >
                Back to home
              </Link>
            </div>
          </div>
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
