import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { MobileMenu } from "@/components/MobileMenu";
import { ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { NavLabel } from "@/components/NavLabel";
import ragWorkshopImg from "../../../public/speaker.png";
import hackathonImg from "../../../public/hackathon-podium.png";
import packtWorkshopImg from "../../../public/packt-ws-00.png";

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
                <NavLabel link={link} />
              </Link>
            </li>
          ))}
        </ul>

        <MobileMenu />
      </nav>

      <main className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-20 lg:pt-24">
        {/* Hero */}
        <section className="pt-12 pb-12">
          <Link
            href="/#community"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Community
          </Link>
          <h1 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-4xl sm:text-5xl text-[var(--color-text)]">
            Previous Workshops
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted)] max-w-[680px]">
            Past talks, workshops, and conference appearances on AI-assisted
            software development.
          </p>
        </section>

        {/* Three cards: Effective Software Engineering, RAG Workshop, Hackathon.
            Context Engineering is now an evergreen "Always available" offering on
            the home page, so it is intentionally not listed here. */}
        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Effective Software Engineering with Claude Code */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden flex flex-col">
              <a
                href="https://www.eventbrite.co.uk/e/effective-software-engineering-with-claude-code-from-prompts-to-systems-tickets-1988571262176"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[2/1] bg-[#1F2547]"
              >
                <Image
                  src={packtWorkshopImg}
                  alt="Packt × Deep Engineering: Effective Software Engineering with Claude Code"
                  fill
                  className="object-cover"
                />
              </a>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-lg text-[var(--color-text)] mb-1">
                  Effective Software Engineering with Claude Code
                </h3>
                <p className="text-sm text-[var(--color-muted)] mb-2">
                  Packt · Deep Engineering · June 20, 2026
                </p>
                <p className="text-sm text-[var(--color-muted)] mb-4 flex-grow">
                  From prompts to systems. CLAUDE.md context layers, reusable
                  skills, guardrails, and team-level practices for senior
                  engineers, tech leads, and architects.
                </p>
                <a
                  href="https://www.eventbrite.co.uk/e/effective-software-engineering-with-claude-code-from-prompts-to-systems-tickets-1988571262176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors self-start"
                >
                  View event
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
                href="/#community"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-text)] transition-colors rounded-lg"
              >
                Back to community
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
