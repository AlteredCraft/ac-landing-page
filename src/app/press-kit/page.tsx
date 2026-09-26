import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Wordmark } from "@/components/Wordmark";
import { Download } from "lucide-react";
import { card, container, proseLink } from "@/lib/styles";
import headshotCasual from "../../../public/press-kit/sam-keen-headshot-casual.png";
import headshotEditorial from "../../../public/press-kit/sam-keen-headshot-editorial.jpg";

export const metadata: Metadata = {
  title: "Press Kit | AlteredCraft",
  description:
    "Brand assets, logos, colors, and typography guidelines for AlteredCraft.",
};

const LOGO_ASSETS = [
  {
    name: "Wordmark",
    description: "Text-only wordmark, horizontal layout",
    variants: [
      {
        label: "Light background",
        preview: "/press-kit/ac-wm-light-bg.png",
        bg: "bg-[var(--color-base)]",
        svg: "/press-kit/ac-wm-light-bg.svg",
        png: "/press-kit/ac-wm-light-bg.png",
      },
      {
        label: "Dark background",
        preview: "/press-kit/ac-wm-dark-bg.png",
        bg: "bg-[var(--color-ink)]",
        svg: "/press-kit/ac-wm-dark-bg.svg",
        png: "/press-kit/ac-wm-dark-bg.png",
      },
    ],
    fullWidth: true,
  },
  {
    name: "Stacked Wordmark",
    description: "Text-only wordmark, stacked layout",
    variants: [
      {
        label: "Light background",
        preview: "/press-kit/ac-wm-stacked-light-bg.png",
        bg: "bg-[var(--color-base)]",
        svg: "/press-kit/ac-wm-stacked-light-bg.svg",
        png: "/press-kit/ac-wm-stacked-light-bg.png",
      },
      {
        label: "Dark background",
        preview: "/press-kit/ac-wm-stacked-dark-bg.png",
        bg: "bg-[var(--color-ink)]",
        svg: "/press-kit/ac-wm-stacked-dark-bg.svg",
        png: "/press-kit/ac-wm-stacked-dark-bg.png",
      },
    ],
    fullWidth: false,
  },
];

const BRAND_COLORS = [
  { name: "Ink", hex: "#10151B", usage: "Text, primary buttons, dark panels" },
  { name: "Signal Blue", hex: "#2B3FE0", usage: "Brand slash, links" },
  { name: "Lime", hex: "#D4F53C", usage: "Highlights, badges, CTAs on ink" },
  { name: "Paper", hex: "#F7F8FA", usage: "Page background" },
  { name: "White", hex: "#FFFFFF", usage: "Cards, footer" },
  { name: "Body", hex: "#3C4550", usage: "Body copy" },
  { name: "Slate", hex: "#5B6573", usage: "Mono labels, secondary text" },
  { name: "Border", hex: "#D9DDE3", usage: "Card borders, dividers" },
];

const downloadLink =
  "mono inline-flex items-center gap-1.5 min-h-6 text-[13px] text-[var(--color-blue)] hover:text-[var(--color-blue-hover)] transition-colors";

const TYPE_SPECIMENS = [
  {
    role: "Display headings",
    name: "Instrument Serif, 400",
    sample: (
      <p className="serif text-[44px] leading-none">
        The craft of working with machines that write code.
      </p>
    ),
  },
  {
    role: "Body text & wordmark",
    name: "Geist, 400 / 500 / 600",
    sample: (
      <div className="flex flex-col gap-3">
        <Wordmark className="text-[30px]" />
        <p className="text-lg text-[var(--color-body)]">
          Research, writing, and mentorship on agentic coding for engineers who
          ship.
        </p>
      </div>
    ),
  },
  {
    role: "Labels & metadata",
    name: "Geist Mono, 400",
    sample: (
      <p className="mono text-[15px] text-[var(--color-muted)]">
        / newsletter · workshops · projects
      </p>
    ),
  },
];

export default function PressKitPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-base)]">
      <SiteNav />

      <main id="main-content" tabIndex={-1} className={`${container} flex-grow`}>
        <PageHeader
          back={{ href: "/", label: "home" }}
          kicker="brand assets"
          title="Press kit"
        >
          Brand assets, guidelines, and resources for media and partners.
        </PageHeader>

        {/* Logo Assets */}
        <section className="flex flex-col gap-10 pb-12 lg:pb-16">
          <SectionHeading title="Logos" label="download" />
          {LOGO_ASSETS.map((asset) => (
            <div key={asset.name}>
              <h3 className="serif text-[28px] leading-none mb-1.5">
                {asset.name}
              </h3>
              <p className="mono text-[var(--color-muted)] mb-5">
                {asset.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {asset.variants.map((variant) => (
                  <div
                    key={variant.label}
                    className={`${card} overflow-hidden ${asset.fullWidth ? "sm:col-span-2" : ""}`}
                  >
                    <div
                      className={`p-10 flex items-center justify-center min-h-[160px] ${variant.bg}`}
                    >
                      <Image
                        src={variant.preview}
                        alt={`${asset.name} - ${variant.label}`}
                        width={asset.fullWidth ? 400 : 200}
                        height={asset.fullWidth ? 100 : 200}
                        unoptimized
                        className="max-h-[120px] w-auto object-contain"
                      />
                    </div>
                    <div className="px-5 py-3 border-t border-[var(--color-hairline)] flex items-center justify-between">
                      <span className="mono text-[var(--color-muted)]">
                        {variant.label}
                      </span>
                      <div className="flex items-center gap-4">
                        {variant.svg && (
                          <a href={variant.svg} download className={downloadLink}>
                            <Download aria-hidden="true" className="w-3.5 h-3.5" />
                            SVG
                          </a>
                        )}
                        <a href={variant.png} download className={downloadLink}>
                          <Download aria-hidden="true" className="w-3.5 h-3.5" />
                          PNG
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Headshots */}
        <section className="flex flex-col gap-6 pb-12 lg:pb-16">
          <SectionHeading title="Headshots" label="sam keen, founder" />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                src: headshotCasual,
                alt: "Sam Keen - casual headshot",
                label: "Casual — 500 × 500px",
                href: "/press-kit/sam-keen-headshot-casual.png",
                format: "PNG",
              },
              {
                src: headshotEditorial,
                alt: "Sam Keen - editorial headshot",
                label: "Editorial — 400 × 400px",
                href: "/press-kit/sam-keen-headshot-editorial.jpg",
                format: "JPG",
              },
            ].map((shot) => (
              <div key={shot.href} className={`${card} overflow-hidden`}>
                <div className="p-6 flex items-center justify-center">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={300}
                    height={300}
                    unoptimized
                    className="rounded-[10px]"
                  />
                </div>
                <div className="px-5 py-3 border-t border-[var(--color-hairline)] flex items-center justify-between">
                  <span className="mono text-[var(--color-muted)]">
                    {shot.label}
                  </span>
                  <a href={shot.href} download className={downloadLink}>
                    <Download aria-hidden="true" className="w-3.5 h-3.5" />
                    {shot.format}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Colors */}
        <section className="flex flex-col gap-6 pb-12 lg:pb-16">
          <SectionHeading title="Brand colors" label="palette" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {BRAND_COLORS.map((color) => (
              <div key={color.hex} className={`${card} overflow-hidden`}>
                <div
                  className="w-full aspect-[4/3] border-b border-[var(--color-hairline)]"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="px-4 py-3 flex flex-col gap-1">
                  <p className="text-sm font-semibold">{color.name}</p>
                  <p className="mono text-[var(--color-text)]">{color.hex}</p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {color.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* Typography */}
        <section className="flex flex-col gap-6 pb-12 lg:pb-16">
          <SectionHeading title="Typography" label="type" />
          <div className="flex flex-col gap-4">
            {TYPE_SPECIMENS.map((spec) => (
              <div key={spec.name} className={`${card} p-6 lg:p-8 flex flex-col gap-4`}>
                <p className="mono text-[var(--color-muted)]">
                  {spec.role} · {spec.name}
                </p>
                {spec.sample}
              </div>
            ))}
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="flex flex-col gap-6 pb-12 lg:pb-16">
          <SectionHeading title="Usage guidelines" label="usage" />
          <ul className={`${card} list-disc list-inside space-y-2 px-6 py-5 text-sm text-[var(--color-body)]`}>
            <li>Do not distort, rotate, or alter the proportions of the logo.</li>
            <li>Do not recolor or add effects to any brand marks.</li>
            <li>Use the appropriate light/dark background variant.</li>
            <li>Leave clear space around the wordmark at least as wide as the slash.</li>
            <li>Prefer SVG for web and print. Use PNG for social media and contexts that require raster images.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-6 pb-16 lg:pb-24">
          <SectionHeading title="Trademark notice" label="legal" />
          <p className={`${card} px-6 py-5 text-sm text-[var(--color-body)] leading-relaxed`}>
            AlteredCraft and the AlteredCraft logo are trademarks of Altered
            Craft, LLC. All rights reserved. These brand assets are provided
            for editorial and informational use only. Use of these assets does
            not imply endorsement, sponsorship, or affiliation. You may not
            modify, distort, or alter the proportions of these marks. For
            questions about permitted use, contact{" "}
            <a href="mailto:sam@alteredcraft.com" className={proseLink}>
              sam@alteredcraft.com
            </a>
            .
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
