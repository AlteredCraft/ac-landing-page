// Curated project list for the Projects section (homepage preview + /projects).
// `tags` are categorical labels (Title-Case, hyphenated compounds, acronyms upper).
// `stack` are sub-tags: the tech/tools, in their natural product casing.
// `status` is an optional badge (e.g., "Active-Development"); a project with a
// status gets the emphasized (ink-bordered) card. `kind` is an optional
// secondary badge (e.g., "Desktop App") shown when there is no status.
// Copy is grounded in each repo's README. All linked repos verified public;
// Marginalia's repo is private, so its link is a placeholder until it has a
// public URL.
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
  kind?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "marginalia",
    name: "Marginalia",
    kind: "Web App",
    oneLiner:
      "A place to read difficult papers with other people and with AI guides.",
    description:
      "A group keeps a small library of papers, uploaded as PDFs or imported from arXiv. Ask a question beside the paper and the AI guide you choose reads the whole PDF and replies in the discussion for everyone to see. Every guide call's tokens and cost are recorded, and members rate each reply accurate or inaccurate, so those measurements decide what gets built next.",
    tags: ["Research", "Reading", "AI-Guides"],
    stack: ["Next.js", "Postgres", "OpenRouter"],
    links: [{ label: "Repo", href: "#" }],
  },
  {
    slug: "b2",
    name: "B2",
    kind: "Desktop App",
    oneLiner:
      "A notes app for research: plain Markdown in a folder you own, with an AI layer that finds the connections you haven't made yet.",
    description:
      "My daily notes app, built to replace Obsidian. Beside every note is a ranked list of related notes it isn't linked to yet, and a model explains what they have in common. Keyword and semantic search, typed links (supports, contradicts), and answers grounded in your notes with citations you can check. Local first: embeddings run on your machine and chat uses Ollama by default.",
    tags: ["PKM", "Research", "Local-First"],
    stack: ["Rust", "Tauri", "Ollama"],
    links: [{ label: "Repo", href: "https://github.com/AlteredCraft/B2" }],
  },
  {
    slug: "tricorder",
    name: "Tricorder",
    kind: "IoT",
    oneLiner:
      "A handheld, agent-assisted instrument for exploring the physical world.",
    description:
      "Built on the M5Stack Tab5 (ESP32-P4): hold it, point it, move it, and ask questions while a person and an agent investigate something together in real time. ESP-IDF firmware on the device, a Mac-side Python investigation service, and local speech-to-text and spoken guidance. Co-developed with OpenAI Codex and Claude Code.",
    tags: ["Hardware", "Agents", "Research"],
    stack: ["ESP32-P4", "C++", "Python"],
    links: [
      { label: "Repo", href: "https://github.com/AlteredCraft/tricorder" },
    ],
  },
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
    kind: "Desktop App",
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
