"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { NavLabel } from "@/components/NavLabel";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X aria-hidden="true" className="w-6 h-6" />
        ) : (
          <Menu aria-hidden="true" className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--color-ink)] border-b border-white/10 shadow-lg">
          <nav aria-label="Mobile" className="flex flex-col p-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-medium uppercase tracking-widest text-white/85 hover:text-[var(--color-accent)] transition-colors rounded-lg"
              >
                <NavLabel link={link} />
              </a>
            ))}
            <a
              href="https://writing.alteredcraft.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 mx-4 mb-3 inline-flex items-center justify-center px-4 py-3 bg-[var(--color-accent)] text-[var(--color-ink)] text-sm font-semibold tracking-wide rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Subscribe to the newsletter
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
