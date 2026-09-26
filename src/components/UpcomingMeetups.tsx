"use client";

import { useEffect, useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import { badge } from "@/lib/styles";

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
    <div className="bg-[var(--color-surface)] border-[1.5px] border-[var(--color-ink)] rounded-[10px] p-5 sm:px-8 sm:py-7">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
        {/* Live indicator: this list is fed straight from the Luma calendar */}
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-blue)] opacity-50" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-blue)]" />
        </span>
        <span className="serif text-[28px] leading-none">Up next</span>
        <span className="mono text-[var(--color-muted)]">community meetups</span>
      </div>

      <ul>
        {meetups.map((m) => (
          <li
            key={m.url}
            className="py-4 border-t border-[var(--color-hairline)]"
          >
            <a
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-1.5 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-6"
            >
              <div className="mono text-[var(--color-text)] font-medium sm:pt-1">
                {formatWhen(m.startAt, m.timezone)}
              </div>
              <div className="flex flex-col gap-1.5">
                <span className={`${badge.soft} self-start`}>
                  {m.group}
                </span>
                <h3 className="serif text-2xl leading-[1.1] flex items-start gap-1.5 group-hover:text-[var(--color-blue)] transition-colors">
                  <span>{m.title}</span>
                  <ArrowUpRight aria-hidden="true" className="w-4 h-4 flex-shrink-0 mt-1.5" />
                </h3>
                {m.location && (
                  <p className="flex items-center gap-1.5 text-sm text-[var(--color-body)]">
                    <MapPin aria-hidden="true" className="w-3.5 h-3.5 flex-shrink-0" />
                    {m.location}
                  </p>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="mono pt-4 border-t border-[var(--color-hairline)] flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
        <span className="text-[var(--color-muted)]">full calendars on Luma:</span>
        {calendars.map((c) => (
          <a
            key={c.groupUrl}
            href={c.groupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 min-h-6 text-[var(--color-blue)] hover:text-[var(--color-blue-hover)] hover:underline underline-offset-4"
          >
            {c.group}
            <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
          </a>
        ))}
      </div>
    </div>
  );
}
