import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { container } from "@/lib/styles";

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
    <div className="min-h-screen flex flex-col bg-[var(--color-base)]">
      <SiteNav />

      <main id="main-content" tabIndex={-1} className={`${container} flex-grow`}>
        <PageHeader
          back={{ href: "/#projects", label: "projects" }}
          kicker="built in the open"
          title="Projects"
        >
          Things I build while writing and teaching about AI-assisted
          development. Each one sits on both sides of the work: shipping the
          thing and explaining it. The chips flag what each project is about;
          the stack sits top right.
        </PageHeader>

        <section className="pt-6 lg:pt-8 pb-16 lg:pb-24 border-t-[1.5px] border-[var(--color-ink)]">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
