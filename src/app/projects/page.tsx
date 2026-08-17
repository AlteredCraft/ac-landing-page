import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Kicker } from "@/components/Kicker";

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
      <SiteNav />

      <main id="main-content" className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-20 lg:pt-24">
        {/* Hero */}
        <section className="pt-12 pb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-link)] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Projects
          </Link>
          <Kicker className="mb-4">Built in the open</Kicker>
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

      <SiteFooter />
    </div>
  );
}
