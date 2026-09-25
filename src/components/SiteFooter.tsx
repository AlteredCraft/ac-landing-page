import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { NAV_LINKS } from "@/lib/nav";
import { NavLabel } from "@/components/NavLabel";
import { btn, container } from "@/lib/styles";

const CONNECT_LINKS = [
  { label: "Substack", href: "https://writing.alteredcraft.com" },
  { label: "Maven", href: "https://maven.com/altered-craft-learning" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samkeen" },
  { label: "Threads", href: "https://www.threads.net/@sam.keen" },
  { label: "X", href: "https://x.com/samkeen" },
];

const footerLink =
  "text-[14.5px] text-[var(--color-text)] hover:text-[var(--color-blue)] transition-colors";

// Shared light footer. `full` is the homepage version with the subscribe CTA
// and link columns; `compact` is the single-row version for subpages.
export function SiteFooter({
  variant = "compact",
}: {
  variant?: "full" | "compact";
}) {
  const year = new Date().getFullYear();

  if (variant === "compact") {
    return (
      <footer className="bg-[var(--color-surface)] border-t border-[var(--color-hairline)]">
        <div
          className={`${container} py-8 lg:py-9 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10`}
        >
          <Link href="/" aria-label="AlteredCraft home">
            <Wordmark className="text-[22px]" />
          </Link>
          <div className="mono flex flex-wrap gap-x-6 gap-y-2 text-[var(--color-muted)]">
            <Link href="/" className="hover:text-[var(--color-blue)] transition-colors">
              Home
            </Link>
            <Link
              href="/press-kit"
              className="hover:text-[var(--color-blue)] transition-colors"
            >
              Press Kit
            </Link>
            <a
              href="mailto:sam@alteredcraft.com"
              className="hover:text-[var(--color-blue)] transition-colors"
            >
              sam@alteredcraft.com
            </a>
            <span>&copy; {year} Altered Craft, LLC. All rights reserved.</span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-hairline)]">
      <div className={`${container} pt-8 lg:pt-12 pb-7 lg:pb-9 flex flex-col gap-6 lg:gap-10`}>
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-3.5 max-w-[420px]">
            <Link href="/" aria-label="AlteredCraft home">
              <Wordmark className="text-2xl lg:text-[26px]" />
            </Link>
            <p className="text-sm lg:text-[14.5px] leading-[1.55] text-[var(--color-body)]">
              Writing and teaching about AI-assisted software development.
              Weekly newsletter and live workshops for developers building
              with AI.
            </p>
            <a
              href="https://writing.alteredcraft.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn.lime} lg:self-start lg:h-11 lg:px-[18px] lg:text-[14.5px]`}
            >
              Subscribe to the newsletter
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:contents">
            <nav aria-label="Footer" className="flex flex-col gap-2.5">
              <p className="mono text-[var(--color-muted)] pb-1">navigate</p>
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={footerLink}>
                  <NavLabel link={link} />
                </Link>
              ))}
              <Link href="/press-kit" className={footerLink}>
                Press Kit
              </Link>
            </nav>

            <div className="flex flex-col gap-2.5">
              <p className="mono text-[var(--color-muted)] pb-1">connect</p>
              {CONNECT_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLink}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mono flex flex-col sm:flex-row sm:justify-between gap-1.5 pt-4 lg:pt-5 border-t border-[var(--color-hairline)] text-[var(--color-muted)]">
          <span>&copy; {year} Altered Craft, LLC. All rights reserved.</span>
          <a
            href="mailto:sam@alteredcraft.com"
            className="hover:text-[var(--color-blue)] transition-colors"
          >
            sam@alteredcraft.com
          </a>
        </div>
      </div>
    </footer>
  );
}
