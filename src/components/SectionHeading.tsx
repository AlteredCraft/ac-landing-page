// Homepage section header: an ink rule on top, serif title on the left, and
// the mono "/ section" label on the right.
export function SectionHeading({
  title,
  label,
}: {
  title: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-t-[1.5px] border-[var(--color-ink)] pt-4 lg:pt-5">
      <h2 className="serif m-0 text-[38px] lg:text-[56px] leading-none">
        {title}
      </h2>
      <p className="mono lowercase text-[var(--color-muted)] hidden sm:block">
        / {label}
      </p>
    </div>
  );
}
