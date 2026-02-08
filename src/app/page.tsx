import Image from "next/image";
import { BrandLockup } from "@/components/BrandLockup";
import { MobileMenu } from "@/components/MobileMenu";
import { Check } from "lucide-react";
import speakerImg from "../../public/speaker.png";
import samImg from "../../public/Sam_Keen_400x400.jpg";

const NAV_LINKS = [
  { href: "#newsletter", label: "Newsletter" },
  { href: "#workshops", label: "Workshops" },
  { href: "#advisory", label: "Advisory" },
  { href: "#about", label: "About" },
];

const OFFERINGS = [
  { number: "01", title: "Newsletter", description: "Weekly AI insights for developers" },
  { number: "02", title: "Courses", description: "Self-paced learning to go deeper" },
  { number: "03", title: "Workshops", description: "Live, instructor-led sessions" },
  { number: "04", title: "Advisory", description: "Scoped engagements for engineering leadership" },
];

const CREDIBILITY = [
  { label: "Published Author", detail: "Clean Architecture with Python" },
  { label: "AWS", detail: "Former GenAI Innovation Lab Lead" },
  { label: "Community", detail: "Portland AI Engineers, 1,100+ members" },
  { label: "Track Record", detail: "150+ weekly editions" },
];

const WORKSHOP_TOPICS = [
  "Prompt Engineering Fundamentals",
  "Building Production LLM Applications",
  "AI-Assisted Development for Teams",
  "Evaluating AI Tools & Platforms",
  "Custom workshops for your context",
];

const ADVISORY_TYPES = [
  { title: "AI Readiness Assessment", description: "Evaluate your team's current state and identify high-impact opportunities." },
  { title: "Tool & Platform Selection", description: "Navigate the vendor landscape with structured evaluation criteria." },
  { title: "Adoption Roadmap", description: "Practical, phased plan for integrating AI into your development workflow." },
  { title: "Architecture Review", description: "Technical review of AI integration patterns and production considerations." },
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

const barColors = ["#D4B84A", "#52C77E", "#5A94D4", "#D4B84A"];

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

        <div className="flex items-center gap-4">
          <a
            href="#newsletter"
            className="hidden sm:inline-flex px-6 py-3 bg-[var(--color-accent)] text-[#1F1D1D] text-sm font-semibold hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg"
          >
            Subscribe
          </a>
          <MobileMenu />
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 lg:px-12 max-w-[1000px] mx-auto">
          <h1 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[clamp(3rem,8vw,5rem)] leading-[1.05] tracking-tight mb-8">
            <span className="text-[var(--color-accent)]">AI guidance</span>{" "}
            for the people who build software
          </h1>
          <p className="text-xl lg:text-[1.375rem] text-[var(--color-muted)] mb-12 max-w-[680px] leading-relaxed">
            AI is changing how software gets built — and most teams are
            figuring it out alone. I help developers and engineering leaders
            adopt AI with confidence, from weekly analysis to hands-on workshops
            to strategic guidance, grounded in 25 years of production
            software experience.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="#newsletter"
              className="inline-flex items-center gap-2 px-9 py-4 bg-[var(--color-accent)] text-[#1F1D1D] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg"
            >
              Subscribe free
            </a>
            <a
              href="#offerings"
              className="inline-flex items-center gap-2 px-9 py-4 border-2 border-[var(--color-text)] text-[var(--color-text)] font-semibold tracking-wide text-sm hover:bg-[var(--color-text)] hover:text-[var(--color-base)] transition-colors rounded-lg"
            >
              Explore offerings
            </a>
          </div>

          {/* Credibility Strip */}
          <div className="mt-16 pt-12 border-t border-[var(--color-border)]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {CREDIBILITY.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-sm font-semibold tracking-wide text-[var(--color-accent)] mb-1">
                    {item.label}
                  </div>
                  <div className="text-[1rem] text-[var(--color-muted)]">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section id="offerings" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[clamp(2rem,4vw,3rem)] leading-tight">
              From signal to strategy
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {OFFERINGS.map((offering, i) => (
              <div
                key={offering.number}
                className="bg-[var(--color-surface)] p-8 flex flex-col min-h-[220px] hover:shadow-lg transition-shadow rounded-lg"
                style={{ borderLeft: `4px solid ${barColors[i]}` }}
              >
                <span className="font-[family-name:var(--font-plus-jakarta)] font-bold text-3xl text-[var(--color-accent)] mb-4">
                  {offering.number}
                </span>
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl mb-2">
                  {offering.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] flex-grow">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-24 px-6 lg:px-12 bg-[var(--color-surface)]">
          <div className="max-w-[1400px] mx-auto">
            <div>
              <div>
                <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                  Stay calibrated
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
                    href="https://writing.alteredcraft.com"
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

        {/* For Teams Section */}
        <section id="workshops" className="py-24 px-6 lg:px-12 bg-[var(--color-text)] text-[var(--color-surface)]">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16">
              <div>
                <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[clamp(2rem,4vw,3rem)]">
                  Workshops
                </h2>
                <p className="text-[var(--color-muted)] text-lg mt-4 max-w-[700px]">
                  Build with AI, not just talk about it. Focused workshops that
                  build practical, hands-on skills.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Workshops */}
              <div className="p-10 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-[var(--color-muted)] mb-4">
                  Live, instructor-led sessions (0.5–2 days). On-site or remote.
                </p>
                <p className="italic text-white/70 mb-6 text-[0.9375rem]">
                  &ldquo;I teach the concepts and techniques. You adapt them to
                  your context.&rdquo;
                </p>
                <ul className="space-y-2">
                  {WORKSHOP_TOPICS.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-3 text-white/90 py-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Speaker Image */}
              <div className="rounded-lg relative overflow-hidden min-h-[400px]">
                <Image
                  src={speakerImg}
                  alt="Sam Keen speaking at a conference"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="https://altered-craft.neetocal.com/meeting-with-sam-keen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-9 py-4 bg-[var(--color-accent)] text-[#1F1D1D] font-semibold tracking-wide text-sm hover:opacity-90 transition-opacity rounded-lg"
              >
                Start a conversation
              </a>
              <p className="mt-4 text-[var(--color-muted)] text-sm">
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

        {/* Advisory Section */}
        <section id="advisory" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                AI Strategy Advisory
              </h2>
              <p className="text-[var(--color-muted)] mb-8">
                Scoped consulting engagements with defined deliverables. I help
                engineering leaders make confident AI decisions backed by real
                production experience.
              </p>
              <div className="space-y-6">
                {ADVISORY_TYPES.map((type) => (
                  <div key={type.title}>
                    <h4 className="font-semibold mb-1">{type.title}</h4>
                    <p className="text-sm text-[var(--color-muted)]">
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg">
                <h4 className="font-semibold mb-4">How it works</h4>
                <ul className="space-y-3">
                  {[
                    "Discovery call to understand your context",
                    "Scoped engagement with clear deliverables",
                    "Hands-on analysis, not slide decks",
                    "Actionable recommendations your team can execute",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--color-muted)]"
                    >
                      <span className="text-[var(--color-accent)] flex-shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://altered-craft.neetocal.com/meeting-with-sam-keen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-9 py-4 bg-[var(--color-accent)] text-[#1F1D1D] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg"
              >
                Schedule a strategy call
              </a>
              <p className="text-[var(--color-muted)] text-sm">
                Or email{" "}
                <a
                  href="mailto:sam@alteredcraft.com"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  sam@alteredcraft.com
                </a>{" "}
                to start a conversation.
              </p>
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
                    GenAI Innovation Lab at AWS, where I helped teams figure out
                    what&apos;s real and what&apos;s noise in the AI space.
                  </p>
                  <p>
                    In 2025, I went full-time on researching how teams build with AI. Not building
                    AI—building <em>with</em> AI. Understanding how these tools
                    actually change the way we write software, lead teams, and
                    ship products.
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
                    , a community of 1,100+ practitioners exploring practical AI
                    together.
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
                Practical AI guidance for the people who build software. Weekly
                insights, workshops, and strategic advisory.
              </p>
              <a
                href="#newsletter"
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

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-[var(--color-muted)] text-sm">
            © {new Date().getFullYear()} AlteredCraft. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
