import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Consumer app — BiotrackOS" };

export default function ConsumerAppFeaturePage() {
  return (
    <>
      <style>{`
        .f-hero { padding:64px 0 24px; }
        .crumbs { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-bottom:24px; }
        .f-grid { display:grid; grid-template-columns:1.2fr 1fr; gap:64px; align-items:center; }
        .sub { display:grid; grid-template-columns:1fr 1.1fr; gap:64px; padding:72px 0; border-top:1px solid var(--line); align-items:center; }
        .sub.flip { grid-template-columns:1.1fr 1fr; direction:rtl; }
        .sub.flip > * { direction:ltr; }
        .sub h2 { font-family:var(--font-display); font-weight:400; font-size:44px; line-height:1.02; letter-spacing:-.01em; margin:16px 0; }
        .sub p { color:var(--ink-2); max-width:44ch; }
        .sub-bullets { list-style:none; padding:0; margin:20px 0 0; display:grid; gap:8px; }
        .sub-bullets li { display:grid; grid-template-columns:14px 1fr; gap:12px; padding:10px 0; border-top:1px dashed var(--line); font-size:14px; }
        .sub-bullets li::before { content:""; width:8px; height:8px; border-radius:50%; background:var(--teal-bright); margin-top:8px; }
        .rel-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .rel-card { border:1px solid var(--line); border-radius:16px; padding:24px; background:var(--surface); display:flex; flex-direction:column; }
        .rel-card .num { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; color:var(--muted); }
        .rel-card h5 { font-family:var(--font-display); font-weight:400; font-size:26px; line-height:1.05; margin:14px 0 8px; }
        .rel-card p { color:var(--muted); font-size:13px; margin:0; }
        @media (max-width:1000px) { .f-grid,.sub,.rel-grid { grid-template-columns:1fr; } .sub.flip { direction:ltr; } }
      `}</style>

      <section className="f-hero">
        <div className="wrap-w">
          <div className="crumbs"><Link href="/product">Product</Link> / Consumer app</div>
          <div className="f-grid">
            <div>
              <span className="eyebrow"><span className="dot"></span> Feature</span>
              <h1 className="h1" style={{ marginTop: 12 }}>The app your people<br/><em>actually open.</em></h1>
              <p className="lede" style={{ marginTop: 24, maxWidth: "44ch" }}>
                One screen for every signal — from the watches, rings, labs, and scales they already use — translated by AI into language built for humans, not charts.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
                <Link className="btn btn-primary btn-lg" href="/app">Get the app <span className="arrow">→</span></Link>
                <Link className="btn btn-ghost btn-lg" href="/product">See all features</Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="phone" style={{ margin: "0 auto" }}>
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <Image src="/img/app-health.png" alt="Health dashboard" width={280} height={580} style={{ width: "100%", height: "auto" }} />
                </div>
              </div>
              <div className="phone" style={{ margin: "0 auto", transform: "translateY(20px)" }}>
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <Image src="/img/app-vo2.png" alt="VO2 max detail" width={280} height={580} style={{ width: "100%", height: "auto" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap-w">
        {[
          {
            n: "01", eyebrow: "One timeline",
            h: "All sources. One scroll.", p: "We fetch from every device and service you connect, resolve duplicates, and present a single clean chronological timeline. No context-switching between apps.",
            bullets: ["Apple Health, Garmin, Whoop, Oura, Withings, Polar, Samsung", "Lab results from KP Pharma", "DNA + epigenetics from Muhdo", "Medication records from DataPharm"],
            flip: false,
          },
          {
            n: "02", eyebrow: "AI insights",
            h: "Plain language. Real signal.", p: "Our AI layer reads your data the way a clinician would — surfacing trends that matter across weeks, not just today's numbers.",
            bullets: ["Trend summaries in plain English", "Flagged changes worth acting on", "Contextual comparisons to your own baseline", "No jargon, no alarm-fatigue"],
            flip: true,
          },
          {
            n: "03", eyebrow: "Consent & sharing",
            h: "Your data, your rules.", p: "Share your record with a clinic, coach, or care team — or keep it entirely private. Consent is granular, revocable in one tap, and never shared without your explicit action.",
            bullets: ["Share specific metrics, not your entire record", "Revoke access at any time, from anywhere", "Expiring share links for temporary access", "Full audit log of who accessed what"],
            flip: false,
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
            <div className="phone" style={{ margin: "0 auto", maxWidth: 240 }}>
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <Image src="/img/app-health.png" alt="App screenshot" width={240} height={500} style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", padding: "80px 0" }}>
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Related capabilities</span>
          <div className="rel-grid" style={{ marginTop: 32 }}>
            {[
              { num: "F.01", h: "Clinic dashboard", p: "The team workspace for cohort health.", href: "/features/clinic-dashboard" },
              { num: "F.03", h: "Protocols", p: "Biomarker-driven recommendations, automated.", href: "/features/protocols" },
              { num: "F.05", h: "Integrations", p: "Wearables, labs, genomics, medications.", href: "/integrations" },
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
