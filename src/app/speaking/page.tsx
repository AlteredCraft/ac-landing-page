import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Mic } from "lucide-react";
import { UPCOMING, PAST } from "@/lib/speaking";
import { EngagementRow } from "@/components/EngagementRow";
import { SpeakingRecordings } from "@/components/SpeakingRecordings";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Kicker } from "@/components/Kicker";

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
      <SiteNav />

      <main className="max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 lg:pt-24">
        {/* Hero */}
        <section className="pt-12 pb-10">
          <Link
            href="/#community"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-link)] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Community
          </Link>
          <Kicker className="mb-4">Talks · Panels · Demos</Kicker>
          <h1 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-4xl sm:text-5xl text-[var(--color-text)]">
            Speaking
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted)] max-w-[680px]">
            Talks, panels, and demos on AI-assisted software development.
          </p>
          <div className="mt-6">
            <a
              href="mailto:sam@alteredcraft.com?subject=Speaking%20inquiry"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--color-accent)] text-[var(--color-ink)] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg"
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
                className="text-[var(--color-link)] hover:text-[var(--color-link-hover)] hover:underline transition-colors"
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
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 sm:p-10 text-center">
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-ink)] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-muted)] transition-colors rounded-lg"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
