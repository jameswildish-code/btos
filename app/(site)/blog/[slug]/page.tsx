export const revalidate = 0;
import Link from "next/link";
import { getBlogPost } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Block = { _type: string; style?: string; children?: { text: string }[]; [k: string]: any };

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function extractTOC(body: Block[]) {
  if (!Array.isArray(body)) return [];
  return body
    .filter((b) => b._type === "block" && (b.style === "h2" || b.style === "h3"))
    .map((b) => {
      const text = b.children?.map((c) => c.text).join("") ?? "";
      return { text, id: slugify(text) };
    });
}

function coverDate(iso: string) {
  if (!iso) return "— / —";
  const d = new Date(iso);
  return `${String(d.getMonth() + 1).padStart(2, "0")} / ${String(d.getFullYear()).slice(2)}`;
}

const ptComponents = {
  block: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ children, value }: any) => {
      const text = value?.children?.map((c: { text: string }) => c.text).join("") ?? "";
      return <h2 id={slugify(text)}>{children}</h2>;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ children, value }: any) => {
      const text = value?.children?.map((c: { text: string }) => c.text).join("") ?? "";
      return <h3 id={slugify(text)}>{children}</h3>;
    },
  },
};

// Static fallback for the featured article
const FEATURED = {
  title: "The case against the quarterly checkup.",
  category: "Research",
  publishedAt: "2026-05-04",
  author: { name: "Dr. Sofia Holm", role: "Head of Clinical Research · BiotrackOS" },
  readTime: 12,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: null as any,
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: typeof FEATURED | null = null;

  try {
    const data = await getBlogPost(slug);
    if (data) post = data;
  } catch {
    // Sanity not configured
  }

  if (!post) post = FEATURED;

  return (
    <>
      <style>{`
        .a-hero { padding:56px 0 32px; }
        .crumbs { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-bottom:24px; }
        .a-meta { display:flex; gap:20px; align-items:center; margin-top:32px; padding-top:24px; border-top:1px solid var(--line); }
        .ava-sm { width:44px; height:44px; border-radius:50%; background:linear-gradient(135deg,var(--mint),var(--mint-soft)); display:grid; place-items:center; font-family:var(--font-display); color:var(--teal); font-size:18px; }
        .a-meta .b .name { font-weight:500; font-size:14px; }
        .a-meta .b .sub { color:var(--muted); font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; margin-top:2px; }
        .a-cover { margin:32px 0 56px; aspect-ratio:21/9; border-radius:24px; background:linear-gradient(135deg,#1F2A48 0%,#2A4A6E 50%,#2FBFA3 100%); position:relative; overflow:hidden; }
        .a-cover::after { content:""; position:absolute; inset:0; background:repeating-linear-gradient(to right,transparent 0,transparent 19px,rgba(255,255,255,.05) 19px,rgba(255,255,255,.05) 20px),repeating-linear-gradient(to bottom,transparent 0,transparent 19px,rgba(255,255,255,.05) 19px,rgba(255,255,255,.05) 20px); }
        .a-cover .clabel { position:absolute; left:40px; bottom:32px; color:rgba(255,255,255,.9); font-family:var(--font-display); font-size:96px; line-height:.9; }
        .a-cover .ctag { position:absolute; right:40px; top:32px; color:rgba(255,255,255,.7); font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; }
        .body-layout { display:grid; grid-template-columns:220px 1fr 220px; gap:48px; align-items:start; padding:0 0 96px; }
        .toc { position:sticky; top:96px; font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); }
        .toc .toc-head { color:var(--ink); margin-bottom:14px; }
        .toc a { display:block; padding:6px 0; color:var(--muted); }
        .share-col { position:sticky; top:96px; }
        .share-col div { font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); margin-bottom:12px; }
        .content { max-width:70ch; }
        .content h2 { font-family:var(--font-display); font-weight:400; font-size:36px; line-height:1.1; margin:56px 0 16px; letter-spacing:-.01em; }
        .content p { font-size:18px; line-height:1.7; color:var(--ink-2); margin:0 0 18px; }
        .content blockquote { margin:36px -20px; padding:28px 32px; border-left:3px solid var(--teal-bright); background:var(--bg-2); font-family:var(--font-display); font-size:28px; line-height:1.25; font-style:italic; color:var(--ink); }
        .pull { margin:56px 0; font-family:var(--font-display); font-size:44px; line-height:1.05; letter-spacing:-.01em; text-wrap:balance; }
        .related { padding:80px 0; background:var(--bg-2); border-top:1px solid var(--line); }
        .related-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:32px; }
        .related a { background:var(--surface); border:1px solid var(--line); border-radius:16px; padding:24px; display:flex; flex-direction:column; gap:12px; }
        .related h4 { font-family:var(--font-display); font-weight:400; font-size:22px; line-height:1.15; margin:0; letter-spacing:-.01em; }
        .related .rmeta { font-family:var(--font-mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); }
        @media (max-width:1100px) { .body-layout { grid-template-columns:1fr; } .toc,.share-col { display:none; } }
        @media (max-width:700px) { .related-grid { grid-template-columns:1fr; } }
      `}</style>

      <section className="a-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/blog">Field notes</Link> / <span>{post.category}</span>
          </div>
          <h1 className="h1" style={{ maxWidth: "22ch" }}>{post.title}</h1>
          <div className="a-meta">
            <div className="ava-sm">SH</div>
            <div className="b">
              <div className="name">{post.author?.name}</div>
              <div className="sub">{post.author?.role} · {post.readTime} min read</div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="a-cover">
          <div className="clabel">{coverDate(post.publishedAt)}</div>
          <div className="ctag">{post.category} · {post.readTime ?? "—"} min read</div>
        </div>

        {(() => {
          const toc = extractTOC(post.body);
          return (
        <div className="body-layout">
          <div className="toc">
            <div className="toc-head">Contents</div>
            {toc.length > 0 ? toc.map((h) => (
              <a key={h.id} href={`#${h.id}`}>{h.text}</a>
            )) : <span style={{ color: "var(--muted)", fontSize: 11 }}>Add H2 headings in the body to generate contents.</span>}
          </div>

          <div className="content">
            {post.body?.length ? (
              <PortableText value={post.body} components={ptComponents} />
            ) : (
              <p style={{ color: "var(--muted)", fontStyle: "italic" }}>No body content yet — add text in the Body field in Sanity Studio.</p>
            )}
          </div>

          <div className="share-col">
            <div>Share</div>
            <a href="#" style={{ color: "var(--muted)" }}>Twitter / X</a>
            <a href="#" style={{ color: "var(--muted)" }}>LinkedIn</a>
            <a href="#" style={{ color: "var(--muted)" }}>Copy link</a>
          </div>
        </div>
          );
        })()}
      </div>

      <section className="related">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Related</span>
          <div className="related-grid">
            {[
              { href: "#", cat: "Clinical", title: "HRV is not a vibe. Reading it like a clinician." },
              { href: "#", cat: "Engineering", title: "Why our FHIR pipeline runs at the edge." },
              { href: "#", cat: "Opinion", title: "Zone 2 is a calendar problem, not a heart-rate one." },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="related-link" style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                <span className="rmeta" style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>{r.cat}</span>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, lineHeight: 1.15, margin: 0, letterSpacing: "-.01em" }}>{r.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
