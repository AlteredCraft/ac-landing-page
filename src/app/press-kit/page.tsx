import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { CodeBarDivider } from "@/components/CodeBarDivider";
import { Download, ArrowLeft } from "lucide-react";
import headshotCasual from "../../../public/sam-headshot-casual-500x500.png";
import headshotEditorial from "../../../public/Sam_Keen_400x400.jpg";

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
        bg: "bg-[#F5F3EF]",
        svg: "/press-kit/ac-logo-wm-horiz-light-bg.svg",
        png: "/press-kit/ac-logo-wm-horiz-light-bg.png",
      },
      {
        label: "Dark background",
        preview: "/press-kit/ac-logo-wm-horiz-dark-bg.png",
        bg: "bg-[#1F1D1D]",
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
        bg: "bg-[#F5F3EF]",
        svg: "/press-kit/ac-logo-wm-vert-light-bg.svg",
        png: "/press-kit/ac-logo-wm-vert-light-bg.png",
      },
      {
        label: "Dark background",
        preview: "/press-kit/ac-logo-wm-vert-dark-bg.png",
        bg: "bg-[#1F1D1D]",
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
        bg: "bg-[#F5F3EF]",
        svg: "/press-kit/ac-logo-light-bg.svg",
        png: "/press-kit/ac-logo-light-bg.png",
      },
      {
        label: "Dark background",
        preview: "/press-kit/ac-logo-dark-bg.png",
        bg: "bg-[#1F1D1D]",
        svg: "/press-kit/ac-logo-dark-bg.svg",
        png: "/press-kit/ac-logo-dark-bg.png",
      },
    ],
    fullWidth: false,
  },
  {
    name: "Wordmark",
    description: "Text-only wordmark",
    variants: [
      {
        label: "Light background",
        preview: "/press-kit/ac-wm-light-bg.png",
        bg: "bg-[#F5F3EF]",
        svg: "/press-kit/ac-wm-light-bg.svg",
        png: "/press-kit/ac-wm-light-bg.png",
      },
      {
        label: "Dark background",
        preview: "/press-kit/ac-wm-dark-bg.png",
        bg: "bg-[#1F1D1D]",
        svg: "/press-kit/ac-wm-dark-bg.svg",
        png: "/press-kit/ac-wm-dark-bg.png",
      },
    ],
    fullWidth: true,
  },
];

const BRAND_COLORS = [
  { name: "Gold", hex: "#D4B84A", usage: "CTAs, links, slash mark" },
  { name: "Near Black", hex: "#1F1D1D", usage: "Primary text, dark sections" },
  { name: "Off White", hex: "#F5F3EF", usage: "Page background" },
  { name: "Surface", hex: "#FDFCF9", usage: "Cards, content areas" },
  { name: "Muted", hex: "#8A877E", usage: "Secondary text" },
  { name: "Border", hex: "#E0DDD6", usage: "Borders, dividers" },
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
      <nav className="sticky top-0 z-50 bg-[#1F1D1D] border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link href="/">
            <BrandLockup variant="horizontal" size="sm" theme="dark" />
          </Link>
          <Link
            href="/"
            className="text-sm text-[var(--color-muted)] hover:text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to site
          </Link>
        </div>
      </nav>

      <main className="max-w-[1000px] mx-auto px-6 lg:px-12">
        {/* Hero */}
        <section className="pt-20 pb-12">
          <h1 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-4xl sm:text-5xl text-[var(--color-text)]">
            Press Kit
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted)] max-w-[600px]">
            Brand assets, guidelines, and resources for media and partners.
          </p>
          <CodeBarDivider className="max-w-[300px]" />
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
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
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

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 bg-[#1F1D1D]">
        <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <BrandLockup variant="horizontal" size="sm" theme="dark" />
          <div className="flex items-center gap-6 text-sm text-[var(--color-muted)]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <a
              href="mailto:sam@alteredcraft.com"
              className="hover:text-white transition-colors"
            >
              sam@alteredcraft.com
            </a>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto mt-8 pt-6 border-t border-white/10 text-center text-[var(--color-muted)] text-sm">
          &copy; {new Date().getFullYear()} Altered Craft, LLC. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
