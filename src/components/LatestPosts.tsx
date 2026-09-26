"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { card, lift } from "@/lib/styles";

interface SubstackPost {
  title: string;
  subtitle: string;
  url: string;
}

// Latest newsletter issues, fetched client-side from /api/posts. Renders
// nothing until posts arrive (or if the feed is unavailable).
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
    <div className="flex flex-col gap-3.5 mt-6 lg:mt-8">
      <p className="mono text-[var(--color-muted)]">latest issues</p>
      <ul className="grid gap-3 lg:gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <li key={post.url}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${card} group h-full flex flex-col gap-2 p-5 ${lift}`}
            >
              <h3 className="serif text-2xl leading-[1.1] flex items-start justify-between gap-3 group-hover:text-[var(--color-blue)] transition-colors">
                <span>{post.title}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="w-4 h-4 flex-shrink-0 mt-1.5"
                />
              </h3>
              {post.subtitle && (
                <p className="text-sm leading-normal text-[var(--color-body)] line-clamp-2">
                  {post.subtitle}
                </p>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
