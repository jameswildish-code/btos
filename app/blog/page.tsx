import Link from "next/link";
import { getBlogPosts } from "@/lib/sanity";
import NewsletterForm from "@/components/NewsletterForm";

const STATIC_POSTS = [
  { _id: "1", slug: { current: "the-case-against-the-quarterly" }, title: "The case against the quarterly checkup.", category: "Research", publishedAt: "2026-05-04", author: { name: "Dr. Sofia Holm" }, readTime: 12, art: "art-a", label: "VO₂" },
  { _id: "2", slug: { current: "hrv-not-a-vibe" }, title: "HRV is not a vibe. Reading it like a clinician.", category: "Clinical", publishedAt: "2026-04-28", author: { name: "Eva Kaur" }, readTime: 8, art: "art-b", label: "HRV" },
  { _id: "3", slug: { current: "fhir-at-the-edge" }, title: "Why our FHIR pipeline runs at the edge.", category: "Engineering", publishedAt: "2026-04-22", author: { name: "Tomás Macedo" }, readTime: 15, art: "art-c", label: "FHIR" },
  { _id: "4", slug: { current: "zone-2-calendar-problem" }, title: "Zone 2 is a calendar problem, not a heart-rate one.", category: "Opinion", publishedAt: "2026-04-14", author: { name: "James Rønne" }, readTime: 6, art: "art-d", label: "ZONE 2" },
  { _id: "5", slug: { current: "stopped-showing-sleep-scores" }, title: "The week we stopped showing sleep scores.", category: "Product", publishedAt: "2026-04-08", author: { name: "Mateo Pereira" }, readTime: 4, art: "art-e", label: "SLEEP" },
  { _id: "6", slug: { current: "continuum-2000-patient-panel" }, title: "How Continuum runs a 2,000-patient panel without burning out.", category: "Clinical", publishedAt: "2026-04-01", author: { name: "Daria Kowalski, MD" }, readTime: 9, art: "art-f", label: "COHORT" },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
}

export default async function BlogPage() {
  let sanityPosts: typeof STATIC_POSTS = [];
  try {
    const data = await getBlogPosts();
    if (data?.length) sanityPosts = data;
  } catch {
    // Sanity not yet configured — use static posts
  }
  const posts = sanityPosts.length ? sanityPosts : STATIC_POSTS;

  return (
    <>
      <style>{`
        .b-hero { padding:72px 0 56px; border-bottom:1px solid var(--line); }
        .b-hero .g { display:grid; grid-template-columns:1.4fr 1fr; gap:64px; align-items:end; }
        .filters { display:flex; gap:8px; margin-top:32px; flex-wrap:wrap; }
        .filters button { padding:8px 14px; border-radius:999px; border:1px solid var(--line); background:var(--surface); font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--ink-2); cursor:pointer; }
        .filters button.on { background:var(--ink); color:var(--bg); border-color:var(--ink); }
        .featured { padding:56px 0; border-bottom:1px solid var(--line); }
        .feat-card { display:grid; grid-template-columns:1.2fr 1fr; gap:0; border:1px solid var(--line); border-radius:24px; overflow:hidden; background:var(--surface); }
        .feat-art { aspect-ratio:4/3; background:linear-gradient(135deg,#1F2A48 0%,#2A4A6E 60%,#2FBFA3 100%); position:relative; overflow:hidden; }
        .feat-art::after { content:""; position:absolute; inset:0; background:repeating-linear-gradient(to right,transparent 0,transparent 11px,rgba(255,255,255,.04) 11px,rgba(255,255,255,.04) 12px),repeating-linear-gradient(to bottom,transparent 0,transparent 11px,rgba(255,255,255,.04) 11px,rgba(255,255,255,.04) 12px); }
        .feat-art .glyph { position:absolute; inset:32px; display:grid; place-items:end start; color:rgba(255,255,255,.85); font-family:var(--font-display); font-size:96px; line-height:.9; letter-spacing:-.02em; }
        .feat-body { padding:40px; display:flex; flex-direction:column; gap:16px; justify-content:center; }
        .feat-body h2 { font-family:var(--font-display); font-weight:400; font-size:44px; line-height:1.05; letter-spacing:-.01em; margin:0; }
        .feat-meta { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; color:var(--muted); text-transform:uppercase; }
        .grid-posts { padding:96px 0; }
        .row-head { display:flex; justify-content:space-between; align-items:baseline; }
        .post-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:32px; }
        .post { background:var(--surface); border:1px solid var(--line); border-radius:20px; padding:24px; display:flex; flex-direction:column; gap:14px; min-height:340px; }
        .post .art { aspect-ratio:16/10; border-radius:12px; position:relative; overflow:hidden; }
        .post .art .label { position:absolute; left:14px; bottom:12px; font-family:var(--font-display); font-size:32px; line-height:1; color:rgba(255,255,255,.92); }
        .post-meta { font-family:var(--font-mono); font-size:10px; letter-spacing:.12em; color:var(--muted); text-transform:uppercase; display:flex; gap:12px; }
        .post h3 { font-family:var(--font-display); font-weight:400; font-size:22px; line-height:1.15; margin:0; letter-spacing:-.01em; }
        .post-footer { margin-top:auto; display:flex; justify-content:space-between; align-items:center; color:var(--muted); font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; }
        .art-a { background:linear-gradient(135deg,#1F2A48 0%,#2A4A6E 100%); }
        .art-b { background:linear-gradient(135deg,#2FBFA3 0%,#1A8E78 100%); }
        .art-c { background:linear-gradient(135deg,#E7E2D2 0%,#A39D8A 100%); }
        .art-d { background:linear-gradient(135deg,#D1F24A 0%,#8DAE2C 100%); }
        .art-e { background:linear-gradient(135deg,#F4CFCB 0%,#C46A6A 100%); }
        .art-f { background:linear-gradient(135deg,#BFD8EF 0%,#2A6FDB 100%); }
        .art-grid { position:absolute; inset:0; background:repeating-linear-gradient(to right,transparent 0,transparent 11px,rgba(255,255,255,.06) 11px,rgba(255,255,255,.06) 12px),repeating-linear-gradient(to bottom,transparent 0,transparent 11px,rgba(255,255,255,.06) 11px,rgba(255,255,255,.06) 12px); }
        .newsletter-band { margin:0 0 96px; background:var(--ink); color:var(--bg); border-radius:28px; padding:56px; position:relative; overflow:hidden; display:grid; grid-template-columns:1.3fr 1fr; gap:32px; align-items:center; }
        .newsletter-band::before { content:""; position:absolute; inset:0; background:radial-gradient(ellipse at left,rgba(47,191,163,.15),transparent 60%); pointer-events:none; }
        .newsletter-band > * { position:relative; }
        .newsletter-band h2 { font-family:var(--font-display); font-weight:400; font-size:40px; line-height:1.05; letter-spacing:-.01em; margin:0; }
        .nl-form { display:flex; gap:8px; }
        .nl-form input { flex:1; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.15); color:var(--bg); padding:14px 18px; border-radius:999px; font:inherit; font-size:14px; }
        .nl-form input::placeholder { color:#807C6F; }
        @media (max-width:1000px) { .feat-card,.post-grid,.b-hero .g,.newsletter-band { grid-template-columns:1fr; } }
      `}</style>

      <section className="b-hero">
        <div className="wrap-w">
          <div className="g">
            <div>
              <span className="eyebrow"><span className="dot"></span> Field Notes</span>
              <h1 className="h1">Notes from a small<br/>group of people<br/><em>obsessed with signal.</em></h1>
            </div>
            <p className="lede">Clinical studies, product changelogs, opinions from our research team, and the occasional rant about CSV pipelines.</p>
          </div>
          <div className="filters">
            {["All", "Research", "Clinical", "Engineering", "Product", "Opinion"].map((f) => (
              <button key={f} className={f === "All" ? "on" : ""}>{f}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="wrap-w">
          <Link className="feat-card" href="/blog/the-case-against-the-quarterly">
            <div className="feat-art">
              <div className="art-grid"></div>
              <div className="glyph">04 / 26</div>
            </div>
            <div className="feat-body">
              <span className="feat-meta">Featured · Research · 12 min read</span>
              <h2>The case against<br/>the quarterly checkup.</h2>
              <p style={{ color: "var(--muted)", margin: 0, maxWidth: "42ch" }}>
                Why three months between data points is the worst frequency we could have settled on — and what continuous, consented streams actually let a clinician see.
              </p>
              <div className="feat-meta" style={{ display: "flex", gap: 16, color: "var(--muted)" }}>
                <span>Dr. Sofia Holm</span><span>· May 04, 2026</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="grid-posts">
        <div className="wrap-w">
          <div className="row-head">
            <span className="eyebrow"><span className="dot"></span> Latest</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>View archive →</span>
          </div>
          <div className="post-grid">
            {posts.map((post, i) => {
              const arts = ["art-a", "art-b", "art-c", "art-d", "art-e", "art-f"];
              const labels = ["VO₂", "HRV", "FHIR", "ZONE 2", "SLEEP", "COHORT"];
              const art = (post as typeof STATIC_POSTS[0]).art ?? arts[i % arts.length];
              const label = (post as typeof STATIC_POSTS[0]).label ?? labels[i % labels.length];
              return (
                <Link key={post._id} className="post" href={`/blog/${post.slug.current}`}>
                  <div className={`art ${art}`}>
                    <div className="art-grid"></div>
                    <div className="label">{label}</div>
                  </div>
                  <div className="post-meta">
                    <span>{post.category}</span>
                    <span>{post.readTime} min</span>
                  </div>
                  <h3>{post.title}</h3>
                  <div className="post-footer">
                    <span>{post.author?.name}</span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="wrap-w">
        <div className="newsletter-band">
          <div>
            <span className="eyebrow" style={{ color: "#807C6F" }}><span className="dot"></span> Newsletter</span>
            <h2 style={{ marginTop: 12 }}>A quiet email,<br/>once a month.</h2>
            <p style={{ color: "#C9C5B6", margin: "12px 0 0", maxWidth: "40ch" }}>
              New research, product changes, and the occasional thing we changed our minds about. No tracking pixels.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </>
  );
}
