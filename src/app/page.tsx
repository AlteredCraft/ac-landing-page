import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
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
import { SectionHeading } from "@/components/SectionHeading";
import { badge, btn, card, container, lift, proseLink } from "@/lib/styles";

const WAYS_IN = [
  {
    href: "#writing",
    title: "The newsletter",
    body: "A weekly AI review for developers, plus long-form deep dives.",
  },
  {
    href: "#community",
    title: "Workshops",
    body: "Live, hands-on sessions on Maven. Build it, then take it back to work.",
  },
  {
    href: "#projects",
    title: "Projects",
    body: "Tools for coding agents, built in the open.",
  },
];

const CREDENTIALS = [
  { label: "formerly at", value: "AWS · Lululemon · Nike" },
  { label: "shipping software", value: "25+ years in production" },
  {
    label: "co-founder",
    value: "Portland AI Engineers",
    note: "1,500+ members",
    href: "https://www.meetup.com/portland-ai-engineers/",
  },
  {
    label: "founder",
    value: "Cascadia Builders Club",
    href: "https://luma.com/cascadia-bc",
  },
];

const DIFFERENTIATORS: { title: string; note?: string }[] = [
  { title: "Production-informed, not demo magic" },
  {
    title: "Written by someone who shipped code for 25+ years",
    note: "ex AWS · Lululemon · Nike",
  },
  { title: "No hype, grounded in hands-on research and experimentation" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samkeen" },
  { label: "Substack", href: "https://writing.alteredcraft.com" },
  { label: "Threads", href: "https://www.threads.net/@sam.keen" },
  { label: "X", href: "https://x.com/samkeen" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-base)]">
      <SiteNav />

      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section
          className={`${container} grid gap-10 lg:gap-20 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end pt-10 lg:pt-[88px] pb-9 lg:pb-16`}
        >
          <div className="flex flex-col gap-5 lg:gap-7">
            <Kicker>newsletter · workshops · projects</Kicker>
            <h1 className="serif m-0 text-[50px] sm:text-[68px] lg:text-[88px] leading-[0.98]">
              The craft of working with{" "}
              <span className="highlight px-[5px] lg:px-2">
                machines that write code
              </span>
              .
            </h1>
            <p className="m-0 text-lg lg:text-[22px] leading-[1.45] max-w-[32em]">
              Research, writing, and mentorship on agentic coding for engineers
              who ship.
            </p>
            <p className="m-0 text-[15.5px] lg:text-[17px] leading-relaxed text-[var(--color-body)] max-w-[40em]">
              I&apos;m Sam Keen. I work hands-on with coding agents, then write
              and teach what actually holds up via weekly newsletter, live
              workshops, and the classroom. Author of{" "}
              <a
                href="https://www.amazon.com/Clean-Architecture-Python-maintainable-architectural/dp/183664289X"
                target="_blank"
                rel="noopener noreferrer"
                className={proseLink}
              >
                Clean Architecture with Python
              </a>
              , and formerly a generative AI architect at AWS.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 pt-1">
              <a href="#writing" className={btn.primary}>
                Read the newsletter
              </a>
              <a href="#community" className={btn.outline}>
                Community
              </a>
              <a
                href="https://www.linkedin.com/in/samkeen"
                target="_blank"
                rel="noopener noreferrer"
                className="mono hidden sm:inline-flex items-center gap-1.5 h-12 px-2.5 text-[13px] hover:text-[var(--color-blue)] transition-colors"
              >
                Connect
                <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <nav
            aria-label="Three ways in"
            className={`${card} hidden lg:flex flex-col px-6 py-[22px]`}
          >
            <p className="mono text-[var(--color-muted)] pb-3">Three ways in</p>
            {WAYS_IN.map((way, i) => (
              <a
                key={way.href}
                href={way.href}
                className={`group grid grid-cols-[40px_minmax(0,1fr)_16px] gap-x-3 gap-y-1 items-start border-t border-[var(--color-hairline)] ${
                  i === WAYS_IN.length - 1 ? "pt-4" : "py-4"
                }`}
              >
                <span className="mono text-[var(--color-blue)] pt-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="serif text-[28px] leading-[1.1] group-hover:text-[var(--color-blue)] transition-colors">
                    {way.title}
                  </span>
                  <span className="text-sm leading-[1.45] text-[var(--color-body)]">
                    {way.body}
                  </span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="w-3.5 h-3.5 mt-3 transition-transform group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </nav>
        </section>

        {/* Credentials strip */}
        <section aria-label="Background" className={`${container} pb-10 lg:pb-24`}>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-[18px] lg:gap-6 border-t-[1.5px] border-[var(--color-ink)] pt-4 lg:pt-5">
            {CREDENTIALS.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5 lg:gap-2">
                <dt className="mono text-[var(--color-muted)]">{item.label}</dt>
                <dd className="text-[15px] lg:text-[17px] font-semibold leading-[1.3]">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--color-blue)] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                  {item.note && (
                    <span className="mono hidden lg:block mt-1 font-normal text-[var(--color-muted)]">
                      {item.note}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Newsletter */}
        <section id="writing" className={`${container} pb-12 lg:pb-[104px]`}>
          <div className="grid gap-[18px] lg:gap-[72px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] px-[22px] py-7 lg:p-14 bg-[var(--color-ink)] text-[var(--color-on-ink)] rounded-xl lg:rounded-[14px]">
            <div className="flex flex-col gap-[18px] lg:gap-[22px]">
              <Kicker className="text-[var(--color-lime)]">newsletter</Kicker>
              <h2 className="serif m-0 text-[44px] lg:text-[68px] leading-[0.98] text-white">
                Signal over hype, weekly.
              </h2>
              <p className="m-0 text-[15px] lg:text-[17px] leading-relaxed text-[var(--color-on-ink-body)] max-w-[32em]">
                Every week, I dig into what&apos;s actually working in the new
                AI abstraction layer so you can make informed decisions without
                drowning in hype. A consistent weekly AI review for developers,
                plus long-form deep dives that go beyond the headlines.
              </p>

              {/* Hands the email to Substack's subscribe page, which prefills
                  it and completes the signup there. */}
              <form
                action="https://writing.alteredcraft.com/subscribe"
                method="get"
                target="_blank"
                className="flex flex-col gap-2 mt-2 max-w-[460px]"
              >
                <label htmlFor="nl-email" className="mono text-[var(--color-on-ink-body)]">
                  Email
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    id="nl-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="flex-grow min-w-0 h-12 px-3.5 rounded-md border border-[var(--color-ink-input-border)] bg-[var(--color-ink-raised)] text-white text-[15px] placeholder:text-[var(--color-on-ink-muted)] focus-visible:outline-[var(--color-lime)]"
                  />
                  <button
                    type="submit"
                    className="h-12 px-5 rounded-md bg-[var(--color-lime)] text-[var(--color-ink)] text-[15px] font-semibold hover:bg-[var(--color-lime-hover)] transition-colors cursor-pointer"
                  >
                    Subscribe free
                  </button>
                </div>
              </form>

              <a
                href="https://writing.alteredcraft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mono self-start inline-flex items-center gap-1.5 min-h-6 text-[var(--color-on-ink)] underline underline-offset-4 hover:text-[var(--color-lime)] transition-colors"
              >
                Browse the archive on Substack
                <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex flex-col lg:self-end">
              <p className="mono text-[var(--color-on-ink-muted)] pb-3.5 hidden lg:block">
                What makes it different
              </p>
              <ul>
                {DIFFERENTIATORS.map((item, i) => (
                  <li
                    key={item.title}
                    className={`grid grid-cols-[22px_minmax(0,1fr)] lg:grid-cols-[28px_minmax(0,1fr)] gap-2.5 lg:gap-3 items-start border-t border-[var(--color-ink-border)] ${
                      i === DIFFERENTIATORS.length - 1
                        ? "py-3.5 lg:pt-5 lg:pb-0 border-b lg:border-b-0"
                        : "py-3.5 lg:py-5"
                    }`}
                  >
                    <Check
                      aria-hidden="true"
                      strokeWidth={2.25}
                      className="w-3.5 h-3.5 lg:w-4 lg:h-4 mt-[5px] lg:mt-2 text-[var(--color-lime)]"
                    />
                    <div className="flex flex-col gap-1.5">
                      <p className="serif text-[22px] lg:text-[30px] leading-[1.1] text-white">
                        {item.title}
                      </p>
                      {item.note && (
                        <p className="mono hidden lg:block text-[var(--color-on-ink-muted)]">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Latest issues - loaded client-side on page view */}
          <LatestPosts />
        </section>

        {/* Projects preview — full list lives on /projects */}
        <section
          id="projects"
          className={`${container} flex flex-col gap-[18px] lg:gap-7 pb-12 lg:pb-[104px]`}
        >
          <SectionHeading title="Built in the open" label="projects" />
          <p className="m-0 text-[15.5px] lg:text-lg leading-[1.55] text-[var(--color-body)] max-w-[40em]">
            A few things I&apos;ve built alongside the writing. The newsletter
            shows how I think; these show what I ship.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <Link href="/projects" className={`${btn.outline} sm:self-center`}>
            See all projects
            <ArrowRight aria-hidden="true" className="w-4 h-4" />
          </Link>
        </section>

        {/* Community — Workshops (Maven) + Speaking */}
        {/* NOTE: Update workshop dates/links inline below. Speaking entries
            live in src/lib/speaking.ts and also render on /speaking. */}
        <section
          id="community"
          className={`${container} flex flex-col gap-[18px] lg:gap-7 pb-12 lg:pb-[104px]`}
        >
          <SectionHeading title="Community" label="workshops · speaking" />
          <p className="m-0 text-[15.5px] lg:text-lg leading-[1.55] text-[var(--color-body)] max-w-[40em]">
            Teaching and showing up in the developer community: live, hands-on
            workshops, plus the talks, panels, and demos I give along the way.
          </p>

          {/* Up next: community meetups (live feed from Luma).
              Renders nothing when there are no upcoming events. */}
          <UpcomingMeetups />

          {/* Workshops */}
          <div className="flex items-baseline justify-between gap-6 pt-2 lg:pt-3">
            <h3 className="serif m-0 text-[28px] lg:text-4xl leading-none">
              Workshops
            </h3>
            <p className="mono text-[var(--color-muted)] hidden sm:block">
              live, hands-on sessions on Maven
            </p>
          </div>

          {/* Always available — evergreen / on-demand offerings */}
          <p className="mono text-[var(--color-muted)] -mb-1 lg:-mb-2">
            always available
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="flex flex-col gap-3 lg:gap-4 px-5 py-[22px] lg:px-8 lg:py-[30px] bg-[var(--color-surface)] border-[1.5px] border-[var(--color-ink)] rounded-[10px]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className={badge.lime}>
                  free
                </span>
                <span className="mono text-[var(--color-muted)]">
                  30-min lightning lesson
                </span>
              </div>
              <h4 className="serif m-0 text-[30px] lg:text-[40px] leading-[1.02]">
                Build the CLAUDE.md Your Project Needs
              </h4>
              <p className="m-0 text-[14.5px] lg:text-[15.5px] leading-[1.55] text-[var(--color-body)]">
                Learn the framework for structuring the project context file
                that makes Claude Code actually understand your codebase.
              </p>
              <a
                href="https://maven.com/p/6a115a/build-the-claude-md-your-project-needs"
                target="_blank"
                rel="noopener noreferrer"
                className={`${btn.primary} mt-auto sm:self-start px-5`}
              >
                Watch free on Maven
                <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Context Engineering — perpetual Maven cohort. Update the
                cohort line as new cohorts are scheduled (waitlist copy when
                none is on the calendar). */}
            <article className="flex flex-col gap-3 lg:gap-4 px-5 py-[22px] lg:px-8 lg:py-[30px] bg-[var(--color-ink)] text-[var(--color-on-ink)] rounded-[10px]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className={badge.blue}>
                  live cohort
                </span>
                <span className="mono text-[var(--color-lime)]">
                  next cohort: TBA · waitlist open
                </span>
              </div>
              <h4 className="serif m-0 text-[30px] lg:text-[40px] leading-[1.02] text-white">
                Context Engineering for Claude Code
              </h4>
              <p className="m-0 text-[14.5px] lg:text-[15.5px] leading-[1.55] text-[var(--color-on-ink-body)]">
                A live cohort workshop, run on a recurring basis. Build the
                context layer that turns Claude Code from a suggestion engine
                into a development partner: CLAUDE.md, skills, hooks, and the
                maturity ladder, all hands-on.
              </p>
              <a
                href="https://maven.com/altered-craft-learning/context-engineering-for-claude-code"
                target="_blank"
                rel="noopener noreferrer"
                className={`${btn.lime} mt-auto sm:self-start`}
              >
                Join the waitlist on Maven
                <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
              </a>
            </article>
          </div>

          {/* Upcoming — no scheduled one-off workshops right now. When one is
              booked, add an "upcoming" label + card grid here (same pattern as
              "always available" above and "previous" below), then move it to
              "previous" once it has happened. */}

          {/* Previous */}
          {/* FUTURE-AGENT NOTE: Keep this list to the 2 most recent past workshops.
              Additional past events belong on /previous-workshops (the destination
              of the "See all previous workshops" link below). */}
          <p className="mono text-[var(--color-muted)] pt-1.5 lg:pt-2 -mb-1 lg:-mb-2">
            previous
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="https://www.eventbrite.co.uk/e/effective-software-engineering-with-claude-code-from-prompts-to-systems-tickets-1988571262176"
              target="_blank"
              rel="noopener noreferrer"
              className={`${card} ${lift} group grid xl:grid-cols-[260px_minmax(0,1fr)] overflow-hidden`}
            >
              <div className="relative h-[175px] xl:h-full xl:min-h-[230px] bg-[#1F2547]">
                <Image
                  src={packtWorkshopImg}
                  alt="Packt × Deep Engineering: Effective Software Engineering with Claude Code"
                  fill
                  sizes="(min-width: 1280px) 260px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2.5 px-[18px] py-4 lg:px-6 lg:py-[22px]">
                <p className="mono text-[var(--color-muted)]">
                  Packt · Deep Engineering · Jun 20, 2026
                </p>
                <h4 className="serif text-2xl lg:text-[28px] leading-[1.05] group-hover:text-[var(--color-blue)] transition-colors">
                  Effective Software Engineering with Claude Code
                </h4>
                <p className="text-sm leading-normal text-[var(--color-body)]">
                  From prompts to systems. CLAUDE.md context layers, reusable
                  skills, guardrails, and team-level practices for senior
                  engineers and tech leads.
                </p>
                <span className="mono mt-auto inline-flex items-center gap-1.5 text-[13px] text-[var(--color-blue)]">
                  View event
                  <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>

            <div className={`${card} grid xl:grid-cols-[260px_minmax(0,1fr)] overflow-hidden`}>
              <div className="relative h-[175px] xl:h-full xl:min-h-[230px]">
                <Image
                  src={ragWorkshopImg}
                  alt="Sam Keen teaching a RAG workshop to a room of developers"
                  fill
                  sizes="(min-width: 1280px) 260px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col gap-2.5 px-[18px] py-4 lg:px-6 lg:py-[22px]">
                <p className="mono text-[var(--color-muted)]">
                  In-person workshop
                </p>
                <h4 className="serif text-2xl lg:text-[28px] leading-[1.05]">
                  Building RAG Applications
                </h4>
                <p className="text-sm leading-normal text-[var(--color-body)]">
                  Hands-on workshop teaching retrieval-augmented generation
                  patterns with real-world datasets.
                </p>
              </div>
            </div>
          </div>
          <div className="mono flex flex-wrap gap-x-7 gap-y-2 text-[13px]">
            <Link
              href="/previous-workshops"
              className="inline-flex items-center gap-1.5 min-h-6 underline underline-offset-4 hover:text-[var(--color-blue)] transition-colors"
            >
              See all previous workshops
              <ArrowRight aria-hidden="true" className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://maven.com/altered-craft-learning"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 min-h-6 underline underline-offset-4 hover:text-[var(--color-blue)] transition-colors"
            >
              Browse all offerings on Maven
              <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Speaking */}
          <div className="flex items-baseline justify-between gap-6 pt-4 lg:pt-9">
            <h3 className="serif m-0 text-[28px] lg:text-4xl leading-none">
              Speaking
            </h3>
            <p className="mono text-[var(--color-muted)] hidden sm:block text-right">
              talks, panels, and demos on AI-assisted software development
            </p>
          </div>
          <div className="grid gap-8 lg:gap-14 lg:grid-cols-[minmax(0,1fr)_400px]">
            {SPEAKING_PAST.length > 0 && (
              <ol className="flex flex-col">
                {SPEAKING_PAST.map((event) => (
                  <EngagementRow key={event.title} event={event} />
                ))}
              </ol>
            )}
            <aside aria-label="Recordings" className="flex flex-col gap-4">
              <p className="mono text-[var(--color-muted)]">recordings</p>
              <SpeakingRecordings className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1" />
            </aside>
          </div>
          <Link href="/speaking" className={`${btn.outline} sm:self-center`}>
            See all talks &amp; panels
            <ArrowRight aria-hidden="true" className="w-4 h-4" />
          </Link>
        </section>

        {/* About */}
        <section id="about" className={`${container} pb-12 lg:pb-[104px]`}>
          <div className="grid gap-[18px] lg:gap-20 lg:grid-cols-[380px_minmax(0,1fr)] border-t-[1.5px] border-[var(--color-ink)] pt-4 lg:pt-10">
            <Kicker className="text-[var(--color-muted)] lg:hidden">about</Kicker>
            <div className="flex flex-col gap-3">
              <div className="relative w-full max-w-[380px] aspect-square rounded-[10px] overflow-hidden bg-[var(--color-hairline)]">
                <Image
                  src={samCasualImg}
                  alt="Sam Keen, founder of AlteredCraft"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mono text-[var(--color-muted)] hidden lg:block">
                Sam Keen · Portland, OR
              </p>
            </div>

            <div className="flex flex-col gap-[18px] lg:gap-[22px] max-w-[680px]">
              <Kicker className="text-[var(--color-muted)] hidden lg:block">about</Kicker>
              <h2 className="serif m-0 text-[56px] lg:text-[80px] leading-[0.95]">
                Sam Keen
              </h2>
              <p className="m-0 text-[16px] lg:text-lg leading-relaxed text-[var(--color-body)]">
                I&apos;ve spent 25+ years shipping production software at
                companies like Nike, Lululemon, AWS, and a handful of startups.
                I led the GenAI Innovation Lab at AWS, where I helped teams
                separate signal from noise in AI adoption.
              </p>
              <p className="m-0 text-[16px] lg:text-lg leading-relaxed text-[var(--color-body)]">
                Now my work is AI-assisted development: building in the open,
                writing, and teaching.{" "}
                <span className="font-semibold text-[var(--color-text)]">
                  Building with AI, not building AI.
                </span>{" "}
                My{" "}
                <a
                  href="https://writing.alteredcraft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={proseLink}
                >
                  newsletter
                </a>{" "}
                reaches developers every week, and my{" "}
                <a
                  href="https://maven.com/altered-craft-learning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={proseLink}
                >
                  workshops on Maven
                </a>{" "}
                give teams hands-on systems for working with tools like Claude
                Code.
              </p>
              <p className="m-0 text-[16px] lg:text-lg leading-relaxed text-[var(--color-body)]">
                I also co-founded{" "}
                <a
                  href="https://www.meetup.com/portland-ai-engineers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={proseLink}
                >
                  Portland AI Engineers
                </a>
                , a community of 1,500+ practitioners exploring practical AI
                together.
              </p>
              <div className={`${card} flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-6 p-[18px] sm:px-6 sm:py-5`}>
                <p className="m-0 text-[14.5px] lg:text-[15.5px] leading-normal text-[var(--color-body)]">
                  I occasionally take on select consulting engagements for
                  engineering teams navigating AI adoption.
                </p>
                <a
                  href="https://fantastical.app/samkeen/meet-with-sam-keen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btn.blue} flex-shrink-0`}
                >
                  Let&apos;s talk
                </a>
              </div>
              <ul className="mono flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center min-h-6 hover:text-[var(--color-blue)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter variant="full" />
    </div>
  );
}
