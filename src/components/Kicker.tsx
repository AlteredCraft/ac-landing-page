// Eyebrow label above section headings: gold slash + small-caps label in
// Space Grotesk. Gives every section a consistent, scannable entry point.
export function Kicker({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] ${className}`}
    >
      <span aria-hidden="true" className="text-sm text-[var(--color-accent)]">
        /
      </span>
      {children}
    </p>
  );
}
