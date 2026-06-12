import { PenLine, type LucideIcon } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
  // Optional leading icon (Lucide). Rendered before the label by <NavLabel>.
  Icon?: LucideIcon;
};

// Header links scroll to homepage sections (/#…) except Journal, which is a
// standalone subpage and navigates away. Community is a homepage section that
// combines workshops and speaking.
export const NAV_LINKS: NavLink[] = [
  { href: "/#writing", label: "Newsletter" },
  { href: "/journal", label: "Journal", Icon: PenLine },
  { href: "/#projects", label: "Projects" },
  { href: "/#community", label: "Community" },
  { href: "/#about", label: "About" },
];
