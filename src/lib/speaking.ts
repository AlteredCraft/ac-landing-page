// Shared speaking data. Rendered on /speaking (full page) and inside the
// Community section on the homepage. Hand-edited — no external data source.
export type Engagement = {
  date: string;
  location: string;
  host: string;
  title: string;
  description: string;
  links: { label: string; href: string }[];
};

export const UPCOMING: Engagement[] = [];

export const PAST: Engagement[] = [
  {
    date: "AUG 6, 2026",
    location: "PORTLAND, OR",
    host: "Oregon AIR Challenge · Core Defender AI",
    title: "Judge: Oregon AIR Challenge Pitch Day",
    description:
      "Judged the pitch event for the inaugural Oregon AIR Challenge cohort, Core Defender AI’s statewide AI and robotics competition for students. A strong field of pitches made picking a winner genuinely difficult — looking forward to future cohorts.",
    links: [
      { label: "Event details", href: "https://oregonair.coredefender.ai/" },
    ],
  },
  {
    date: "MAY 20, 2026",
    location: "PORTLAND, OR",
    host: "Maseeh College of Engineering · Portland State University",
    title: "Panelist: AI Futures",
    description:
      "Joined the AI Futures industry panel at the Maseeh Exchange: Events With Impact, alongside PSU faculty exploring how AI is being applied to real-world challenges.",
    links: [
      { label: "Event details", href: "https://www.pdx.edu/engineering/exchange" },
    ],
  },
  {
    date: "MAY 14, 2026",
    location: "PORTLAND, OR",
    host: "Portland WIP AI Demos Lunch · UpStart Collective",
    title: "Presented knobs.cc",
    description:
      "Demoed the in-progress build at Portland’s informal show-and-tell for AI builders: a desktop inspector for every knob Claude Code gives you, where it lives, what it’s set to, and which layer wins.",
    links: [
      {
        label: "Event details",
        href: "https://eventship.com/event/portland-wip-ai-demo-lunch",
      },
      { label: "knobs.cc on GitHub", href: "https://github.com/AlteredCraft/knobs-cc" },
    ],
  },
];
