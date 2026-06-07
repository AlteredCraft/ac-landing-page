import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// Brand-styled renderers for journal markdown. Keeps styling in one place and
// avoids pulling in a typography plugin for short prose entries.
const components: Components = {
  h2: ({ children }) => (
    <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-2xl text-[var(--color-text)] mt-10 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-xl text-[var(--color-text)] mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[var(--color-text)] leading-relaxed mb-5">{children}</p>
  ),
  a: ({ href, children }) => {
    const isExternal = !!href && /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className="text-[var(--color-accent)] underline hover:no-underline"
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-5 space-y-2 text-[var(--color-text)]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2 text-[var(--color-text)]">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[var(--color-accent)] pl-4 italic text-[var(--color-muted)] my-6">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-[var(--color-border)] my-8" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-[var(--color-text)]">
      {children}
    </strong>
  ),
  code: ({ children }) => (
    <code className="px-1.5 py-0.5 rounded bg-[var(--color-surface-alt)] text-[var(--color-text)] text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-6 p-4 rounded-lg overflow-x-auto bg-[#1F1D1D] text-white text-sm font-mono [&>code]:bg-transparent [&>code]:text-white [&>code]:p-0">
      {children}
    </pre>
  ),
};

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {children}
    </ReactMarkdown>
  );
}
