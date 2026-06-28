export interface Meetup {
  title: string;
  url: string; // full luma.com event URL
  startAt: string; // ISO 8601 UTC timestamp
  timezone: string; // IANA tz, e.g. "America/Los_Angeles" — format the date in this zone
  location: string; // venue / address line; may be empty
  group: string; // community name, e.g. "Portland AI Engineers"
  groupUrl: string; // full luma.com calendar URL for that community
}

// Luma community calendars to surface. Add a new entry to list another group.
// calendar_api_id is in the page's __NEXT_DATA__ at luma.com/<slug> (look for "cal-…").
const CALENDARS = [
  {
    group: "Portland AI Engineers",
    apiId: "cal-DfQe2kBQ7UiNr4y",
    url: "https://luma.com/portland-ai-engineers",
  },
  {
    group: "Cascadia Builders Club",
    apiId: "cal-spRNuh89Ha6EWaD",
    url: "https://luma.com/cascadia-bc",
  },
] as const;

type Calendar = (typeof CALENDARS)[number];

async function getCalendarMeetups(
  calendar: Calendar,
  count: number,
): Promise<Meetup[]> {
  try {
    const url =
      `https://api.lu.ma/calendar/get-items?calendar_api_id=${calendar.apiId}` +
      `&period=future&pagination_limit=${count}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const data = await res.json();
    const entries = Array.isArray(data?.entries) ? data.entries : [];

    const meetups: Meetup[] = [];
    for (const entry of entries) {
      const ev = entry?.event;
      if (!ev) continue;

      const title = typeof ev.name === "string" ? ev.name.trim() : "";
      const slug = typeof ev.url === "string" ? ev.url : "";
      const startAt = typeof ev.start_at === "string" ? ev.start_at : "";
      if (!title || !slug || !startAt) continue;

      const geo = ev.geo_address_info ?? {};
      const location =
        (typeof geo.address === "string" && geo.address) ||
        (typeof geo.city_state === "string" && geo.city_state) ||
        "";

      meetups.push({
        title,
        url: `https://luma.com/${slug}`,
        startAt,
        timezone:
          typeof ev.timezone === "string" ? ev.timezone : "America/Los_Angeles",
        location,
        group: calendar.group,
        groupUrl: calendar.url,
      });
    }
    return meetups;
  } catch {
    return [];
  }
}

export async function getUpcomingMeetups(count = 3): Promise<Meetup[]> {
  // Fetch every calendar in parallel; each degrades to [] on its own error so
  // one failing community never blanks the others.
  const perCalendar = await Promise.all(
    CALENDARS.map((calendar) => getCalendarMeetups(calendar, count)),
  );

  // Merge, soonest first across all groups, then cap.
  return perCalendar
    .flat()
    .sort((a, b) => a.startAt.localeCompare(b.startAt))
    .slice(0, count);
}
