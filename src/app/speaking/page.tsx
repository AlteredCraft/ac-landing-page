import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mic } from "lucide-react";
import { UPCOMING, PAST } from "@/lib/speaking";
import { EngagementRow } from "@/components/EngagementRow";
import { SpeakingRecordings } from "@/components/SpeakingRecordings";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { btn, container, proseLink } from "@/lib/styles";

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
    <div className="min-h-screen flex flex-col bg-[var(--color-base)]">
      <SiteNav />

      <main id="main-content" tabIndex={-1} className={`${container} flex-grow`}>
        <PageHeader
          back={{ href: "/#community", label: "community" }}
          kicker="talks · panels · demos"
          title="Speaking"
        >
          <p>Talks, panels, and demos on AI-assisted software development.</p>
          <a
            href="mailto:sam@alteredcraft.com?subject=Speaking%20inquiry"
            className={`${btn.primary} mt-6`}
          >
            <Mic aria-hidden="true" className="w-4 h-4" />
            Inquire about speaking
          </a>
        </PageHeader>

        {/* Upcoming */}
        <section className="flex flex-col gap-6 pb-12 lg:pb-16">
          <SectionHeading title="Upcoming engagements" label="upcoming" />
          {UPCOMING.length === 0 ? (
            <p className="text-[var(--color-body)] max-w-[40em]">
              Nothing scheduled right now. If you&apos;re putting together an
              event, I&apos;d be glad to talk,{" "}
              <a
                href="mailto:sam@alteredcraft.com?subject=Speaking%20inquiry"
                className={proseLink}
              >
                reach out
              </a>
              .
            </p>
          ) : (
            <ol className="flex flex-col">
              {UPCOMING.map((event) => (
                <EngagementRow key={event.title} event={event} />
              ))}
            </ol>
          )}
        </section>

        {/* Past */}
        <section className="flex flex-col gap-6 pb-12 lg:pb-16">
          <SectionHeading title="Past engagements" label="past" />
          {PAST.length > 0 && (
            <ol className="flex flex-col">
              {PAST.map((event) => (
                <EngagementRow key={event.title} event={event} />
              ))}
            </ol>
          )}

          <p className="mono text-[var(--color-muted)] pt-4">recordings</p>
          <SpeakingRecordings className="grid gap-4 md:grid-cols-2" />
        </section>

        {/* CTA */}
        <section className="pb-16 lg:pb-24">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end px-[22px] py-7 lg:p-14 bg-[var(--color-ink)] text-[var(--color-on-ink)] rounded-xl lg:rounded-[14px]">
            <div className="flex flex-col gap-4">
              <p className="mono text-[var(--color-lime)]">/ invite</p>
              <h2 className="serif m-0 text-[40px] lg:text-[56px] leading-none text-white">
                Looking for a speaker?
              </h2>
              <p className="text-[15px] lg:text-[17px] leading-relaxed text-[var(--color-on-ink-body)] max-w-[36em]">
                I speak on AI-assisted development, context engineering for
                coding agents, and what&apos;s actually working in production.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:sam@alteredcraft.com?subject=Speaking%20inquiry"
                className={btn.lime}
              >
                Get in touch
                <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center h-12 px-[22px] rounded-full border border-[var(--color-ink-input-border)] text-[15px] font-medium text-white hover:border-white transition-colors"
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
