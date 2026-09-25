import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { MobileMenu } from "@/components/MobileMenu";
import { NAV_LINKS } from "@/lib/nav";
import { NavLabel } from "@/components/NavLabel";
import { container } from "@/lib/styles";

// Sticky light header shared by every page: wordmark, primary nav, and the
// subscribe CTA. Mobile nav lives in <MobileMenu>. `current` is the href of
// the subpage being viewed (e.g. "/journal"), marked with aria-current.
export function SiteNav({ current }: { current?: string }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-lime)] focus:text-[var(--color-ink)] focus:rounded-full focus:font-semibold focus:text-sm"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 bg-[var(--color-base)]/95 backdrop-blur border-b border-[var(--color-hairline)]">
        <nav
          aria-label="Main"
          className={`${container} relative h-[68px] lg:h-[84px] flex items-center justify-between gap-6`}
        >
          <Link href="/" aria-label="AlteredCraft home">
            <Wordmark className="text-2xl lg:text-[30px]" />
          </Link>

          <div className="flex items-center gap-1.5 md:gap-[30px]">
            <ul className="hidden md:flex items-center gap-6 lg:gap-[30px] text-[14.5px] font-medium">
              {NAV_LINKS.map((link) => {
                const active = current === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`text-[var(--color-text)] hover:text-[var(--color-blue)] transition-colors ${
                        active
                          ? "border-b-2 border-[var(--color-ink)] pb-[3px]"
                          : ""
                      }`}
                    >
                      <NavLabel link={link} />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <a
              href="https://writing.alteredcraft.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-11 md:h-10 px-[14px] md:px-4 rounded-full bg-[var(--color-ink)] text-white text-[13.5px] md:text-sm font-semibold hover:bg-[var(--color-blue)] transition-colors"
            >
              Subscribe
            </a>

            <MobileMenu current={current} />
          </div>
        </nav>
      </header>
    </>
  );
}
