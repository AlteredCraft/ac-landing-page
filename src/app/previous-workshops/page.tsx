import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { MobileMenu } from "@/components/MobileMenu";
import { ExternalLink, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import ragWorkshopImg from "../../../public/speaker.png";
import hackathonImg from "../../../public/hackathon-podium.png";
import oaiaThumb from "../../../public/oaia-thumb.png";
import lightningLessonImg from "../../../public/lightning-lesson-01.png";

export const metadata: Metadata = {
  title: "Previous Workshops | AlteredCraft",
  description:
    "Past talks, workshops, and conference appearances by Sam Keen on AI-assisted software development.",
  openGraph: {
    title: "Previous Workshops | AlteredCraft",
    description:
      "Past talks, workshops, and conference appearances by Sam Keen on AI-assisted software development.",
    url: "https://alteredcraft.com/previous-workshops",
    siteName: "AlteredCraft",
    type: "website",
  },
};

export default function PreviousWorkshopsPage() {
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

      <main className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-20 lg:pt-24">
        {/* Hero */}
        <section className="pt-12 pb-12">
          <h1 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-4xl sm:text-5xl text-[var(--color-text)]">
            Previous Workshops
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted)] max-w-[680px]">
            Past talks, workshops, and conference appearances on AI-assisted
            software development.
          </p>
        </section>

        {/* Featured row: Maven Lightning Lesson + GOTO Conference Interview */}
        <section className="pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Maven Lightning Lesson */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden flex flex-col">
              <a
                href="https://maven.com/p/6a115a/build-the-claude-md-your-project-needs"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video">
                  <Image
                    src={lightningLessonImg}
                    alt="Maven Lightning Lesson title slide: Building the CLAUDE.md your project needs"
                    fill
                    className="object-cover"
                  />
                </div>
              </a>
              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-flex self-start px-2.5 py-1 bg-[var(--color-accent)]/15 text-[var(--color-accent)] text-xs font-semibold tracking-wide rounded-full mb-3">
                  Maven · Lightning Lesson
                </span>
                <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl text-[var(--color-text)] mb-2">
                  &ldquo;Building the CLAUDE.md Your Project Needs&rdquo;
                </h2>
                <p className="text-[var(--color-muted)] text-sm mb-4 flex-grow">
                  Maven Lightning Lesson on writing project memory files that
                  actually steer Claude Code.
                </p>
                <a
                  href="https://maven.com/p/6a115a/build-the-claude-md-your-project-needs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors self-start"
                >
                  Watch on Maven
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

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
                <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl text-[var(--color-text)] mb-2">
                  &ldquo;Clean Architecture with Python&rdquo;
                </h2>
                <p className="text-[var(--color-muted)] text-sm">
                  Interview on the GOTO Conferences channel about the book and
                  building maintainable software systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three cards: Oregon AI, RAG Workshop, Hackathon */}
        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Oregon AI Accelerator */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src={oaiaThumb}
                  alt="Observability in AI — slide showing the antipattern of unmonitored LLM calls"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-lg text-[var(--color-text)] mb-1">
                  Observability in AI
                </h3>
                <p className="text-sm text-[var(--color-muted)] mb-2">
                  Oregon AI Accelerator
                </p>
                <p className="text-sm text-[var(--color-muted)] mb-4 flex-grow">
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

            {/* RAG Workshop */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src={ragWorkshopImg}
                  alt="Sam Keen teaching a RAG workshop to a room of developers"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-lg text-[var(--color-text)] mb-1">
                  Building RAG Applications
                </h3>
                <p className="text-sm text-[var(--color-muted)] mb-2">
                  In-person workshop
                </p>
                <p className="text-sm text-[var(--color-muted)] flex-grow">
                  Hands-on workshop teaching retrieval-augmented generation
                  patterns with real-world datasets.
                </p>
              </div>
            </div>

            {/* Claude Code Hackathon */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src={hackathonImg}
                  alt="Sam Keen presenting at the Claude Code Hackathon"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-lg text-[var(--color-text)] mb-1">
                  Claude Code Hackathon
                </h3>
                <p className="text-sm text-[var(--color-muted)] mb-2">
                  Community event
                </p>
                <p className="text-sm text-[var(--color-muted)] mb-4 flex-grow">
                  Community hackathon bringing developers together to build
                  with Claude Code.
                </p>
                <a
                  href="https://photos.app.goo.gl/j3tAtbxr3uUBCUb96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors self-start"
                >
                  View photos
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
              Looking for what&apos;s next?
            </h2>
            <p className="text-[var(--color-muted)] max-w-[520px] mx-auto mb-6">
              Upcoming workshops are listed on Maven, or head back to the home
              page for the full schedule.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://maven.com/altered-craft-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[#1F1D1D] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg"
              >
                Browse upcoming workshops on Maven
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/#teaching"
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
