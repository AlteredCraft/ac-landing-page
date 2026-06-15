export interface Meetup {
  title: string;
  url: string; // full luma.com event URL
  startAt: string; // ISO 8601 UTC timestamp
  timezone: string; // IANA tz, e.g. "America/Los_Angeles" — format the date in this zone
  location: string; // venue / address line; may be empty
}

// Portland AI Engineers calendar (luma.com/portland-ai-engineers).
const CALENDAR_API_ID = "cal-DfQe2kBQ7UiNr4y";

export async function getUpcomingMeetups(count = 3): Promise<Meetup[]> {
  try {
    const url =
      `https://api.lu.ma/calendar/get-items?calendar_api_id=${CALENDAR_API_ID}` +
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
      });
    }

    // Soonest first — Luma returns future events ascending, but don't rely on it.
    meetups.sort((a, b) => a.startAt.localeCompare(b.startAt));
    return meetups.slice(0, count);
  } catch {
    return [];
  }
}
