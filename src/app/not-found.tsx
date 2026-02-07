import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-base)] flex flex-col items-center justify-center px-6">
      {/* Brand */}
      <div className="mb-16">
        <BrandLockup size="md" />
      </div>

      {/* Terminal-style 404 card */}
      <div className="w-full max-w-lg">
        <div className="bg-[#1F1D1D] rounded-t-lg px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="ml-2 text-xs text-zinc-500 font-mono">not-found</span>
        </div>
        <div className="bg-[#2A2727] rounded-b-lg p-6 font-mono text-sm leading-relaxed">
          <p className="text-zinc-500">
            <span className="text-[#D4B84A]">$</span> curl alteredcraft.com
            <span className="text-[#D4B84A]">/</span>
            <span className="text-zinc-400 line-through decoration-zinc-600">
              that-page-you-wanted
            </span>
          </p>
          <div className="mt-4 text-zinc-400">
            <p>
              <span className="text-red-400">404</span> &mdash; This page has
              been... <span className="italic text-[#D4B84A]">altered</span>{" "}
              out of existence.
            </p>
          </div>
          <p className="mt-4 text-zinc-600">
            Could be a typo. Could be the site owner being
            <br />
            reckless with paths. Our apologies.
          </p>
          <p className="mt-6 text-zinc-500">
            <span className="text-[#D4B84A]">$</span>{" "}
            <span className="animate-pulse">_</span>
          </p>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text)] font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>

      {/* Cheeky footer */}
      <p className="mt-8 text-xs text-[var(--color-muted)] flex items-center gap-1.5">
        <Terminal className="w-3.5 h-3.5" />
        At least the 404 page works.
      </p>
    </div>
  );
}
