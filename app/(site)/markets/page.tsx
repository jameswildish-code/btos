import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Markets — BiotrackOS" };

export default function MarketsPage() {
  return (
    <>
      <style>{`
        .m-hero { padding: 72px 0 48px; border-bottom: 1px solid var(--line); }
        .m-hero .g { display:grid; grid-template-columns:1.3fr 1fr; gap:64px; align-items:end; }
        .m-tabs { display:flex; gap:4px; padding:6px; background:var(--surface); border:1px solid var(--line); border-radius:999px; width:max-content; margin-top:24px; flex-wrap:wrap; }
        .m-tab { padding:10px 16px; border-radius:999px; font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); border:0; background:transparent; }
        .m-tab.on { background:var(--ink); color:var(--bg); }
        .m-section { padding: 96px 0; border-bottom: 1px solid var(--line); }
        .m-section:nth-child(even) { background: var(--bg-2); }
        .m-section .g { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: center; }
        .m-section .num { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); }
        .m-section h2 {
          font-family: var(--font-display); font-weight: 400;
          font-size: clamp(48px, 5.6vw, 88px); line-height: 0.98;
          letter-spacing: -0.015em; margin: 16px 0 24px;
        }
        .m-section h2 em { font-style: italic; color: var(--teal); }
        .m-section p { color: var(--ink-2); max-width: 50ch; }
        .m-section .uses { list-style: none; padding: 0; margin: 24px 0 0; display: grid; gap: 6px; }
        .m-section .uses li {
          display:grid; grid-template-columns: 14px 1fr; gap: 12px;
          padding: 10px 0; border-top: 1px dashed var(--line); font-size: 14px;
        }
        .m-section .uses li::before { content:""; width:8px; height:8px; border-radius:50%; background: var(--teal-bright); margin-top: 8px; }
        .m-section .visual {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: 22px; padding: 28px; min-height: 360px;
          position: relative; overflow: hidden;
        }
        @media (max-width: 1000px) {
          .m-hero .g, .m-section .g { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>

      <section className="m-hero">
        <div className="wrap-w">
          <div className="g">
            <div>
              <span className="eyebrow"><span className="dot"></span> Markets</span>
              <h1 className="h1">Wherever continuous<br/>human data has to<br/><em>become a decision.</em></h1>
            </div>
            <p className="lede">Seven disciplines, one platform. Each market gets the same merged record — surfaced through the workflows that already exist on their side of the screen.</p>
          </div>
          <div className="m-tabs">
            <a className="m-tab on" href="#longevity">01 / Clinical</a>
            <a className="m-tab" href="#performance">02 / Performance</a>
            <a className="m-tab" href="#insurer">03 / Insurance</a>
            <a className="m-tab" href="#wellness">04 / Wellness</a>
            <a className="m-tab" href="#research">05 / Research</a>
            <a className="m-tab" href="#consumer">06 / Consumer</a>
            <a className="m-tab" href="#public">07 / Public</a>
          </div>
        </div>
      </section>

      <section className="m-section" id="longevity">
        <div className="wrap-w">
          <div className="g">
            <div>
              <div className="num">01 / Clinical · clinics &amp; longevity labs</div>
              <h2>For the practices<br/>betting on <em>40 years<br/>of follow-up.</em></h2>
              <p>Longevity is a sport played on a decade-long timeline. BiotrackOS gives clinics the continuous record they need between annual physicals — without their patients quitting yet another app.</p>
              <ul className="uses">
                <li>Roster &amp; segment patients by program, age, or panel</li>
                <li>Population insights across VO₂, HRV, sleep, body composition</li>
                <li>Threshold &amp; trend alerts routed to the on-call clinician</li>
                <li>White-label consumer app — your brand, your patients</li>
              </ul>
              <Link className="btn btn-primary" style={{marginTop:"32px"}} href="/contact">Read: Continuum Longevity <span className="arrow">→</span></Link>
            </div>
            <div className="visual">
              <span className="eyebrow"><span className="dot"></span> Longevity panel · cohort heatmap</span>
              <h5 style={{margin:"8px 0 18px",fontSize:"18px"}}>214 patients · last 60 days</h5>
              <div style={{display:"grid",gridTemplateColumns:"repeat(24,1fr)",gap:"2px"}}>
                {Array.from({length:384}).map((_,i) => {
                  const palette = ['#EDEAE0','#D6E8DC','#A8D6BF','#6FBFA0','#1F8A7A'];
                  const r = ((i * 11 + 7) % 97) / 97;
                  const c = r < 0.05 ? '#C46A6A' : r < 0.30 ? palette[4] : r < 0.55 ? palette[3] : r < 0.78 ? palette[2] : palette[1];
                  return <span key={i} style={{aspectRatio:"1/1",borderRadius:"2px",background:c,opacity:0.6+(i%5)*0.08}} />;
                })}
              </div>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:"14px",fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".12em",textTransform:"uppercase",color:"var(--muted)"}}>
                <span>Patient</span><span>Recovery score · 60d</span><span>Now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-section" id="performance">
        <div className="wrap-w">
          <div className="g">
            <div>
              <div className="num">02 / Performance · sports teams &amp; gyms</div>
              <h2>For sports &amp; gyms<br/>where every <em>watt counts.</em></h2>
              <p>One coach-side view of the squad. One athlete-side view of themselves. Same numbers — different surfaces, in lockstep, in real time.</p>
              <ul className="uses">
                <li>Team dashboards across training load, HRV, sleep</li>
                <li>Per-athlete training response &amp; readiness</li>
                <li>Custom rules per program (zone 2, VO₂max blocks, taper weeks)</li>
                <li>Integrations with Garmin, Polar, Whoop, Apple Watch</li>
              </ul>
            </div>
            <div className="visual">
              <span className="eyebrow"><span className="dot"></span> Squad readiness · today</span>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px",marginTop:"14px"}}>
                <div className="card-flat" style={{padding:"14px",textAlign:"center",background:"var(--mint-soft)",borderColor:"var(--mint)"}}>
                  <div className="mono" style={{fontSize:"10px",letterSpacing:".12em",color:"var(--teal)",textTransform:"uppercase"}}>Ready</div>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"32px",marginTop:"4px"}}>94</div>
                  <div style={{fontSize:"12px"}}>A. Reyes</div>
                </div>
                <div className="card-flat" style={{padding:"14px",textAlign:"center",background:"var(--mint-soft)",borderColor:"var(--mint)"}}>
                  <div className="mono" style={{fontSize:"10px",letterSpacing:".12em",color:"var(--teal)",textTransform:"uppercase"}}>Ready</div>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"32px",marginTop:"4px"}}>89</div>
                  <div style={{fontSize:"12px"}}>J. Park</div>
                </div>
                <div className="card-flat" style={{padding:"14px",textAlign:"center",background:"#FFF7E0",borderColor:"var(--amber)"}}>
                  <div className="mono" style={{fontSize:"10px",letterSpacing:".12em",color:"#9A7B1A",textTransform:"uppercase"}}>Caution</div>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"32px",marginTop:"4px"}}>62</div>
                  <div style={{fontSize:"12px"}}>M. Diaz</div>
                </div>
                <div className="card-flat" style={{padding:"14px",textAlign:"center",background:"#FBEDED",borderColor:"var(--rose)"}}>
                  <div className="mono" style={{fontSize:"10px",letterSpacing:".12em",color:"#C46A6A",textTransform:"uppercase"}}>Rest</div>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"32px",marginTop:"4px"}}>41</div>
                  <div style={{fontSize:"12px"}}>K. Oduya</div>
                </div>
              </div>
              <div className="mono" style={{fontSize:"11px",color:"var(--muted)",marginTop:"18px",letterSpacing:".12em",textTransform:"uppercase"}}>Recommended session · zone 2 base · 60 min</div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-section" id="insurer">
        <div className="wrap-w">
          <div className="g">
            <div>
              <div className="num">03 / Insurance · risk &amp; rewards</div>
              <h2>For underwriters who<br/>want <em>signal, not surveys.</em></h2>
              <p>Consented, continuous biometric streams that power risk modelling, wellness incentives, and rewards programs. Privacy-first, audit-ready, and HIPAA-compliant from day one.</p>
              <ul className="uses">
                <li>Member-facing consumer app, white-labeled</li>
                <li>Aggregate population dashboards (no PII required)</li>
                <li>Rules-based engagement &amp; rewards triggers</li>
                <li>FHIR &amp; HL7 v2 exports to your existing platform</li>
              </ul>
            </div>
            <div className="visual">
              <span className="eyebrow"><span className="dot"></span> Population cohort · 12,400 members</span>
              <h5 style={{margin:"8px 0 18px",fontSize:"18px"}}>Aggregate sleep efficiency · Q2</h5>
              <svg viewBox="0 0 600 200" width="100%" height="200">
                <defs>
                  <linearGradient id="g3" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#1F8A7A" stopOpacity=".25"/><stop offset="1" stopColor="#1F8A7A" stopOpacity="0"/></linearGradient>
                </defs>
                <g stroke="#E5E1D6" strokeDasharray="2 4">
                  <line x1="0" y1="40" x2="600" y2="40"/><line x1="0" y1="100" x2="600" y2="100"/><line x1="0" y1="160" x2="600" y2="160"/>
                </g>
                <path d="M0,140 L60,128 L120,132 L180,118 L240,108 L300,112 L360,98 L420,90 L480,82 L540,78 L600,70 L600,200 L0,200 Z" fill="url(#g3)"/>
                <path d="M0,140 L60,128 L120,132 L180,118 L240,108 L300,112 L360,98 L420,90 L480,82 L540,78 L600,70" fill="none" stroke="#1F8A7A" strokeWidth="2"/>
              </svg>
              <div style={{display:"flex",gap:"24px",fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".12em",textTransform:"uppercase",color:"var(--muted)",marginTop:"8px"}}>
                <span>↑ 4.2% QoQ</span><span>Engagement 71%</span><span>Claims ↓ 2.8%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-section" id="wellness" style={{background:"var(--ink)",color:"var(--bg)",borderColor:"var(--ink)"}}>
        <div className="wrap-w">
          <div className="g">
            <div>
              <div className="num" style={{color:"#807C6F"}}>04 / Wellness · corporate</div>
              <h2 style={{color:"var(--bg)"}}>For HR teams who want<br/><em style={{color:"var(--mint)"}}>a window, not a watchtower.</em></h2>
              <p style={{color:"#C9C5B6"}}>Privacy-first team views — never individual. Track engagement, recovery trends, and program adoption at the cohort level. Your people own their data; you own the program.</p>
              <ul className="uses" style={{marginTop:"24px"}}>
                <li>Anonymised, k-anonymous team dashboards</li>
                <li>SSO &amp; SCIM provisioning</li>
                <li>Incentive &amp; challenge frameworks</li>
                <li>Stipend &amp; partner gear procurement</li>
              </ul>
            </div>
            <div className="visual" style={{background:"#0F1738",borderColor:"#2A2F4A",color:"var(--bg)"}}>
              <span className="eyebrow" style={{color:"#807C6F"}}><span className="dot"></span> Engineering team · 142 employees</span>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px",marginTop:"18px"}}>
                <div style={{background:"#1B2748",border:"1px solid #2A2F4A",borderRadius:"12px",padding:"16px"}}>
                  <div className="eyebrow" style={{color:"#807C6F"}}>PARTICIPATION</div>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"40px",lineHeight:"1",marginTop:"4px",color:"var(--bg)"}}>68<span style={{color:"var(--muted-2)",fontSize:"20px"}}>%</span></div>
                  <div className="mono" style={{fontSize:"11px",color:"var(--lime)",marginTop:"6px"}}>↑ 12 pts QoQ</div>
                </div>
                <div style={{background:"#1B2748",border:"1px solid #2A2F4A",borderRadius:"12px",padding:"16px"}}>
                  <div className="eyebrow" style={{color:"#807C6F"}}>AVG SLEEP · WEEK</div>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"40px",lineHeight:"1",marginTop:"4px",color:"var(--bg)"}}>7.1<span style={{color:"var(--muted-2)",fontSize:"20px"}}>h</span></div>
                  <div className="mono" style={{fontSize:"11px",color:"var(--mint)",marginTop:"6px"}}>↑ 0.4h</div>
                </div>
              </div>
              <div style={{marginTop:"18px",fontFamily:"var(--font-mono)",fontSize:"11px",color:"#807C6F",letterSpacing:".12em",textTransform:"uppercase"}}>Individual data never shared with employer. Always.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-section" id="research">
        <div className="wrap-w">
          <div className="g">
            <div>
              <div className="num">05 / Research &amp; pharma</div>
              <h2>For protocols, trials,<br/>and <em>post-market</em><br/>follow-up.</h2>
              <p>BiotrackOS gives study teams a continuous, consented data stream from the same wearables and labs participants already trust — with audit trails, withdrawal flows, and FHIR export built in.</p>
              <ul className="uses">
                <li>eConsent with granular, revocable per-source permissions</li>
                <li>Real-world signal alongside reported outcomes (PROMs / ePROs)</li>
                <li>FHIR R4 export to your data warehouse or CRO</li>
                <li>Pseudonymisation &amp; audit trail by default</li>
              </ul>
            </div>
            <div className="visual">
              <span className="eyebrow"><span className="dot"></span> Phase III · sleep adherence · n=412</span>
              <h5 style={{margin:"8px 0 18px",fontSize:"18px"}}>Wearable wear-time vs reported adherence</h5>
              <svg viewBox="0 0 600 200" width="100%" height="200">
                <polyline fill="none" stroke="var(--teal)" strokeWidth="2" points="0,60 60,55 120,52 180,50 240,55 300,60 360,65 420,70 480,72 540,76 600,80"/>
                <polyline fill="none" stroke="var(--ink-2)" strokeWidth="2" strokeDasharray="4 4" points="0,40 60,42 120,38 180,36 240,38 300,40 360,42 420,44 480,46 540,48 600,50"/>
              </svg>
              <div style={{display:"flex",gap:"18px",marginTop:"10px",fontFamily:"var(--font-mono)",fontSize:"10px",letterSpacing:".12em",color:"var(--muted)",textTransform:"uppercase"}}>
                <span><span style={{display:"inline-block",width:"10px",height:"2px",background:"var(--teal)",verticalAlign:"middle",marginRight:"6px"}}></span>Wearable · objective</span>
                <span><span style={{display:"inline-block",width:"10px",height:"2px",background:"var(--ink-2)",verticalAlign:"middle",marginRight:"6px"}}></span>Reported · self</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-section" id="consumer" style={{borderBottom:"none"}}>
        <div className="wrap-w">
          <div className="g">
            <div>
              <div className="num">06 / Consumer · direct</div>
              <h2>For people who want<br/>their body&apos;s data<br/><em>in one quiet place.</em></h2>
              <p>Free to start. Pro and Premium add deeper analytics, partner gear discounts, and direct sharing with a clinic or coach if you have one. No ads. Ever.</p>
              <ul className="uses">
                <li>Free forever — every connected source, full timeline</li>
                <li>Pro — VO₂max coaching, trend analysis, weekly digests</li>
                <li>Premium — annual blood panel integration &amp; concierge</li>
              </ul>
              <Link className="btn btn-primary" style={{marginTop:"24px"}} href="/pricing">See consumer pricing <span className="arrow">→</span></Link>
            </div>
            <div className="visual" style={{display:"flex",justifyContent:"center",alignItems:"center",background:"var(--bg-2)"}}>
              <div className="phone"><div className="phone-notch"></div><div className="phone-screen"><Image src="/img/app-health.png" alt="App" width={260} height={560} style={{width:"100%",height:"auto"}}/></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-section" id="public">
        <div className="wrap-w">
          <div className="g">
            <div>
              <span className="eyebrow"><span className="dot"></span> 07 / Public health &amp; events</span>
              <h2 style={{marginTop:"12px"}}>Population programs<br/>and large-scale events.</h2>
              <p className="lede" style={{marginTop:"18px"}}>From Dubai 30x30 to citywide step challenges and national fitness initiatives — BiotrackOS gives organisers one consented data layer across every wearable in the program, with a privacy boundary built in.</p>
              <ul className="uses">
                <li>Open enrolment across every supported wearable</li>
                <li>Aggregate dashboards for organisers; individual data stays private</li>
                <li>Leaderboards, cohorts, and challenge frameworks out of the box</li>
                <li>Multi-language consumer app, white-labelable for the event</li>
              </ul>
            </div>
            <div className="visual">
              <span className="eyebrow"><span className="dot"></span> City fitness program · 184,200 enrolled</span>
              <h5 style={{margin:"8px 0 18px",fontSize:"18px"}}>Daily active participants · 30 days</h5>
              <svg viewBox="0 0 600 200" width="100%" height="200">
                <polyline fill="none" stroke="var(--teal)" strokeWidth="2" points="0,160 40,150 80,140 120,130 160,120 200,115 240,108 280,98 320,90 360,82 400,72 440,62 480,55 520,48 560,40 600,32"/>
                <polyline fill="rgba(0,209,178,0.08)" stroke="none" points="0,200 0,160 40,150 80,140 120,130 160,120 200,115 240,108 280,98 320,90 360,82 400,72 440,62 480,55 520,48 560,40 600,32 600,200"/>
              </svg>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px",fontFamily:"var(--font-mono)",fontSize:"11px",color:"var(--muted)",letterSpacing:".12em",textTransform:"uppercase"}}>
                <span>Day 1 · 42k</span><span>Day 30 · 184k</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
