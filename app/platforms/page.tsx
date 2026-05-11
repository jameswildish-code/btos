import Link from "next/link";

export const metadata = { title: "Platforms — Wearable SDK as a service · BiotrackOS" };

export default function PlatformsPage() {
  return (
    <>
      <style>{`
        .p-hero { padding:72px 0 56px; }
        .p-hero .g { display:grid; grid-template-columns:1.2fr 1fr; gap:56px; align-items:end; }
        .p-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:32px; margin-top:56px; padding-top:28px; border-top:1px solid var(--line); }
        .p-stats .v { font-family:var(--font-display); font-size:48px; line-height:1; }
        .p-stats .l { font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); margin-top:8px; }
        .code-stage { margin:32px 0 64px; background:#0E1014; border-radius:24px; padding:36px; color:#E8E5D8; display:grid; grid-template-columns:1fr 1fr; gap:32px; }
        .code-stage h3 { font-family:var(--font-display); font-weight:400; font-size:28px; margin:0 0 12px; color:var(--bg); }
        .code-stage p { color:#C9C5B6; font-size:14px; line-height:1.55; margin:0 0 14px; max-width:44ch; }
        .code-stage pre { background:#1A1D24; border-radius:14px; padding:24px; font-family:var(--font-mono); font-size:12.5px; line-height:1.65; overflow:auto; margin:0; }
        .kw{color:#7DCFB6} .str{color:#E5C07B} .com{color:#5C6370} .fn{color:#92A3F8}
        .why { padding:80px 0; border-top:1px solid var(--line); }
        .why-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:32px; }
        .why-card { border:1px solid var(--line); border-radius:18px; padding:28px; background:var(--surface); }
        .why-ic { width:44px; height:44px; border-radius:12px; background:var(--mint-soft); color:var(--teal); display:grid; place-items:center; font-family:var(--font-display); font-size:18px; margin-bottom:16px; }
        .why-card h4 { font-family:var(--font-display); font-weight:400; font-size:22px; margin:0 0 8px; }
        .why-card p { color:var(--ink-2); font-size:14px; line-height:1.55; margin:0; }
        .who { padding:80px 0; border-top:1px solid var(--line); background:var(--bg-2); }
        .who-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-top:32px; }
        .who-card { border:1px solid var(--line); border-radius:14px; padding:22px; background:var(--surface); }
        .who-card .l { font-family:var(--font-mono); font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-bottom:10px; }
        .who-card .n { font-family:var(--font-display); font-size:22px; line-height:1.1; }
        .who-card p { font-size:13px; color:var(--ink-2); margin:8px 0 0; }
        .sdk-pricing { padding:80px 0; border-top:1px solid var(--line); }
        .sdk-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:32px; }
        .sdk-card { border:1px solid var(--line); border-radius:20px; padding:32px; background:var(--surface); display:flex; flex-direction:column; min-height:280px; }
        .sdk-card.featured { background:var(--ink); color:var(--bg); border-color:var(--ink); }
        .sdk-card h4 { font-family:var(--font-display); font-weight:400; font-size:28px; margin:0; }
        .sdk-card .price { font-family:var(--font-display); font-size:44px; line-height:1; margin:12px 0 4px; }
        .sdk-card .unit { font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); }
        .sdk-card.featured .unit { color:#807C6F; }
        .sdk-card ul { list-style:none; padding:0; margin:24px 0 0; display:grid; gap:10px; font-size:14px; }
        .sdk-card ul li { padding-left:18px; position:relative; line-height:1.5; }
        .sdk-card ul li::before { content:"—"; position:absolute; left:0; color:var(--teal-bright); }
        @media (max-width:1000px) { .p-hero .g,.code-stage,.why-grid,.who-grid,.sdk-cards { grid-template-columns:1fr; } .p-stats { grid-template-columns:1fr 1fr; } }
      `}</style>

      <section className="p-hero">
        <div className="wrap-w">
          <div className="g">
            <div>
              <span className="eyebrow"><span className="dot"></span> Platforms · SDK</span>
              <h1 className="h1" style={{ marginTop: 16 }}>One OAuth flow.<br/><em>Every wearable.</em><br/>In your product.</h1>
              <p className="lede" style={{ marginTop: 24, maxWidth: "44ch" }}>
                Stop building wearable integrations. Subscribe to BiotrackOS — normalised, deduplicated, FHIR-native data streams for any platform.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
                <Link className="btn btn-primary btn-lg" href="/contact">Talk to us <span className="arrow">→</span></Link>
                <Link className="btn btn-ghost btn-lg" href="/docs">Read the docs</Link>
              </div>
            </div>
            <div style={{ background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 20, padding: 24 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>SDK maturity</div>
              {[
                { label: "REST API", val: "GA" },
                { label: "FHIR R4", val: "GA" },
                { label: "Webhooks", val: "GA" },
                { label: "Node SDK", val: "Beta" },
                { label: "Python SDK", val: "Beta" },
                { label: "iOS SDK", val: "Q3 2026" },
              ].map((r) => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--line)", fontFamily: "var(--font-mono)", fontSize: 12 }}>
                  <span>{r.label}</span>
                  <span style={{ color: r.val === "GA" ? "var(--teal)" : r.val === "Beta" ? "var(--muted)" : "var(--muted-2)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase" }}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-stats">
            {[
              { v: "20+", l: "Wearable brands connected" },
              { v: "FHIR R4", l: "Native standard" },
              { v: "99.9%", l: "Uptime SLA" },
              { v: "<140ms", l: "p99 latency" },
            ].map((s) => (
              <div key={s.l}>
                <div className="v">{s.v}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap-w">
        <div className="code-stage">
          <div>
            <h3>Connect in minutes.</h3>
            <p>One SDK call launches the OAuth flow for every device vendor we support. No separate credentials to manage. No vendor-specific parsers to maintain.</p>
            <pre><code><span className="com">// 1. Initiate device connection</span>{"\n"}<span className="kw">const</span> session = <span className="kw">await</span> <span className="fn">biotrack</span>.<span className="fn">connect</span>({"{"}
  userId: <span className="str">&apos;usr_123&apos;</span>,
  sources: [<span className="str">&apos;apple_health&apos;</span>, <span className="str">&apos;whoop&apos;</span>, <span className="str">&apos;garmin&apos;</span>],
  scopes: [<span className="str">&apos;hrv&apos;</span>, <span className="str">&apos;sleep&apos;</span>, <span className="str">&apos;activity&apos;</span>],
{"}"})

<span className="com">// 2. Redirect user to session.url</span>
<span className="com">// BiotrackOS handles OAuth & data import</span></code></pre>
          </div>
          <div>
            <h3>Subscribe to streams.</h3>
            <p>Get normalised, deduplicated data via webhook or pull. FHIR R4 format out of the box. Overlapping device readings resolved automatically.</p>
            <pre><code><span className="com">// Subscribe to live data</span>{"\n"}<span className="kw">const</span> stream = <span className="kw">await</span> <span className="fn">biotrack</span>.<span className="fn">streams</span>.<span className="fn">subscribe</span>({"{"}
  userId: <span className="str">&apos;usr_123&apos;</span>,
  metrics: [<span className="str">&apos;hrv&apos;</span>, <span className="str">&apos;resting_hr&apos;</span>],
  onData: (event) <span className="kw">=&gt;</span> {"{"}
    <span className="fn">console</span>.<span className="fn">log</span>(event.metric, event.value)
    <span className="com">{"// { metric: 'hrv', value: 62, unit: 'ms'"}</span>
    <span className="com">{"//   source: 'whoop', ts: 1715430000 }"}</span>
  {"}"}
{"}"})</code></pre>
          </div>
        </div>
      </div>

      <section className="why">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Why build on BiotrackOS</span>
          {[
            { ic: "∞", h: "One integration, everything.", p: "A single BiotrackOS SDK subscription gives you normalised data from 20+ wearable brands, lab panels, genomics, and medication records — without maintaining any direct integrations." },
            { ic: "⊕", h: "FHIR-native from day one.", p: "Every data point is stored and served as FHIR R4. No custom mapping. Compatible with EHR systems, health data warehouses, and any regulatory reporting framework." },
            { ic: "✦", h: "Deduplication built in.", p: "A patient wearing an Apple Watch and an Oura Ring generates two step counts, two sleep records, two HRV readings. We merge and resolve them before your app ever sees the data." },
            { ic: "▣", h: "Consent that travels.", p: "Consent is stored against the BiotrackOS user record — not your app. When a patient revokes access, all downstream subscriptions are cut off automatically." },
            { ic: "◎", h: "Audit-ready.", p: "Every data access event is logged, timestamped, and available via the audit API. Useful for clinical environments, regulated markets, and enterprise procurement." },
            { ic: "→", h: "Modular pricing.", p: "Pay per active user. No upfront integration fee. No annual minimums at the developer tier. Scale to enterprise terms when you need them." },
          ].map((c) => (
            <div key={c.h} style={{ display: "contents" }}>
            </div>
          ))}
          <div className="why-grid">
            {[
              { ic: "∞", h: "One integration, everything.", p: "A single SDK subscription gives you normalised data from 20+ wearable brands, lab panels, genomics, and medication records." },
              { ic: "⊕", h: "FHIR-native from day one.", p: "Every data point is stored and served as FHIR R4 — compatible with EHRs, health data warehouses, and regulatory reporting." },
              { ic: "✦", h: "Deduplication built in.", p: "Overlapping readings from multiple devices are merged and resolved automatically before your app sees the data." },
              { ic: "▣", h: "Consent that travels.", p: "Consent is stored against the BiotrackOS record. Revoke in one place — all downstream subscriptions cut off instantly." },
              { ic: "◎", h: "Audit-ready.", p: "Every data access event is logged and available via the audit API. Built for clinical environments and regulated markets." },
              { ic: "→", h: "Modular pricing.", p: "Pay per active user. No upfront integration fee. No annual minimums at the developer tier." },
            ].map((c) => (
              <div key={c.h} className="why-card">
                <div className="why-ic">{c.ic}</div>
                <h4>{c.h}</h4>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="who">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Who builds on BiotrackOS</span>
          <div className="who-grid">
            {[
              { l: "Health apps", n: "Consumer wellness", p: "Apps that want wearable data without building their own integrations." },
              { l: "Employer tools", n: "Corporate platforms", p: "Internal HR and wellness tools that need aggregate, privacy-safe employee health signals." },
              { l: "Research", n: "Academic & clinical trials", p: "Trial management platforms that need consent-managed longitudinal biometrics." },
              { l: "Insurtech", n: "Embedded insurance", p: "Underwriting and rewards platforms that ingest consented activity streams." },
              { l: "Health systems", n: "EHR add-ons", p: "Modules that surface wearable data in existing clinical workflows." },
              { l: "Coaching", n: "Performance software", p: "Coaching and periodisation tools that need multi-device athlete biometrics." },
              { l: "Digital Rx", n: "Prescription apps", p: "DTx platforms that need continuous monitoring data to trigger clinical decisions." },
              { l: "White-label", n: "Health platforms", p: "Companies that want to offer their own branded biometric data product." },
            ].map((c) => (
              <div key={c.n} className="who-card">
                <div className="l">{c.l}</div>
                <div className="n">{c.n}</div>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sdk-pricing">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> SDK pricing</span>
          <h2 className="h2" style={{ marginTop: 16 }}>Simple, usage-based.</h2>
          <div className="sdk-cards">
            {[
              { name: "Developer", price: "Free", unit: "Up to 100 MAU", features: ["All data sources", "REST + Webhooks", "FHIR R4", "Community support", "Dev environment only"], cta: "Start building" },
              { name: "Production", price: "€0.18", unit: "per MAU / month", features: ["Everything in Developer", "Production SLA 99.9%", "Email support", "Audit log API", "Volume discounts at 10k+"], cta: "Deploy to production", featured: true },
              { name: "Enterprise", price: "Custom", unit: "Talk to us", features: ["Custom SLA", "Dedicated infrastructure", "BAA / DPA included", "SSO & audit", "Onboarding support"], cta: "Talk to sales" },
            ].map((t) => (
              <div key={t.name} className={`sdk-card${t.featured ? " featured" : ""}`}>
                <h4>{t.name}</h4>
                <div className="price">{t.price}</div>
                <div className="unit">{t.unit}</div>
                <ul>{t.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <div style={{ marginTop: "auto", paddingTop: 24 }}>
                  <Link className={`btn${t.featured ? " btn-accent" : " btn-ghost"} btn-sm`} href="/contact" style={{ width: "100%", justifyContent: "center" }}>{t.cta} <span className="arrow">→</span></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap-w" style={{ paddingBottom: 96 }}>
        <div style={{ background: "var(--ink)", color: "var(--bg)", borderRadius: 24, padding: 56, display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 32, alignItems: "center" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(32px,4vw,44px)", lineHeight: 1.02, margin: 0 }}>Ready to ship wearable data in your product?</h3>
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}>
            <Link className="btn btn-accent" href="/docs">Read the docs <span className="arrow">→</span></Link>
            <Link className="btn btn-ghost" style={{ borderColor: "#2A2F4A", color: "#C9C5B6" }} href="/contact">Talk to us</Link>
          </div>
        </div>
      </div>
    </>
  );
}
