import Image from "next/image";
import oaiaThumb from "../../public/oaia-thumb.webp";
import { card, lift } from "@/lib/styles";

// Lime play button drawn over the dark GOTO panel.
function PlayMark() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <circle cx="20" cy="20" r="19" fill="var(--color-lime)" />
      <path d="M16 13.5v13l10.5-6.5z" fill="var(--color-ink)" />
    </svg>
  );
}

// Recorded talks / screencasts. Shared between /speaking and the homepage
// Community section; pass `className` to set the grid (stacked in the
// homepage aside, two-up on /speaking).
export function SpeakingRecordings({
  className = "grid gap-4",
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      {/* GOTO Conference Interview */}
      <a
        href="https://www.youtube.com/watch?v=AeA7PShEkD8"
        target="_blank"
        rel="noopener noreferrer"
        className={`${card} group flex flex-col overflow-hidden ${lift}`}
      >
        <div className="h-[170px] flex flex-col justify-between p-[18px] px-5 bg-[var(--color-ink)] text-white">
          <p className="mono text-[var(--color-lime)]">GOTO Conferences</p>
          <div className="flex items-end justify-between gap-3">
            <p className="serif text-[30px] leading-none">
              Clean Architecture
              <br />
              with Python
            </p>
            <PlayMark />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 px-5 py-4">
          <p className="mono text-[var(--color-muted)]">interview</p>
          <h3 className="text-[15px] font-semibold leading-[1.35] group-hover:text-[var(--color-blue)] transition-colors">
            &ldquo;Clean Architecture with Python&rdquo;
          </h3>
          <p className="text-[13.5px] leading-normal text-[var(--color-body)]">
            On the book and building maintainable software systems.
          </p>
        </div>
      </a>

      {/* Oregon AI Accelerator — Observability in AI */}
      <a
        href="https://www.youtube.com/watch?v=DPqnZzD2glU"
        target="_blank"
        rel="noopener noreferrer"
        className={`${card} group flex flex-col overflow-hidden ${lift}`}
      >
        <div className="relative h-[170px]">
          <Image
            src={oaiaThumb}
            alt="Observability in AI: slide showing the antipattern of unmonitored LLM calls"
            fill
            sizes="(min-width: 1024px) 400px, 100vw"
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-col gap-1.5 px-5 py-4">
          <p className="mono text-[var(--color-muted)]">
            Oregon AI Accelerator · screencast
          </p>
          <h3 className="text-[15px] font-semibold leading-[1.35] group-hover:text-[var(--color-blue)] transition-colors">
            &ldquo;Observability in AI&rdquo;
          </h3>
          <p className="text-[13.5px] leading-normal text-[var(--color-body)]">
            Observability patterns for AI systems in production.
          </p>
        </div>
      </a>
    </div>
  );
}
