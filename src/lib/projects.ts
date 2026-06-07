// Curated project list for the Projects section (homepage preview + /projects).
// `tags` are categorical labels (Title-Case, hyphenated compounds, acronyms upper).
// `stack` are sub-tags: the tech/tools, in their natural product casing.
// `status` is an optional badge (e.g., "Active-Development").
// Copy is grounded in each repo's README. All repos verified public.
// The homepage preview shows the first 3 (PROJECTS.slice(0, 3)), so order matters.

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  tags: string[];
  stack: string[];
  links: ProjectLink[];
  status?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "tilth",
    name: "Tilth",
    status: "Active-Development",
    oneLiner:
      "A harness for long-running agents that work autonomously, then let you replay the whole run.",
    description:
      "A minimal harness for autonomous coding agents against any OpenAI-compatible endpoint. It carries the machinery a watched pair-programming agent can skip: an evaluator that judges whether a change is a proper solution, between-task budget caps, and offline-first observability you can replay end to end.",
    tags: ["Research", "Dev-Tools", "Observability"],
    stack: ["Python", "OpenRouter", "Agents"],
    links: [
      { label: "Repo", href: "https://github.com/AlteredCraft/tilth" },
      { label: "Docs", href: "https://alteredcraft.github.io/tilth/" },
    ],
  },
  {
    slug: "lsp4agents",
    name: "LSP4Agents",
    status: "Active-Development",
    oneLiner: "A language-server client built for coding agents, not IDEs.",
    description:
      "An experiment in giving coding agents the structured tools developers rely on: go to definition, find references, real type errors. Existing LSP integrations assume an IDE on the other end, so this explores what a client designed for an agent's workflow looks like.",
    tags: ["Research", "Agent-Tools"],
    stack: ["Rust", "CLI"],
    links: [
      { label: "Repo", href: "https://github.com/AlteredCraft/lsp4agents" },
    ],
  },
  {
    slug: "knobs-cc",
    name: "knobs.cc",
    oneLiner:
      "A desktop inspector for every knob Claude Code gives you: where it lives, what it's set to, and which layer wins.",
    description:
      "Claude Code's configuration spans settings files at several layers, environment variables, and permissions. knobs.cc is a local desktop app that surfaces every setting, its value, and which layer takes precedence.",
    tags: ["Dev-Tools", "Observability", "App"],
    stack: ["Tauri", "Rust"],
    links: [{ label: "Repo", href: "https://github.com/AlteredCraft/knobs-cc" }],
  },
  {
    slug: "claude-code-plugins",
    name: "Claude Code Plugins",
    oneLiner:
      "A marketplace of Claude Code plugins for AI-assisted development.",
    description:
      "A growing collection of Claude Code plugins built at Altered Craft, installable straight from the marketplace. Small, reusable tooling that extends Claude Code for everyday work.",
    tags: ["Productivity"],
    stack: ["Claude Code", "Plugins"],
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
    tags: ["Teach", "RAG"],
    stack: ["Python", "Flask", "OpenRouter"],
    links: [
      {
        label: "Repo",
        href: "https://github.com/AlteredCraft/chat-rag-explorer",
      },
    ],
  },
];
