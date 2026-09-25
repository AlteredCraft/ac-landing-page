import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// Brand-styled renderers for journal markdown. Keeps styling in one place and
// avoids pulling in a typography plugin for short prose entries.
const components: Components = {
  h2: ({ children }) => (
    <h2 className="serif text-[34px] lg:text-[40px] leading-[1.05] text-[var(--color-text)] mt-12 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="serif text-[26px] lg:text-[30px] leading-[1.1] text-[var(--color-text)] mt-10 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[var(--color-body)] leading-relaxed mb-5">{children}</p>
  ),
  a: ({ href, children }) => {
    const isExternal = !!href && /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className="text-[var(--color-text)] underline underline-offset-4 decoration-[var(--color-blue)] hover:text-[var(--color-blue)] transition-colors"
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-5 space-y-2 text-[var(--color-body)] marker:text-[var(--color-muted)]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2 text-[var(--color-body)] marker:text-[var(--color-muted)]">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="serif border-l-4 border-[var(--color-lime)] pl-5 text-[24px] leading-[1.25] text-[var(--color-text)] my-8 [&>p]:text-inherit [&>p]:leading-[inherit]">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-[var(--color-border)] my-10" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-[var(--color-text)]">
      {children}
    </strong>
  ),
  code: ({ children }) => (
    <code className="mono px-1.5 py-0.5 rounded bg-[var(--color-hairline)] text-[var(--color-text)] text-[0.85em]">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mono mb-6 p-4 rounded-[10px] overflow-x-auto bg-[var(--color-ink)] text-[var(--color-on-ink)] text-[13px] leading-relaxed [&>code]:bg-transparent [&>code]:text-inherit [&>code]:p-0 [&>code]:text-[13px]">
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
