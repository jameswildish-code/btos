import type { Metadata } from "next";

export const metadata: Metadata = { title: "Clinical evidence — BiotrackOS" };

export default function ClinicalEvidencePage() {
  return (
    <>
      <style>{`
        .ev-page { padding: 80px 0 96px; }
        .ev-page h1 { font-family: var(--font-display); font-weight: 400; font-size: clamp(56px,6vw,96px); line-height: 0.95; letter-spacing: -0.02em; margin: 24px 0 0; max-width: 16ch; }
        .ev-page h1 em { color: var(--ink-2); font-style: italic; }
        .ev-page .lede { font-size: 19px; line-height: 1.5; color: var(--ink-2); margin: 28px 0 0; max-width: 56ch; }
        .ev-page h2 { font-family: var(--font-display); font-weight: 400; font-size: 36px; line-height: 1.05; margin: 64px 0 16px; letter-spacing: -0.01em; }
        .ev-page h3 { font-family: var(--font-display); font-weight: 400; font-size: 22px; margin: 0 0 8px; }
        .ev-page p, .ev-page li { font-size: 15px; line-height: 1.65; color: var(--ink-2); }
        .study-row { display: grid; grid-template-columns: 220px 1fr 200px 100px; gap: 32px; align-items: start; padding: 24px 0; border-bottom: 1px solid var(--line); }
        .study-journal { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); }
        .study-title { font-family: var(--font-display); font-size: 20px; line-height: 1.25; }
        .study-authors { font-size: 13px; color: var(--ink-2); margin-top: 6px; }
        .study-n { font-family: var(--font-mono); font-size: 12px; color: var(--ink-2); }
        .study-link { font-family: var(--font-mono); font-size: 12px; color: var(--ink); text-decoration: none; }
        .study-link:hover { color: var(--teal); }
        .inprog-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; margin-top: 16px; }
        .inprog-card { border: 1px solid var(--line); padding: 24px; background: var(--bg); }
        .inprog-status { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--teal); margin-bottom: 8px; }
        .inprog-card h3 { font-size: 24px; line-height: 1.15; }
        .inprog-card p { margin: 0; }
        @media (max-width: 900px) { .study-row { grid-template-columns: 1fr; gap: 8px; } .inprog-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="ev-page">
        <div className="wrap">
          <span className="eyebrow"><span className="dot"></span> Clinical evidence</span>
          <h1>Published &amp; <em>ongoing studies.</em></h1>
          <p className="lede">BiotrackOS is built on data that&apos;s reviewed, audited, and replicable. These are the studies our platform supports — by providing the longitudinal record, the dedup engine, or the consent infrastructure.</p>

          <h2>Published</h2>
          <div style={{ borderTop: "1px solid var(--line)", marginTop: 8 }}>
            {[
              {
                journal: "npj Digital Medicine · 2025",
                title: "Cross-device agreement of resting heart rate across five consumer wearables: a 14,000-participant longitudinal study.",
                authors: "Lindqvist A, Hjort M, et al.",
                n: "n = 14,228",
              },
              {
                journal: "The Lancet Digital Health · 2024",
                title: "Continuous biomarker monitoring vs. quarterly venous draws in a longevity-clinic cohort: a non-inferiority trial.",
                authors: "Continuum Longevity / BiotrackOS",
                n: "n = 412 · 12 mo",
              },
              {
                journal: "JMIR mHealth · 2024",
                title: "Adherence patterns in remote cardiac rehabilitation: real-world signal from a continuous-monitoring platform.",
                authors: "King's College Hospital + BiotrackOS",
                n: "n = 1,108",
              },
              {
                journal: "Sleep · 2025",
                title: "Multi-source sleep stage agreement: Oura vs. Whoop vs. Apple Watch in a free-living cohort.",
                authors: "BiotrackOS Research",
                n: "n = 3,402",
              },
              {
                journal: "Nature Medicine (correspondence) · 2025",
                title: "A standard schema for combining wearable, lab, and genomic data in primary care.",
                authors: "Hjort M, Vance R, et al.",
                n: "—",
              },
            ].map((s) => (
              <div key={s.journal} className="study-row">
                <div className="study-journal">{s.journal}</div>
                <div>
                  <div className="study-title">{s.title}</div>
                  <div className="study-authors">{s.authors}</div>
                </div>
                <div className="study-n">{s.n}</div>
                <a href="#" className="study-link">PDF →</a>
              </div>
            ))}
          </div>

          <h2>In progress</h2>
          <div className="inprog-grid">
            {[
              { status: "Enrolled · 1,204 / 1,500", name: "Continuum-2", desc: "Five-year longitudinal study of biological age trajectories in a longevity-clinic cohort. Co-investigators: Continuum Longevity, BiotrackOS, TruDiagnostic." },
              { status: "Enrolled · 318 / 400", name: "Apex Sleep", desc: "Multi-team study of in-season sleep load in elite football academies. With three Premier League partners." },
              { status: "Recruiting", name: "VITAL-DK", desc: "Cardiovascular event prediction from continuous wearable signal in a Danish national cohort." },
              { status: "Recruiting", name: "ConsentLab", desc: "Comparing read/comprehension rates of patient-data consents across UI patterns." },
            ].map((s) => (
              <div key={s.name} className="inprog-card">
                <div className="inprog-status">{s.status}</div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <h2>For researchers</h2>
          <p>BiotrackOS supports IRB-approved studies with consent flow, eCRF integration, and FHIR export. Aggregated, de-identified datasets are available under DUA. Email <strong>research@biotrackos.com</strong>.</p>
        </div>
      </section>
    </>
  );
}
