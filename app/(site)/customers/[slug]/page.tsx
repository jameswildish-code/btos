export const revalidate = 0;
import Link from "next/link";
import Image from "next/image";
import { getCaseStudy, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

function initials(name?: string) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ptComponents = {
  types: {
    image: ({ value }: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
      const url = urlFor(value)?.width(1200).url();
      if (!url) return null;
      return (
        <div style={{ margin: "32px 0", borderRadius: 12, overflow: "hidden", position: "relative", aspectRatio: "16/9" }}>
          <Image src={url} alt={value.alt ?? ""} fill style={{ objectFit: "cover" }} />
        </div>
      );
    },
  },
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = await getCaseStudy(slug);

  if (!story) {
    return (
      <div className="wrap" style={{ padding: "96px 0", color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
        Story not found.
      </div>
    );
  }

  return (
    <>
      <style>{`
        .cs-hero { padding:72px 0 0; }
        .cs-breadcrumb { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-bottom:24px; }
        .cs-breadcrumb a { color:var(--muted); text-decoration:none; }
        .cs-breadcrumb a:hover { color:var(--ink); }
        .cs-cover { margin-top:48px; aspect-ratio:21/9; border-radius:24px; background:linear-gradient(135deg,#1F2A48 0%,#2A4A6E 50%,#2FBFA3 100%); position:relative; overflow:hidden; }
        .cs-cover-grid { position:absolute; inset:0; background:repeating-linear-gradient(to right,transparent 0,transparent 19px,rgba(255,255,255,.05) 19px,rgba(255,255,255,.05) 20px),repeating-linear-gradient(to bottom,transparent 0,transparent 19px,rgba(255,255,255,.05) 19px,rgba(255,255,255,.05) 20px); }
        .cs-metrics { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-top:48px; padding:48px 0; border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
        .cs-metric .v { font-family:var(--font-display); font-size:48px; line-height:1; letter-spacing:-.02em; }
        .cs-metric .l { font-family:var(--font-mono); font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-top:8px; }
        .cs-quote { background:var(--ink); color:var(--bg); border-radius:24px; padding:56px; margin:64px 0; position:relative; overflow:hidden; }
        .cs-quote::before { content:""; position:absolute; inset:0; background:radial-gradient(ellipse at top right,rgba(47,191,163,.18),transparent 60%); pointer-events:none; }
        .cs-quote > * { position:relative; }
        .cs-quote blockquote { font-family:var(--font-display); font-weight:400; font-size:clamp(24px,3vw,44px); line-height:1.1; margin:0 0 32px; text-wrap:balance; }
        .cs-who { display:flex; gap:18px; align-items:center; }
        .cs-av { width:48px; height:48px; border-radius:50%; background:var(--mint); color:var(--teal); display:grid; place-items:center; font-family:var(--font-mono); font-weight:600; flex-shrink:0; }
        .cs-body { max-width:72ch; margin:0 auto; padding:64px 0 96px; }
        .cs-body p { font-size:18px; line-height:1.7; color:var(--ink-2); margin:0 0 18px; }
        .cs-body h2 { font-family:var(--font-display); font-weight:400; font-size:36px; margin:56px 0 16px; }
        .cs-body h3 { font-family:var(--font-display); font-weight:400; font-size:26px; margin:40px 0 12px; }
        .cs-body blockquote { margin:36px -20px; padding:28px 32px; border-left:3px solid var(--teal-bright); background:var(--bg-2); font-family:var(--font-display); font-size:24px; line-height:1.25; font-style:italic; color:var(--ink); }
        .cs-cta { background:var(--bg-2); border-top:1px solid var(--line); padding:80px 0; }
        @media (max-width:900px) { .cs-metrics { grid-template-columns:1fr 1fr; } .cs-quote { padding:32px; } }
      `}</style>

      <section className="cs-hero">
        <div className="wrap-w">
          <div className="cs-breadcrumb">
            <Link href="/customers">← Customers</Link>
            {" / "}
            <span>{story.client}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 16 }}>
            {story.logo && (
              <div style={{ width: 64, height: 32, position: "relative", flexShrink: 0 }}>
                <Image src={story.logo} alt={story.client} fill style={{ objectFit: "contain", objectPosition: "left" }} />
              </div>
            )}
            <span className="eyebrow"><span className="dot"></span> Case study · {story.industry}{story.location ? ` · ${story.location}` : ""}</span>
          </div>
          <h1 className="h1" style={{ marginTop: 0, maxWidth: "22ch" }}>{story.title}</h1>

          <div className="cs-cover">
            {story.coverImage
              ? <Image src={story.coverImage} alt={story.client} fill style={{ objectFit: "cover" }} />
              : <div className="cs-cover-grid" />
            }
          </div>
        </div>
      </section>

      {story.metrics?.length > 0 && (
        <div className="wrap-w">
          <div className="cs-metrics" style={{ gridTemplateColumns: `repeat(${Math.min(story.metrics.length, 4)}, 1fr)` }}>
            {story.metrics.slice(0, 4).map((m: { value: string; label: string }) => (
              <div key={m.label} className="cs-metric">
                <div className="v">{m.value}</div>
                <div className="l">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {story.quote && (
        <div className="wrap">
          <div className="cs-quote">
            <blockquote>&ldquo;{story.quote}&rdquo;</blockquote>
            <div className="cs-who">
              <div className="cs-av">{initials(story.quoteName)}</div>
              <div>
                <div style={{ color: "var(--bg)", fontWeight: 500 }}>{story.quoteName}</div>
                {story.quoteRole && (
                  <div style={{ color: "#807C6F", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", marginTop: 2 }}>{story.quoteRole}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {story.body?.length > 0 && (
        <div className="wrap">
          <div className="cs-body">
            <PortableText value={story.body} components={ptComponents} />
          </div>
        </div>
      )}

      <div className="cs-cta">
        <div className="wrap-w" style={{ textAlign: "center" }}>
          <span className="eyebrow"><span className="dot"></span> Want results like these?</span>
          <h2 className="h2" style={{ marginTop: 16 }}>See BiotrackOS in action.</h2>
          <p style={{ color: "var(--muted)", maxWidth: "44ch", margin: "12px auto 0", lineHeight: 1.6 }}>Join the teams already running on BiotrackOS. Book a 20-minute walkthrough with your data.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/contact">Book a demo <span className="arrow">→</span></Link>
            <Link className="btn btn-ghost btn-lg" href="/customers">More stories</Link>
          </div>
        </div>
      </div>
    </>
  );
}
