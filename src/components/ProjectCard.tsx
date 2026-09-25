import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { badge, chip, lift } from "@/lib/styles";

// "Active-Development" -> "active development". Only plain Title-Case words
// are lowercased, so acronyms keep their casing ("IoT" stays "IoT").
function badgeText(value: string): string {
  return value
    .split(/[-\s]+/)
    .map((word) => (/^[A-Z][a-z]+$/.test(word) ? word.toLowerCase() : word))
    .join(" ");
}

export function ProjectCard({ project }: { project: Project }) {
  const active = Boolean(project.status);

  return (
    <article
      className={`flex flex-col h-full gap-3 lg:gap-4 p-5 lg:px-7 lg:py-[26px] bg-[var(--color-surface)] rounded-[10px] ${lift} ${
        active
          ? "border-[1.5px] border-[var(--color-ink)]"
          : "border border-[var(--color-border)]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        {project.status ? (
          <span className={badge.lime}>
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full bg-[var(--color-ink)]"
            />
            {badgeText(project.status)}
          </span>
        ) : project.kind ? (
          <span className={badge.soft}>
            {badgeText(project.kind)}
          </span>
        ) : (
          <span />
        )}
        <span className="mono text-[var(--color-muted)] lowercase text-right">
          {project.stack.join(" · ")}
        </span>
      </div>

      <h3 className="serif m-0 text-4xl lg:text-[44px] leading-none">
        {project.name}
      </h3>

      <p className="m-0 text-[15.5px] lg:text-[17px] leading-[1.4] font-medium">
        {project.oneLiner}
      </p>

      <p className="m-0 text-sm lg:text-[14.5px] leading-[1.55] text-[var(--color-body)]">
        {project.description}
      </p>

      {project.tags.length > 0 && (
        <ul className="flex flex-wrap gap-1.5" aria-label="Tags">
          {project.tags.map((tag) => (
            <li key={tag} className={chip}>
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="mono mt-auto flex flex-wrap gap-x-[22px] gap-y-2 pt-3 lg:pt-4 border-t border-[var(--color-hairline)] text-[13px]">
        {project.links.map((link) =>
          link.href === "#" ? (
            <span
              key={link.label}
              title="Placeholder — add the real URL in src/lib/projects.ts"
              className="inline-flex items-center min-h-6 text-[var(--color-muted)] border-b border-dashed border-[var(--color-muted)]"
            >
              {link.label} (add link)
            </span>
          ) : (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 min-h-6 text-[var(--color-text)] hover:text-[var(--color-blue)] transition-colors"
            >
              {link.label}
              <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
            </a>
          )
        )}
      </div>
    </article>
  );
}
