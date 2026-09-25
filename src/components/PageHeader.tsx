import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Subpage hero: mono breadcrumb (back link to the parent + kicker), a large
// serif title, an intro paragraph, and an optional right-hand aside.
export function PageHeader({
  back,
  kicker,
  title,
  children,
  aside,
}: {
  back: { href: string; label: string };
  kicker: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section
      className={`grid gap-10 lg:gap-20 pt-10 lg:pt-[72px] pb-10 lg:pb-14 lg:items-end ${
        aside ? "lg:grid-cols-[minmax(0,1fr)_360px]" : ""
      }`}
    >
      <div className="flex flex-col gap-5 lg:gap-[22px]">
        <p className="mono lowercase text-[var(--color-muted)] flex flex-wrap items-center gap-x-2">
          <Link
            href={back.href}
            className="inline-flex items-center gap-1 min-h-6 text-[var(--color-muted)] hover:text-[var(--color-blue)] transition-colors"
          >
            <ArrowLeft aria-hidden="true" className="w-3.5 h-3.5" />
            {back.label}
          </Link>
          <span aria-hidden="true">/</span>
          <span>{kicker}</span>
        </p>
        <h1 className="serif m-0 text-[64px] lg:text-[104px] leading-[0.95]">
          {title}
        </h1>
        {children && (
          <div className="text-lg lg:text-xl leading-normal text-[var(--color-body)] max-w-[34em]">
            {children}
          </div>
        )}
      </div>
      {aside}
    </section>
  );
}
