export interface SubstackPost {
  title: string;
  subtitle: string;
  url: string;
}

function extractTag(xml: string, tag: string): string {
  // Handle CDATA sections: <tag><![CDATA[content]]></tag>
  const cdataRegex = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`);
  const cdataMatch = xml.match(cdataRegex);
  if (cdataMatch) return cdataMatch[1].trim();

  // Handle plain text: <tag>content</tag>
  const plainRegex = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`);
  const plainMatch = xml.match(plainRegex);
  if (plainMatch) return plainMatch[1].trim();

  return "";
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export async function getLatestPosts(count = 3): Promise<SubstackPost[]> {
  try {
    const res = await fetch("https://writing.alteredcraft.com/feed", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];

    const xml = await res.text();

    const items: SubstackPost[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null && items.length < count) {
      const itemXml = match[1];
      const title = stripHtml(extractTag(itemXml, "title"));
      const description = stripHtml(extractTag(itemXml, "description"));
      const url = extractTag(itemXml, "link");

      if (title && url) {
        items.push({ title, subtitle: description, url });
      }
    }

    return items;
  } catch {
    return [];
  }
}
