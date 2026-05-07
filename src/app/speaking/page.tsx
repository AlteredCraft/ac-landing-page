import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { MobileMenu } from "@/components/MobileMenu";
import { ExternalLink, ArrowRight, Mic } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import oaiaThumb from "../../../public/oaia-thumb.png";

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

type Engagement = {
  date: string;
  location: string;
  host: string;
  title: string;
  description: string;
  links: { label: string; href: string }[];
};

const UPCOMING: Engagement[] = [
  {
    date: "MAY 14, 2026",
    location: "PORTLAND, OR",
    host: "Portland WIP AI Demos Lunch · UpStart Collective",
    title: "Presenting knobs.cc",
    description:
      "A desktop inspector for every knob Claude Code gives you — where it lives, what it’s set to, and which layer wins. Demoing the in-progress build at Portland’s informal show-and-tell for AI builders.",
    links: [
      {
        label: "Event details",
        href: "https://eventship.com/event/portland-wip-ai-demo-lunch",
      },
      { label: "knobs.cc on GitHub", href: "https://github.com/AlteredCraft/knobs-cc" },
    ],
  },
  {
    date: "MAY 20, 2026",
    location: "PORTLAND, OR",
    host: "Maseeh College of Engineering · Portland State University",
    title: "Panelist — AI Futures",
    description:
      "Joining the AI Futures industry panel at the Maseeh Exchange: Events With Impact, alongside PSU faculty exploring how AI is being applied to real-world challenges.",
    links: [
      { label: "Event details", href: "https://www.pdx.edu/engineering/exchange" },
    ],
  },
];

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
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <MobileMenu />
      </nav>

      <main className="max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 lg:pt-24">
        {/* Hero */}
        <section className="pt-12 pb-10">
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

          <ul className="divide-y divide-[var(--color-border)]">
            {UPCOMING.map((event) => (
              <li
                key={event.title}
                className="py-8 grid gap-3 sm:grid-cols-[200px_1fr] sm:gap-8"
              >
                <div className="text-xs font-semibold tracking-widest text-[var(--color-muted)] uppercase">
                  <div>{event.date}</div>
                  <div className="mt-1">{event.location}</div>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-muted)] mb-1">
                    {event.host}
                  </p>
                  <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl text-[var(--color-text)] mb-2">
                    {event.title}
                  </h3>
                  <p className="text-[var(--color-muted)] mb-4">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {event.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                      >
                        {link.label}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Past */}
        <section className="pt-8 pb-16 border-t border-[var(--color-border)]">
          <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-2xl sm:text-3xl text-[var(--color-text)] mb-8">
            Past engagements
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* GOTO Conference Interview */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden flex flex-col">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/AeA7PShEkD8"
                  title="Clean Architecture with Python — GOTO Conference"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-flex self-start px-2.5 py-1 bg-[var(--color-accent)]/15 text-[var(--color-accent)] text-xs font-semibold tracking-wide rounded-full mb-3">
                  GOTO Conferences · Interview
                </span>
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl text-[var(--color-text)] mb-2">
                  &ldquo;Clean Architecture with Python&rdquo;
                </h3>
                <p className="text-[var(--color-muted)] text-sm">
                  Interview on the GOTO Conferences channel about the book and
                  building maintainable software systems.
                </p>
              </div>
            </div>

            {/* Oregon AI Accelerator — Observability in AI */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden flex flex-col">
              <a
                href="https://www.youtube.com/watch?v=DPqnZzD2glU"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video">
                  <Image
                    src={oaiaThumb}
                    alt="Observability in AI — slide showing the antipattern of unmonitored LLM calls"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </a>
              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-flex self-start px-2.5 py-1 bg-[var(--color-accent)]/15 text-[var(--color-accent)] text-xs font-semibold tracking-wide rounded-full mb-3">
                  Oregon AI Accelerator · Screencast
                </span>
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl text-[var(--color-text)] mb-2">
                  &ldquo;Observability in AI&rdquo;
                </h3>
                <p className="text-[var(--color-muted)] text-sm mb-4 flex-grow">
                  Screencast presentation on observability patterns for AI
                  systems in production.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=DPqnZzD2glU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors self-start"
                >
                  Watch on YouTube
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
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
