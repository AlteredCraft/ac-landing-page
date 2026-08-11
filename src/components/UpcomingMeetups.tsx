"use client";

import { useEffect, useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

interface Meetup {
  title: string;
  url: string;
  startAt: string;
  timezone: string;
  location: string;
  group: string;
  groupUrl: string;
}

// Format in the event's own timezone — start_at is UTC, so formatting in the
// browser's local zone would show the wrong day for visitors outside PT.
function formatWhen(startAt: string, timezone: string): string {
  const date = new Date(startAt);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
    timeZone: timezone,
  }).format(date);
}

export function UpcomingMeetups() {
  const [meetups, setMeetups] = useState<Meetup[]>([]);
  const [calendars, setCalendars] = useState<Meetup[]>([]);

  useEffect(() => {
    fetch("/api/meetups")
      .then((res) => (res.ok ? res.json() : []))
      .then((data: Meetup[]) => {
        // One "full calendar" link per group with upcoming events, derived
        // from the full response — before row dedupe, so a group isn't lost
        // when its only event is cross-listed under another group.
        setCalendars(
          Array.from(new Map(data.map((m) => [m.groupUrl, m])).values()),
        );
        // The same event can be cross-listed on multiple group calendars
        // with an identical URL — keep the first listing so rows (keyed by
        // url) stay unique and visitors don't see duplicates.
        const seen = new Set<string>();
        setMeetups(
          data.filter((m) =>
            seen.has(m.url) ? false : (seen.add(m.url), true),
          ),
        );
      })
      .catch(() => {});
  }, []);

  if (meetups.length === 0) return null;

  return (
    <div className="mb-16 rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] p-6 sm:p-8">
      <div className="flex items-center gap-2.5 mb-5">
        {/* Live indicator: this list is fed straight from the Luma calendar */}
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-link)] opacity-50" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-link)]" />
        </span>
        <span className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-[var(--color-text)]">
          Up next
        </span>
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)]">
          Community meetups
        </span>
      </div>

      <ul className="divide-y divide-[var(--color-border)]">
        {meetups.map((m) => (
          <li key={m.url} className="py-4 first:pt-0 last:pb-0">
            <a
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-1.5 sm:grid-cols-[200px_1fr] sm:gap-6"
            >
              <div className="text-xs font-semibold tracking-widest uppercase text-[var(--color-link)] sm:pt-0.5">
                {formatWhen(m.startAt, m.timezone)}
              </div>
              <div>
                <div className="mb-1.5">
                  <span className="inline-flex items-center rounded-full bg-[var(--color-surface-alt)] px-2 py-0.5 text-[11px] font-medium text-[var(--color-muted)]">
                    {m.group}
                  </span>
                </div>
                <h4 className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-[var(--color-text)] leading-snug flex items-start gap-1 group-hover:text-[var(--color-link)] transition-colors">
                  <span>{m.title}</span>
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                {m.location && (
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--color-muted)]">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {m.location}
                  </p>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        <span className="text-[var(--color-muted)]">Full calendars on Luma:</span>
        {calendars.map((c) => (
          <a
            key={c.groupUrl}
            href={c.groupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-[var(--color-link)] hover:text-[var(--color-link-hover)] transition-colors"
          >
            {c.group}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ))}
      </div>
    </div>
  );
}
