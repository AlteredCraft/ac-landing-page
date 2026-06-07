// Curated project list for the Projects section (homepage preview + /projects).
// Each project maps to the dev-rel triad via `signals`: Build (technical depth),
// Teach (developer education), Empathy (understands developer pain).
//
// Copy is grounded in each repo's README. All repos verified public. The homepage
// preview shows the first 3 (PROJECTS.slice(0, 3)), so order matters.

export type Signal = "Build" | "Teach" | "Empathy";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  stack: string[];
  signals: Signal[];
  links: ProjectLink[];
  // Optional flag for work that isn't fully released yet (shows an "In progress" badge).
  inProgress?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "tilth",
    name: "Tilth",
    oneLiner:
      "A harness for long-running agents that work autonomously, then let you replay the whole run.",
    description:
      "A minimal harness for autonomous coding agents against any OpenAI-compatible endpoint. It carries the machinery a watched pair-programming agent can skip: an evaluator that judges whether a change is a proper solution, between-task budget caps, and offline-first observability you can replay end to end.",
    stack: ["Python", "OpenRouter", "Agents"],
    signals: ["Build", "Teach"],
    links: [
      { label: "Repo", href: "https://github.com/AlteredCraft/tilth" },
      { label: "Docs", href: "https://alteredcraft.github.io/tilth/" },
    ],
  },
  {
    slug: "knobs-cc",
    name: "knobs.cc",
    oneLiner:
      "A desktop inspector for every knob Claude Code gives you: where it lives, what it's set to, and which layer wins.",
    description:
      "Claude Code's configuration spans settings files at several layers, environment variables, and permissions. knobs.cc is a local desktop app that surfaces every setting, its value, and which layer takes precedence. Read-only inspector, pre-release.",
    stack: ["Tauri", "Rust"],
    signals: ["Build", "Empathy"],
    inProgress: true,
    links: [{ label: "Repo", href: "https://github.com/AlteredCraft/knobs-cc" }],
  },
  {
    slug: "claude-code-plugins",
    name: "Claude Code Plugins",
    oneLiner:
      "A marketplace of Claude Code plugins for AI-assisted development.",
    description:
      "A growing collection of Claude Code plugins built at Altered Craft, installable straight from the marketplace. Small, reusable tooling that extends Claude Code for everyday work.",
    stack: ["Claude Code", "Plugins"],
    signals: ["Build", "Teach"],
    links: [
      {
        label: "Repo",
        href: "https://github.com/AlteredCraft/claude-code-plugins",
      },
    ],
  },
  {
    slug: "rag-lab",
    name: "RAG Lab",
    oneLiner:
      "An educational chat and RAG app for exploring retrieval patterns hands-on.",
    description:
      "A teaching app that demonstrates a streaming chat interface over LLMs with retrieval-augmented generation. Flask backend, OpenRouter for model access, and a vanilla JavaScript front end. Cross-platform, and used as workshop material.",
    stack: ["Python", "Flask", "OpenRouter"],
    signals: ["Build", "Teach"],
    links: [
      {
        label: "Repo",
        href: "https://github.com/AlteredCraft/chat-rag-explorer",
      },
    ],
  },
];
