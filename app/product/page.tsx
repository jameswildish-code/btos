"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState<"clinic" | "consumer">("clinic");

  return (
    <>
      <style>{`
        .p-hero { padding: 80px 0 56px; border-bottom: 1px solid var(--line); }
        .p-hero .grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 64px; align-items: end; }
        .p-hero h1 { margin-top: 24px; }
        .p-hero .meta {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
          margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--line);
        }
        .p-hero .meta .lab {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--muted);
        }
        .p-hero .meta .v { margin-top: 6px; font-size: 14px; }
        .tabbed { background: var(--bg-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 80px 0; }
        .tabs {
          display: inline-flex; padding: 4px; background: var(--surface);
          border: 1px solid var(--line); border-radius: 999px; gap: 4px;
        }
        .tab {
          padding: 10px 18px; border-radius: 999px;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--muted); border: 0; background: transparent; cursor: pointer;
        }
        .tab.on { background: var(--ink); color: var(--bg); }
        .panel-stage {
          margin-top: 32px;
          background: var(--surface); border: 1px solid var(--line);
          border-radius: 24px; padding: 36px;
          display: grid; grid-template-columns: 1fr 1.1fr; gap: 56px; align-items: center;
          min-height: 540px;
        }
        .panel-stage h3 {
          font-family: var(--font-display); font-weight: 400;
          font-size: clamp(36px,4vw,56px); line-height: 1.02;
          letter-spacing: -0.01em; margin: 12px 0 16px;
        }
        .panel-stage .visual { display: flex; justify-content: center; align-items: center; min-height: 480px; }
        .panel-stage .feat { display: grid; gap: 14px; margin-top: 24px; }
        .panel-stage .feat .row {
          display: grid; grid-template-columns: 28px 1fr; gap: 14px;
          padding: 14px 0; border-top: 1px dashed var(--line);
        }
        .panel-stage .feat .ic {
          width: 28px; height: 28px; border-radius: 8px; background: var(--mint);
          color: var(--teal); display: grid; place-items: center;
        }
        .panel-stage .feat .ic.lime { background: var(--lime); color: var(--ink); }
        .panel-stage .feat .ic.sky  { background: var(--sky);  color: #2A6FDB; }
        .panel-stage .feat .ic.rose { background: var(--rose); color: #C46A6A; }
        .panel-stage .feat h5 { margin: 0; font-size: 15px; font-weight: 500; }
        .panel-stage .feat p  { margin: 2px 0 0; color: var(--muted); font-size: 13px; }
        .feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .feat-card {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: 20px; padding: 28px;
          display: flex; flex-direction: column; min-height: 280px;
          transition: transform .25s ease; text-decoration: none; color: inherit;
        }
        .feat-card:hover { transform: translateY(-3px); }
        .feat-card .num {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em;
          color: var(--muted);
        }
        .feat-card h4 {
          font-family: var(--font-display); font-weight: 400; font-size: 28px;
          line-height: 1.05; letter-spacing: -0.01em; margin: 16px 0 12px;
        }
        .feat-card p { color: var(--muted); font-size: 14px; margin: 0; }
        .feat-card .go {
          margin-top: auto; padding-top: 24px;
          font-family: var(--font-mono); font-size: 11px;
          letter-spacing: 0.14em; text-transform: uppercase;
        }
        .feat-card.dark { background: var(--ink); color: var(--bg); border-color: var(--ink); }
        .feat-card.dark p { color: #C9C5B6; }
        .feat-card.dark .num, .feat-card.dark .go { color: #807C6F; }
        .arch {
          background: var(--ink); color: var(--bg);
          border-radius: 28px; padding: 56px; position: relative; overflow: hidden;
        }
        .arch::before {
          content:""; position:absolute; inset:0;
          background:
            linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px) 0 0 / 56px 56px,
            linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px) 0 0 / 56px 56px;
        }
        .arch > * { position: relative; }
        .arch-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 40px; }
        .arch-row {
          background: #0F1738; border: 1px solid #2A2F4A;
          border-radius: 16px; padding: 22px;
          display: grid; grid-template-columns: 160px 1fr; gap: 24px; align-items: center;
        }
        .arch-row .lab {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--muted-2);
        }
        .arch-row .nodes { display: flex; flex-wrap: wrap; gap: 8px; }
        .arch-row .node {
          padding: 8px 14px; border-radius: 999px;
          background: rgba(255,255,255,.04); border: 1px solid #2A2F4A;
          font-size: 13px; color: var(--bg);
        }
        .arch-row .node.teal  { background: rgba(47,191,163,.12); border-color: #2FBFA3; color: var(--mint); }
        .arch-row .node.lime  { background: rgba(209,242,74,.12); border-color: #D1F24A; color: var(--lime); }
        .arch-row .src-stack { display: grid; gap: 10px; width: 100%; }
        .arch-row .src-cat {
          display: grid; grid-template-columns: 130px 1fr; gap: 14px; align-items: center;
          padding: 8px 0; border-top: 1px dashed #2A2F4A;
        }
        .arch-row .src-cat:first-child { border-top: 0; padding-top: 0; }
        .arch-row .src-cat .cat-lab {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--mint);
        }
        .arch-row .src-cat .cat-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .cohort-heat { display:grid; grid-template-columns:repeat(20,1fr); gap:3px; background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:12px; }
        .heat-cell { aspect-ratio:1/1; border-radius:2px; }
        @media (max-width: 1080px) {
          .p-hero .grid { grid-template-columns: 1fr; gap: 32px; }
          .panel-stage { grid-template-columns: 1fr; }
          .feat-grid { grid-template-columns: 1fr; }
          .arch { padding: 32px; }
          .arch-row { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>

      <section className="p-hero">
        <div className="wrap-w">
          <div className="grid">
            <div>
              <span className="eyebrow"><span className="dot"></span> Product</span>
              <h1 className="h1">One platform.<br/>Two surfaces.<br/><em>One source of truth.</em></h1>
            </div>
            <p className="lede">
              BiotrackOS is the operating system for connected health — one record across wearables, labs, genomics, epigenetics, and medications. A consumer app for the people who generate the data, and a team workspace for the people who interpret it. Everything else is built on the same record.
            </p>
          </div>
          <div className="meta">
            <div><div className="lab">Compliance</div><div className="v">HIPAA · SOC 2 Type II · ISO 27001 · GDPR</div></div>
            <div><div className="lab">Integrations</div><div className="v">Wearables, labs, genomics, epigenetics, Rx + open REST &amp; FHIR APIs</div></div>
            <div><div className="lab">Deployment</div><div className="v">Cloud · single-tenant for enterprise · EU residency</div></div>
          </div>
        </div>
      </section>

      <section className="tabbed">
        <div className="wrap-w">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"end",gap:"24px",flexWrap:"wrap",marginBottom:"8px"}}>
            <div>
              <span className="eyebrow"><span className="dot"></span> The two surfaces</span>
              <h2 className="h1" style={{marginTop:"16px"}}>See it from<br/>both sides.</h2>
            </div>
            <div className="tabs" role="tablist">
              <button className={`tab${activeTab === "clinic" ? " on" : ""}`} onClick={() => setActiveTab("clinic")}>Clinic dashboard</button>
              <button className={`tab${activeTab === "consumer" ? " on" : ""}`} onClick={() => setActiveTab("consumer")}>Consumer app</button>
            </div>
          </div>

          {activeTab === "clinic" && (
            <div className="panel-stage">
              <div>
                <span className="eyebrow"><span className="dot"></span> For clinics &amp; cohorts</span>
                <h3>Run your team<br/>on one screen.</h3>
                <p className="lede" style={{fontSize:"16px"}}>
                  Roster people, segment cohorts, see longitudinal records, and act on threshold alerts — all from the same workspace your team already lives in.
                </p>
                <div className="feat">
                  <div className="row">
                    <div className="ic">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/></svg>
                    </div>
                    <div>
                      <h5>Cohort dashboards with population insights</h5>
                      <p>Heatmap any metric across any segment. Spot trends before they become flags.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="ic lime">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2v6m0 8v6M2 12h6m8 0h6" stroke="currentColor" strokeWidth="2"/></svg>
                    </div>
                    <div>
                      <h5>Individual client management</h5>
                      <p>Longitudinal record, notes, attachments, and shared consent — one view per patient.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="ic sky">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 12h4l3-8 4 16 3-8h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <h5>Alerting on threshold &amp; trend</h5>
                      <p>Set rules once. Route to the right clinician, in-app or by message.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="ic rose">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <h5>FHIR &amp; REST APIs</h5>
                      <p>Pipe normalised streams into your EHR, data warehouse, or wellness platform.</p>
                    </div>
                  </div>
                </div>
                <Link className="btn btn-primary" style={{marginTop:"32px"}} href="/features/clinic-dashboard">Explore the clinic dashboard <span className="arrow">→</span></Link>
              </div>
              <div className="visual">
                <div className="browser" style={{width:"100%",maxWidth:"560px"}}>
                  <div className="browser-bar">
                    <span className="browser-dot"></span><span className="browser-dot"></span><span className="browser-dot"></span>
                    <div className="addr">app.biotrackos.com/cohorts/longevity-04</div>
                  </div>
                  <div style={{padding:"20px",background:"var(--bg-2)"}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"14px"}}>
                      <div>
                        <div className="eyebrow"><span className="dot"></span> Cohort 04 · Longevity</div>
                        <h5 style={{margin:"6px 0 0",fontSize:"18px"}}>214 people · 12 flagged</h5>
                      </div>
                      <span className="chip"><span className="dot"></span> Live</span>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",marginBottom:"14px"}}>
                      <div className="card-flat" style={{padding:"14px",background:"var(--surface)",borderColor:"var(--line)"}}>
                        <div className="eyebrow">Avg VO₂</div>
                        <div style={{fontFamily:"var(--font-display)",fontSize:"32px",lineHeight:"1",marginTop:"4px"}}>42.1</div>
                      </div>
                      <div className="card-flat" style={{padding:"14px",background:"var(--surface)",borderColor:"var(--line)"}}>
                        <div className="eyebrow">Avg HRV</div>
                        <div style={{fontFamily:"var(--font-display)",fontSize:"32px",lineHeight:"1",marginTop:"4px"}}>58</div>
                      </div>
                      <div className="card-flat" style={{padding:"14px",background:"var(--surface)",borderColor:"var(--line)"}}>
                        <div className="eyebrow">Adherence</div>
                        <div style={{fontFamily:"var(--font-display)",fontSize:"32px",lineHeight:"1",marginTop:"4px"}}>91<span style={{fontSize:"18px",color:"var(--muted)"}}>%</span></div>
                      </div>
                      <div className="card-flat" style={{padding:"14px",background:"var(--surface)",borderColor:"var(--line)"}}>
                        <div className="eyebrow">Flags</div>
                        <div style={{fontFamily:"var(--font-display)",fontSize:"32px",lineHeight:"1",marginTop:"4px",color:"#C46A6A"}}>12</div>
                      </div>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(20,1fr)",gap:"3px",background:"var(--surface)",border:"1px solid var(--line)",borderRadius:"10px",padding:"12px"}}>
                      {Array.from({length:160}).map((_,i) => {
                        const palette = ['#EDEAE0','#D6E8DC','#A8D6BF','#6FBFA0','#1F8A7A'];
                        const r = (i * 7 + 13) % 100 / 100;
                        const c = r < 0.05 ? '#C46A6A' : r < 0.3 ? palette[4] : r < 0.55 ? palette[3] : r < 0.78 ? palette[2] : palette[1];
                        return <span key={i} style={{aspectRatio:"1/1",borderRadius:"2px",background:c,opacity:0.7+(i%3)*0.1}} />;
                      })}
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px",fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".12em",textTransform:"uppercase",color:"var(--muted)"}}>
                      <span>Apr 5</span><span>Recovery score</span><span>May 4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "consumer" && (
            <div className="panel-stage">
              <div>
                <span className="eyebrow"><span className="dot"></span> For consumers</span>
                <h3>Every signal,<br/>auto-captured.</h3>
                <p className="lede" style={{fontSize:"16px"}}>
                  One app that talks to every device they already own — and quietly explains what their body is telling them, in plain English.
                </p>
                <div className="feat">
                  <div className="row">
                    <div className="ic">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 8h16M4 16h16M8 4v16M16 4v16" stroke="currentColor" strokeWidth="2"/></svg>
                    </div>
                    <div>
                      <h5>One screen, every metric</h5>
                      <p>Steps, weight, VO₂, HRV, sleep, mood — merged across devices, no duplicates.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="ic lime">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 12h4l3-8 4 16 3-8h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <h5>Plain-language trends</h5>
                      <p>&quot;VO₂ trending up 1.4%&quot; — with context, not just a chart.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="ic sky">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M3 10h18" stroke="currentColor" strokeWidth="2"/></svg>
                    </div>
                    <div>
                      <h5>Health journal timeline</h5>
                      <p>Every signal in one chronological log — runs, sleeps, moods, notes.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="ic rose">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-7 11-7 11Z" stroke="currentColor" strokeWidth="2"/></svg>
                    </div>
                    <div>
                      <h5>Consent-first sharing</h5>
                      <p>Send the same data to a clinic, coach, or insurer. Revoke any time.</p>
                    </div>
                  </div>
                </div>
                <Link className="btn btn-primary" style={{marginTop:"32px"}} href="/features/consumer-app">Explore the consumer app <span className="arrow">→</span></Link>
              </div>
              <div className="visual" style={{gap:"24px",display:"flex",justifyContent:"center"}}>
                <div className="phone" style={{transform:"translateY(-12px)"}}>
                  <div className="phone-notch"></div>
                  <div className="phone-screen"><Image src="/img/app-journal.png" alt="Journal" width={260} height={560} style={{width:"100%",height:"auto"}}/></div>
                </div>
                <div className="phone" style={{transform:"translateY(12px)"}}>
                  <div className="phone-notch"></div>
                  <div className="phone-screen"><Image src="/img/app-vo2.png" alt="VO2" width={260} height={560} style={{width:"100%",height:"auto"}}/></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap-w">
          <div className="sec-head">
            <div>
              <span className="eyebrow"><span className="dot"></span> Capabilities</span>
              <h2 className="h1" style={{marginTop:"16px"}}>Everything between<br/>the wearable and the decision.</h2>
            </div>
            <p className="lede">Each capability is built on the same merged record. Pick the ones you need — the rest stay quiet.</p>
          </div>

          <div className="feat-grid">
            <Link className="feat-card" href="/features/clinic-dashboard">
              <div className="num">F.01</div>
              <h4>Clinic dashboard</h4>
              <p>Cohort views, individual longitudinal records, population insights, and rules-based alerts.</p>
              <div className="go">Read →</div>
            </Link>
            <Link className="feat-card" href="/features/consumer-app">
              <div className="num">F.02</div>
              <h4>Consumer app</h4>
              <p>iOS &amp; Android. One screen for every signal from every device.</p>
              <div className="go">Read →</div>
            </Link>
            <Link className="feat-card dark" href="/integrations">
              <div className="num">F.03</div>
              <h4>Integration layer</h4>
              <p>Wearables, labs, genomics, epigenetics, and Rx reconciled into one canonical, time-aligned record.</p>
              <div className="go">Read →</div>
            </Link>
            <Link className="feat-card" href="/features/clinic-dashboard#alerts">
              <div className="num">F.04</div>
              <h4>Rules &amp; alerts engine</h4>
              <p>Set thresholds and trend rules. Route to the right clinician, automatically.</p>
              <div className="go">Read →</div>
            </Link>
            <Link className="feat-card" href="/features/protocols">
              <div className="num">F.05</div>
              <h4>Protocols</h4>
              <p>Biomarker- and trend-driven recommendations. Your catalog, your sign-off, fully auditable.</p>
              <div className="go">Read →</div>
            </Link>
            <Link className="feat-card" href="/features/clinic-dashboard#reports">
              <div className="num">F.06</div>
              <h4>Reports &amp; exports</h4>
              <p>Branded PDFs, FHIR bundles, and CSVs — generated on the same record.</p>
              <div className="go">Read →</div>
            </Link>
            <Link className="feat-card" href="/features/consumer-app#consent">
              <div className="num">F.06</div>
              <h4>Consent &amp; sharing</h4>
              <p>Granular, time-bounded sharing between a person and their care providers.</p>
              <div className="go">Read →</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap-w">
          <div className="arch">
            <span className="eyebrow" style={{color:"#807C6F"}}><span className="dot"></span> Under the hood</span>
            <h2 className="h1" style={{color:"var(--bg)",marginTop:"16px"}}>The architecture<br/><em style={{color:"var(--mint)"}}>at a glance.</em></h2>
            <div className="arch-grid">
              <div className="arch-row">
                <div className="lab">01 / Sources</div>
                <div className="src-stack">
                  <div className="src-cat">
                    <div className="cat-lab">Wearables</div>
                    <div className="cat-chips">
                      <span className="node">Apple Health</span><span className="node">WHOOP</span><span className="node">Garmin</span>
                      <span className="node">Oura</span><span className="node">Polar</span><span className="node">Samsung</span>
                      <span className="node">Withings</span><span className="node">Reebok</span><span className="node">+14 more</span>
                    </div>
                  </div>
                  <div className="src-cat">
                    <div className="cat-lab">Lab panels</div>
                    <div className="cat-chips">
                      <span className="node">Blood biomarkers</span><span className="node">Hormones</span><span className="node">Metabolic panels</span><span className="node">Partner labs</span>
                    </div>
                  </div>
                  <div className="src-cat">
                    <div className="cat-lab">Genomics &amp; DNA</div>
                    <div className="cat-chips">
                      <span className="node">Whole genome</span><span className="node">SNP arrays</span><span className="node">Pharmacogenomics</span>
                    </div>
                  </div>
                  <div className="src-cat">
                    <div className="cat-lab">Epigenetics</div>
                    <div className="cat-chips">
                      <span className="node">Biological age</span><span className="node">Methylation</span><span className="node">Glycan markers</span>
                    </div>
                  </div>
                  <div className="src-cat">
                    <div className="cat-lab">Medications &amp; Rx</div>
                    <div className="cat-chips">
                      <span className="node">Prescription history</span><span className="node">Adherence</span><span className="node">Supplements</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="arch-row">
                <div className="lab">02 / Reconcile</div>
                <div className="nodes">
                  <span className="node teal">Time-align</span>
                  <span className="node teal">Dedupe across devices</span>
                  <span className="node teal">Canonical record</span>
                  <span className="node teal">Audit log</span>
                </div>
              </div>
              <div className="arch-row">
                <div className="lab">03 / Surface</div>
                <div className="nodes">
                  <span className="node lime">Consumer app</span>
                  <span className="node lime">Team workspace</span>
                  <span className="node lime">FHIR / REST API</span>
                  <span className="node lime">Webhooks</span>
                  <span className="node lime">PDF reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
