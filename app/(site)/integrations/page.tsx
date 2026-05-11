import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Integrations — BiotrackOS" };

export default function IntegrationsPage() {
  return (
    <>
      <style>{`
        .i-hero { padding: 72px 0 48px; border-bottom: 1px solid var(--line); }
        .i-hero h1 em { color: var(--ink-2); font-style: italic; }
        .i-hero .g { display: grid; grid-template-columns: 1.3fr 1fr; gap: 56px; align-items: end; }
        .cat-nav { display: flex; gap: 8px; flex-wrap: wrap; padding: 28px 0; border-bottom: 1px solid var(--line); position: sticky; top: 72px; background: color-mix(in srgb, var(--bg) 92%, transparent); backdrop-filter: blur(12px); z-index: 4; }
        .cat-nav a { padding: 8px 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--surface); font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-2); }
        .cat-nav a:hover { border-color: var(--ink); color: var(--ink); }
        .int-section { padding: 80px 0; border-bottom: 1px solid var(--line); }
        .int-section .head { display: flex; justify-content: space-between; align-items: end; gap: 32px; flex-wrap: wrap; margin-bottom: 32px; }
        .int-section h2 { font-family: var(--font-display); font-weight: 400; font-size: 52px; line-height: 1.02; letter-spacing: -0.01em; margin: 12px 0 0; }
        .int-section .desc { color: var(--muted); max-width: 42ch; font-size: 14px; }
        .feat-banner {
          display: grid; grid-template-columns: 1.2fr 1fr; gap: 0;
          background: var(--ink); color: var(--bg);
          border-radius: 24px; overflow: hidden; position: relative;
          margin-bottom: 24px;
        }
        .feat-banner::before { content:""; position:absolute; inset:0; background: radial-gradient(ellipse at top right, rgba(47,191,163,.16), transparent 60%); }
        .feat-banner > * { position: relative; }
        .feat-banner .body { padding: 40px; display: flex; flex-direction: column; gap: 16px; justify-content: center; }
        .feat-banner h3 { font-family: var(--font-display); font-weight: 400; font-size: 40px; line-height: 1.05; letter-spacing: -0.01em; margin: 0; }
        .feat-banner p { color: #C9C5B6; margin: 0; max-width: 42ch; }
        .feat-banner .stats { display: flex; gap: 32px; margin-top: 4px; }
        .feat-banner .stats .v { font-family: var(--font-display); font-size: 36px; line-height: 1; color: var(--lime); }
        .feat-banner .stats .l { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: #807C6F; margin-top: 6px; }
        .feat-banner .art {
          background: linear-gradient(135deg, #1F2A48, #2A4A6E 60%, #2FBFA3);
          position: relative; overflow: hidden;
          display: grid; place-items: center;
        }
        .feat-banner .art::after {
          content:""; position:absolute; inset:0;
          background:
            repeating-linear-gradient(to right, transparent 0, transparent 15px, rgba(255,255,255,0.06) 15px, rgba(255,255,255,0.06) 16px),
            repeating-linear-gradient(to bottom, transparent 0, transparent 15px, rgba(255,255,255,0.06) 15px, rgba(255,255,255,0.06) 16px);
        }
        .feat-banner .art-mark { font-family: var(--font-display); font-size: 96px; color: rgba(255,255,255,0.95); position: relative; z-index: 1; }
        .int-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .tile {
          background: var(--surface); border: 1px solid var(--line); border-radius: 16px;
          padding: 22px; display: flex; flex-direction: column; gap: 12px;
          min-height: 180px; position: relative;
          transition: border-color .15s ease, transform .15s ease;
        }
        .tile:hover { border-color: var(--ink); transform: translateY(-2px); }
        .tile .logo {
          width: 44px; height: 44px; border-radius: 12px;
          display: grid; place-items: center;
          font-family: var(--font-display); font-size: 20px;
          background: var(--bg-2); color: var(--ink);
        }
        .tile h4 { font-size: 15px; font-weight: 500; margin: 0; }
        .tile p { font-size: 12px; color: var(--muted); margin: 0; }
        .tile .status {
          font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--teal);
          position: absolute; top: 18px; right: 18px;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .tile .status .d { width: 6px; height: 6px; border-radius: 50%; background: var(--teal-bright); animation: livePulse 2.4s ease-in-out infinite; }
        .tile.beta .status { color: #9A7B1A; }
        .tile.beta .status .d { background: #C9A23A; animation: liveBlink 3.2s ease-in-out infinite; }
        .tile.soon .status { color: var(--muted); }
        .tile.soon .status .d { background: var(--muted-2); animation: liveBlink 3.2s ease-in-out infinite; }
        .partner-cta { margin: 0; background: var(--bg-2); border-top: 1px solid var(--line); padding: 96px 0; }
        .partner-cta .panel {
          background: var(--surface); border: 1px solid var(--line); border-radius: 24px;
          padding: 48px; display: grid; grid-template-columns: 1.2fr 1fr; gap: 56px; align-items: center;
        }
        .partner-cta h2 { font-family: var(--font-display); font-weight: 400; font-size: 48px; line-height: 1.05; letter-spacing: -0.01em; margin: 12px 0 16px; }
        .partner-cta p { color: var(--ink-2); margin: 0; }
        .partner-cta .why { display:grid; gap: 14px; margin-top: 24px; }
        .partner-cta .why .row { display: grid; grid-template-columns: 28px 1fr; gap: 12px; font-size: 14px; }
        .partner-cta .why .row .n { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; color: var(--muted); padding-top: 2px; }
        @media (max-width:1100px){ .int-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width:900px) { .i-hero .g, .feat-banner, .partner-cta .panel { grid-template-columns: 1fr; gap: 24px; } }
      `}</style>

      <section className="i-hero">
        <div className="wrap-w">
          <div className="g">
            <div>
              <span className="eyebrow"><span className="dot"></span> Integrations</span>
              <h1 className="h1">One record across<br/>devices, labs, genes,<br/><em>and prescriptions.</em></h1>
            </div>
            <p className="lede">BiotrackOS ingests, deduplicates, and time-aligns data from 6 categories of source — and we add new ones every quarter. If your service isn&apos;t here, <Link href="/marketplace#join">apply to join the marketplace</Link>.</p>
          </div>
          <nav className="cat-nav">
            <a href="#wearables">Wearables &amp; devices</a>
            <a href="#labs">Labs &amp; bloods</a>
            <a href="#genomics">Genomics</a>
            <a href="#epigenetics">Epigenetics</a>
            <a href="#medications">Medications &amp; Rx</a>
            <a href="#ehr">Clinical &amp; EHR</a>
            <Link href="/marketplace" style={{background:"var(--ink)",color:"var(--bg)",borderColor:"var(--ink)"}}>Marketplace →</Link>
          </nav>
        </div>
      </section>

      <section className="int-section" id="wearables">
        <div className="wrap-w">
          <div className="head">
            <div><span className="eyebrow"><span className="dot"></span> Category 01</span><h2>Wearables &amp; devices.</h2></div>
            <p className="desc">Every wearable and consumer device your people already own. Heart rate, HRV, sleep, training load, glucose, weight, blood oxygen — deduplicated across overlapping sources.</p>
          </div>
          <div className="int-grid">
            <div className="tile"><div className="logo"></div><h4>Apple Health</h4><p>HealthKit · live</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile"><div className="logo">♛</div><h4>Whoop</h4><p>Strain, recovery, sleep</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile"><div className="logo">G</div><h4>Garmin Connect</h4><p>Training, fēnix, Forerunner</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile"><div className="logo">○</div><h4>Oura</h4><p>Ring · sleep, HRV, temp</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile"><div className="logo">W</div><h4>Withings</h4><p>Scale, BP, sleep mat</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile"><div className="logo">P</div><h4>Polar</h4><p>Vantage, Pacer Pro, H10</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile"><div className="logo">S</div><h4>Samsung Health</h4><p>Galaxy Watch · Fit</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile"><div className="logo">R</div><h4>Reebok Smart Ring</h4><p>HR, HRV, recovery</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile beta"><div className="logo">D</div><h4>Dexcom</h4><p>CGM · G7</p><span className="status"><span className="d"></span>Beta</span></div>
            <div className="tile beta"><div className="logo">L</div><h4>Levels / Lingo</h4><p>CGM streams</p><span className="status"><span className="d"></span>Beta</span></div>
            <div className="tile"><div className="logo">F</div><h4>Fitbit</h4><p>Charge, Sense, Versa</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile soon"><div className="logo">8</div><h4>Eight Sleep</h4><p>Pod · sleep tracking</p><span className="status"><span className="d"></span>Q3</span></div>
          </div>
        </div>
      </section>

      <section className="int-section" id="labs">
        <div className="wrap-w">
          <div className="head">
            <div><span className="eyebrow"><span className="dot"></span> Category 02</span><h2>Labs &amp; blood panels.</h2></div>
            <p className="desc">Comprehensive blood biomarker panels ingested directly into the person&apos;s record. Annual or quarterly cadence; auto-trended against wearable signals.</p>
          </div>
          <div className="feat-banner">
            <div className="body">
              <span className="eyebrow" style={{color:"#807C6F"}}><span className="dot"></span> Featured · lab partner</span>
              <h3>KP Pharma.<br/>Our blood-panel<br/>launch partner.</h3>
              <p>Order, draw, and result flow lands directly in the person&apos;s BiotrackOS record — no manual upload, no PDFs. Trended automatically against the rest of the record.</p>
              <div style={{marginTop:"8px"}}><Link className="btn btn-accent btn-sm" href="/marketplace">See on marketplace <span className="arrow">→</span></Link></div>
            </div>
            <div className="art"><span className="art-mark">KP Pharma</span></div>
          </div>
          <div className="int-grid">
            <div className="tile"><div className="logo">KP</div><h4>KP Pharma</h4><p>Blood panels · launch partner</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile soon"><div className="logo">+</div><h4>Your lab?</h4><p><Link href="/marketplace#join">Request to join →</Link></p><span className="status"><span className="d"></span>Open</span></div>
          </div>
        </div>
      </section>

      <section className="int-section" id="genomics">
        <div className="wrap-w">
          <div className="head">
            <div><span className="eyebrow"><span className="dot"></span> Category 03</span><h2>Genomics &amp; DNA.</h2></div>
            <p className="desc">Whole-genome and microarray data, securely imported once and referenced throughout the record — pharmacogenomic interactions, risk variants, traits.</p>
          </div>
          <div className="int-grid">
            <div className="tile"><div className="logo">M</div><h4>Muhdo</h4><p>DNA insights · launch partner</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile soon"><div className="logo">+</div><h4>Your service?</h4><p><Link href="/marketplace#join">Request to join →</Link></p><span className="status"><span className="d"></span>Open</span></div>
          </div>
        </div>
      </section>

      <section className="int-section" id="epigenetics">
        <div className="wrap-w">
          <div className="head">
            <div><span className="eyebrow"><span className="dot"></span> Category 04</span><h2>Epigenetic age &amp; methylation.</h2></div>
            <p className="desc">Biological-age tests, methylation panels, and glycan biomarkers — re-tested at intervals, charted alongside the rest of the record so protocols actually have a number to move.</p>
          </div>
          <div className="int-grid">
            <div className="tile"><div className="logo">M</div><h4>Muhdo</h4><p>Epigenetic age · launch partner</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile"><div className="logo">M</div><h4>Muhdo</h4><p>Methylation panel</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile soon"><div className="logo">+</div><h4>Your service?</h4><p><Link href="/marketplace#join">Request to join →</Link></p><span className="status"><span className="d"></span>Open</span></div>
          </div>
        </div>
      </section>

      <section className="int-section" id="medications">
        <div className="wrap-w">
          <div className="head">
            <div><span className="eyebrow"><span className="dot"></span> Category 05</span><h2>Medications &amp; Rx.</h2></div>
            <p className="desc">Prescription, refill, and adherence data from pharmacy partners and e-prescribing networks — charted on the same timeline as biometrics, so changes have context.</p>
          </div>
          <div className="int-grid">
            <div className="tile"><div className="logo">DP</div><h4>DataPharm</h4><p>Prescription data · launch partner</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile soon"><div className="logo">+</div><h4>Your pharmacy?</h4><p><Link href="/marketplace#join">Request to join →</Link></p><span className="status"><span className="d"></span>Open</span></div>
          </div>
        </div>
      </section>

      <section className="int-section" id="ehr">
        <div className="wrap-w">
          <div className="head">
            <div><span className="eyebrow"><span className="dot"></span> Category 06</span><h2>Clinical &amp; EHR.</h2></div>
            <p className="desc">Bidirectional pipelines into the EHRs your team already runs. We close the loop you&apos;ve been holding shut with spreadsheets.</p>
          </div>
          <div className="int-grid">
            <div className="tile"><div className="logo">C</div><h4>CityEHR</h4><p>EHR · launch partner</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile"><div className="logo">F</div><h4>FHIR direct</h4><p>R4 export / webhook</p><span className="status"><span className="d"></span>Live</span></div>
            <div className="tile soon"><div className="logo">+</div><h4>Your EHR?</h4><p><Link href="/marketplace#join">Request to join →</Link></p><span className="status"><span className="d"></span>Open</span></div>
          </div>
        </div>
      </section>

      <section className="partner-cta">
        <div className="wrap-w">
          <div className="panel">
            <div>
              <span className="eyebrow"><span className="dot"></span> Become a partner</span>
              <h2>Run a lab, DNA service,<br/>or pharmacy?<br/><em style={{color:"var(--ink-2)",fontStyle:"italic"}}>Join the marketplace.</em></h2>
              <p>BiotrackOS is open to qualified data partners across labs, genomics, epigenetics, and pharmacy. Apply once, integrate once, reach every clinic on the platform.</p>
              <div className="why">
                <div className="row"><span className="n">01</span><span>Single integration — built and maintained by our engineering team.</span></div>
                <div className="row"><span className="n">02</span><span>Featured placement in the BiotrackOS marketplace, with consent-gated discovery.</span></div>
                <div className="row"><span className="n">03</span><span>Co-marketing across our growing customer network.</span></div>
              </div>
            </div>
            <div>
              <Link className="btn btn-primary btn-lg" href="/marketplace#join">Apply to join <span className="arrow">→</span></Link>
              <div style={{marginTop:"12px"}}><Link className="btn btn-ghost btn-sm" href="/marketplace">Browse the marketplace</Link></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
