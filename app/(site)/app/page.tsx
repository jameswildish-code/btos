import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "BiotrackOS App — Every signal in one place" };

const SOURCES = [
  "Apple Health","WHOOP","Garmin","Oura Ring","Withings","POLAR","Samsung Health","Reebok",
  "KP Pharma · Blood panels","Muhdo · DNA + Epigenetics","DataPharm · Medications",
  "Apple Health","WHOOP","Garmin","Oura Ring","Withings","POLAR","Samsung Health","Reebok",
  "KP Pharma · Blood panels","Muhdo · DNA + Epigenetics","DataPharm · Medications",
];

export default function AppPage() {
  return (
    <>
      <style>{`
        .app-hero { padding:80px 0 64px; position:relative; overflow:hidden; background:linear-gradient(180deg,var(--bg-2) 0%,var(--bg) 60%); border-bottom:1px solid var(--line); }
        .app-hero .g { display:grid; grid-template-columns:1.05fr 1fr; gap:64px; align-items:center; }
        .app-hero h1 { font-family:var(--font-display); font-weight:400; font-size:clamp(56px,7vw,96px); line-height:.98; letter-spacing:-.02em; margin:16px 0; max-width:16ch; text-wrap:balance; }
        .app-hero h1 em { color:var(--teal); font-style:italic; }
        .stores { display:flex; gap:12px; margin-top:28px; flex-wrap:wrap; }
        .store { display:inline-flex; align-items:center; gap:12px; padding:12px 20px; border-radius:14px; background:var(--ink); color:var(--bg); font-size:15px; text-decoration:none; }
        .store small { display:block; font-family:var(--font-mono); font-size:9.5px; letter-spacing:.14em; text-transform:uppercase; color:#807C6F; }
        .store .label { font-weight:500; line-height:1.1; }
        .phones { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .app-phone { background:var(--surface); border:1px solid var(--line); border-radius:32px; padding:12px; box-shadow:0 30px 60px -30px rgba(20,18,12,.25); aspect-ratio:9/19; overflow:hidden; position:relative; }
        .app-phone img { width:100%; height:100%; object-fit:cover; border-radius:20px; }
        .ribbon { background:var(--ink); color:#C9C5B6; padding:16px 0; overflow:hidden; }
        .ribbon .rtrack { display:flex; gap:48px; font-family:var(--font-mono); font-size:12px; letter-spacing:.14em; text-transform:uppercase; animation:scroll 50s linear infinite; width:max-content; }
        .ribbon .rtrack span::before { content:"●"; color:var(--teal-bright); margin-right:12px; font-size:8px; vertical-align:middle; }
        @keyframes scroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .feat { padding:96px 0; border-bottom:1px solid var(--line); }
        .feat .g { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
        .feat.alt .g { direction:rtl; }
        .feat.alt .g > * { direction:ltr; }
        .feat .eyebrow { display:block; margin-bottom:16px; }
        .feat h2 { font-family:var(--font-display); font-weight:400; font-size:clamp(36px,4vw,56px); line-height:1.02; letter-spacing:-.01em; margin:0 0 16px; }
        .feat p { color:var(--ink-2); max-width:44ch; margin:0; }
        .feat-phone { margin:0 auto; display:block; }
        .connect { padding:80px 0; background:var(--bg-2); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
        .chip-wall { display:flex; flex-wrap:wrap; gap:8px; margin-top:28px; }
        .chip-wall .chip { font-size:12px; }
        .app-pricing { padding:80px 0; }
        .app-tier-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:32px; }
        .app-tier { border:1px solid var(--line); border-radius:20px; padding:28px; background:var(--surface); display:flex; flex-direction:column; }
        .app-tier.featured { background:var(--ink); color:var(--bg); border-color:var(--ink); }
        .app-tier h4 { font-family:var(--font-display); font-weight:400; font-size:26px; margin:0 0 8px; }
        .app-tier .price { font-family:var(--font-display); font-size:44px; line-height:1; margin:12px 0 0; }
        .app-tier .price-unit { font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); }
        .app-tier.featured .price-unit { color:#807C6F; }
        .app-tier ul { list-style:none; padding:0; margin:20px 0 0; display:grid; gap:8px; font-size:14px; }
        .app-tier ul li::before { content:"—"; color:var(--teal-bright); margin-right:8px; }
        .clinic-cross { background:var(--ink); color:var(--bg); border-radius:28px; padding:56px; margin:0 0 96px; position:relative; overflow:hidden; display:grid; grid-template-columns:1.4fr 1fr; gap:40px; align-items:center; }
        .clinic-cross::before { content:""; position:absolute; inset:0; background:radial-gradient(ellipse at right,rgba(47,191,163,.15),transparent 60%); pointer-events:none; }
        .clinic-cross > * { position:relative; }
        @media (max-width:900px) { .app-hero .g,.feat .g,.app-tier-grid,.clinic-cross { grid-template-columns:1fr; } .phones { grid-template-columns:1fr 1fr; } }
      `}</style>

      <section className="app-hero">
        <div className="wrap-w">
          <div className="g">
            <div className="reveal reveal-1">
              <span className="eyebrow"><span className="dot"></span> The BiotrackOS app</span>
              <h1>Every signal.<br/><em>One quiet</em><br/>place.</h1>
              <p className="lede" style={{ marginTop: 0, maxWidth: "40ch" }}>Auto-captured from the watches, rings, labs, and scales you already use — then translated into language built for humans.</p>
              <div className="stores">
                <a href="#" className="store">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  <div><small>Download on the</small><div className="label">App Store</div></div>
                </a>
                <a href="#" className="store">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="m3.18 23.76 9.25-9.25-1.87-1.87-7.38 11.12zM20.82.24C20.53.09 20.22 0 19.87 0c-.34 0-.67.09-.96.28L4.68 8.39l3.88 3.88 12.26-12.03zM22.93 10.08l-2.57-1.49-2.81 2.76 2.81 2.77 2.59-1.51c.74-.43.74-1.53 0-1.96l-.02.43zm-19.75 2.67 1.87 1.87L14.3 4.07 10.43.2 3.18 10.67v2.08z"/></svg>
                  <div><small>Get it on</small><div className="label">Google Play</div></div>
                </a>
              </div>
            </div>
            <div className="phones reveal reveal-2">
              <div className="app-phone" style={{ transform: "translateY(0)" }}>
                <div className="phone-notch" style={{ background: "var(--line)" }}></div>
                <Image src="/img/app-health.png" alt="Health overview" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="app-phone" style={{ transform: "translateY(-32px)" }}>
                <div className="phone-notch" style={{ background: "var(--line)" }}></div>
                <Image src="/img/app-vo2.png" alt="VO₂ max detail" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="app-phone" style={{ transform: "translateY(-16px)" }}>
                <div className="phone-notch" style={{ background: "var(--line)" }}></div>
                <Image src="/img/app-journal.png" alt="Journal" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ribbon">
        <div className="rtrack">
          {SOURCES.map((s, i) => <span key={i}>{s}</span>)}
        </div>
      </div>

      {/* Feature sections */}
      {[
        {
          eyebrow: "One record",
          h: "All your data. No duplicates.",
          p: "We fetch from every device you connect, deduplicate overlapping readings, and present a single clean timeline. No more three different step counts from three different apps.",
          phone: "/img/app-health.png",
          alt: "One record",
          reverse: false,
        },
        {
          eyebrow: "Trends that move",
          h: "From noise to signal.",
          p: "Our AI layer reads your data the way a clinician would — looking for patterns across weeks, not just today's numbers. Plain language, not dashboards.",
          phone: "/img/app-vo2.png",
          alt: "Trends",
          reverse: true,
        },
        {
          eyebrow: "Health journal",
          h: "The log your future self will thank you for.",
          p: "Add notes, mood, nutrition, and context alongside your biometrics. When you share data with a care team, they see the full picture.",
          phone: "/img/app-journal.png",
          alt: "Journal",
          reverse: false,
        },
      ].map((f) => (
        <section key={f.eyebrow} className={`feat${f.reverse ? " alt" : ""}`}>
          <div className="wrap-w">
            <div className="g">
              <div>
                <span className="eyebrow feat-eyebrow"><span className="dot"></span> {f.eyebrow}</span>
                <h2>{f.h}</h2>
                <p>{f.p}</p>
              </div>
              <div className="phone feat-phone" style={{ maxWidth: 240, margin: "0 auto" }}>
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <Image src={f.phone} alt={f.alt} width={240} height={500} style={{ width: "100%", height: "auto" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="connect">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Connect your stack</span>
          <h2 className="h2" style={{ marginTop: 16 }}>Works with everything<br/>you already use.</h2>
          <div className="chip-wall">
            {["Apple Health","WHOOP","Garmin","Oura","Withings","POLAR","Samsung Health","Reebok","Dexcom","Eight Sleep","KP Pharma · Bloods","Muhdo · DNA","Muhdo · Epigenetics","DataPharm · Medications"].map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
            <Link className="chip" href="/marketplace" style={{ color: "var(--teal)" }}>+ Browse the marketplace →</Link>
          </div>
        </div>
      </section>

      <section className="app-pricing">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Pricing</span>
          <h2 className="h2" style={{ marginTop: 16 }}>Start free. Upgrade when you&apos;re ready.</h2>
          <div className="app-tier-grid">
            {[
              { name: "Free", price: "€0", unit: "Forever", features: ["7 connected sources", "30-day history", "Daily journal", "Basic trends"], cta: "Download free" },
              { name: "Pro", price: "€9", unit: "per month", features: ["Unlimited sources", "Full history", "AI trend explanations", "Clinic sharing", "Priority sync"], cta: "Start Pro", featured: true },
              { name: "Premium", price: "€19", unit: "per month", features: ["Everything in Pro", "Lab panel integration", "DNA + epigenetics", "Medication tracking", "White-glove onboarding"], cta: "Start Premium" },
            ].map((t) => (
              <div key={t.name} className={`app-tier${t.featured ? " featured" : ""}`}>
                <h4>{t.name}</h4>
                <div className="price">{t.price}</div>
                <div className="price-unit">{t.unit}</div>
                <ul>{t.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <div style={{ marginTop: "auto", paddingTop: 20 }}>
                  <Link className={`btn${t.featured ? " btn-accent" : " btn-ghost"} btn-sm`} href="#" style={{ width: "100%", justifyContent: "center" }}>{t.cta}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap-w">
        <div className="clinic-cross">
          <div>
            <span className="eyebrow" style={{ color: "#807C6F" }}><span className="dot"></span> For clinics &amp; teams</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(28px,3.5vw,44px)", lineHeight: 1.05, margin: "16px 0 16px", color: "var(--bg)" }}>
              Running a clinic, lab, or performance team?
            </h3>
            <p style={{ color: "#C9C5B6", maxWidth: "42ch" }}>
              The platform version gives you a full team workspace — cohort dashboards, protocols, and population-level analytics — built on the same data your members already have in the app.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
            <Link className="btn btn-accent" href="/contact">Book a platform demo <span className="arrow">→</span></Link>
            <Link className="btn btn-ghost" style={{ borderColor: "#2A2F4A", color: "#C9C5B6" }} href="/product">See the platform</Link>
          </div>
        </div>
      </div>
    </>
  );
}
