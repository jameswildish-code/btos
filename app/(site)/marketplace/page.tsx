"use client";
import Link from "next/link";
import { useState } from "react";

const PARTNERS = [
  { name: "Apple Health", cat: "Wearables & devices", status: "Live", desc: "Activity, heart rate, sleep, ECG and 70+ Health Kit metrics.", initial: "A" },
  { name: "WHOOP",        cat: "Wearables & devices", status: "Live", desc: "HRV, strain, recovery, and sleep from WHOOP 4.0 and 5.0.",  initial: "W" },
  { name: "Garmin",       cat: "Wearables & devices", status: "Live", desc: "Activity, VO₂ max, training load, and GPS-based sport modes.", initial: "G" },
  { name: "Oura",         cat: "Wearables & devices", status: "Live", desc: "Readiness, sleep stages, HRV, and temperature deviation.", initial: "O" },
  { name: "Withings",     cat: "Wearables & devices", status: "Live", desc: "Weight, body composition, blood pressure, and SpO₂.", initial: "W" },
  { name: "Samsung Health",cat: "Wearables & devices",status: "Live", desc: "Galaxy Watch activity, sleep, and heart metrics.", initial: "S" },
  { name: "KP Pharma",    cat: "Labs & blood panels", status: "Live", desc: "Full blood panel, hormones, metabolic markers. UK partner.", initial: "K" },
  { name: "Muhdo",        cat: "Genomics & DNA",      status: "Live", desc: "Whole genome sequencing and SNP-based health insights.", initial: "M" },
  { name: "Muhdo",        cat: "Epigenetics",         status: "Live", desc: "Biological age, methylation, and epigenetic health markers.", initial: "M" },
  { name: "DataPharm",    cat: "Medications & Rx",    status: "Live", desc: "Prescription history, adherence, and supplement tracking.", initial: "D" },
  { name: "CityEHR",      cat: "Clinical / EHR",      status: "Live", desc: "NHS-compatible EHR integration. FHIR R4 native.", initial: "C" },
  { name: "Your service?", cat: "Labs & blood panels", status: "Request", desc: "Lab or blood panel provider? Apply to join the marketplace.", initial: "+" },
];

const ADDONS = [
  { name: "Chat & messaging", markets: ["Clinical","Performance","Wellness"], tier: "Team", price: "€49/mo", desc: "In-app secure messaging between care team and members." },
  { name: "Cardiovascular risk score", markets: ["Clinical","Insurance"], tier: "Team", price: "€79/mo", desc: "Validated CV risk calculation from continuous biometric streams." },
  { name: "Metabolic risk calculator", markets: ["Clinical","Research"], tier: "Team", price: "€79/mo", desc: "Metabolic syndrome risk scoring, updated in real time." },
  { name: "Scheduling module", markets: ["Clinical","Performance"], tier: "Starter", price: "€29/mo", desc: "Book appointments and check-ins directly from member records." },
  { name: "White-label member app", markets: ["Clinical","Insurance","Wellness"], tier: "Enterprise", price: "Custom", desc: "Your branding, your domain — powered by BiotrackOS." },
  { name: "Insurance claims module", markets: ["Insurance"], tier: "Enterprise", price: "Custom", desc: "Route wearable-backed wellness data into claims and underwriting." },
  { name: "Cohort export & reporting", markets: ["Research","Clinical"], tier: "Team", price: "€49/mo", desc: "Structured FHIR and CSV exports with configurable field sets." },
  { name: "eConsent & trial enrolment", markets: ["Research"], tier: "Team", price: "€79/mo", desc: "Regulatory-grade electronic consent flows for clinical studies." },
];

const PROGRAMMES = [
  { name: "12-week metabolic reset", author: "Dr. Isabel Ferreira", specialty: "Metabolic & nutrition", duration: "12 weeks", price: "€299" },
  { name: "Marathon training biometrics", author: "James Rønne, MSc", specialty: "Sports performance", duration: "16 weeks", price: "€199" },
  { name: "Post-op cardiac rehab", author: "Dr. Nils Bjørnsson", specialty: "Cardiology", duration: "8 weeks", price: "€249" },
  { name: "Longevity optimization protocol", author: "Dr. Sofia Holm", specialty: "Longevity medicine", duration: "12 weeks", price: "€399" },
  { name: "Executive wellness programme", author: "Eva Kaur, NMC", specialty: "Occupational health", duration: "8 weeks", price: "€349" },
  { name: "Perimenopause hormone support", author: "Dr. Aisha Okonkwo", specialty: "Women's health", duration: "12 weeks", price: "€299" },
];

const statusDot = (s: string) => ({
  "Live": "var(--teal-bright)",
  "Beta": "var(--amber)",
  "Request": "var(--muted)",
}[s] ?? "var(--muted)");

export default function MarketplacePage() {
  const [tab, setTab] = useState<"partners"|"addons"|"programmes">("partners");
  const [filter, setFilter] = useState("All");

  const partnerCats = ["All", "Wearables & devices", "Labs & blood panels", "Genomics & DNA", "Epigenetics", "Medications & Rx", "Clinical / EHR"];
  const filteredPartners = filter === "All" ? PARTNERS : PARTNERS.filter(p => p.cat === filter);

  return (
    <>
      <style>{`
        .m-hero { padding:72px 0 56px; border-bottom:1px solid var(--line); }
        .m-hero .g { display:grid; grid-template-columns:1.3fr 1fr; gap:56px; align-items:end; }
        .stats-strip { display:grid; grid-template-columns:repeat(4,1fr); gap:32px; margin-top:56px; padding-top:28px; border-top:1px solid var(--line); }
        .stats-strip .v { font-family:var(--font-display); font-size:48px; line-height:1; }
        .stats-strip .l { font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); margin-top:8px; }
        .mp-tabs-bar { padding:48px 0 0; }
        .tabs { display:inline-flex; padding:6px; background:var(--surface); border:1px solid var(--line); border-radius:999px; gap:4px; }
        .tabs button { padding:12px 22px; border-radius:999px; border:0; background:transparent; font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--ink-2); cursor:pointer; }
        .tabs button.on { background:var(--ink); color:var(--bg); }
        .tab-lede { margin:16px 0 32px; max-width:60ch; font-size:15px; color:var(--ink-2); }
        .filters { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px; }
        .filters button { padding:8px 14px; border-radius:999px; border:1px solid var(--line); background:var(--surface); font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--ink-2); cursor:pointer; }
        .filters button.on { background:var(--ink); color:var(--bg); border-color:var(--ink); }
        .partners-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:48px; }
        .pcard { background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:24px; display:flex; flex-direction:column; gap:14px; min-height:240px; text-decoration:none; color:inherit; transition:border-color .15s, transform .15s; }
        .pcard:hover { border-color:var(--ink); transform:translateY(-2px); }
        .pcard .phead { display:flex; gap:14px; align-items:center; }
        .pcard .plogo { width:56px; height:56px; border-radius:14px; background:var(--bg-2); display:grid; place-items:center; font-family:var(--font-display); font-size:24px; color:var(--ink); flex-shrink:0; }
        .pcard .pname { font-size:17px; font-weight:500; margin:0; line-height:1.2; }
        .pcard .pcat { font-family:var(--font-mono); font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin:4px 0 0; }
        .pcard .pdesc { margin:0; font-size:13px; color:var(--ink-2); line-height:1.5; }
        .pcard .pfoot { display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:12px; border-top:1px solid var(--line); }
        .status-dot { width:6px; height:6px; border-radius:50%; display:inline-block; margin-right:6px; vertical-align:middle; }
        .addons-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:48px; }
        .addon-card { background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:24px; }
        .addon-card .atags { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px; }
        .addon-card .atag { font-family:var(--font-mono); font-size:10px; letter-spacing:.1em; text-transform:uppercase; padding:3px 8px; border-radius:999px; background:var(--bg-2); border:1px solid var(--line); color:var(--muted); }
        .addon-card h4 { font-size:16px; font-weight:600; margin:0 0 6px; }
        .addon-card p { font-size:13px; color:var(--ink-2); margin:0 0 16px; }
        .addon-price { font-family:var(--font-display); font-size:22px; }
        .prog-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:48px; }
        .prog-card { background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:24px; display:flex; flex-direction:column; gap:12px; }
        .prog-card .pspec { font-family:var(--font-mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--teal); margin-bottom:4px; }
        .prog-card h4 { font-size:16px; font-weight:600; margin:0; }
        .prog-card .auth { font-family:var(--font-mono); font-size:11px; letter-spacing:.1em; color:var(--muted); }
        .prog-card .pfoot { margin-top:auto; display:flex; justify-content:space-between; padding-top:12px; border-top:1px solid var(--line); font-family:var(--font-mono); font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); }
        .submit-strip { padding:40px; border:1px dashed var(--line); border-radius:20px; display:grid; grid-template-columns:1fr auto; gap:24px; align-items:center; margin-bottom:48px; }
        .submit-strip h4 { font-family:var(--font-display); font-weight:400; font-size:28px; margin:0; }
        .submit-strip p { margin:4px 0 0; color:var(--ink-2); font-size:14px; }
        @media (max-width:1000px) { .m-hero .g,.stats-strip,.partners-grid,.addons-grid,.prog-grid { grid-template-columns:1fr; gap:24px; } .submit-strip { grid-template-columns:1fr; } }
      `}</style>

      <section className="m-hero">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Marketplace</span>
          <div className="g">
            <h1 className="h1">Partners, add-ons,<br/><em>and programmes.</em></h1>
            <p className="lede">The commerce layer of BiotrackOS. Connect a data partner, switch on a feature, or roll out a clinician-authored programme — all in one place.</p>
          </div>
          <div className="stats-strip">
            {[
              { v: "3",  l: "Marketplace tiers" },
              { v: "21", l: "Live this quarter" },
              { v: "8",  l: "Add-ons available" },
              { v: "6",  l: "Clinician programmes" },
            ].map(s => (
              <div key={s.l}><div className="v">{s.v}</div><div className="l">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 96px" }}>
        <div className="wrap-w">
          <div className="mp-tabs-bar">
            <div className="tabs">
              {[["partners","Partners"], ["addons","Add-ons"], ["programmes","Programmes"]].map(([id, label]) => (
                <button key={id} className={tab === id ? "on" : ""} onClick={() => setTab(id as typeof tab)}>{label}</button>
              ))}
            </div>
          </div>

          {tab === "partners" && (
            <>
              <p className="tab-lede">Data partners — the sources BiotrackOS connects and normalises for your team and your members.</p>
              <div className="filters">
                {partnerCats.map(c => (
                  <button key={c} className={filter === c ? "on" : ""} onClick={() => setFilter(c)}>{c}</button>
                ))}
              </div>
              <div className="partners-grid">
                {filteredPartners.map((p, i) => (
                  <div key={i} className="pcard">
                    <div className="phead">
                      <div className="plogo">{p.initial}</div>
                      <div>
                        <div className="pname">{p.name}</div>
                        <div className="pcat">{p.cat}</div>
                      </div>
                    </div>
                    <p className="pdesc">{p.desc}</p>
                    <div className="pfoot">
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>
                        <span className="status-dot" style={{ background: statusDot(p.status) }}></span>
                        {p.status}
                      </span>
                      {p.status === "Request" ? (
                        <Link className="btn btn-accent btn-sm" href="/contact">Request →</Link>
                      ) : (
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>View →</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="submit-strip">
                <div>
                  <h4>Become a data partner.</h4>
                  <p>Lab, genomics, epigenetics, or medication provider? Apply to join the marketplace.</p>
                </div>
                <Link className="btn btn-primary" href="/contact">Apply to join <span className="arrow">→</span></Link>
              </div>
            </>
          )}

          {tab === "addons" && (
            <>
              <p className="tab-lede">First-party features you can add to any plan. Tagged by market — filter to see what&apos;s relevant for your team.</p>
              <div className="addons-grid">
                {ADDONS.map(a => (
                  <div key={a.name} className="addon-card">
                    <div className="atags">
                      {a.markets.map(m => <span key={m} className="atag">{m}</span>)}
                      <span className="atag" style={{ borderColor: "var(--teal)", color: "var(--teal)" }}>{a.tier}+</span>
                    </div>
                    <h4>{a.name}</h4>
                    <p>{a.desc}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span className="addon-price">{a.price}</span>
                      <Link className="btn btn-ghost btn-sm" href="/contact">Add →</Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="submit-strip">
                <div>
                  <h4>Have an add-on idea?</h4>
                  <p>Partner with us to build market-specific modules for the BiotrackOS ecosystem.</p>
                </div>
                <Link className="btn btn-primary" href="/contact">Pitch an add-on <span className="arrow">→</span></Link>
              </div>
            </>
          )}

          {tab === "programmes" && (
            <>
              <p className="tab-lede">Clinician-authored care programmes — defined protocols, enrolled members, and a 70/30 revenue share with the programme author.</p>
              <div className="prog-grid">
                {PROGRAMMES.map(p => (
                  <div key={p.name} className="prog-card">
                    <div>
                      <div className="pspec">{p.specialty}</div>
                      <h4>{p.name}</h4>
                      <div className="auth">{p.author}</div>
                    </div>
                    <div className="pfoot">
                      <span>{p.duration}</span>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--ink)" }}>{p.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="submit-strip">
                <div>
                  <h4>Submit a programme.</h4>
                  <p>Clinicians earn 70% of programme revenue. Submit your protocol for review.</p>
                </div>
                <Link className="btn btn-primary" href="/contact">Submit a programme <span className="arrow">→</span></Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
