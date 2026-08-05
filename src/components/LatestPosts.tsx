"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface SubstackPost {
  title: string;
  subtitle: string;
  url: string;
}

export function LatestPosts() {
  const [posts, setPosts] = useState<SubstackPost[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => (res.ok ? res.json() : []))
      .then(setPosts)
      .catch(() => {});
  }, []);

  if (posts.length === 0) return null;

  return (
    <div>
      <h3 className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-lg mb-5">
        Latest posts
      </h3>
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] divide-y divide-[var(--color-border)] overflow-hidden">
        {posts.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 hover:bg-[var(--color-surface-alt)]/60 transition-colors"
          >
            <h4 className="font-medium text-sm leading-snug flex items-start justify-between gap-3">
              <span className="group-hover:text-[var(--color-link)] transition-colors">
                {post.title}
              </span>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-link)]" />
            </h4>
            {post.subtitle && (
              <p className="mt-1.5 text-xs text-[var(--color-muted)] line-clamp-2 leading-relaxed">
                {post.subtitle}
              </p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
