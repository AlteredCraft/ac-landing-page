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
    <div className="mb-12">
      <h4 className="font-semibold mb-4">Latest posts</h4>
      <div className="grid md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-[var(--color-base)] rounded-lg hover:shadow-md transition-shadow"
          >
            <h5 className="font-medium text-sm leading-snug mb-1 group-hover:text-[var(--color-accent)] transition-colors flex items-start gap-1">
              <span>{post.title}</span>
              <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-accent)]" />
            </h5>
            {post.subtitle && (
              <p className="text-xs text-[var(--color-muted)] line-clamp-2">
                {post.subtitle}
              </p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
