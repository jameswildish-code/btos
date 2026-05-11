import Link from "next/link";

export const metadata = { title: "Protocols — BiotrackOS" };

export default function ProtocolsPage() {
  return (
    <>
      <style>{`
        .f-hero { padding:64px 0 24px; }
        .crumbs { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-bottom:24px; }
        .f-grid { display:grid; grid-template-columns:1.2fr 1fr; gap:64px; align-items:end; }
        .rule-cards { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .rule-card { background:var(--surface); border:1px solid var(--line); border-radius:16px; padding:20px; }
        .rule-label { font-family:var(--font-mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); margin-bottom:10px; }
        .rule-line { display:flex; gap:8px; align-items:baseline; margin-bottom:6px; font-size:13px; }
        .rule-kw { font-family:var(--font-mono); font-size:10px; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); width:36px; flex-shrink:0; }
        .rule-val { font-weight:500; }
        .rule-action { background:var(--mint); color:var(--teal); padding:3px 10px; border-radius:999px; font-size:12px; font-weight:500; }
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
        @media (max-width:1000px) { .f-grid,.sub,.rule-cards,.rel-grid { grid-template-columns:1fr; } .sub.flip { direction:ltr; } }
      `}</style>

      <section className="f-hero">
        <div className="wrap-w">
          <div className="crumbs"><Link href="/product">Product</Link> / Protocols</div>
          <div className="f-grid">
            <div>
              <span className="eyebrow"><span className="dot"></span> Feature</span>
              <h1 className="h1" style={{ marginTop: 12 }}>Turn results into<br/><em>recommendations,</em><br/>automatically.</h1>
              <p className="lede" style={{ marginTop: 24, maxWidth: "44ch" }}>Define a rule once — vitamin D below 30 triggers a supplement; HRV declining for 5 days triggers a recovery plan — and it fires for every person it applies to.</p>
              <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
                <Link className="btn btn-primary btn-lg" href="/contact">Book a demo <span className="arrow">→</span></Link>
                <Link className="btn btn-ghost btn-lg" href="/features/clinic-dashboard">See the dashboard</Link>
              </div>
            </div>
            <div className="rule-cards">
              {[
                { label: "Lab result trigger", when: "Vit D < 30 ng/mL", and: "No active protocol", then: "Vit D3 4,000 IU · 90 days" },
                { label: "Trend trigger", when: "HRV ↓ 5 days", and: "Sleep eff. < 75%", then: "Recovery Reset · 21-day plan" },
              ].map((r) => (
                <div key={r.label} className="rule-card">
                  <div className="rule-label">{r.label}</div>
                  <div className="rule-line"><span className="rule-kw">WHEN</span><span className="rule-val">{r.when}</span></div>
                  <div className="rule-line"><span className="rule-kw">AND</span><span className="rule-val">{r.and}</span></div>
                  <div className="rule-line"><span className="rule-kw">THEN</span><span className="rule-action">{r.then}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="wrap-w">
        {[
          {
            n: "01", eyebrow: "Rule editor",
            h: "If / then — for biomarkers.",
            p: "Build clinical logic without code. Choose your trigger metric, set the threshold or trend condition, define the recommendation, and publish. It runs against every member in your cohort, continuously.",
            bullets: ["Trigger on any tracked metric — labs, wearables, genomics, Rx", "Threshold-based or trend-based conditions", "Chain multiple conditions (AND / OR)", "Route to a specific clinician or auto-deliver to member"],
            flip: false,
            mock: (
              <div className="mock">
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Rule builder</div>
                <div style={{ background: "var(--bg-2)", borderRadius: 12, padding: 16, fontFamily: "var(--font-mono)", fontSize: 12 }}>
                  <div><span style={{ color: "var(--muted)" }}>IF </span>ApoB &gt; 100 mg/dL</div>
                  <div style={{ marginTop: 6 }}><span style={{ color: "var(--muted)" }}>AND </span>LDL &gt; 130 mg/dL</div>
                  <div style={{ marginTop: 6 }}><span style={{ color: "var(--muted)" }}>THEN </span><span style={{ color: "var(--teal)" }}>Flag for lipid review → Dr. Reeves</span></div>
                </div>
              </div>
            ),
          },
          {
            n: "02", eyebrow: "Catalog management",
            h: "Use your products, or ours.",
            p: "BiotrackOS maintains a curated catalog of supplements and plans from verified partners. Or define your own — in-house formulations, branded programmes, third-party prescriptions.",
            bullets: ["Curated catalog from KP Pharma and verified partners", "Add your own products, bundles, or in-house formulations", "Attach dose, duration, and reorder instructions", "Link to your dispensary or preferred supplier"],
            flip: true,
            mock: (
              <div className="mock">
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Product catalog</div>
                {[
                  { name: "Vitamin D3 4,000 IU", src: "KP Pharma", tag: "Live" },
                  { name: "Magnesium Glycinate 400mg", src: "KP Pharma", tag: "Live" },
                  { name: "Recovery Reset programme", src: "In-house", tag: "Custom" },
                  { name: "Omega-3 EPA/DHA blend", src: "In-house", tag: "Custom" },
                ].map((p) => (
                  <div key={p.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid var(--line)", fontSize: 13 }}>
                    <div>
                      <div style={{ fontWeight: 500 }}>{p.name}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginTop: 2 }}>{p.src}</div>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--teal)", background: "var(--mint-soft)", padding: "3px 8px", borderRadius: 999 }}>{p.tag}</span>
                  </div>
                ))}
              </div>
            ),
          },
          {
            n: "03", eyebrow: "Sign-off",
            h: "Clinician in the loop.",
            p: "For controlled substances or high-stakes protocols, route recommendations to a clinician sign-off queue. One-tap approve or amend — the member only sees the recommendation once a clinician clears it.",
            bullets: ["Configurable per protocol — auto-deliver or require sign-off", "One-tap approve, amend, or reject", "Amendments visible in audit trail", "Batch review for high-volume cohorts"],
            flip: false,
            mock: (
              <div className="mock">
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Clinician inbox · 3 pending</div>
                {[
                  { name: "Sarah K.", rec: "Vit D3 4,000 IU · 90d", tag: "Approve" },
                  { name: "Mark L.", rec: "Recovery Reset · 21d", tag: "Amend" },
                  { name: "Yuki M.", rec: "Omega-3 2,000mg · 60d", tag: "Approve" },
                ].map((r) => (
                  <div key={r.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--line)" }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{r.name}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginTop: 2 }}>{r.rec}</div>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: r.tag === "Approve" ? "var(--teal)" : "var(--muted)", background: r.tag === "Approve" ? "var(--mint-soft)" : "var(--bg-2)", padding: "3px 8px", borderRadius: 999 }}>{r.tag}</span>
                  </div>
                ))}
              </div>
            ),
          },
        ].map((s) => (
          <div key={s.n} className={`sub${s.flip ? " flip" : ""}`}>
            <div>
              <span className="eyebrow"><span className="dot"></span> {s.n} / {s.eyebrow}</span>
              <h2>{s.h}</h2>
              <p>{s.p}</p>
              <ul className="sub-bullets">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
            {s.mock}
          </div>
        ))}
      </div>

      <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", padding: "80px 0" }}>
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Related capabilities</span>
          <div className="rel-grid" style={{ marginTop: 32 }}>
            {[
              { num: "F.01", h: "Clinic dashboard", p: "The team workspace for cohort health.", href: "/features/clinic-dashboard" },
              { num: "F.02", h: "Consumer app", p: "The same data in your members' hands.", href: "/features/consumer-app" },
              { num: "F.05", h: "Marketplace", p: "Partners, add-ons & programmes.", href: "/marketplace" },
            ].map((r) => (
              <Link key={r.h} href={r.href} className="rel-card">
                <div className="num">{r.num}</div>
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
