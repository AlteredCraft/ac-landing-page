// Text wordmark: blue slash + "altered craft" in Geist semibold. Used in the
// header, footer, and standalone pages. The downloadable logo files live on
// /press-kit.
export function Wordmark({ className = "text-[30px]" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-semibold tracking-[-0.03em] leading-none text-[var(--color-text)] ${className}`}
    >
      <span className="text-[var(--color-blue)]">/</span>altered craft
    </span>
  );
}
