import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { MobileMenu } from "@/components/MobileMenu";
import { NAV_LINKS } from "@/lib/nav";
import { NavLabel } from "@/components/NavLabel";

// Fixed dark header shared by every page: brand lockup, primary nav, and the
// subscribe CTA. Mobile nav lives in <MobileMenu>.
export function SiteNav() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-accent)] focus:text-[var(--color-ink)] focus:rounded-lg focus:font-semibold focus:text-sm"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main"
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-ink)]/95 backdrop-blur border-b border-white/10"
      >
      <div className="px-6 lg:px-12 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="sm:hidden">
          <BrandLockup variant="horizontal" size="sm" theme="dark" />
        </Link>
        <Link href="/" className="hidden sm:block">
          <BrandLockup variant="horizontal" size="md" theme="dark" />
        </Link>

        <div className="flex items-center gap-6 lg:gap-8">
          <ul className="hidden md:flex items-center gap-7 lg:gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-white/90 hover:text-[var(--color-accent)] transition-colors"
                >
                  <NavLabel link={link} />
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="https://writing.alteredcraft.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-4 py-2 bg-[var(--color-accent)] text-[var(--color-ink)] text-sm font-semibold tracking-wide rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            Subscribe
          </a>

          <MobileMenu />
        </div>
      </div>
    </nav>
    </>
  );
}
