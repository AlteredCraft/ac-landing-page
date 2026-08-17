import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { SiteFooter } from "@/components/SiteFooter";
import { Download, ArrowLeft } from "lucide-react";
import headshotCasual from "../../../public/press-kit/sam-keen-headshot-casual.png";
import headshotEditorial from "../../../public/press-kit/sam-keen-headshot-editorial.jpg";

export const metadata: Metadata = {
  title: "Press Kit | AlteredCraft",
  description:
    "Brand assets, logos, colors, and typography guidelines for AlteredCraft.",
};

const LOGO_ASSETS = [
  {
    name: "Horizontal Lockup",
    description: "Icon + wordmark, horizontal layout",
    variants: [
      {
        label: "Light background",
        preview: "/press-kit/ac-logo-wm-horiz-light-bg.png",
        bg: "bg-[#F6F7F5]",
        svg: "/press-kit/ac-logo-wm-horiz-light-bg.svg",
        png: "/press-kit/ac-logo-wm-horiz-light-bg.png",
      },
      {
        label: "Dark background",
        preview: "/press-kit/ac-logo-wm-horiz-dark-bg.png",
        bg: "bg-[var(--color-ink)]",
        svg: "/press-kit/ac-logo-wm-horiz-dark-bg.svg",
        png: "/press-kit/ac-logo-wm-horiz-dark-bg.png",
      },
    ],
    fullWidth: true,
  },
  {
    name: "Stacked Lockup",
    description: "Icon + wordmark, vertical layout",
    variants: [
      {
        label: "Light background",
        preview: "/press-kit/ac-logo-wm-vert-light-bg.png",
        bg: "bg-[#F6F7F5]",
        svg: "/press-kit/ac-logo-wm-vert-light-bg.svg",
        png: "/press-kit/ac-logo-wm-vert-light-bg.png",
      },
      {
        label: "Dark background",
        preview: "/press-kit/ac-logo-wm-vert-dark-bg.png",
        bg: "bg-[var(--color-ink)]",
        svg: "/press-kit/ac-logo-wm-vert-dark-bg.svg",
        png: "/press-kit/ac-logo-wm-vert-dark-bg.png",
      },
    ],
    fullWidth: false,
  },
  {
    name: "Icon",
    description: "Standalone icon mark",
    variants: [
      {
        label: "Light background",
        preview: "/press-kit/ac-logo-light-bg.png",
        bg: "bg-[#F6F7F5]",
        svg: "/press-kit/ac-logo-light-bg.svg",
        png: "/press-kit/ac-logo-light-bg.png",
      },
      {
        label: "Dark background",
        preview: "/press-kit/ac-logo-dark-bg.png",
        bg: "bg-[var(--color-ink)]",
        svg: "/press-kit/ac-logo-dark-bg.svg",
        png: "/press-kit/ac-logo-dark-bg.png",
      },
    ],
    fullWidth: false,
  },
  {
    name: "Wordmark",
    description: "Text-only wordmark, horizontal layout",
    variants: [
      {
        label: "Light background",
        preview: "/press-kit/ac-wm-light-bg.png",
        bg: "bg-[#F6F7F5]",
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
        bg: "bg-[#F6F7F5]",
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
  { name: "Gold", hex: "#D4B84A", usage: "CTAs, badges, slash mark" },
  { name: "Ink", hex: "#15191C", usage: "Nav, footer, dark sections" },
  { name: "Text", hex: "#1C2124", usage: "Primary text" },
  { name: "Porcelain", hex: "#F6F7F5", usage: "Page background" },
  { name: "Surface", hex: "#FCFCFB", usage: "Cards, content areas" },
  { name: "Slate", hex: "#5C666D", usage: "Secondary text" },
  { name: "Border", hex: "#E2E4E1", usage: "Borders, dividers" },
  { name: "Evergreen", hex: "#20794F", usage: "Text links, live indicators" },
];

const CODE_BAR_COLORS = [
  { name: "Gold", hex: "#D4B84A" },
  { name: "Green", hex: "#52C77E" },
  { name: "Blue", hex: "#5A94D4" },
];

export default function PressKitPage() {
  return (
    <div className="min-h-screen bg-[var(--color-base)]">
      {/* Nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-accent)] focus:text-[var(--color-ink)] focus:rounded-lg focus:font-semibold focus:text-sm"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main"
        className="sticky top-0 z-50 bg-[var(--color-ink)] border-b border-white/10"
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link href="/">
            <BrandLockup variant="horizontal" size="sm" theme="dark" />
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to site
          </Link>
        </div>
      </nav>

      <main id="main-content" tabIndex={-1} className="max-w-[1000px] mx-auto px-6 lg:px-12">
        {/* Hero */}
        <section className="pt-20 pb-12">
          <h1 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-4xl sm:text-5xl text-[var(--color-text)]">
            Press Kit
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted)] max-w-[600px]">
            Brand assets, guidelines, and resources for media and partners.
          </p>
        </section>

        {/* Logo Assets */}
        {LOGO_ASSETS.map((asset) => (
          <section key={asset.name} className="pb-12">
            <h2 className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-xl text-[var(--color-text)] mb-2">
              {asset.name}
            </h2>
            <p className="text-sm text-[var(--color-muted)] mb-6">
              {asset.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {asset.variants.map((variant) => (
                <div
                  key={variant.label}
                  className={`bg-[var(--color-surface)] rounded-lg overflow-hidden border border-[var(--color-border)] ${asset.fullWidth ? "sm:col-span-2" : ""}`}
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
                  <div className="px-6 py-3 border-t border-[var(--color-border)] flex items-center justify-between">
                    <span className="text-sm text-[var(--color-muted)]">
                      {variant.label}
                    </span>
                    <div className="flex items-center gap-3">
                      {variant.svg && (
                        <a
                          href={variant.svg}
                          download
                          className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          SVG
                        </a>
                      )}
                      <a
                        href={variant.png}
                        download
                        className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        PNG
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Headshots */}
        <section className="pb-16 pt-4">
          <h2 className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-xl text-[var(--color-text)] mb-2">
            Headshots
          </h2>
          <p className="text-sm text-[var(--color-muted)] mb-6">
            Sam Keen, founder
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[var(--color-surface)] rounded-lg overflow-hidden border border-[var(--color-border)]">
              <div className="p-6 flex items-center justify-center">
                <Image
                  src={headshotCasual}
                  alt="Sam Keen - casual headshot"
                  width={300}
                  height={300}
                  unoptimized
                  className="rounded-lg"
                />
              </div>
              <div className="px-6 py-3 border-t border-[var(--color-border)] flex items-center justify-between">
                <span className="text-sm text-[var(--color-muted)]">
                  Casual &mdash; 500 x 500px
                </span>
                <a
                  href="/press-kit/sam-keen-headshot-casual.png"
                  download
                  className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  PNG
                </a>
              </div>
            </div>

            <div className="bg-[var(--color-surface)] rounded-lg overflow-hidden border border-[var(--color-border)]">
              <div className="p-6 flex items-center justify-center">
                <Image
                  src={headshotEditorial}
                  alt="Sam Keen - editorial headshot"
                  width={300}
                  height={300}
                  unoptimized
                  className="rounded-lg"
                />
              </div>
              <div className="px-6 py-3 border-t border-[var(--color-border)] flex items-center justify-between">
                <span className="text-sm text-[var(--color-muted)]">
                  Editorial &mdash; 400 x 400px
                </span>
                <a
                  href="/press-kit/sam-keen-headshot-editorial.jpg"
                  download
                  className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  JPG
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Colors */}
        <section className="pb-16">
          <h2 className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-2xl text-[var(--color-text)] mb-8">
            Brand Colors
          </h2>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4 uppercase tracking-wider">
              Primary Palette
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {BRAND_COLORS.map((color) => (
                <div key={color.hex} className="text-center">
                  <div
                    className="w-full aspect-square rounded-lg border border-[var(--color-border)]"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="font-mono text-xs mt-2 text-[var(--color-text)]">
                    {color.hex}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4 uppercase tracking-wider">
              Code Bar Accents
            </h3>
            <div className="grid grid-cols-3 gap-4 max-w-[300px]">
              {CODE_BAR_COLORS.map((color) => (
                <div key={color.hex} className="text-center">
                  <div
                    className="w-full aspect-square rounded-lg"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="font-mono text-xs mt-2 text-[var(--color-text)]">
                    {color.hex}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="pb-16">
          <h2 className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-2xl text-[var(--color-text)] mb-8">
            Typography
          </h2>

          <div className="space-y-8">
            <div className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-8">
              <p className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-3">
                Headings &amp; Wordmark
              </p>
              <p className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-3xl text-[var(--color-text)]">
                Plus Jakarta Sans, 600
              </p>
            </div>

            <div className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] p-8">
              <p className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-3">
                Body Text
              </p>
              <p className="text-lg text-[var(--color-text)]">
                Inter, Regular &mdash; Practical AI guidance for the people who
                build software.
              </p>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="pb-20">
          <h2 className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-2xl text-[var(--color-text)] mb-8">
            Usage Guidelines
          </h2>

          <div className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] px-6 py-5">
            <ul className="list-disc list-inside space-y-2 text-sm text-[var(--color-text)]">
              <li>Do not distort, rotate, or alter the proportions of the logo.</li>
              <li>Do not recolor or add effects to any brand marks.</li>
              <li>Use the appropriate light/dark background variant.</li>
              <li>Maintain clear space equal to the icon height on all sides.</li>
              <li>Prefer SVG for web and print. Use PNG for social media and contexts that require raster images.</li>
            </ul>
          </div>

          <h2 className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-2xl text-[var(--color-text)] mt-16 mb-8">
            Trademark Notice
          </h2>

          <div className="bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] px-6 py-5">
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              AlteredCraft and the AlteredCraft logo are trademarks of Altered
              Craft, LLC. All rights reserved. These brand assets are provided
              for editorial and informational use only. Use of these assets does
              not imply endorsement, sponsorship, or affiliation. You may not
              modify, distort, or alter the proportions of these marks. For
              questions about permitted use, contact{" "}
              <a
                href="mailto:sam@alteredcraft.com"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
              >
                sam@alteredcraft.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
