import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

export interface TocItem {
  id: string;
  text: string;
}

export interface RenderedGuide {
  intro: string; // HTML before the first H2
  body: string; // HTML from the first H2 on
  toc: TocItem[];
  wordCount: number;
  /** Photo credits pulled out of captions (license attribution), shown collapsed at the end. */
  credits: string[];
}

import imageSizes from "@/content/guides/image-sizes.json";

const IMAGE_SIZES = imageSizes as unknown as Record<string, [number, number]>;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z#0-9]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function postProcess(html: string, toc: TocItem[], credits: string[] = []): string {
  const seen = new Map<string, number>();
  return (
    html
      // Image paragraph followed by an italic caption paragraph -> <figure>.
      // Caption, credit and license text are kept verbatim.
      .replace(
        /<p><img src="([^"]+)" alt="([^"]*)"\s*\/?><\/p>\s*<p><em>([\s\S]*?)<\/em><\/p>/g,
        (_m, src: string, alt: string, caption: string) => {
          const key = path.basename(src).replace(/\.\w+$/, "");
          const [w, h] = IMAGE_SIZES[key] ?? [1400, 1050];
          // Captions show only the description; the "Photo: author, license" credit moves to the
          // collapsed Image credits list (CC BY / BY-SA still require attribution).
          // Batches use either "Photo: ..." or "Image: ..." for the credit.
          const [desc, credit] = caption.split(/\s*(?:Photo|Image):\s*/);
          if (credit) {
            const c = credit
              .replace(/\s*(Wikimedia|Source) rendition;?[^<]*$/i, "")
              // Internal sourcing note from the batch files, not reader-facing.
              .replace(/;?\s*(<a [^>]*>)?Manufacturer image; reuse permission not verified(<\/a>)?/i, "")
              .replace(/[.\s]+$/, "");
            if (!credits.includes(c)) credits.push(c);
          }
          return `<figure><img src="${src}" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async"><figcaption>${desc.trim()}</figcaption></figure>`;
        },
      )
      .replace(/<table>/g, '<div class="table-wrap" role="region" tabindex="0" aria-label="Table"><table>')
      .replace(/<\/table>/g, "</table></div>")
      // External links open in a new tab; internal links stay as normal anchors.
      .replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"')
      .replace(/<h2>([\s\S]*?)<\/h2>/g, (_m, inner: string) => {
        let id = slugify(inner);
        const n = seen.get(id) ?? 0;
        seen.set(id, n + 1);
        if (n) id = `${id}-${n}`;
        toc.push({ id, text: inner.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&") });
        return `<h2 id="${id}">${inner}</h2>`;
      })
      .replace(/<h3>([\s\S]*?)<\/h3>/g, (_m, inner: string) => `<h3 id="${slugify(inner)}">${inner}</h3>`)
  );
}

export function renderGuide(contentFile: string): RenderedGuide {
  const raw = fs.readFileSync(path.join(process.cwd(), "content/guides", contentFile), "utf8");
  // The H1 is rendered by the page header.
  const md = raw.replace(/^# .*\n+/, "");
  const firstH2 = md.search(/^## /m);
  const introMd = firstH2 === -1 ? md : md.slice(0, firstH2);
  const bodyMd = firstH2 === -1 ? "" : md.slice(firstH2);
  const toc: TocItem[] = [];
  const credits: string[] = [];
  const intro = postProcess(marked.parse(introMd, { async: false }), [], credits);
  const body = postProcess(marked.parse(bodyMd, { async: false }), toc, credits);
  const wordCount = md.replace(/!\[[^\]]*\]\([^)]*\)/g, "").split(/\s+/).filter(Boolean).length;
  return { intro, body, toc, wordCount, credits };
}

/** Minimal markdown for short structured fields (Best/Review bodies). */
export function renderInline(md: string): string {
  return postProcess(marked.parse(md, { async: false }), []);
}
