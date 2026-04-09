import Image from "next/image";
import { BrandLockup } from "@/components/BrandLockup";
import { MobileMenu } from "@/components/MobileMenu";
import { Check, Mail, ExternalLink, ArrowRight } from "lucide-react";
import ragWorkshopImg from "../../public/speaker.png";
import hackathonImg from "../../public/hackathon-podium.png";
import oaiaThumb from "../../public/oaia-thumb.png";
import samImg from "../../public/press-kit/sam-keen-headshot-editorial.jpg";
import { LatestPosts } from "@/components/LatestPosts";

const NAV_LINKS = [
  { href: "#writing", label: "Writing" },
  { href: "#teaching", label: "Teaching" },
  { href: "#engagements", label: "Recent Engagements" },
  { href: "#about", label: "About" },
];




const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samkeen",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Substack",
    href: "https://writing.alteredcraft.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@sam.keen",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.18.408-2.26 1.332-3.04.88-.744 2.107-1.17 3.555-1.234 1.07-.047 2.064.078 2.967.367.026-.78.013-1.526-.038-2.207-.166-2.205-1.021-3.148-3.067-3.186h-.09c-1.233.014-2.275.397-2.939 1.078l-1.434-1.435C8.063 3.46 9.618 2.846 11.567 2.82h.108c1.263.015 2.402.261 3.388.733 1.073.513 1.903 1.283 2.468 2.289.528.94.83 2.09.898 3.42.033.646.04 1.327.022 2.038.47.27.897.577 1.278.92 1.192 1.073 1.876 2.534 1.975 4.222.107 1.842-.413 3.541-1.505 4.918-1.813 2.286-4.534 3.489-8.087 3.575l-.064.001zm-.12-10.863c-1.073.047-1.93.344-2.477.86-.494.466-.706 1.056-.633 1.752.073.695.386 1.195.931 1.488.587.316 1.378.443 2.168.396 1.11-.06 1.96-.462 2.53-1.194.442-.57.755-1.322.934-2.248-.925-.383-1.948-.582-3.044-.582-.134 0-.272.004-.41.012v-.484z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/samkeen",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-base)]">
      {/* Navigation - Dark nav bar */}
      <nav className="fixed top-0 left-0 right-0 py-5 px-6 lg:px-12 flex justify-between items-center bg-[#1F1D1D] z-50">
        <a href="#" className="sm:hidden">
          <BrandLockup variant="horizontal" size="sm" theme="dark" />
        </a>
        <a href="#" className="hidden sm:block">
          <BrandLockup variant="horizontal" size="md" theme="dark" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-white hover:text-[var(--color-accent)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <MobileMenu />
      </nav>

      <main>
        {/* Hero Section */}
        <section className="lg:min-h-screen flex flex-col lg:justify-center pt-20 lg:pt-24 pb-12 lg:pb-16 px-6 lg:px-12 max-w-[1000px] mx-auto">
          <h1 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[clamp(3rem,8vw,5rem)] leading-[1.05] tracking-tight mb-6 lg:mb-8">
            I write and teach about{" "}
            <span className="text-[var(--color-accent)]">building software with AI.</span>
          </h1>
          <p className="text-xl lg:text-[1.375rem] text-[var(--color-muted)] mb-4 lg:mb-6 max-w-[680px] leading-relaxed">
            I&apos;m Sam Keen. Every week I dig into what&apos;s actually
            working in AI-assisted development and share it in a
            newsletter. I teach hands-on workshops where
            developers build real systems with AI tools. I
            wrote{" "}
            <a href="https://www.amazon.com/Clean-Architecture-Python-maintainable-architectural/dp/183664289X" target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"><em>Clean Architecture with Python</em></a>{" "}
            and was formerly a generative AI architect at AWS.
          </p>

          {/* Formerly at + Community */}
          <div className="mb-6 lg:mb-12 space-y-3">
            <p className="text-sm text-[var(--color-muted)]">25+ years building software.</p>
            <div className="flex items-center gap-6 lg:gap-10">
              <span className="text-xs text-[var(--color-muted)] uppercase tracking-widest flex-shrink-0">Formerly at</span>
              <div className="flex items-center gap-8 lg:gap-12 opacity-60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/aws.svg" alt="Amazon Web Services" className="h-6 lg:h-8 w-auto" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/lululemon.svg" alt="lululemon athletica" className="h-4 lg:h-5 w-auto" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/nike.svg" alt="Nike" className="h-5 lg:h-7 w-auto" />
              </div>
            </div>
            <p className="text-sm text-[var(--color-muted)]">
              Co-founder,{" "}
              <a
                href="https://www.meetup.com/portland-ai-engineers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:underline"
              >
                Portland AI Engineers
              </a>
              {" "}— 1,200+ members
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <a
              href="#writing"
              className="flex items-center justify-center gap-2.5 w-full lg:w-auto px-9 py-4 bg-[var(--color-accent)] text-[#1F1D1D] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg"
            >
              <Mail className="w-4 h-4" />
              Read the newsletter
            </a>
            <a
              href="#teaching"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-text)] transition-colors rounded-lg"
            >
              Upcoming workshops
            </a>
            <a
              href="https://www.linkedin.com/in/samkeen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-text)] transition-colors rounded-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect
            </a>
          </div>

        </section>

        {/* Newsletter Section */}
        <section id="writing" className="py-24 px-6 lg:px-12 bg-[var(--color-surface)]">
          <div className="max-w-[1400px] mx-auto">
            <div>
              <div>
                <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                  The newsletter
                </h2>
                <p className="text-[var(--color-muted)] mb-8 max-w-[600px]">
                  Every week, I dig into what&apos;s actually working in the new
                  AI abstraction layer so you can make informed decisions without
                  drowning in hype.
                </p>

                {/* Tier Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="p-8 bg-[var(--color-base)] rounded-lg">
                    <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-2xl mb-2">
                      Monday AI Review
                    </h3>
                    <p className="text-[var(--color-muted)]">
                      Signal filtering—what matters this week in AI for developers.
                    </p>
                  </div>
                  <div className="p-8 bg-[var(--color-base)] border-[3px] border-[var(--color-accent)] rounded-lg">
                    <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-2xl mb-2">
                      <a
                        href="https://writing.alteredcraft.com/t/deep-dives-insights"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--color-accent)] transition-colors"
                      >
                        Deep Dives & Insights
                      </a>
                    </h3>
                    <p className="text-[var(--color-muted)]">
                      Tech Explorations & Industry Analysis. Go deeper than the
                      headlines.
                    </p>
                  </div>
                </div>

                {/* Latest Posts - loaded client-side on page view */}
                <LatestPosts />

                {/* What makes it different */}
                <h4 className="font-semibold mb-4">What makes it different</h4>
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    "Production-informed, not demo magic",
                    "Written by someone who shipped code for 25+ years (ex AWS | Lululemon | Nike)",
                    "No hype — grounded in hands-on research and experimentation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-[var(--color-muted)]"
                    >
                      <span className="w-5 h-5 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="p-8 bg-[var(--color-base)] text-center rounded-lg">
                  <p className="text-[var(--color-muted)] mb-4">
                    Subscribe on Substack
                  </p>
                  <a
                    href="https://writing.alteredcraft.com/subscribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-9 py-4 bg-[var(--color-accent)] text-[#1F1D1D] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg"
                  >
                    Subscribe free →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Section — Maven offerings */}
        {/* NOTE: Update dates and links when offerings change */}
        <section id="teaching" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
              Upcoming workshops
            </h2>
            <p className="text-[var(--color-muted)] max-w-[700px]">
              Live, hands-on sessions on Maven. You won&apos;t just hear about
              AI tools — you&apos;ll use them in real time, building artifacts
              you take back to work.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Free Lightning Lesson */}
            <div className="p-8 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg flex flex-col">
              <span className="inline-flex self-start px-3 py-1 bg-[var(--color-accent)]/15 text-[var(--color-accent)] text-xs font-semibold tracking-wide rounded-full mb-4">
                Free
              </span>
              <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl mb-1">
                Build the CLAUDE.md Your Project Needs
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-4">
                April 23, 2026 — 10:00 AM PT
              </p>
              <p className="text-[var(--color-muted)] mb-6 flex-grow">
                A 30-minute lightning lesson. Learn the framework for structuring
                the project context file that makes Claude Code actually
                understand your codebase.
              </p>
              <a
                href="https://maven.com/p/6a115a/build-the-claude-md-your-project-needs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[#1F1D1D] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg self-start"
              >
                Register free on Maven
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Paid Workshop — featured */}
            <div className="p-8 bg-[var(--color-surface)] border-[3px] border-[var(--color-accent)] rounded-lg flex flex-col">
              <span className="inline-flex self-start px-3 py-1 bg-[var(--color-accent)]/15 text-[var(--color-accent)] text-xs font-semibold tracking-wide rounded-full mb-4">
                $299 — Founding Price
              </span>
              <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl mb-1">
                Context Engineering for Claude Code
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-4">
                May 12, 2026 — 9:30 AM PT (3 hours)
              </p>
              <p className="text-[var(--color-muted)] mb-6 flex-grow">
                Build the context layer that turns Claude Code from a suggestion
                engine into a development partner. CLAUDE.md, skills, hooks, and
                the maturity ladder — all hands-on.
              </p>
              <a
                href="https://maven.com/altered-craft-learning/context-engineering-for-claude-code"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[#1F1D1D] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg self-start"
              >
                Enroll on Maven
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://maven.com/altered-craft-learning"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:underline"
            >
              Browse all offerings on Maven
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Recent Engagements Section */}
        <section id="engagements" className="py-24 px-6 lg:px-12 bg-[var(--color-text)] text-[var(--color-surface)]">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12">
              <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[clamp(2rem,4vw,3rem)]">
                Recent Engagements
              </h2>
              <p className="text-[var(--color-muted)] text-lg mt-4 max-w-[700px]">
                Talks, workshops, and events — see the work.
              </p>
            </div>

            {/* Featured: GOTO Conference Interview */}
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden mb-8 max-w-3xl">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/AeA7PShEkD8"
                  title="Clean Architecture with Python — GOTO Conference"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl mb-1">
                  &ldquo;Clean Architecture with Python&rdquo;
                </h3>
                <p className="text-[var(--color-muted)] text-sm">
                  Interview on the GOTO Conferences channel about the book and building maintainable software systems.
                </p>
              </div>
            </div>

            {/* Three cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Oregon AI Accelerator */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={oaiaThumb}
                    alt="Observability in AI — slide showing the antipattern of unmonitored LLM calls"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-lg mb-1">
                    Observability in AI
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] mb-1">
                    Oregon AI Accelerator
                  </p>
                  <p className="text-sm text-white/70 mb-4 flex-grow">
                    Screencast presentation on observability patterns for AI systems in production.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=DPqnZzD2glU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                  >
                    Watch on YouTube
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* RAG Workshop */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={ragWorkshopImg}
                    alt="Sam Keen teaching a RAG workshop to a room of developers"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-lg mb-1">
                    Building RAG Applications
                  </h3>
                  <p className="text-sm text-white/70">
                    Hands-on workshop teaching retrieval-augmented generation patterns with real-world datasets.
                  </p>
                </div>
              </div>

              {/* Claude Code Hackathon */}
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={hackathonImg}
                    alt="Sam Keen presenting at the Claude Code Hackathon"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-lg mb-1">
                    Claude Code Hackathon
                  </h3>
                  <p className="text-sm text-white/70 mb-4 flex-grow">
                    Community hackathon bringing developers together to build with Claude Code.
                  </p>
                  <a
                    href="https://photos.app.goo.gl/j3tAtbxr3uUBCUb96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                  >
                    View photos
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Link back to platforms */}
            <div className="text-center mt-12">
              <a
                href="https://maven.com/altered-craft-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
              >
                See upcoming workshops on Maven
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 lg:px-12 bg-[var(--color-surface)]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-16">
              {/* Photo */}
              <div className="aspect-square bg-gradient-to-br from-[var(--color-muted)] to-[var(--color-text)] rounded-lg relative overflow-hidden">
                <Image
                  src={samImg}
                  alt="Sam Keen"
                  fill
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
                    I&apos;ve spent 25+ years building software at companies like
                    Nike, Lululemon, AWS, and a handful of startups. I led the
                    GenAI Innovation Lab at AWS, where I helped teams separate
                    signal from noise in AI adoption.
                  </p>
                  <p>
                    Now I write and teach full-time about how developers build
                    with AI. Not building AI — building <em>with</em> AI. My{" "}
                    <a
                      href="https://writing.alteredcraft.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      newsletter
                    </a>{" "}
                    reaches developers every week, and my{" "}
                    <a
                      href="https://maven.com/altered-craft-learning"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-accent)] hover:underline"
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
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      Portland AI Engineers
                    </a>
                    , a community of 1,200+ practitioners exploring practical AI
                    together.
                  </p>
                  <p>
                    I occasionally take on select consulting engagements for
                    engineering teams navigating AI adoption.{" "}
                    <a
                      href="https://fantastical.app/samkeen/meet-with-sam-keen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      Let&apos;s talk
                    </a>{" "}
                    if that&apos;s of interest.
                  </p>
                </div>
                <div className="flex gap-4 mt-8">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
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

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 bg-[var(--color-text)] text-[var(--color-surface)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-16">
            <div>
              <BrandLockup variant="horizontal" size="sm" theme="dark" />
              <p className="text-[var(--color-muted)] text-sm max-w-[400px] mt-4">
                Writing and teaching about AI-assisted software development.
                Weekly newsletter and live workshops for developers building
                with AI.
              </p>
              <a
                href="https://writing.alteredcraft.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-9 py-4 bg-[var(--color-accent)] text-[#1F1D1D] font-semibold tracking-wide text-sm hover:opacity-90 transition-opacity rounded-lg"
              >
                Subscribe to the newsletter
              </a>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigate</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[var(--color-muted)] text-sm hover:text-[var(--color-surface)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/press-kit"
                    className="text-[var(--color-muted)] text-sm hover:text-[var(--color-surface)] transition-colors"
                  >
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://writing.alteredcraft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-muted)] hover:text-[var(--color-surface)] transition-colors"
                  >
                    Substack
                  </a>
                </li>
                <li>
                  <a
                    href="https://maven.com/altered-craft-learning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-muted)] hover:text-[var(--color-surface)] transition-colors"
                  >
                    Maven
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/samkeen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-muted)] hover:text-[var(--color-surface)] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.threads.net/@sam.keen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-muted)] hover:text-[var(--color-surface)] transition-colors"
                  >
                    Threads
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/samkeen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-muted)] hover:text-[var(--color-surface)] transition-colors"
                  >
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sam@alteredcraft.com"
                    className="text-[var(--color-muted)] hover:text-[var(--color-surface)] transition-colors"
                  >
                    sam@alteredcraft.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-[var(--color-muted)] text-sm">
            © {new Date().getFullYear()} Altered Craft, LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
