import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { Terminal, ArrowLeft } from "lucide-react";
import { btn } from "@/lib/styles";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-base)] flex flex-col items-center justify-center px-5">
      {/* Brand */}
      <Link href="/" aria-label="AlteredCraft home" className="mb-14">
        <Wordmark className="text-[30px]" />
      </Link>

      {/* Terminal-style 404 card */}
      <div className="w-full max-w-lg">
        <div className="bg-[var(--color-ink)] rounded-t-[10px] px-4 py-2.5 flex items-center gap-2 border-b border-[var(--color-ink-border)]">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="mono ml-2 text-xs text-[var(--color-on-ink-muted)]">
            not-found
          </span>
        </div>
        <div className="mono bg-[var(--color-ink-raised)] rounded-b-[10px] p-6 text-sm leading-relaxed">
          <p className="text-[var(--color-on-ink)]">
            <span className="text-[var(--color-lime)]">$</span> curl
            alteredcraft.com
            <span className="text-[var(--color-lime)]">/</span>
            <span className="text-[var(--color-on-ink-muted)] line-through decoration-[var(--color-ink-input-border)]">
              that-page-you-wanted
            </span>
          </p>
          <div className="mt-4 text-[var(--color-on-ink-body)]">
            <p>
              <span className="text-[#FF8A80]">404</span> &mdash; This page has
              been... <span className="italic text-[var(--color-lime)]">altered</span>{" "}
              out of existence.
            </p>
          </div>
          <p className="mt-4 text-[var(--color-on-ink-body)]">
            Could be a typo. Could be the site owner being
            <br />
            reckless with paths. Our apologies.
          </p>
          <p className="mt-6 text-[var(--color-on-ink)]">
            <span className="text-[var(--color-lime)]">$</span>{" "}
            <span className="animate-pulse">_</span>
          </p>
        </div>
      </div>

      {/* CTA */}
      <Link href="/" className={`${btn.primary} mt-10`}>
        <ArrowLeft aria-hidden="true" className="w-4 h-4" />
        Back to home
      </Link>

      {/* Cheeky footer */}
      <p className="mono mt-8 text-[var(--color-muted)] flex items-center gap-1.5">
        <Terminal aria-hidden="true" className="w-3.5 h-3.5" />
        At least the 404 page works.
      </p>
    </div>
  );
}
