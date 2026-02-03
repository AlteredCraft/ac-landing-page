"use client";

import { useState } from "react";

const navLinks = [
  { href: "#newsletter", label: "Newsletter" },
  { href: "#courses", label: "Courses" },
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
        <div className="absolute top-full left-0 right-0 bg-[var(--color-surface)] border-b border-[var(--color-border)] shadow-lg">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-[var(--color-text)] hover:bg-[var(--color-surface-alt)] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#newsletter"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-3 bg-[var(--color-accent)] text-white rounded-lg text-center font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Subscribe
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
