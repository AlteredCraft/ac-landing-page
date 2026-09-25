// Shared class strings for the pill buttons and small UI atoms used across
// pages. Keeps the long Tailwind strings in one place so every CTA matches.

// Page gutter: 1200px of content, 20px side padding on phones.
export const container = "mx-auto w-full max-w-[1296px] px-5 sm:px-8 lg:px-12";

const pill =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors";

export const btn = {
  // Solid ink: the default primary action on light surfaces.
  primary: `${pill} h-12 px-[22px] text-[15px] bg-[var(--color-ink)] text-white hover:bg-[var(--color-blue)] hover:text-white`,
  // Hairline ink outline: secondary actions.
  outline: `${pill} h-12 px-[22px] text-[15px] font-medium border border-[var(--color-ink)] text-[var(--color-text)] hover:bg-[var(--color-ink)] hover:text-white`,
  // Lime: the primary action on ink surfaces, and the footer subscribe CTA.
  lime: `${pill} h-12 px-5 text-[15px] bg-[var(--color-lime)] text-[var(--color-ink)] hover:bg-[var(--color-lime-hover)] hover:text-[var(--color-ink)]`,
  // Blue: reserved for the consulting "Let's talk" action.
  blue: `${pill} h-11 px-[18px] text-[14.5px] bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue-hover)] hover:text-white`,
};

// Small mono pill used for tags / tech chips.
export const chip =
  "mono inline-flex items-center px-[9px] py-[3px] text-[11.5px] text-[var(--color-body)] border border-[var(--color-chip-border)] rounded-full lowercase";

// Mono text link with an arrow icon (blue).
export const monoLink =
  "mono inline-flex items-center gap-1.5 min-h-6 text-[13px] text-[var(--color-blue)] hover:text-[var(--color-blue-hover)] hover:underline underline-offset-4";

// Inline prose link: text color with a blue underline.
export const proseLink =
  "underline underline-offset-4 decoration-[var(--color-blue)] hover:text-[var(--color-blue)] transition-colors";

// White card with a hairline border.
export const card =
  "bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[10px]";

// Soft shadow on hover for linked cards.
export const lift =
  "transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(16,21,27,0.25)]";

// Small mono pill badges: lime for status/"free", blue for "live cohort",
// soft blue for a project kind or meetup group.
const badgeBase =
  "mono inline-flex flex-shrink-0 whitespace-nowrap items-center h-6 px-2.5 rounded-full text-[11.5px]";

export const badge = {
  lime: `${badgeBase} gap-[7px] bg-[var(--color-lime)] text-[var(--color-ink)]`,
  blue: `${badgeBase} bg-[var(--color-blue)] text-white`,
  soft: `${badgeBase} bg-[var(--color-blue-soft)] text-[var(--color-blue-hover)]`,
};
