import Image from "next/image";
import { MobileMenu } from "@/components/MobileMenu";
import {
  Mail,
  BookOpen,
  Users,
  Compass,
  Mic,
  Check,
  BookMarked,
  Building2,
  TrendingUp,
  FileText,
} from "lucide-react";

const NAV_LINKS = [
  { href: "#newsletter", label: "Newsletter" },
  { href: "#courses", label: "Courses" },
  { href: "#teams", label: "For Teams" },
  { href: "#speaking", label: "Speaking" },
  { href: "#about", label: "About" },
];

const OFFERINGS = [
  {
    id: "newsletter",
    title: "Newsletter",
    description: "Weekly applied AI insights for developers",
    Icon: Mail,
  },
  {
    id: "courses",
    title: "Courses",
    description: "Self-paced learning to go deeper",
    Icon: BookOpen,
  },
  {
    id: "teams",
    title: "Workshops",
    description: "Live, instructor-led sessions for teams",
    Icon: Users,
  },
  {
    id: "advisory",
    title: "AI Strategy Advisory",
    description: "Scoped engagements for engineering leadership",
    Icon: Compass,
  },
  {
    id: "speaking",
    title: "Speaking",
    description: "Conference talks and keynotes",
    Icon: Mic,
  },
];

const CREDIBILITY = [
  { label: "Published Author", detail: "Clean Architecture with Python" },
  { label: "AWS", detail: "Former GenAI Innovation Lab Lead" },
  { label: "Community", detail: "Portland AI Engineers, 1,100+ members" },
  { label: "Track Record", detail: "150+ weekly editions" },
];

const COURSES = [
  {
    title: "Prompt Engineering for Developers",
    description:
      "Master the techniques that separate effective AI collaboration from frustrating trial-and-error.",
    tags: ["Fundamentals", "Hands-on"],
  },
  {
    title: "Building with LLM APIs",
    description:
      "From API basics to production patterns—build real applications with language models.",
    tags: ["Technical", "Production"],
  },
  {
    title: "AI-Assisted Development Workflows",
    description:
      "Integrate AI tools into your daily development practice without losing engineering rigor.",
    tags: ["Workflow", "Practical"],
  },
];

const WORKSHOP_TOPICS = [
  "Prompt Engineering Fundamentals",
  "Building Production LLM Applications",
  "AI-Assisted Development for Teams",
  "Evaluating AI Tools & Platforms",
  "Custom workshops for your context",
];

const ADVISORY_TYPES = [
  {
    title: "AI Readiness Assessment",
    description:
      "Evaluate your team's current state and identify high-impact opportunities.",
  },
  {
    title: "Tool & Platform Selection",
    description:
      "Navigate the vendor landscape with structured evaluation criteria.",
  },
  {
    title: "Adoption Roadmap",
    description:
      "Practical, phased plan for integrating AI into your development workflow.",
  },
  {
    title: "Architecture Review",
    description:
      "Technical review of AI integration patterns and production considerations.",
  },
];

const TALK_TOPICS = [
  {
    title: "The New Abstraction Layer",
    description:
      "How AI is changing the developer's relationship with code—and what to do about it.",
  },
  {
    title: "Beyond the Demo",
    description:
      "What actually works when you move AI from prototype to production.",
  },
  {
    title: "Evaluating AI Tools Without the Hype",
    description:
      "A practical framework for cutting through marketing to find real value.",
  },
  {
    title: "Building AI-Native Development Teams",
    description:
      "Organizational patterns for teams that ship with AI, not just talk about it.",
  },
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
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[var(--color-surface)]/95 backdrop-blur-sm border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center">
              <Image
                src="/AC-logo.svg"
                alt="AlteredCraft"
                width={44}
                height={44}
                className="h-10 w-10"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="#newsletter"
                className="hidden sm:inline-flex px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                Subscribe
              </a>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-12 sm:pt-16 pb-20 sm:pb-28 lg:pb-36">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Brand Wordmark */}
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-center mb-12 sm:mb-16 lg:mb-20 text-[var(--color-text)] tracking-tight uppercase">
              Altered Craft
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text)] leading-[1.1] tracking-tight">
                  Applied AI guidance for the people who build software.
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-[var(--color-muted)] leading-relaxed">
                  AI is reshaping how software gets built. The tooling moves
                  fast, the noise is deafening, and nobody got a manual.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#newsletter"
                    className="inline-flex justify-center px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
                  >
                    Subscribe free
                  </a>
                  <a
                    href="#offerings"
                    className="inline-flex justify-center px-6 py-3 border-2 border-[var(--color-text)] text-[var(--color-text)] font-semibold rounded-lg hover:bg-[var(--color-text)] hover:text-[var(--color-surface)] transition-colors"
                  >
                    Explore offerings →
                  </a>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/sam-headshot-casual-500x500.png"
                    alt="Sam Keen"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility Strip */}
        <section className="py-12 bg-[var(--color-surface)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {CREDIBILITY.map((item) => (
                <div key={item.label} className="text-center lg:text-left">
                  <div className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wide">
                    {item.label}
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-muted)]">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offerings Overview */}
        <section id="offerings" className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
                From weekly insights to hands-on strategy
              </h2>
              <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                The format scales to the need—whether you&apos;re an individual
                developer staying current or a team building with AI.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {OFFERINGS.map((offering) => (
                <a
                  key={offering.id}
                  href={`#${offering.id === "advisory" ? "teams" : offering.id}`}
                  className="group p-6 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-lg transition-all"
                >
                  <offering.Icon className="w-8 h-8 text-[var(--color-accent)]" />
                  <h3 className="mt-4 text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    {offering.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    {offering.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-20 sm:py-28 bg-[var(--color-surface)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
                Stay calibrated
              </h2>
              <p className="mt-4 text-lg text-[var(--color-muted)]">
                Every week, I dig into what&apos;s actually working in the new
                AI abstraction layer so you can make informed decisions without
                drowning in hype.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-[var(--color-base)] rounded-xl">
                  <div className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wide">
                    Free
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--color-text)]">
                    Monday AI Review
                  </h3>
                  <p className="mt-2 text-[var(--color-muted)]">
                    Signal filtering—what matters this week in AI for
                    developers.
                  </p>
                </div>
                <div className="p-6 bg-[var(--color-base)] rounded-xl border-2 border-[var(--color-accent)]">
                  <div className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wide">
                    Premium · $10/mo
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--color-text)]">
                    Thursday Deep Dives
                  </h3>
                  <p className="mt-2 text-[var(--color-muted)]">
                    Tech Explorations & Industry Analysis. Go deeper than the
                    headlines.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-semibold text-[var(--color-text)] mb-4">
                  What makes it different
                </h4>
                <ul className="space-y-3 text-[var(--color-muted)] text-left max-w-md mx-auto">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    Production-informed, not demo magic
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    Written by someone who ships code
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    Substance over hype, every edition
                  </li>
                </ul>
              </div>

              {/* Substack Embed Placeholder */}
              <div className="mt-10 p-8 bg-[var(--color-base)] rounded-xl">
                <iframe
                  src="https://writing.alteredcraft.com/embed"
                  width="100%"
                  height="150"
                  style={{ border: "none", background: "transparent" }}
                  frameBorder="0"
                  scrolling="no"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
                Go Deeper
              </h2>
              <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                Structured, self-paced courses for developers who want to master
                AI-assisted development.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {COURSES.map((course) => (
                <div
                  key={course.title}
                  className="p-6 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)]"
                >
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    {course.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-[var(--color-surface-alt)] text-[var(--color-muted)] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-sm font-medium text-[var(--color-accent)]">
                    Coming soon
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)]">
                <p className="text-[var(--color-muted)]">
                  Get notified when courses launch
                </p>
                <a
                  href="#newsletter"
                  className="px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
                >
                  Join the waitlist
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* For Teams Section */}
        <section id="teams" className="py-20 sm:py-28 bg-[var(--color-text)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-surface)]">
                For Teams
              </h2>
              <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                Your team needs to build with AI, not just talk about it.
                Focused workshops and strategic guidance grounded in 25 years of
                shipping production software.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Workshops */}
              <div className="p-8 bg-[var(--color-surface)]/10 rounded-2xl border border-[var(--color-surface)]/20">
                <h3 className="text-2xl font-bold text-[var(--color-surface)]">
                  Workshops
                </h3>
                <p className="mt-2 text-[var(--color-muted)]">
                  Live, instructor-led sessions (0.5–2 days). On-site or remote.
                </p>
                <p className="mt-4 text-sm text-[var(--color-surface)]/80 italic">
                  &ldquo;I teach the concepts and techniques. You adapt them to
                  your context.&rdquo;
                </p>
                <ul className="mt-6 space-y-3">
                  {WORKSHOP_TOPICS.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-3 text-[var(--color-surface)]/90"
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advisory */}
              <div className="p-8 bg-[var(--color-surface)]/10 rounded-2xl border border-[var(--color-surface)]/20">
                <h3 className="text-2xl font-bold text-[var(--color-surface)]">
                  AI Strategy Advisory
                </h3>
                <p className="mt-2 text-[var(--color-muted)]">
                  Scoped consulting engagements with defined deliverables.
                </p>
                <div className="mt-6 space-y-4">
                  {ADVISORY_TYPES.map((type) => (
                    <div key={type.title}>
                      <h4 className="font-semibold text-[var(--color-surface)]">
                        {type.title}
                      </h4>
                      <p className="text-sm text-[var(--color-surface)]/70">
                        {type.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://altered-craft.neetocal.com/meeting-with-sam-keen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                Start a conversation
              </a>
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                Or email{" "}
                <a
                  href="mailto:sam@alteredcraft.com"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  sam@alteredcraft.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Speaking Section */}
        <section id="speaking" className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
                  Speaking
                </h2>
                <p className="mt-4 text-lg text-[var(--color-muted)]">
                  Applied AI for software teams—not demos, not theory. Talks
                  grounded in real experiments and production experience.
                </p>

                <div className="mt-8 space-y-6">
                  {TALK_TOPICS.map((talk) => (
                    <div key={talk.title}>
                      <h3 className="font-semibold text-[var(--color-text)]">
                        {talk.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-muted)]">
                        {talk.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="mailto:sam@alteredcraft.com?subject=Speaking%20Inquiry"
                    className="inline-flex px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
                  >
                    Book Sam for your event
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                {/* Speaker Photo */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/speaker.png"
                    alt="Sam Keen speaking"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Credibility for speakers */}
                <div className="p-6 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)]">
                  <h4 className="font-semibold text-[var(--color-text)] mb-4">
                    Credentials
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      Author, Clean Architecture with Python (Packt)
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      Former AWS GenAI Innovation Lab Lead
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      Co-founder, Portland AI Engineers (1,100+ members)
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      150+ editions of weekly applied AI content
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      25+ years shipping production software
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 sm:py-28 bg-[var(--color-surface)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-1">
                {/* Photo */}
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/Sam_Keen_400x400.jpg"
                    alt="Sam Keen"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="mt-6 flex gap-4 justify-center lg:justify-start">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
                  About Sam Keen
                </h2>
                <div className="mt-6 space-y-4 text-[var(--color-muted)] leading-relaxed">
                  <p>
                    I&apos;ve spent 25+ years building software at companies
                    like Nike, Lululemon, AWS, and a handful of startups. I led
                    the GenAI Innovation Lab at AWS, where I helped teams figure
                    out what&apos;s real and what&apos;s noise in the AI space.
                  </p>
                  <p>
                    In 2025, I went full-time on applied AI research. Not
                    building AI—building <em>with</em> AI. Understanding how
                    these tools actually change the way we write software, lead
                    teams, and ship products.
                  </p>
                  <p>
                    AlteredCraft is where I share what I learn. Through the
                    newsletter, workshops, and advisory work, I help developers
                    and engineering leaders cut through the hype and build with
                    confidence.
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
                    , a community of 1,100+ practitioners exploring applied AI
                    together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-[var(--color-text)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <a href="/" className="flex items-center">
                <Image
                  src="/AC-logo.svg"
                  alt="AlteredCraft"
                  width={160}
                  height={32}
                  className="h-8 w-auto brightness-0 invert"
                />
              </a>
              <p className="mt-4 text-sm text-[var(--color-muted)] max-w-md">
                Applied AI guidance for the people who build software. Weekly
                insights, workshops, and strategic advisory.
              </p>

              {/* Footer newsletter CTA */}
              <div className="mt-6">
                <a
                  href="#newsletter"
                  className="inline-flex px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
                >
                  Subscribe to the newsletter
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--color-surface)] mb-4">
                Navigate
              </h4>
              <ul className="space-y-2 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[var(--color-muted)] hover:text-[var(--color-surface)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--color-surface)] mb-4">
                Connect
              </h4>
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

          <div className="mt-12 pt-8 border-t border-[var(--color-surface)]/10 text-center text-sm text-[var(--color-muted)]">
            © {new Date().getFullYear()} AlteredCraft. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
