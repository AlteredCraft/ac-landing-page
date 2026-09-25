import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ragWorkshopImg from "../../../public/speaker.webp";
import hackathonImg from "../../../public/hackathon-podium.webp";
import packtWorkshopImg from "../../../public/packt-ws-00.webp";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { btn, card, container, lift, monoLink } from "@/lib/styles";

const cardClass = `${card} ${lift} flex flex-col overflow-hidden`;

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
    <div className="min-h-screen flex flex-col bg-[var(--color-base)]">
      <SiteNav />

      <main id="main-content" tabIndex={-1} className={`${container} flex-grow`}>
        <PageHeader
          back={{ href: "/#community", label: "community" }}
          kicker="the archive"
          title="Previous workshops"
        >
          Past talks, workshops, and conference appearances on AI-assisted
          software development.
        </PageHeader>

        {/* Three cards: Effective Software Engineering, RAG Workshop, Hackathon.
            Context Engineering is now an evergreen "Always available" offering on
            the home page, so it is intentionally not listed here. */}
        <section className="pt-6 lg:pt-8 pb-12 lg:pb-16 border-t-[1.5px] border-[var(--color-ink)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Effective Software Engineering with Claude Code */}
            <article className={cardClass}>
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
                  sizes="(min-width: 1024px) 390px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </a>
              <div className="flex flex-col flex-grow gap-2.5 px-6 py-[22px]">
                <p className="mono text-[var(--color-muted)]">
                  Packt · Deep Engineering · Jun 20, 2026
                </p>
                <h2 className="serif text-[28px] leading-[1.05]">
                  Effective Software Engineering with Claude Code
                </h2>
                <p className="text-sm leading-normal text-[var(--color-body)] flex-grow">
                  From prompts to systems. CLAUDE.md context layers, reusable
                  skills, guardrails, and team-level practices for senior
                  engineers, tech leads, and architects.
                </p>
                <a
                  href="https://www.eventbrite.co.uk/e/effective-software-engineering-with-claude-code-from-prompts-to-systems-tickets-1988571262176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${monoLink} self-start`}
                >
                  View event
                  <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>

            {/* RAG Workshop */}
            <article className={cardClass}>
              <div className="relative aspect-[2/1]">
                <Image
                  src={ragWorkshopImg}
                  alt="Sam Keen teaching a RAG workshop to a room of developers"
                  fill
                  sizes="(min-width: 1024px) 390px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col flex-grow gap-2.5 px-6 py-[22px]">
                <p className="mono text-[var(--color-muted)]">
                  In-person workshop
                </p>
                <h2 className="serif text-[28px] leading-[1.05]">
                  Building RAG Applications
                </h2>
                <p className="text-sm leading-normal text-[var(--color-body)] flex-grow">
                  Hands-on workshop teaching retrieval-augmented generation
                  patterns with real-world datasets.
                </p>
              </div>
            </article>

            {/* Claude Code Hackathon */}
            <article className={cardClass}>
              <div className="relative aspect-[2/1]">
                <Image
                  src={hackathonImg}
                  alt="Sam Keen presenting at the Claude Code Hackathon"
                  fill
                  sizes="(min-width: 1024px) 390px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col flex-grow gap-2.5 px-6 py-[22px]">
                <p className="mono text-[var(--color-muted)]">Community event</p>
                <h2 className="serif text-[28px] leading-[1.05]">
                  Claude Code Hackathon
                </h2>
                <p className="text-sm leading-normal text-[var(--color-body)] flex-grow">
                  Community hackathon bringing developers together to build
                  with Claude Code.
                </p>
                <a
                  href="https://photos.app.goo.gl/j3tAtbxr3uUBCUb96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${monoLink} self-start`}
                >
                  View photos
                  <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16 lg:pb-24">
          <div className={`${card} flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 lg:px-10 lg:py-9`}>
            <div className="flex flex-col gap-2">
              <h2 className="serif text-[32px] lg:text-[40px] leading-none">
                Looking for what&apos;s next?
              </h2>
              <p className="text-[var(--color-body)] max-w-[36em]">
                Upcoming workshops are listed on Maven, or head back to the home
                page for the full schedule.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://maven.com/altered-craft-learning"
                target="_blank"
                rel="noopener noreferrer"
                className={btn.primary}
              >
                Browse workshops on Maven
                <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
              </a>
              <Link href="/#community" className={btn.outline}>
                Back to community
                <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
