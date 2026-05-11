export const revalidate = 60;
import Link from "next/link";
import { getBlogPost } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

// Static fallback for the featured article
const FEATURED = {
  title: "The case against the quarterly checkup.",
  category: "Research",
  publishedAt: "2026-05-04",
  author: { name: "Dr. Sofia Holm", role: "Head of Clinical Research · BiotrackOS" },
  readTime: 12,
  body: null as null,
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
          <div className="clabel">04 / 26</div>
          <div className="ctag">Research · {post.readTime} min read</div>
        </div>

        <div className="body-layout">
          <div className="toc">
            <div className="toc-head">Contents</div>
            <a href="#problem">The problem with quarterly</a>
            <a href="#cost">The cost of the gap</a>
            <a href="#continuous">What continuous data shows</a>
            <a href="#clinical">The clinical shift</a>
            <a href="#consent">The consent question</a>
          </div>

          <div className="content">
            {post.body ? (
              <PortableText value={post.body} />
            ) : (
              <>
                <p>Three months is a terrible interval for almost everything health-related. It&apos;s too long to catch a trend before it becomes a problem, and too short to capture a meaningful longitudinal arc. It is, in other words, almost perfectly miscalibrated.</p>
                <p>And yet the quarterly checkup — HbA1c every three months, annual physical, biannual dental — is the default frequency the medical system runs on. Not because it&apos;s clinically optimal, but because it&apos;s the maximum frequency that fits in a system designed around episodic appointments.</p>
                <h2 id="problem">The problem with quarterly</h2>
                <p>The checkup model assumes that a snapshot taken every three months gives you enough information to intervene meaningfully. This is only true if the underlying signal changes slowly relative to that interval — and for almost every biometric that matters in preventive health, it doesn&apos;t.</p>
                <blockquote>HRV, resting heart rate, sleep efficiency, and VO₂ max all change on timescales of days to weeks. A quarterly snapshot doesn&apos;t just miss the signal — it actively misleads.</blockquote>
                <p>Consider HRV — the most sensitive early-warning metric we have for recovery, stress load, and autonomic balance. Research consistently shows it responds meaningfully to perturbation within 24–72 hours. A three-month snapshot doesn&apos;t just miss the inflection — it gives you a number that&apos;s dominated by wherever the patient happened to be on the specific morning of the visit.</p>
                <h2 id="cost">The cost of the gap</h2>
                <p>What happens in the interval between checkups? For most patients: nothing is measured, nothing is recorded, and nothing is acted on. The clinical record is not a timeline — it is a series of disconnected still photographs, taken at the whim of the appointment schedule.</p>
                <div className="pull">
                  &ldquo;The clinical record is not a timeline. It is a series of disconnected still photographs.&rdquo;
                </div>
                <p>This creates a blind spot that&apos;s easy to dismiss because we can&apos;t see what we&apos;re missing. But when you run a panel with continuous data, the signals that were being missed become visible almost immediately.</p>
                <h2 id="continuous">What continuous data shows</h2>
                <p>In our cohort of 2,140 active members across four Continuum clinics, the most common finding after switching to continuous monitoring wasn&apos;t a dramatic clinical event — it was a slow, detectable decline in sleep efficiency that preceded a series of stress-related markers by three to five weeks.</p>
                <p>That&apos;s a five-week early-warning window. At quarterly cadence, you would catch this at the nine-to-twelve week mark, long after the pattern had established itself. With continuous data, you catch the trend in the first week.</p>
                <h2 id="clinical">The clinical shift</h2>
                <p>What changes when data is continuous is not just volume — it&apos;s the nature of the clinical question. The episodic model asks &quot;how is the patient today?&quot; The continuous model asks &quot;what is the trajectory, and where is it going?&quot;</p>
                <p>This is a fundamentally different kind of medicine. It&apos;s proactive rather than reactive, longitudinal rather than cross-sectional, and statistical rather than anecdotal. And it&apos;s only possible when the infrastructure for continuous, consented data collection exists.</p>
                <h2 id="consent">The consent question</h2>
                <p>The obvious objection is consent and privacy. And it&apos;s a real one. Continuous monitoring without explicit, ongoing, revocable consent is not medicine — it&apos;s surveillance. The patient has to be an active participant in their own data stream, with clear ownership and the ability to share selectively.</p>
                <p>The consent model we&apos;ve built at BiotrackOS is granular: the patient controls what they share, with whom, and for how long. Every data-sharing relationship has an expiry and a one-tap revocation. The result is that continuous monitoring and patient autonomy aren&apos;t in tension — they&apos;re complementary.</p>
              </>
            )}
          </div>

          <div className="share-col">
            <div>Share</div>
            <a href="#" style={{ color: "var(--muted)" }}>Twitter / X</a>
            <a href="#" style={{ color: "var(--muted)" }}>LinkedIn</a>
            <a href="#" style={{ color: "var(--muted)" }}>Copy link</a>
          </div>
        </div>
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
