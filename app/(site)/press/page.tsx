export const revalidate = 0;
import Link from "next/link";
import { getPressItems } from "@/lib/sanity";

const LATEST_COUNT = 4;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
}

type PressItem = { _id: string; title: string; publication: string; publishedAt: string; url?: string; excerpt?: string };

export default async function PressPage() {
  const data = await getPressItems();
  const items: PressItem[] = (data ?? []).slice(0, LATEST_COUNT);

  return (
    <>
      <style>{`
        .press-hero { padding:72px 0 56px; border-bottom:1px solid var(--line); }
        .press-hero .g { display:grid; grid-template-columns:1.3fr 1fr; gap:64px; align-items:end; }
        .press-list { padding:80px 0; }
        .press-item { display:grid; grid-template-columns:160px 1fr auto; gap:32px; padding:32px 0; border-top:1px solid var(--line); align-items:start; }
        .press-item .pub { font-family:var(--font-display); font-size:22px; color:var(--ink-2); }
        .press-item .date { font-family:var(--font-mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); margin-top:4px; }
        .press-item h3 { font-family:var(--font-display); font-weight:400; font-size:24px; line-height:1.2; letter-spacing:-.01em; margin:0 0 8px; }
        .press-item p { font-size:14px; color:var(--muted); margin:0; max-width:56ch; }
        .assets { padding:0 0 96px; }
        .asset-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:32px; }
        .asset-card { background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:24px; }
        .asset-card .label { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-bottom:12px; }
        .asset-card h4 { font-size:16px; font-weight:500; margin:0 0 8px; }
        .asset-card p { font-size:13px; color:var(--muted); margin:0; }
        @media (max-width:900px) { .press-hero .g,.press-item,.asset-grid { grid-template-columns:1fr; } }
      `}</style>

      <section className="press-hero">
        <div className="wrap-w">
          <div className="g">
            <div>
              <span className="eyebrow"><span className="dot"></span> Press</span>
              <h1 className="h1" style={{ marginTop: 16 }}>BiotrackOS<br/>in the press.</h1>
              <p className="lede" style={{ marginTop: 24 }}>For press enquiries, interview requests, or high-resolution brand assets, contact <a href="mailto:press@biotrackos.com" style={{ color: "var(--teal)" }}>press@biotrackos.com</a></p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Founded", value: "2024" },
                { label: "Headquarters", value: "London, UK" },
                { label: "Team size", value: "38" },
                { label: "Funding", value: "€16M" },
              ].map((f) => (
                <div key={f.label} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid var(--line)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>{f.label}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 1 }}>{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="press-list">
        <div className="wrap-w">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span className="eyebrow"><span className="dot"></span> Latest coverage</span>
            <Link href="/press/all" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-2)", textDecoration: "none" }}>View all →</Link>
          </div>
          <div style={{ marginTop: 8 }}>
            {items.length === 0 ? (
              <p style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 13, marginTop: 32 }}>No press items yet — add some in Sanity Studio.</p>
            ) : (
              items.map((item) => (
                <a key={item._id} href={item.url ?? "#"} target="_blank" rel="noopener noreferrer" className="press-item" style={{ display: "grid", textDecoration: "none", color: "inherit" }}>
                  <div>
                    <div className="pub">{item.publication}</div>
                    <div className="date">{formatDate(item.publishedAt)}</div>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", paddingTop: 4 }}>Read →</div>
                </a>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="assets">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Brand assets</span>
          <div className="asset-grid">
            {[
              { label: "Logo pack", h: "Logo files", p: "SVG, PNG, dark/light variants. BiotrackOS wordmark with and without the mark.", cta: "Download →" },
              { label: "Brand guide", h: "Colour & type", p: "Our colour palette, typography rules, and usage guidelines for the brand mark.", cta: "Download →" },
              { label: "Product shots", h: "Screen assets", p: "Hi-res product screenshots for editorial use. Includes dashboard, app, and marketplace.", cta: "Download →" },
            ].map((a) => (
              <div key={a.h} className="asset-card">
                <div className="label">{a.label}</div>
                <h4>{a.h}</h4>
                <p>{a.p}</p>
                <a href="mailto:press@biotrackos.com" style={{ display: "inline-block", marginTop: 16, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--teal)" }}>{a.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
