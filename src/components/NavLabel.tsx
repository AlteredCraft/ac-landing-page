import type { NavLink } from "@/lib/nav";

// Renders a nav link's label, prefixed with its optional Lucide icon.
// Used everywhere NAV_LINKS is mapped (header, mobile menu, footer) so the
// icon stays consistent across every nav surface.
export function NavLabel({ link }: { link: NavLink }) {
  const { Icon, label } = link;

  if (!Icon) return <>{label}</>;

  return (
    <span className="inline-flex items-center gap-1.5">
      <Icon className="w-4 h-4" aria-hidden="true" />
      {label}
    </span>
  );
}
