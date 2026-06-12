import Image from "next/image";
import { ExternalLink } from "lucide-react";
import oaiaThumb from "../../public/oaia-thumb.png";

// Recorded talks / screencasts. Shared between /speaking and the homepage
// Community section.
export function SpeakingRecordings() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* GOTO Conference Interview */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden flex flex-col">
        <div className="aspect-video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/AeA7PShEkD8"
            title="Clean Architecture with Python, GOTO Conference"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <span className="inline-flex self-start px-2.5 py-1 bg-[var(--color-accent)]/15 text-[var(--color-accent)] text-xs font-semibold tracking-wide rounded-full mb-3">
            GOTO Conferences · Interview
          </span>
          <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl text-[var(--color-text)] mb-2">
            &ldquo;Clean Architecture with Python&rdquo;
          </h3>
          <p className="text-[var(--color-muted)] text-sm">
            Interview on the GOTO Conferences channel about the book and
            building maintainable software systems.
          </p>
        </div>
      </div>

      {/* Oregon AI Accelerator — Observability in AI */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden flex flex-col">
        <a
          href="https://www.youtube.com/watch?v=DPqnZzD2glU"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative aspect-video">
            <Image
              src={oaiaThumb}
              alt="Observability in AI: slide showing the antipattern of unmonitored LLM calls"
              fill
              className="object-cover object-top"
            />
          </div>
        </a>
        <div className="p-6 flex flex-col flex-grow">
          <span className="inline-flex self-start px-2.5 py-1 bg-[var(--color-accent)]/15 text-[var(--color-accent)] text-xs font-semibold tracking-wide rounded-full mb-3">
            Oregon AI Accelerator · Screencast
          </span>
          <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl text-[var(--color-text)] mb-2">
            &ldquo;Observability in AI&rdquo;
          </h3>
          <p className="text-[var(--color-muted)] text-sm mb-4 flex-grow">
            Screencast presentation on observability patterns for AI systems in
            production.
          </p>
          <a
            href="https://www.youtube.com/watch?v=DPqnZzD2glU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors self-start"
          >
            Watch on YouTube
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
