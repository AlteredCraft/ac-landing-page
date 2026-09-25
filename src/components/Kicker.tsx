// Eyebrow label above headings: a mono "/ label" line in muted slate.
// Pass `className` to recolor it (e.g. lime on ink surfaces).
export function Kicker({
  children,
  className = "text-[var(--color-muted)]",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`mono lowercase ${className}`}>/ {children}</p>;
}
