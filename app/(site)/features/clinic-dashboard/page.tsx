import Link from "next/link";

export const metadata = { title: "Professional workspace — BiotrackOS" };

export default function ClinicDashboardPage() {
  return (
    <>
      <style>{`
        .f-hero { padding:64px 0 24px; }
        .crumbs { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-bottom:24px; }
        .f-grid { display:grid; grid-template-columns:1.2fr 1fr; gap:64px; align-items:end; }
        .f-stage { margin:56px 0; background:var(--bg-2); border:1px solid var(--line); border-radius:24px; padding:36px; }
        .sub { display:grid; grid-template-columns:1fr 1.1fr; gap:64px; padding:72px 0; border-top:1px solid var(--line); align-items:center; }
        .sub.flip { grid-template-columns:1.1fr 1fr; direction:rtl; }
        .sub.flip > * { direction:ltr; }
        .sub h2 { font-family:var(--font-display); font-weight:400; font-size:44px; line-height:1.02; letter-spacing:-.01em; margin:16px 0; }
        .sub p { color:var(--ink-2); max-width:44ch; }
        .sub-bullets { list-style:none; padding:0; margin:20px 0 0; display:grid; gap:8px; }
        .sub-bullets li { display:grid; grid-template-columns:14px 1fr; gap:12px; padding:10px 0; border-top:1px dashed var(--line); font-size:14px; }
        .sub-bullets li::before { content:""; width:8px; height:8px; border-radius:50%; background:var(--teal-bright); margin-top:8px; }
        .mock { background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:22px; box-shadow:0 30px 60px -30px rgba(11,17,48,.18); }
        .rel-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .rel-card { border:1px solid var(--line); border-radius:16px; padding:24px; background:var(--surface); display:flex; flex-direction:column; }
        .rel-card .num { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; color:var(--muted); }
        .rel-card h5 { font-family:var(--font-display); font-weight:400; font-size:26px; line-height:1.05; margin:14px 0 8px; }
        .rel-card p { color:var(--muted); font-size:13px; margin:0; }
        @media (max-width:1000px) { .f-grid,.sub,.rel-grid { grid-template-columns:1fr; } .sub.flip { direction:ltr; } }
      `}</style>

      <section className="f-hero">
        <div className="wrap-w">
          <div className="crumbs">
            <Link href="/product">Product</Link> / Professional workspace
          </div>
          <div className="f-grid">
            <div>
              <span className="eyebrow"><span className="dot"></span> Feature</span>
              <h1 className="h1" style={{ marginTop: 12 }}>The professional workspace<br/><em>for cohort health.</em></h1>
              <p className="lede" style={{ marginTop: 24 }}>Monitor individuals and entire cohorts from the same record — without switching between tools, vendors, or workflows.</p>
              <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
                <Link className="btn btn-primary btn-lg" href="/contact">Book a demo <span className="arrow">→</span></Link>
                <Link className="btn btn-ghost btn-lg" href="/product">See all features</Link>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Connected data sources", value: "7+" },
                  { label: "Avg. setup time", value: "< 1 day" },
                  { label: "Device vendors connected", value: "20+" },
                ].map((s) => (
                  <div key={s.label} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>{s.label}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1 }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard stage mock */}
      <div className="wrap-w">
        <div className="f-stage">
          <div className="browser">
            <div className="browser-bar">
              <span className="browser-dot"></span><span className="browser-dot"></span><span className="browser-dot"></span>
              <div className="addr">app.biotrackos.com/dashboard</div>
            </div>
            <div style={{ padding: 24, background: "var(--bg-2)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span className="eyebrow"><span className="dot"></span> Cohort 04 · Longevity panel</span>
                <span className="chip"><span className="dot"></span> Live</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 16 }}>
                {["VO₂ AVG","HRV MED","SLEEP EFF","FLAGGED"].map((l, i) => (
                  <div key={l} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 12, padding: 14 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>{l}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1.1, marginTop: 6 }}>{["46.2","58ms","84%","12"][i]}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(14,1fr)", gap: 3 }}>
                {Array.from({ length: 84 }, (_, i) => (
                  <span key={i} style={{ aspectRatio: "1/1", borderRadius: 3, background: ["#2A4A6E","#2F6F84","#2FBFA3","#1B2748"][i % 4], opacity: 0.5 + (i % 3) * 0.2, display: "block" }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-feature sections */}
      <div className="wrap-w">
        <div className="sub">
          <div>
            <span className="eyebrow"><span className="dot"></span> 01 / Cohort views</span>
            <h2>Population-level signal.<br/>Individual record depth.</h2>
            <p>See your entire roster at a glance — sorted by risk, filtered by condition or protocol, or drilled into for a single longitudinal profile. All from the same workspace.</p>
            <ul className="sub-bullets">
              <li>Heatmap view of recovery score across the cohort</li>
              <li>Filter by device, data source, or custom tag</li>
              <li>One-click pivot from cohort view to individual record</li>
              <li>Export cohort snapshots as PDF, CSV, or FHIR</li>
            </ul>
          </div>
          <div className="mock">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Cohort 04 · 214 members</div>
            {[
              { init: "MA", name: "Maria Alvarez", val: "62ms", label: "HRV", badge: "Flag", color: "var(--rose)" },
              { init: "JP", name: "James Park",    val: "88%",  label: "Sleep", badge: "Good", color: "var(--mint)" },
              { init: "SR", name: "Sara Richter",  val: "46.8", label: "VO₂", badge: "Note", color: "var(--sky)" },
            ].map((r) => (
              <div key={r.name} style={{ display: "grid", gridTemplateColumns: "32px 1fr auto auto", gap: 12, alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--line)" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--mint)", color: "var(--teal)", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 11 }}>{r.init}</div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{r.name}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>{r.val}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", background: r.color, padding: "3px 8px", borderRadius: 999 }}>{r.badge}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sub flip">
          <div>
            <span className="eyebrow"><span className="dot"></span> 02 / Alerts</span>
            <h2>The alerts that mean<br/>act now.</h2>
            <p>Define threshold-based and trend-based rules once — they fire automatically when any member in your cohort crosses them. No manual monitoring.</p>
            <ul className="sub-bullets">
              <li>HRV below threshold for 3+ consecutive days</li>
              <li>VO₂ max decline &gt; 5% over 30 days</li>
              <li>Sleep efficiency below 75% for 1 week</li>
              <li>Route to a specific clinician or team queue</li>
            </ul>
          </div>
          <div className="mock">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Alert inbox · 12 today</div>
            {[
              { name: "Emma L.", rule: "HRV &lt; 45ms · 4 days", urgency: "High", color: "#C46A6A" },
              { name: "Tom B.", rule: "Sleep eff. ↓ 7 days", urgency: "Med", color: "var(--amber)" },
              { name: "Yuki M.", rule: "VO₂ max ↓ 6%", urgency: "Med", color: "var(--amber)" },
            ].map((a) => (
              <div key={a.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--line)" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{a.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginTop: 2 }} dangerouslySetInnerHTML={{ __html: a.rule }} />
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: a.color, padding: "3px 8px", background: "var(--bg-2)", borderRadius: 999 }}>{a.urgency}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="sub">
          <div>
            <span className="eyebrow"><span className="dot"></span> 03 / Protocols</span>
            <h2>Results into<br/>recommendations.</h2>
            <p>Define biomarker-driven protocols — vitamin D below threshold triggers a supplement recommendation, HRV trend decline triggers a recovery plan. Fires automatically, logs every decision.</p>
            <ul className="sub-bullets">
              <li>Rule-based trigger on any tracked metric</li>
              <li>Clinician sign-off queue before any recommendation fires</li>
              <li>Member sees the recommendation in their personal app</li>
              <li>Full audit trail — who defined it, when it fired</li>
            </ul>
          </div>
          <div className="mock">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Protocol rule</div>
            <div style={{ background: "var(--bg-2)", borderRadius: 12, padding: 16, fontFamily: "var(--font-mono)", fontSize: 12 }}>
              <div><span style={{ color: "var(--muted)" }}>WHEN</span> Vit D &lt; 30 ng/mL</div>
              <div style={{ marginTop: 6 }}><span style={{ color: "var(--muted)" }}>AND</span> No active protocol</div>
              <div style={{ marginTop: 6 }}><span style={{ color: "var(--muted)" }}>THEN</span> <span style={{ color: "var(--teal)" }}>Recommend Vit D3 4,000 IU · 90d</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Related features */}
      <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", padding: "80px 0" }}>
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Related capabilities</span>
          <div className="rel-grid" style={{ marginTop: 32 }}>
            {[
              { h: "Personal app", p: "The same data, in your members' hands.", href: "/features/consumer-app" },
              { h: "Protocols", p: "Biomarker-driven recommendations, automated.", href: "/features/protocols" },
              { h: "Integrations", p: "From wearables and devices to lab results, genomics, medications, and clinical records.", href: "/integrations" },
            ].map((r) => (
              <Link key={r.h} href={r.href} className="rel-card">
                <h5>{r.h}</h5>
                <p>{r.p}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
