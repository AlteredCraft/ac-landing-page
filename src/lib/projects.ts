// Curated project list for the Projects section (homepage preview + /projects).
// Each project maps to the dev-rel triad via `signals`: Build (technical depth),
// Teach (developer education), Empathy (understands developer pain).
//
// LINKS: hrefs set to "#" are PLACEHOLDERS. Fill the real repo / post URLs before
// shipping. ProjectCard renders any "#" link as a visible "(add link)" marker so a
// missing URL is obvious in review rather than shipped silently.

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
  // Optional flag for work that isn't public yet (shows an "In progress" badge).
  inProgress?: boolean;
};

// Ordering: lead with the strongest dev-rel evidence (public repo + post) first.
export const PROJECTS: Project[] = [
  {
    slug: "rusty-learn",
    name: "rusty-learn",
    oneLiner:
      "Learning a systems language in public: tooling that embodies 'AI as tutor, not typist.'",
    description:
      "A ratatui terminal-UI tracker built to teach myself Rust while documenting the journey. Uses a custom tutor output style that forces explanation over autocomplete.",
    stack: ["Rust", "ratatui"],
    signals: ["Build", "Teach"],
    links: [
      { label: "Repo", href: "#" }, // TODO: real repo URL
      { label: "Read the post", href: "#" }, // TODO: AlteredCraft post URL
    ],
  },
  {
    slug: "chat-rag-explorer",
    name: "chat-rag-explorer",
    oneLiner: "A working RAG chatbot that doubled as newsletter teaching material.",
    description:
      "A Flask + ChromaDB retrieval-augmented chatbot built to explore RAG patterns hands-on, then turned into explainer content for readers.",
    stack: ["Python", "Flask", "ChromaDB"],
    signals: ["Build", "Teach"],
    links: [
      { label: "Repo", href: "#" }, // TODO: real repo URL
      { label: "Read the post", href: "#" }, // TODO: AlteredCraft post URL
    ],
  },
  {
    slug: "workshop-rag-basics",
    name: "workshop-rag-basics",
    oneLiner: "Open-source curriculum teaching RAG to developers from scratch.",
    description:
      "A co-authored GitHub curriculum with purpose-built datasets (WikiVoyage, Paul Graham essays) used to teach retrieval patterns in live workshops.",
    stack: ["Python", "Teaching materials"],
    signals: ["Teach", "Empathy"],
    links: [
      { label: "Repo", href: "#" }, // TODO: real repo URL
    ],
  },
  {
    slug: "raise",
    name: "RAISE — Responsible AI-assisted Software Engineering",
    oneLiner:
      "A community framework for the 'quality floor collapse' in AI-assisted dev.",
    description:
      "A practitioner framework addressing how AI coding tools can erode baseline quality, and what teams should do about it. Thought leadership grounded in real engineering practice.",
    stack: ["Framework", "Writing"],
    signals: ["Empathy", "Teach"],
    links: [
      { label: "Framework", href: "#" }, // TODO: real repo / landing URL
      { label: "Read the post", href: "#" }, // TODO: AlteredCraft post URL
    ],
  },
  {
    slug: "hermes",
    name: "Hermes — local research agent",
    oneLiner: "An always-on research agent running on local LLM inference.",
    description:
      "A build-in-public agent assistant designed to run on local hardware via Ollama, exploring practical, private AI infrastructure for developers.",
    stack: ["Python", "Ollama", "Local LLMs"],
    signals: ["Build"],
    inProgress: true,
    links: [
      { label: "Repo", href: "#" }, // TODO: real repo URL (or remove if staying private)
    ],
  },
];
