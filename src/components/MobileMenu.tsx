"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { NavLabel } from "@/components/NavLabel";

export function MobileMenu({ current }: { current?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-11 h-11 inline-flex items-center justify-center text-[var(--color-ink)]"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X aria-hidden="true" className="w-5 h-5" />
        ) : (
          <Menu aria-hidden="true" className="w-5 h-5" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--color-base)] border-b border-[var(--color-hairline)] shadow-[0_12px_24px_-12px_rgba(16,21,27,0.18)]">
          <nav aria-label="Mobile" className="flex flex-col px-5 py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={current === link.href ? "page" : undefined}
                className="py-3.5 border-b border-[var(--color-hairline)] last:border-b-0 serif text-[28px] leading-none text-[var(--color-text)] hover:text-[var(--color-blue)] transition-colors"
              >
                <NavLabel link={link} />
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
