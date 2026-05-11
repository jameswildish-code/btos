export const revalidate = 0;
import Link from "next/link";
import { getCaseStudies } from "@/lib/sanity";

const STATIC_CUSTOMERS = [
  { _id: "1", slug: { current: "continuum" }, client: "Continuum", industry: "Longevity · Copenhagen", title: "From five vendor dashboards to one merged record.", summary: "A 4-clinic longevity practice rolled out BiotrackOS in a single weekend — and retired five separate vendor dashboards by Monday morning.", metrics: [{ value: "4×", label: "Clinics" }, { value: "93%", label: "Adoption · w1" }] },
  { _id: "2", slug: { current: "north-sport-lab" }, client: "North Sport Lab", industry: "Performance · Oslo", title: "Coach- and athlete-side views, synced live.", summary: "An elite track & field group replaced spreadsheets with a single dashboard their coaches and athletes both check before every session.", metrics: [{ value: "22", label: "Athletes" }, { value: "4.8×", label: "More data" }] },
  { _id: "3", slug: { current: "meridian-insurance" }, client: "Meridian Insurance", industry: "Insurance · Dublin", title: "Consented wearable data into a real-time underwriting signal.", summary: "A mid-market insurer piloted wearable-linked wellness rewards — engagement up, claims data richer, no survey fatigue.", metrics: [{ value: "68%", label: "Engagement" }, { value: "–14%", label: "Claim freq." }] },
];

export default async function CustomersPage() {
  let customers: typeof STATIC_CUSTOMERS = [];
  try {
    const data = await getCaseStudies();
    if (data?.length) customers = data;
  } catch { /* use static */ }
  if (!customers.length) customers = STATIC_CUSTOMERS;

  return (
    <>
      <style>{`
        .c-hero { padding:72px 0 56px; border-bottom:1px solid var(--line); }
        .c-hero .g { display:grid; grid-template-columns:1.3fr 1fr; gap:64px; align-items:end; }
        .c-feature { margin-top:56px; background:var(--ink); color:var(--bg); border-radius:28px; padding:56px; position:relative; overflow:hidden; display:grid; grid-template-columns:1fr 1.1fr; gap:56px; align-items:center; }
        .c-feature::before { content:""; position:absolute; inset:0; background:radial-gradient(ellipse at top right,rgba(47,191,163,.18),transparent 60%); pointer-events:none; }
        .c-feature > * { position:relative; }
        .c-feature h2 { font-family:var(--font-display); font-weight:400; font-size:56px; line-height:1.02; letter-spacing:-.01em; margin:16px 0; }
        .c-feat-stats { display:flex; gap:40px; margin:24px 0 32px; flex-wrap:wrap; }
        .c-feat-stats .num { font-family:var(--font-display); font-size:48px; line-height:1; color:var(--lime); }
        .c-feat-stats .lab { font-family:var(--font-mono); font-size:10px; letter-spacing:.12em; color:#C9C5B6; text-transform:uppercase; margin-top:6px; }
        .c-grid { padding:96px 0; }
        .grid-rows { display:grid; gap:16px; }
        .crow { display:grid; grid-template-columns:200px 1fr auto; gap:32px; padding:28px 0; border-top:1px solid var(--line); align-items:center; }
        .crow .logo { font-family:var(--font-display); font-size:28px; color:var(--ink-2); }
        .crow h4 { font-family:var(--font-display); font-weight:400; font-size:28px; line-height:1.02; margin:0 0 6px; }
        .crow p  { color:var(--muted); margin:0; max-width:60ch; font-size:14px; }
        .crow-stats { display:flex; gap:32px; }
        .crow-stats .v { font-family:var(--font-display); font-size:28px; line-height:1; }
        .crow-stats .l { font-family:var(--font-mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); margin-top:4px; }
        .crow .go { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; }
        @media (max-width:1000px){ .c-hero .g,.c-feature,.crow { grid-template-columns:1fr; gap:32px; } .c-feature { padding:28px; } }
      `}</style>

      <section className="c-hero">
        <div className="wrap-w">
          <div className="g">
            <div>
              <span className="eyebrow"><span className="dot"></span> Customers</span>
              <h1 className="h1">Clinics. Labs. Sports clubs.<br/><em>One platform underneath.</em></h1>
            </div>
            <p className="lede">A few of the teams who replaced their dashboards, exports, and CSV pipelines with BiotrackOS — and what changed.</p>
          </div>

          <Link className="c-feature" href="/customers/continuum" style={{ textDecoration: "none", display: "grid" }}>
            <div>
              <span className="eyebrow" style={{ color: "#807C6F" }}><span className="dot"></span> Featured · Longevity</span>
              <h2>How Continuum retired five dashboards <em style={{ color: "var(--mint)" }}>in a weekend.</em></h2>
              <div className="c-feat-stats">
                <div><div className="num">4×</div><div className="lab">Clinics live</div></div>
                <div><div className="num">2,140</div><div className="lab">Active patients</div></div>
                <div><div className="num">93%</div><div className="lab">Clinician adoption · w1</div></div>
              </div>
              <span className="btn btn-accent">Read the case study <span className="arrow">→</span></span>
            </div>
            <div>
              <div className="browser" style={{ boxShadow: "0 30px 60px -30px rgba(0,0,0,0.4)" }}>
                <div className="browser-bar">
                  <span className="browser-dot"></span><span className="browser-dot"></span><span className="browser-dot"></span>
                  <div className="addr">continuum.biotrackos.com</div>
                </div>
                <div style={{ padding: 24, background: "var(--bg-2)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                    <span className="eyebrow">Continuum · cohort 04</span>
                    <span className="chip"><span className="dot"></span> Live</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(14,1fr)", gap: 3 }}>
                    {Array.from({ length: 56 }, (_, i) => {
                      const palettes = ["#1B2748","#23345C","#2A4A6E","#2F6F84","#2FBFA3","#D1F24A"];
                      const idx = i % palettes.length;
                      return <span key={i} style={{ aspectRatio: "1/1", borderRadius: 2, background: palettes[idx], display: "block", opacity: 0.7 }} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="c-grid">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> More customers</span>
          <h2 className="h1" style={{ marginTop: 16, maxWidth: "18ch" }}>Quiet results across<br/>five markets.</h2>
          <div className="grid-rows" style={{ marginTop: 32 }}>
            {customers.map((c) => (
              <Link key={c._id} className="crow" href={`/customers/${c.slug.current}`} style={{ display: "grid", textDecoration: "none", color: "inherit" }}>
                <div>
                  <div className="logo">{c.client}</div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".12em", color: "var(--muted)", textTransform: "uppercase" }}>{c.industry}</span>
                </div>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.summary}</p>
                </div>
                <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                  {c.metrics?.length > 0 && (
                    <div className="crow-stats">
                      {c.metrics.slice(0, 2).map((m: { value: string; label: string }) => (
                        <div key={m.label}>
                          <div className="v">{m.value}</div>
                          <div className="l">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="go">Read →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
