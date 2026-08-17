import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/components/HeroImage";
import { Check, Mail, ExternalLink, ArrowRight } from "lucide-react";
import samImg from "../../public/press-kit/sam-keen-headshot-editorial.jpg";
import samCasualImg from "../../public/press-kit/sam-keen-headshot-casual.png";
import packtWorkshopImg from "../../public/packt-ws-00.webp";
import ragWorkshopImg from "../../public/speaker.webp";
import { LatestPosts } from "@/components/LatestPosts";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";
import { PAST as SPEAKING_PAST } from "@/lib/speaking";
import { EngagementRow } from "@/components/EngagementRow";
import { SpeakingRecordings } from "@/components/SpeakingRecordings";
import { UpcomingMeetups } from "@/components/UpcomingMeetups";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Kicker } from "@/components/Kicker";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samkeen",
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Substack",
    href: "https://writing.alteredcraft.com",
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@sam.keen",
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.18.408-2.26 1.332-3.04.88-.744 2.107-1.17 3.555-1.234 1.07-.047 2.064.078 2.967.367.026-.78.013-1.526-.038-2.207-.166-2.205-1.021-3.148-3.067-3.186h-.09c-1.233.014-2.275.397-2.939 1.078l-1.434-1.435C8.063 3.46 9.618 2.846 11.567 2.82h.108c1.263.015 2.402.261 3.388.733 1.073.513 1.903 1.283 2.468 2.289.528.94.83 2.09.898 3.42.033.646.04 1.327.022 2.038.47.27.897.577 1.278.92 1.192 1.073 1.876 2.534 1.975 4.222.107 1.842-.413 3.541-1.505 4.918-1.813 2.286-4.534 3.489-8.087 3.575l-.064.001zm-.12-10.863c-1.073.047-1.93.344-2.477.86-.494.466-.706 1.056-.633 1.752.073.695.386 1.195.931 1.488.587.316 1.378.443 2.168.396 1.11-.06 1.96-.462 2.53-1.194.442-.57.755-1.322.934-2.248-.925-.383-1.948-.582-3.044-.582-.134 0-.272.004-.41.012v-.484z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/samkeen",
    icon: (
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-base)]">
      <SiteNav />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden lg:min-h-screen flex flex-col lg:justify-center pt-24 lg:pt-28 pb-14 lg:pb-20 px-6 lg:px-12">
          <div aria-hidden="true" className="absolute inset-0 -z-10 hero-glow" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 hero-texture" />

          <div className="w-full max-w-[1000px] mx-auto">
            <Kicker className="mb-5">Newsletter · Workshops · Projects</Kicker>
            <h1 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[clamp(3rem,8vw,5rem)] leading-[1.05] tracking-tight mb-6 lg:mb-8">
              <span className="text-[var(--color-accent)]">The craft</span> of
              working with machines that write code.
            </h1>
            <p className="text-xl lg:text-2xl text-[var(--color-text)] mb-6 lg:mb-8 max-w-[680px] leading-relaxed">
              Research, writing, and mentorship on agentic coding for
              engineers who ship.
            </p>
            <HeroImage
              portraitSrc={samImg}
              portraitAlt="Sam Keen, founder of AlteredCraft"
              qrSrc="/alteredcraft-qr.png"
              qrAlt="QR code linking to alteredcraft.com"
            />
            <p className="text-xl lg:text-[1.375rem] text-[var(--color-muted)] mb-8 lg:mb-10 max-w-[680px] leading-relaxed">
              I&apos;m Sam Keen. I work hands-on with coding agents, then
              write and teach what actually holds up via weekly
              newsletter, live workshops, and the classroom. Author of{" "}
              <a
                href="https://www.amazon.com/Clean-Architecture-Python-maintainable-architectural/dp/183664289X"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-link)] hover:text-[var(--color-link-hover)] transition-colors"
              >
                <em>Clean Architecture with Python</em>
              </a>
              , and formerly a generative AI architect at AWS.
            </p>

            <div className="clear-both flex flex-wrap items-center gap-4 lg:gap-6">
              <a
                href="#writing"
                className="flex items-center justify-center gap-2.5 w-full lg:w-auto px-9 py-4 bg-[var(--color-accent)] text-[var(--color-ink)] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg shadow-sm"
              >
                <Mail className="w-4 h-4" />
                Read the newsletter
              </a>
              <a
                href="#community"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-muted)] transition-colors rounded-lg"
              >
                Workshops
              </a>
              <a
                href="https://www.linkedin.com/in/samkeen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-muted)] transition-colors rounded-lg"
              >
                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect
              </a>
            </div>

            {/* Proof strip: career logos + the numbers that back the pitch */}
            <div className="mt-12 lg:mt-14 pt-7 border-t border-[var(--color-border)] flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
              <div className="flex items-center gap-6 lg:gap-8 flex-shrink-0">
                <span className="text-xs text-[var(--color-muted)] uppercase tracking-widest flex-shrink-0">
                  Formerly at
                </span>
                <div className="flex items-center gap-7 lg:gap-9 opacity-60">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/aws.svg" alt="Amazon Web Services" className="h-6 lg:h-7 w-auto" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/lululemon.svg" alt="lululemon athletica" className="h-4 lg:h-5 w-auto" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/nike.svg" alt="Nike" className="h-5 lg:h-6 w-auto" />
                </div>
              </div>
              <div
                aria-hidden="true"
                className="hidden lg:block w-px h-9 bg-[var(--color-border)]"
              />
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-[var(--color-muted)]">
                <span>
                  <strong className="font-semibold text-[var(--color-text)]">
                    25+ years
                  </strong>{" "}
                  shipping production software
                </span>
                <span>
                  Co-founder of{" "}
                  <a
                    href="https://www.meetup.com/portland-ai-engineers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-link)] hover:text-[var(--color-link-hover)] transition-colors"
                  >
                    Portland AI Engineers
                  </a>{" "}
                  <strong className="font-semibold text-[var(--color-text)]">
                    (1,500+ members)
                  </strong>
                </span>
                <span>
                  Founder of{" "}
                  <a
                    href="https://luma.com/cascadia-bc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-link)] hover:text-[var(--color-link-hover)] transition-colors"
                  >
                    Cascadia Builders Club
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          id="writing"
          className="py-24 px-6 lg:px-12 bg-[var(--color-surface)] border-y border-[var(--color-border)]"
        >
          <div className="max-w-[1200px] mx-auto">
            <Kicker className="mb-4">Newsletter</Kicker>
            <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
              Signal over hype, weekly
            </h2>
            <p className="text-[var(--color-muted)] max-w-[620px]">
              Every week, I dig into what&apos;s actually working in the new
              AI abstraction layer so you can make informed decisions without
              drowning in hype. A consistent weekly AI review for developers,
              plus long-form deep dives that go beyond the headlines.
            </p>

            <div className="grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 mt-12">
              <div>
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-lg mb-5">
                  What makes it different
                </h3>
                <div className="flex flex-col gap-3.5 mb-10">
                  {[
                    "Production-informed, not demo magic",
                    "Written by someone who shipped code for 25+ years (ex AWS | Lululemon | Nike)",
                    "No hype, grounded in hands-on research and experimentation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-[var(--color-muted)]"
                    >
                      <span className="w-5 h-5 mt-0.5 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-[var(--color-ink)] flex-shrink-0">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-5">
                  <a
                    href="https://writing.alteredcraft.com/subscribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-[var(--color-ink)] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Subscribe free
                  </a>
                  <a
                    href="https://writing.alteredcraft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[var(--color-link)] hover:gap-3 hover:text-[var(--color-link-hover)] transition-all"
                  >
                    Browse the archive on Substack
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Latest Posts - loaded client-side on page view */}
              <LatestPosts />
            </div>
          </div>
        </section>

        {/* Projects preview — full list lives on /projects */}
        <section
          id="projects"
          className="py-24 px-6 lg:px-12 max-w-[1200px] mx-auto"
        >
          <div className="mb-12">
            <Kicker className="mb-4">Projects</Kicker>
            <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
              Built in the open
            </h2>
            <p className="text-[var(--color-muted)] max-w-[700px]">
              A few things I&apos;ve built alongside the writing. The newsletter
              shows how I think; these show what I ship.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[var(--color-link)] hover:gap-3 hover:text-[var(--color-link-hover)] transition-all"
            >
              See all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Community Section — Workshops (Maven) + Speaking */}
        {/* NOTE: Update workshop dates/links inline below. Speaking entries
            live in src/lib/speaking.ts and also render on /speaking. */}
        <section
          id="community"
          className="py-24 px-6 lg:px-12 bg-[var(--color-surface)] border-t border-[var(--color-border)]"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-16">
              <Kicker className="mb-4">Community</Kicker>
              <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                Workshops &amp; speaking
              </h2>
              <p className="text-[var(--color-muted)] max-w-[700px]">
                Teaching and showing up in the developer community: live,
                hands-on workshops, plus the talks, panels, and demos I give
                along the way.
              </p>
            </div>

            {/* Up next: Portland AI Engineers meetups (live feed from Luma).
                Renders nothing when there are no upcoming events. */}
            <UpcomingMeetups />

            {/* Workshops */}
            <div className="mb-20">
              <div className="mb-10 pb-4 border-b border-[var(--color-border)]">
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-2xl sm:text-3xl text-[var(--color-text)]">
                  Workshops
                </h3>
                <p className="text-[var(--color-muted)] mt-3 max-w-[700px]">
                  Live, hands-on sessions on Maven. You won&apos;t just hear
                  about AI tools. You&apos;ll use them in real time, building
                  artifacts you take back to work.
                </p>
              </div>

              {/* Always available */}
              <div className="mb-16">
                <h4 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl text-[var(--color-text)] mb-5 flex items-center gap-3">
                  <span aria-hidden="true" className="text-[var(--color-accent)]">
                    /
                  </span>{" "}
                  Always available
                </h4>
                <div className="grid md:grid-cols-2 gap-8 max-w-[1000px]">
                  <div className="p-6 bg-[var(--color-base)] border border-[var(--color-border)] rounded-xl flex flex-col transition-all duration-200 hover:border-[var(--color-accent)]/60 hover:shadow-md">
                    <span className="inline-flex self-start px-2.5 py-1 bg-[var(--color-accent)]/15 text-[var(--color-text)] text-xs font-semibold tracking-wide rounded-full mb-3">
                      Free
                    </span>
                    <h5 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-lg mb-2">
                      Build the CLAUDE.md Your Project Needs
                    </h5>
                    <p className="text-sm text-[var(--color-muted)] mb-5 flex-grow">
                      A 30-minute lightning lesson. Learn the framework for
                      structuring the project context file that makes Claude
                      Code actually understand your codebase.
                    </p>
                    <a
                      href="https://maven.com/p/6a115a/build-the-claude-md-your-project-needs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-ink)] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg self-start"
                    >
                      Watch free on Maven
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Context Engineering — perpetual Maven cohort. Update the
                      "Next cohort" line as new cohorts are scheduled (waitlist
                      copy when none is on the calendar). */}
                  <div className="p-6 bg-[var(--color-base)] border border-[var(--color-border)] rounded-xl flex flex-col transition-all duration-200 hover:border-[var(--color-accent)]/60 hover:shadow-md">
                    <span className="inline-flex self-start px-2.5 py-1 bg-[var(--color-accent)]/15 text-[var(--color-text)] text-xs font-semibold tracking-wide rounded-full mb-3">
                      Maven · Live cohort
                    </span>
                    <h5 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-lg mb-2">
                      Context Engineering for Claude Code
                    </h5>
                    <p className="text-sm font-semibold text-[var(--color-text)] mb-3">
                      Next cohort: TBA &middot; waitlist open
                    </p>
                    <p className="text-sm text-[var(--color-muted)] mb-5 flex-grow">
                      A live cohort workshop, run on a recurring basis. Build
                      the context layer that turns Claude Code from a
                      suggestion engine into a development partner: CLAUDE.md,
                      skills, hooks, and the maturity ladder, all hands-on.
                    </p>
                    <a
                      href="https://maven.com/altered-craft-learning/context-engineering-for-claude-code"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-ink)] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg self-start"
                    >
                      Join the waitlist on Maven
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Upcoming — no scheduled one-off workshops right now. When one is
                  booked, add an "Upcoming" subsection here (header pattern matches
                  "Always available"/"Previous" above and below; the prior Packt
                  card lives in git history), then move it to "Previous" once it
                  has happened. */}

              {/* Previous */}
              {/* FUTURE-AGENT NOTE: Keep this list to the 2 most recent past workshops.
                  Additional past events belong on /previous-workshops (the destination
                  of the "See all previous workshops" link below). */}
              <div className="mb-12">
                <h4 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl text-[var(--color-text)] mb-5 flex items-center gap-3">
                  <span aria-hidden="true" className="text-[var(--color-accent)]">
                    /
                  </span>{" "}
                  Previous
                </h4>
                <div className="grid md:grid-cols-2 gap-8 max-w-[1000px]">
                  {/* Effective Software Engineering with Claude Code */}
                  <div className="bg-[var(--color-base)] border border-[var(--color-border)] rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:border-[var(--color-accent)]/60 hover:shadow-md">
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
                        sizes="(min-width: 768px) 468px, 100vw"
                        className="object-cover"
                      />
                    </a>
                    <div className="p-5 flex flex-col flex-grow">
                      <h5 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[1rem] text-[var(--color-text)] mb-1">
                        Effective Software Engineering with Claude Code
                      </h5>
                      <p className="text-xs text-[var(--color-muted)] mb-2">
                        Packt · Deep Engineering · June 20, 2026
                      </p>
                      <p className="text-sm text-[var(--color-muted)] mb-4 flex-grow">
                        From prompts to systems. CLAUDE.md context layers,
                        reusable skills, guardrails, and team-level practices
                        for senior engineers and tech leads.
                      </p>
                      <a
                        href="https://www.eventbrite.co.uk/e/effective-software-engineering-with-claude-code-from-prompts-to-systems-tickets-1988571262176"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-link)] hover:text-[var(--color-link-hover)] transition-colors self-start"
                      >
                        View event
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Building RAG Applications */}
                  <div className="bg-[var(--color-base)] border border-[var(--color-border)] rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:border-[var(--color-accent)]/60 hover:shadow-md">
                    <div className="relative h-40">
                      <Image
                        src={ragWorkshopImg}
                        alt="Sam Keen teaching a RAG workshop to a room of developers"
                        fill
                        sizes="(min-width: 768px) 468px, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h5 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[1rem] text-[var(--color-text)] mb-1">
                        Building RAG Applications
                      </h5>
                      <p className="text-xs text-[var(--color-muted)] mb-2">
                        In-person workshop
                      </p>
                      <p className="text-sm text-[var(--color-muted)] flex-grow">
                        Hands-on workshop teaching retrieval-augmented
                        generation patterns with real-world datasets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-5">
                <Link
                  href="/previous-workshops"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-text)] font-semibold tracking-wide text-sm hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-colors rounded-lg"
                >
                  See all previous workshops
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://maven.com/altered-craft-learning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-link)] transition-colors"
                >
                  Browse all offerings on Maven
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Speaking */}
            <div>
              <div className="mb-10 pb-4 border-b border-[var(--color-border)]">
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-2xl sm:text-3xl text-[var(--color-text)]">
                  Speaking
                </h3>
                <p className="text-[var(--color-muted)] mt-3 max-w-[700px]">
                  Talks, panels, and demos on AI-assisted software development.
                </p>
              </div>

              {SPEAKING_PAST.length > 0 && (
                <ul className="divide-y divide-[var(--color-border)] mb-12 max-w-[1000px]">
                  {SPEAKING_PAST.map((event) => (
                    <EngagementRow key={event.title} event={event} />
                  ))}
                </ul>
              )}

              <h4 className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-xl text-[var(--color-text)] mb-6">
                Recordings
              </h4>
              <SpeakingRecordings />

              <div className="mt-10">
                <Link
                  href="/speaking"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[var(--color-link)] hover:gap-3 hover:text-[var(--color-link-hover)] transition-all"
                >
                  See all talks &amp; panels
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-24 px-6 lg:px-12 border-t border-[var(--color-border)]"
        >
          <div className="max-w-[1200px] mx-auto">
            <Kicker className="mb-10">About</Kicker>
            <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-16">
              {/* Photo */}
              <div className="aspect-square bg-[var(--color-surface-alt)] rounded-2xl relative overflow-hidden ring-1 ring-[var(--color-border)] shadow-sm">
                <Image
                  src={samCasualImg}
                  alt="Sam Keen, founder of AlteredCraft"
                  fill
                  sizes="(min-width: 1024px) 300px, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Bio */}
              <div>
                <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-3xl mb-6">
                  Sam Keen
                </h2>
                <div className="space-y-4 text-[var(--color-muted)]">
                  <p>
                    I&apos;ve spent 25+ years shipping production software at
                    companies like Nike, Lululemon, AWS, and a handful of
                    startups. I led the GenAI Innovation Lab at AWS, where I
                    helped teams separate signal from noise in AI adoption.
                  </p>
                  <p>
                    Now my work is AI-assisted development: building in the
                    open, writing, and teaching. Building <em>with</em> AI, not
                    building AI. My{" "}
                    <a
                      href="https://writing.alteredcraft.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-link)] hover:text-[var(--color-link-hover)] hover:underline transition-colors"
                    >
                      newsletter
                    </a>{" "}
                    reaches developers every week, and my{" "}
                    <a
                      href="https://maven.com/altered-craft-learning"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-link)] hover:text-[var(--color-link-hover)] hover:underline transition-colors"
                    >
                      workshops on Maven
                    </a>{" "}
                    give teams hands-on systems for working with tools like
                    Claude Code.
                  </p>
                  <p>
                    I also co-founded{" "}
                    <a
                      href="https://www.meetup.com/portland-ai-engineers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-link)] hover:text-[var(--color-link-hover)] hover:underline transition-colors"
                    >
                      Portland AI Engineers
                    </a>
                    , a community of 1,500+ practitioners exploring practical AI
                    together.
                  </p>
                  <p>
                    I occasionally take on select consulting engagements for
                    engineering teams navigating AI adoption.{" "}
                    <a
                      href="https://fantastical.app/samkeen/meet-with-sam-keen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-link)] hover:text-[var(--color-link-hover)] hover:underline transition-colors"
                    >
                      Let&apos;s talk
                    </a>{" "}
                    if that&apos;s of interest.
                  </p>
                </div>
                <div className="flex gap-3 mt-8">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter variant="full" />
    </div>
  );
}
