import Image from "next/image";
import { ArrowRight } from "lucide-react";
import logoImg from "../../../public/press-kit/ac-logo-light-bg.svg";

const MOCKUPS = [
  {
    id: "a",
    href: "/mockup-a",
    title: "Mockup A: Logo Swap",
    tier: "Minimal Change",
    description:
      "The new icon + wordmark lockup dropped into the existing site. Nav and footer only — everything else untouched. Shows the new identity alongside the current teal palette and Space Grotesk headings.",
    changes: [
      "New /altered craft lockup in nav",
      "New lockup in footer",
      "No other changes",
    ],
    accentColor: "#0D9488",
  },
  {
    id: "b",
    href: "/mockup-b",
    title: "Mockup B: Brand Refresh",
    tier: "Moderate Adaptation",
    description:
      "Lockup plus a color and typography shift. Teal gives way to gold, cool grays warm up, and Plus Jakarta Sans replaces Space Grotesk for headings. Same section structure and layouts.",
    changes: [
      "New lockup in nav + footer",
      "Gold accent palette (#D4B84A)",
      "Warm background tones",
      "Plus Jakarta Sans headings",
    ],
    accentColor: "#D4B84A",
  },
  {
    id: "c",
    href: "/mockup-c",
    title: "Mockup C: Full Rebrand",
    tier: "Holistic Redesign",
    description:
      "The complete vision — dark nav bar, gold CTAs, lowercase headings matching the wordmark, code-bar design motifs as section dividers and card accents, and a stacked lockup in the hero.",
    changes: [
      "Dark nav bar (#1F1D1D)",
      "Stacked lockup in hero",
      "Gold CTA buttons",
      "Lowercase headings",
      "Code-bar decorative motifs",
      "Rounded corners throughout",
    ],
    accentColor: "#D4B84A",
  },
];

export default function MockupsIndex() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <div className="max-w-[900px] mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-4">
          <a
            href="/"
            className="text-sm text-[#8A877E] hover:text-[#1F1D1D] transition-colors"
          >
            &larr; Back to site
          </a>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={logoImg}
            alt="AlteredCraft logo"
            width={48}
            height={48}
            unoptimized
          />
          <h1 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-4xl text-[#1F1D1D]">
            Brand Lockup Mockups
          </h1>
        </div>
        <p className="text-lg text-[#8A877E] mb-16 max-w-[600px]">
          Three tiers of integration for the new{" "}
          <span className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-[#1F1D1D]">
            <span style={{ color: "#D4B84A" }}>/</span>altered craft
          </span>{" "}
          lockup, from minimal swap to holistic rebrand.
        </p>

        {/* Mockup Cards */}
        <div className="flex flex-col gap-8">
          {MOCKUPS.map((mockup) => (
            <a
              key={mockup.id}
              href={mockup.href}
              className="group block p-8 bg-white rounded-xl border border-[#E0DDD6] hover:border-[#D4B84A] hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="inline-block w-3 h-3 rounded-full"
                      style={{ backgroundColor: mockup.accentColor }}
                    />
                    <span className="text-xs font-semibold tracking-wide text-[#8A877E]">
                      {mockup.tier}
                    </span>
                  </div>
                  <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-2xl text-[#1F1D1D] mb-2">
                    {mockup.title}
                  </h2>
                  <p className="text-[#8A877E] mb-4 leading-relaxed">
                    {mockup.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {mockup.changes.map((change) => (
                      <li
                        key={change}
                        className="text-xs px-3 py-1 rounded-full bg-[#F5F3EF] text-[#8A877E] border border-[#E0DDD6]"
                      >
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0 mt-2 text-[#8A877E] group-hover:text-[#D4B84A] transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
