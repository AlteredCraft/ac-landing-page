import type { Metadata } from "next";
import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { MobileMenu } from "@/components/MobileMenu";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowLeft } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { NavLabel } from "@/components/NavLabel";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | AlteredCraft",
  description:
    "Things Sam Keen builds while writing and teaching about AI-assisted software development.",
  openGraph: {
    title: "Projects | AlteredCraft",
    description:
      "Things Sam Keen builds while writing and teaching about AI-assisted software development.",
    url: "https://alteredcraft.com/projects",
    siteName: "AlteredCraft",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-base)]">
      {/* Navigation - Dark nav bar (matches home) */}
      <nav className="fixed top-0 left-0 right-0 py-5 px-6 lg:px-12 flex justify-between items-center bg-[#1F1D1D] z-50">
        <Link href="/" className="sm:hidden">
          <BrandLockup variant="horizontal" size="sm" theme="dark" />
        </Link>
        <Link href="/" className="hidden sm:block">
          <BrandLockup variant="horizontal" size="md" theme="dark" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-wide text-white hover:text-[var(--color-accent)] transition-colors"
              >
                <NavLabel link={link} />
              </Link>
            </li>
          ))}
        </ul>

        <MobileMenu />
      </nav>

      <main className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-20 lg:pt-24">
        {/* Hero */}
        <section className="pt-12 pb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Projects
          </Link>
          <h1 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-4xl sm:text-5xl text-[var(--color-text)]">
            Projects
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted)] max-w-[720px]">
            Things I build while writing and teaching about AI-assisted
            development. Each one sits on both sides of the work: shipping the
            thing and explaining it. The tags flag what each project is about;
            the smaller chips are the tech behind it.
          </p>
        </section>

        {/* Project grid */}
        <section className="pt-8 pb-16 border-t border-[var(--color-border)]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 bg-[#1F1D1D]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <BrandLockup variant="horizontal" size="sm" theme="dark" />
          <div className="flex items-center gap-6 text-sm text-[var(--color-muted)]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/press-kit"
              className="hover:text-white transition-colors"
            >
              Press Kit
            </Link>
            <a
              href="mailto:sam@alteredcraft.com"
              className="hover:text-white transition-colors"
            >
              sam@alteredcraft.com
            </a>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto mt-8 pt-6 border-t border-white/10 text-center text-[var(--color-muted)] text-sm">
          &copy; {new Date().getFullYear()} Altered Craft, LLC. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
