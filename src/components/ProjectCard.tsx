import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col h-full p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl leading-snug">
          {project.name}
        </h3>
        {project.status && (
          <span className="flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--color-surface-alt)] text-[var(--color-muted)] whitespace-nowrap">
            {project.status}
          </span>
        )}
      </div>

      <p className="font-medium text-[var(--color-text)] mb-3">
        {project.oneLiner}
      </p>

      <p className="text-sm text-[var(--color-muted)] mb-5 flex-grow">
        {project.description}
      </p>

      {/* Tags — categorical labels */}
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border border-[var(--color-accent)] text-[var(--color-accent)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Sub-tags — tech / tools */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md text-xs bg-[var(--color-surface-alt)] text-[var(--color-muted)]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-auto pt-1">
        {project.links.map((link) =>
          link.href === "#" ? (
            <span
              key={link.label}
              title="Placeholder — add the real URL in src/lib/projects.ts"
              className="inline-flex items-center text-sm text-[var(--color-muted)] border-b border-dashed border-[var(--color-muted)]"
            >
              {link.label} (add link)
            </span>
          ) : (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline"
            >
              {link.label}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )
        )}
      </div>
    </div>
  );
}
