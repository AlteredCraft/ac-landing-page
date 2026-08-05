import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { CodeBarDivider } from "@/components/CodeBarDivider";
import { NAV_LINKS } from "@/lib/nav";
import { NavLabel } from "@/components/NavLabel";

const CONNECT_LINKS = [
  { label: "Substack", href: "https://writing.alteredcraft.com" },
  { label: "Maven", href: "https://maven.com/altered-craft-learning" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samkeen" },
  { label: "Threads", href: "https://www.threads.net/@sam.keen" },
  { label: "X / Twitter", href: "https://x.com/samkeen" },
];

// Shared dark footer. `full` is the homepage version with the subscribe CTA
// and link columns; `compact` is the single-row version for subpages.
export function SiteFooter({
  variant = "compact",
}: {
  variant?: "full" | "compact";
}) {
  if (variant === "compact") {
    return (
      <footer className="py-12 px-6 lg:px-12 bg-[var(--color-ink)]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <BrandLockup variant="horizontal" size="sm" theme="dark" />
          <div className="flex items-center gap-6 text-sm text-white/55">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/press-kit"
              className="hover:text-white transition-colors"
            >
              Press Kit
            </Link>
            <a
              href="mailto:sam@alteredcraft.com"
              className="hover:text-white transition-colors"
            >
              sam@alteredcraft.com
            </a>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto mt-8 pt-6 border-t border-white/10 text-center text-white/45 text-sm">
          &copy; {new Date().getFullYear()} Altered Craft, LLC. All rights
          reserved.
        </div>
      </footer>
    );
  }

  return (
    <footer className="py-16 px-6 lg:px-12 bg-[var(--color-ink)]">
      <div className="max-w-[1200px] mx-auto">
        <CodeBarDivider className="max-w-[160px] gap-1 mb-10 opacity-80" />

        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-16">
          <div>
            <BrandLockup variant="horizontal" size="sm" theme="dark" />
            <p className="text-white/55 text-sm max-w-[400px] mt-4 leading-relaxed">
              Writing and teaching about AI-assisted software development.
              Weekly newsletter and live workshops for developers building
              with AI.
            </p>
            <a
              href="https://writing.alteredcraft.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-7 py-3.5 bg-[var(--color-accent)] text-[var(--color-ink)] font-semibold tracking-wide text-sm hover:bg-[var(--color-accent-hover)] transition-colors rounded-lg"
            >
              Subscribe to the newsletter
            </a>
          </div>

          <nav aria-label="Footer">
            <h4 className="font-semibold mb-4 text-white">Navigate</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 text-sm hover:text-white transition-colors"
                  >
                    <NavLabel link={link} />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/press-kit"
                  className="text-white/55 text-sm hover:text-white transition-colors"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-2.5 text-sm">
              {CONNECT_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:sam@alteredcraft.com"
                  className="text-white/55 hover:text-white transition-colors"
                >
                  sam@alteredcraft.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/45 text-sm">
          &copy; {new Date().getFullYear()} Altered Craft, LLC. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
