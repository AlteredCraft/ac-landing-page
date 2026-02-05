"use client";

import { useState } from "react";

const navLinks = [
  { href: "#newsletter", label: "Newsletter" },
  { href: "#teams", label: "For Teams" },
  { href: "#speaking", label: "Speaking" },
  { href: "#about", label: "About" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[var(--color-text)]"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--color-base)] border-b border-[var(--color-border)] shadow-lg">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-medium uppercase tracking-widest text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#newsletter"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-6 py-3 bg-[var(--color-text)] text-[var(--color-base)] text-sm font-semibold uppercase tracking-widest text-center hover:bg-[var(--color-accent)] transition-colors"
            >
              Subscribe
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
