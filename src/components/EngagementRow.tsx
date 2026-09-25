import { ArrowUpRight } from "lucide-react";
import type { Engagement } from "@/lib/speaking";
import { monoLink } from "@/lib/styles";

// One speaking engagement: mono date/location column, then host, serif title,
// description, and links. Rendered inside a list whose items carry the rules.
export function EngagementRow({ event }: { event: Engagement }) {
  return (
    <li className="grid gap-2 sm:gap-6 sm:grid-cols-[150px_minmax(0,1fr)] py-4 sm:py-[22px] border-t border-[var(--color-border)] last:border-b">
      <div className="mono flex sm:flex-col gap-1">
        <span className="text-[var(--color-text)] font-medium">{event.date}</span>
        <span className="text-[var(--color-muted)]">
          <span className="sm:hidden">· </span>
          {event.location}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="mono text-[var(--color-muted)] order-2 sm:order-none">
          {event.host}
        </p>
        <h3 className="serif m-0 text-2xl sm:text-[28px] leading-[1.05]">
          {event.title}
        </h3>
        <p className="m-0 text-[14.5px] leading-[1.55] text-[var(--color-body)] order-3 sm:order-none">
          {event.description}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-1 order-4 sm:order-none">
          {event.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={monoLink}
            >
              {link.label}
              <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>
    </li>
  );
}
