export const revalidate = 0;
import Link from "next/link";
import { getPressItems } from "@/lib/sanity";

const STATIC_PRESS = [
  { _id: "1", title: "The quiet infrastructure play transforming preventive health", publication: "TechCrunch", publishedAt: "2026-04-18", url: "#", excerpt: "BiotrackOS is building the plumbing layer that connects wearables, labs, and clinics — and a growing list of healthcare providers are taking notice." },
  { _id: "2", title: "BiotrackOS raises €12M to build health data OS for clinics", publication: "Sifted", publishedAt: "2026-03-28", url: "#", excerpt: "The London-based startup secured its Series A to expand its clinical data platform across European longevity and sports medicine markets." },
  { _id: "3", title: "How wearables are finally making it into the clinic — and what's changed", publication: "Wired UK", publishedAt: "2026-03-12", url: "#", excerpt: "For years, fitness trackers gathered dust in clinical settings. A new wave of platforms is building the data layer that finally makes them useful to doctors." },
  { _id: "4", title: "Dubai 30x30 picks BiotrackOS to power its population health initiative", publication: "Arabian Business", publishedAt: "2026-02-20", url: "#", excerpt: "The city-wide fitness programme will use BiotrackOS to aggregate anonymised activity data across hundreds of thousands of residents." },
  { _id: "5", title: "The infrastructure moment in digital health", publication: "a16z Future", publishedAt: "2026-01-14", url: "#", excerpt: "Why the most interesting companies in health tech in 2026 aren't building apps — they're building the pipes the apps run on." },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function PressPage() {
  let items: typeof STATIC_PRESS = [];
  try {
    const data = await getPressItems();
    if (data?.length) items = data;
  } catch { /* use static */ }
  if (!items.length) items = STATIC_PRESS;

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
          <span className="eyebrow"><span className="dot"></span> Coverage</span>
          <div style={{ marginTop: 32 }}>
            {items.map((item) => (
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
            ))}
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
