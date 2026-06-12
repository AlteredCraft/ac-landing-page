import { ExternalLink } from "lucide-react";
import type { Engagement } from "@/lib/speaking";

export function EngagementRow({ event }: { event: Engagement }) {
  return (
    <li className="py-8 grid gap-3 sm:grid-cols-[200px_1fr] sm:gap-8">
      <div className="text-xs font-semibold tracking-widest text-[var(--color-muted)] uppercase">
        <div>{event.date}</div>
        <div className="mt-1">{event.location}</div>
      </div>
      <div>
        <p className="text-sm text-[var(--color-muted)] mb-1">{event.host}</p>
        <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl text-[var(--color-text)] mb-2">
          {event.title}
        </h3>
        <p className="text-[var(--color-muted)] mb-4">{event.description}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {event.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
            >
              {link.label}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>
    </li>
  );
}
