import Link from "next/link";
import Image from "next/image";
import HeatmapClient from "@/components/HeatmapClient";

export default function Home() {
  return (
    <>
      <style>{`
        /* HERO */
        .hero { position:relative; padding:64px 0 0; overflow:hidden; }
        .hero-tag { display:inline-flex; align-items:flex-start; gap:10px; padding:6px 6px 6px 14px; border:1px solid var(--line); border-radius:999px; background:var(--surface); font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--ink-2); max-width:100%; }
        .hero-tag .pill { background:var(--mint); color:var(--teal); padding:4px 10px; border-radius:999px; font-weight:500; flex-shrink:0; margin-top:1px; }
        .hero-tag-text { line-height:1.5; }
        .hero-headline { font-family:var(--font-display); font-weight:400; font-size:clamp(64px,9.4vw,152px); line-height:.92; letter-spacing:-.025em; margin:22px 0 0; text-wrap:balance; }
        .hero-headline em { font-style:italic; color:var(--ink-2); }
        @media (max-width:640px) { .hero-tag { border-radius:16px; flex-wrap:wrap; padding:8px 10px 8px 14px; gap:8px; } .hero-tag-text { font-size:10px; } }
        .hero-meta { display:grid; grid-template-columns:1.4fr 1fr; gap:56px; margin-top:40px; padding-top:32px; border-top:1px solid var(--line); }
        .hero-meta .lede { margin:0; max-width:48ch; }
        .hero-actions { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
        .hero-stage { margin-top:64px; position:relative; padding:32px; background:linear-gradient(180deg,var(--surface) 0%,var(--bg-2) 100%); border:1px solid var(--line); border-radius:28px; overflow:hidden; }
        .stage-grid { display:grid; grid-template-columns:1.45fr 0.95fr; gap:32px; min-height:560px; }
        .stage-dash { background:var(--bg-2); border:1px solid var(--line); border-radius:var(--r-lg); padding:24px; position:relative; overflow:hidden; }
        .sd-label { font-family:var(--font-mono); font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); margin-bottom:18px; display:flex; align-items:center; }
        .stage-dash::before { content:""; position:absolute; inset:0; background:linear-gradient(to right,rgba(11,17,48,.04) 1px,transparent 1px) 0 0/48px 48px,linear-gradient(to bottom,rgba(11,17,48,.04) 1px,transparent 1px) 0 0/48px 48px; pointer-events:none; }
        .stage-dash > * { position:relative; }
        .sd-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; }
        .sd-title { display:flex; align-items:center; gap:12px; }
        .avatar { width:34px; height:34px; border-radius:50%; background:var(--mint); color:var(--teal); display:grid; place-items:center; font-weight:600; font-size:12px; font-family:var(--font-mono); }
        .sd-title h4 { margin:0; font-size:16px; font-weight:600; }
        .sd-title p { margin:0; font-family:var(--font-mono); font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); }
        .sd-metrics { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; }
        .sd-metric { background:var(--surface); border:1px solid var(--line); border-radius:12px; padding:14px; }
        .sd-metric .lab { font-family:var(--font-mono); font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); }
        .sd-metric .val { font-family:var(--font-display); font-size:36px; line-height:1; letter-spacing:-.02em; margin-top:6px; }
        .sd-metric .delta { font-family:var(--font-mono); font-size:11px; color:var(--teal); margin-top:6px; }
        .sd-metric .delta.down { color:#C46A6A; }
        .sd-metric .unit { color:var(--muted); margin-left:4px; font-size:12px; font-family:var(--font-sans); }
        .sd-chart { background:var(--surface); border:1px solid var(--line); border-radius:12px; padding:18px; margin-top:16px; min-height:200px; position:relative; }
        .sd-chart-head { display:flex; justify-content:space-between; align-items:baseline; margin-bottom:12px; }
        .sd-chart-head .left h5 { margin:0; font-size:14px; font-weight:600; }
        .sd-chart-head .left p { margin:2px 0 0; font-family:var(--font-mono); font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); }
        .seg { display:inline-flex; gap:2px; background:var(--bg-2); border:1px solid var(--line); border-radius:8px; padding:2px; }
        .seg span { font-family:var(--font-mono); font-size:10px; letter-spacing:.1em; padding:4px 8px; border-radius:6px; color:var(--muted); }
        .seg span.on { background:var(--ink); color:var(--bg); }
        .sd-rows { display:grid; gap:6px; margin-top:14px; }
        .sd-row { display:grid; grid-template-columns:22px 1fr auto 70px auto; gap:12px; align-items:center; padding:10px 8px; border-radius:8px; background:var(--surface); border:1px solid var(--line); }
        .sd-row .ic { width:22px; height:22px; border-radius:6px; background:var(--mint); display:grid; place-items:center; color:var(--teal); }
        .sd-row .name { font-size:13px; font-weight:500; }
        .sd-row .src { font-family:var(--font-mono); font-size:10px; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); }
        .sd-row .val { font-family:var(--font-display); font-size:18px; }
        .sd-row .badge { font-family:var(--font-mono); font-size:10px; letter-spacing:.1em; text-transform:uppercase; color:var(--teal); background:var(--mint-soft); padding:3px 8px; border-radius:999px; }
        .stage-phone-col { background:var(--ink); border-radius:var(--r-lg); padding:28px; color:var(--bg); position:relative; display:flex; flex-direction:column; justify-content:space-between; overflow:hidden; }
        .stage-phone-col::before { content:""; position:absolute; inset:-1px; background:radial-gradient(ellipse at top right,rgba(47,191,163,.18),transparent 60%),radial-gradient(ellipse at bottom left,rgba(209,242,74,.10),transparent 50%); pointer-events:none; }
        .stage-phone-col > * { position:relative; }
        .phc-eyebrow { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:#807C6F; }
        .phc-eyebrow .dot { display:inline-block; width:6px; height:6px; border-radius:50%; background:var(--teal-bright); margin-right:8px; vertical-align:middle; box-shadow:0 0 0 4px rgba(47,191,163,.18); }
        .phc h3 { font-family:var(--font-display); font-weight:400; font-size:36px; line-height:1; letter-spacing:-.01em; margin:16px 0 12px; }
        .phc p { color:#C9C5B6; font-size:14px; max-width:32ch; margin:0; }

        /* Animations */
        @keyframes draw { to { stroke-dashoffset:0; } }
        .svg-line { stroke-dasharray:1000; stroke-dashoffset:1000; animation:draw 2.4s ease forwards .4s; }
        @keyframes pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.4);opacity:.5} }
        .svg-dot { transform-origin:center; animation:pulse 2.2s ease-in-out infinite 1.5s; }

        /* Trust ticker */
        .trust { border-top:1px solid var(--line); border-bottom:1px solid var(--line); padding:28px 0; background:var(--bg); overflow:hidden; }
        .trust-row { display:grid; grid-template-columns:220px 1fr; gap:32px; align-items:center; }
        .trust-label { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); }
        .trust-track { overflow:hidden; mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent); }
        .logo-name { font-family:var(--font-display); font-size:24px; letter-spacing:-.01em; color:var(--ink-2); }
        .logo-name.mono { font-family:var(--font-sans); font-weight:500; letter-spacing:.04em; font-size:18px; }

        /* Split panels */
        .split { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
        .split .panel { background:var(--surface); border:1px solid var(--line); border-radius:24px; padding:36px; position:relative; overflow:hidden; display:flex; flex-direction:column; min-height:580px; }
        .split .panel.dark { background:var(--ink); color:var(--bg); border-color:var(--ink); }
        .split .panel.dark .small, .split .panel.dark .lede { color:#C9C5B6; }
        .split .panel.dark .eyebrow { color:#807C6F; }
        .split .panel .visual { margin-top:auto; padding-top:24px; }
        .split h3 { font-family:var(--font-display); font-weight:400; font-size:40px; line-height:1.02; letter-spacing:-.01em; margin:12px 0; }
        .panel-list { list-style:none; padding:0; margin:16px 0 0; display:grid; gap:8px; }
        .panel-list li { display:grid; grid-template-columns:18px 1fr; gap:12px; font-size:14px; padding:8px 0; border-top:1px dashed var(--line); }
        .split .panel.dark .panel-list li { border-color:#2A2F4A; }
        .panel-list li::before { content:""; width:8px; height:8px; border-radius:50%; background:var(--teal-bright); margin-top:8px; }

        /* Markets */
        .markets-row { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; }
        .market-card { background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:24px; min-height:220px; display:flex; flex-direction:column; justify-content:space-between; transition:transform .25s ease, background .2s; }
        .market-card:hover { transform:translateY(-3px); }
        .market-card .num { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; color:var(--muted); }
        .market-card h4 { font-family:var(--font-display); font-weight:400; font-size:28px; line-height:1; letter-spacing:-.01em; margin:16px 0 0; }
        .market-card p { font-size:13px; color:var(--muted); margin:12px 0 0; }
        .market-card .go { margin-top:16px; font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--ink); }

        /* Steps */
        .steps { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .step { border-top:1px solid var(--ink); padding-top:18px; }
        .step .n { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; color:var(--muted); margin-bottom:24px; }
        .step h4 { font-family:var(--font-display); font-weight:400; font-size:32px; line-height:1.05; letter-spacing:-.01em; margin:0 0 12px; }
        .step p { color:var(--ink-2); margin:0; max-width:36ch; }

        /* Proof / quote */
        .proof { background:var(--ink); color:var(--bg); border-radius:28px; padding:80px; position:relative; overflow:hidden; }
        .proof::before { content:""; position:absolute; inset:0; background:radial-gradient(ellipse 60% 50% at 80% 20%,rgba(47,191,163,.18),transparent 60%),radial-gradient(ellipse 60% 50% at 0% 100%,rgba(209,242,74,.10),transparent 60%); pointer-events:none; }
        .proof > * { position:relative; }
        .proof blockquote { font-family:var(--font-display); font-weight:400; font-size:clamp(36px,4vw,56px); line-height:1.05; letter-spacing:-.01em; margin:0; text-wrap:balance; max-width:22ch; }
        .proof .who { margin-top:32px; display:grid; grid-template-columns:auto 1fr auto; gap:18px; align-items:center; }
        .proof .who .av { width:48px; height:48px; border-radius:50%; background:var(--mint); color:var(--teal); display:grid; place-items:center; font-family:var(--font-mono); font-weight:600; }
        .proof .who .name { color:var(--bg); font-weight:500; }
        .proof .who .role { color:#807C6F; font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; }

        /* Stats */
        .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; border-top:1px solid var(--line); border-bottom:1px solid var(--line); padding:56px 0; }
        .stat-card .num { font-family:var(--font-display); font-size:clamp(56px,6vw,96px); line-height:1; letter-spacing:-.02em; }
        .stat-card .num em { font-style:italic; color:var(--teal); }
        .stat-card p { color:var(--muted); margin:12px 0 0; max-width:22ch; font-size:14px; }

        @media (max-width:1080px) {
          .stage-grid { grid-template-columns:1fr; }
          .sd-metrics { grid-template-columns:repeat(2,1fr); }
          .hero-meta { grid-template-columns:1fr; gap:24px; }
          .markets-row { grid-template-columns:repeat(2,1fr); }
          .steps { grid-template-columns:1fr; }
          .split { grid-template-columns:1fr; }
          .stats { grid-template-columns:1fr 1fr; gap:32px; }
          .proof { padding:48px 28px; }
        }
        @media (max-width:640px) {
          .markets-row { grid-template-columns:1fr; }
          .stats { grid-template-columns:1fr; }
          .trust-row { grid-template-columns:1fr; }
          .proof .who { grid-template-columns:auto 1fr; }
          .proof .who > :last-child { grid-column:1/-1; }
        }
      `}</style>

      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="wrap-w">
          <div className="reveal reveal-1">
            <span className="hero-tag">
              <span className="pill">Early access</span>
              <span className="hero-tag-text">Already live with early partners · now open · Reserve your place →</span>
            </span>
            <h1 className="hero-headline">
              The operating system<br/>
              for <em>connected</em><br/>
              health.
            </h1>
          </div>

          <div className="hero-meta reveal reveal-2">
            <p className="lede">
              Every signal the body generates. One record. Always current.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
              <div className="hero-actions">
                <Link className="btn btn-primary btn-lg" href="/contact">Book a demo <span className="arrow">→</span></Link>
                <Link className="btn btn-ghost btn-lg" href="/product">How it works</Link>
              </div>
              <div className="small" style={{ display: "flex", gap: 14, alignItems: "center", color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase" }}>
                <span>Built for compliance</span><span style={{ opacity: 0.4 }}>/</span>
                <span>Consent-first</span><span style={{ opacity: 0.4 }}>/</span>
                <span>Encrypted end-to-end</span>
              </div>
            </div>
          </div>

          {/* Composite stage */}
          <div className="hero-stage reveal reveal-3">
            <div className="stage-grid">
              {/* Dashboard mock */}
              <div className="stage-dash">
                <div className="sd-label"><span className="dot" style={{ marginRight: 8 }}></span>Professional view · individual &amp; cohort insight</div>
                <div className="sd-head">
                  <div className="sd-title">
                    <div className="avatar">MA</div>
                    <div>
                      <h4>Maria Alvarez · Cohort 04</h4>
                      <p>Longevity panel · last sync 8s ago</p>
                    </div>
                  </div>
                  <span className="chip"><span className="dot"></span> Syncing</span>
                </div>

                <div className="sd-metrics">
                  {[
                    { lab: "VO₂ MAX",    val: "48.6", unit: "ml/kg", delta: "↑ 1.4% · 30d" },
                    { lab: "RESTING HR", val: "57",   unit: "bpm",   delta: "↓ 3 bpm · 14d" },
                    { lab: "HRV",        val: "62",   unit: "ms",    delta: "↑ 8 ms · 7d" },
                    { lab: "SLEEP EFF.", val: "88",   unit: "%",     delta: "↓ 2% · 7d", down: true },
                  ].map((m) => (
                    <div key={m.lab} className="sd-metric">
                      <div className="lab">{m.lab}</div>
                      <div className="val">{m.val}<span className="unit">{m.unit}</span></div>
                      <div className={`delta${m.down ? " down" : ""}`}>{m.delta}</div>
                    </div>
                  ))}
                </div>

                <div className="sd-chart">
                  <div className="sd-chart-head">
                    <div className="left">
                      <h5>VO₂ max — 30 day trend</h5>
                      <p>Apple Watch · Whoop · Garmin merged</p>
                    </div>
                    <div className="seg">
                      <span>1D</span><span>7D</span><span className="on">30D</span><span>90D</span>
                    </div>
                  </div>
                  <svg viewBox="0 0 600 140" width="100%" height="140" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lg1" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#2FBFA3" stopOpacity=".25"/>
                        <stop offset="1" stopColor="#2FBFA3" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <g stroke="#E5E1D6" strokeDasharray="2 4">
                      <line x1="0" y1="30"  x2="600" y2="30"/>
                      <line x1="0" y1="70"  x2="600" y2="70"/>
                      <line x1="0" y1="110" x2="600" y2="110"/>
                    </g>
                    <path d="M0,108 L40,98 L80,104 L120,90 L160,82 L200,86 L240,72 L280,76 L320,60 L360,68 L400,52 L440,46 L480,42 L520,30 L560,28 L600,24 L600,140 L0,140 Z" fill="url(#lg1)"/>
                    <path className="svg-line" d="M0,108 L40,98 L80,104 L120,90 L160,82 L200,86 L240,72 L280,76 L320,60 L360,68 L400,52 L440,46 L480,42 L520,30 L560,28 L600,24"
                      fill="none" stroke="#1F8A7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <g className="svg-dot" style={{ transformOrigin: "600px 24px" }}>
                      <circle cx="600" cy="24" r="5" fill="#1F8A7A" stroke="#FFFFFF" strokeWidth="2"/>
                    </g>
                    <text x="586" y="14" textAnchor="end" fontFamily="Geist Mono" fontSize="10" fill="#6B6859">48.7</text>
                  </svg>
                </div>

                <div className="sd-rows">
                  <div className="sd-row">
                    <div className="ic">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M3 12h4l3-8 4 16 3-8h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div><div className="name">Stress index trending up</div><div className="src">Garmin Fēnix · 1h ago</div></div>
                    <div></div>
                    <div className="val">46<span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--muted)" }}> /100</span></div>
                    <div className="badge">Flag</div>
                  </div>
                  <div className="sd-row">
                    <div className="ic" style={{ background: "var(--sky)", color: "#2A6FDB" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-7 11-7 11Z" stroke="currentColor" strokeWidth="2"/></svg>
                    </div>
                    <div><div className="name">HRV recovering after sauna</div><div className="src">Whoop · 7:14 today</div></div>
                    <div></div>
                    <div className="val">+8<span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--muted)" }}> ms</span></div>
                    <div className="badge">Note</div>
                  </div>
                </div>
              </div>

              {/* Phone column */}
              <div className="stage-phone-col">
                <div className="phc">
                  <div className="phc-eyebrow"><span className="dot"></span> Connected · always syncing</div>
                  <h3>Their data, explained. In their hands.</h3>
                  <p>From wearables and devices to lab results, genomics, medications, and clinical records — all in one place, in plain language.</p>
                </div>
                <div style={{ alignSelf: "center", marginTop: 24, transform: "translateY(8px)" }}>
                  <div className="phone" style={{ margin: "0 auto" }}>
                    <div className="phone-notch"></div>
                    <div className="phone-screen">
                      <Image src="/img/app-vo2.png" alt="BiotrackOS consumer app — VO2 max detail" width={280} height={580} style={{ width: "100%", height: "auto" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TRUST ===================== */}
      <section className="trust" style={{ marginTop: 80 }}>
        <div className="wrap-w">
          <div className="trust-row">
            <div className="trust-label">Every health data source, connected.</div>
            <div className="trust-track">
              <div className="ticker-track">
                {["Apple Health", "WHOOP", "Garmin", "Oura", "Withings", "POLAR", "Samsung Health", "Reebok", "Dexcom", "EIGHT SLEEP",
                  "Apple Health", "WHOOP", "Garmin", "Oura", "Withings", "POLAR", "Samsung Health", "Reebok", "Dexcom", "EIGHT SLEEP",
                ].map((name, i) => (
                  <span key={i} className={`logo-name${["WHOOP","Oura","POLAR","Reebok","EIGHT SLEEP"].includes(name) ? " mono" : ""}`}>{name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TWO PRODUCTS ===================== */}
      <section className="section">
        <div className="wrap-w">
          <div className="sec-head">
            <div>
              <span className="eyebrow"><span className="dot"></span> Personal &amp; Professional</span>
              <h2 className="h1" style={{ marginTop: 16 }}>One record.<br/>Two powerful views.</h2>
            </div>
            <p className="lede">
              The personal app gives every member a clean, personal view of their own data. The professional workspace handles individual monitoring and population-wide insight from the same record — no data entry, no reconciliation.
            </p>
          </div>

          <div className="split">
            {/* Consumer panel */}
            <div className="panel">
              <span className="eyebrow"><span className="dot"></span> Personal</span>
              <h3>Built for the person<br/>behind the data.</h3>
              <p className="small" style={{ maxWidth: "46ch" }}>
                From wearables and lab results to genomics, medications, and self-reported notes — one timeline, in plain language.
              </p>
              <ul className="panel-list">
                <li>One timeline across every connected source</li>
                <li>Auto-synced data and manual journal — health markers, sleep, mood, and training</li>
                <li>Insights explained in plain language — no jargon, no raw data to interpret</li>
                <li>Consent they own — share or revoke anytime</li>
              </ul>
              <div className="visual" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, alignItems: "end" }}>
                <div className="phone" style={{ width: "100%" }}>
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <Image src="/img/app-health.png" alt="Consumer dashboard" width={280} height={580} style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
                <div className="phone" style={{ width: "100%", transform: "translateY(20px)" }}>
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <Image src="/img/app-weight.png" alt="Weight tracking" width={280} height={580} style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Team workspace panel */}
            <div className="panel dark">
              <span className="eyebrow"><span className="dot"></span> Professional</span>
              <h3>The view that turns<br/>data into decisions.</h3>
              <p className="small">
                Monitor individuals and entire cohorts from the same record. Act on signals that matter — without adding tools, pipelines, or steps to existing workflows.
              </p>
              <ul className="panel-list">
                <li>Individual monitoring &amp; remote follow-up</li>
                <li>Cohort views &amp; population-wide trends</li>
                <li>Threshold &amp; trend alerts, auto-flagged</li>
                <li>White-label ready — your brand, your portal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section>
        <div className="wrap-w">
          <div className="stats">
            {[
              { num: "7+",   em: "+",  label: "Data categories — wearables, devices, apps, genomics, medications, clinical, and self-reported." },
              { num: "1",    em: "1",  label: "Longitudinal record per person, across every connected source. No duplicates." },
              { num: "30",   em: "30", label: "Days or fewer from onboarding to live member data." },
              { num: "100%", em: "%",  label: "Consent-first by design. Every data flow is governed, auditable, and transparent." },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <div className="num">{s.num.replace(s.em, "")}<em>{s.em}</em></div>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MARKETS ===================== */}
      <section className="section">
        <div className="wrap-w">
          <div className="sec-head">
            <div>
              <span className="eyebrow"><span className="dot"></span> Markets</span>
              <h2 className="h1" style={{ marginTop: 16 }}>One platform.<br/>Every market.</h2>
            </div>
            <p className="lede">Wherever health data has to become a decision — in a clinic, at a gym or performance facility, at an insurer, or in a research lab — BiotrackOS is the infrastructure beneath it.</p>
          </div>

          <div className="markets-row">
            {[
              { key: "clinical",    title: "Clinics & longevity labs", desc: "From wearables and lab results to genomics and clinical records — one unified record for every person in your care.", href: "/markets#longevity" },
              { key: "performance", title: "Sports teams & gyms",      desc: "From athlete performance records to team health dashboards and cross-club benchmarks — for gyms, clubs, and performance facilities.", href: "/markets#performance" },
              { key: "insurance",   title: "Insurers",                 desc: "Consented, continuous health data — powering underwriting, wellness programmes, and rewards with real signal, not surveys.", href: "/markets#insurer" },
              { key: "wellness",    title: "Corporate wellness",       desc: "A privacy-first view of workforce health — aggregate insight, individually protected.", href: "/markets#wellness" },
              { key: "research",    title: "Research & pharma",        desc: "Real-world longitudinal signal for trials, protocols, and post-market surveillance.", href: "/markets#research" },
              { key: "consumer",    title: "Direct to individual",     desc: "For people who want their complete health record in one place, on their own terms.", href: "/markets#consumer" },
              { key: "public",      title: "Public health & events",   desc: "Population monitoring and mass-event health management, built for scale.", href: "/markets#public" },
            ].map((card) => (
              <Link key={card.key} className="market-card" href={card.href}>
                <div><h4>{card.title}</h4></div>
                <p>{card.desc}</p>
                <div className="go">Learn more →</div>
              </Link>
            ))}
            <Link className="market-card" href="/contact" style={{ background: "transparent", borderStyle: "dashed" }}>
              <div>
                <h4>Your use case</h4>
              </div>
              <p>BiotrackOS works across any context where health data matters. If you don&apos;t see your market above, reach out — we&apos;d be happy to discuss your use case.</p>
              <div className="go">Get in touch →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap-w">
          <div className="sec-head">
            <div>
              <span className="eyebrow"><span className="dot"></span> How it works</span>
              <h2 className="h1" style={{ marginTop: 16 }}>From raw data<br/>to the right decision.</h2>
            </div>
            <p className="lede">No infrastructure to build. No existing tools to replace. Just connected health data, structured and ready to act on.</p>
          </div>
          <div className="steps">
            {[
              { h: "Connect every source.", p: "One consent flow connects everything — from wearables and devices to lab results, genomics, medications, and clinical records. Historical data included." },
              { h: "Build one unified record.", p: "Every connected source maps to a single longitudinal record per person — structured, consistent, and always up to date." },
              { h: "Act on what matters.", p: "Population dashboards, individual monitoring, and member alerts — all from the same record. One source of truth, across every surface." },
            ].map((s) => (
              <div key={s.h} className="step">
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROOF ===================== */}
      <section className="section">
        <div className="wrap-w">
          <div className="proof">
            <span className="eyebrow" style={{ color: "#807C6F" }}><span className="dot" style={{ background: "var(--teal-bright)" }}></span> Case study · Continuum Longevity</span>
            <blockquote style={{ marginTop: 24 }}>
              &ldquo;We retired five dashboards in a weekend. Our clinicians stopped reconciling data and started reading it.&rdquo;
            </blockquote>
            <div className="who">
              <div className="av">DK</div>
              <div>
                <div className="name">Dr. Daria Kowalski</div>
                <div className="role">Medical Director · Continuum Longevity</div>
              </div>
              <Link className="btn btn-accent" href="/customers/continuum">Read the study <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
