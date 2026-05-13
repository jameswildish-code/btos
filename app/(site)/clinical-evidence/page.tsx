export const revalidate = 0;
import type { Metadata } from "next";
import { getClinicalStudies } from "@/lib/sanity";

export const metadata: Metadata = { title: "Clinical evidence — BiotrackOS" };

type Study = {
  _id: string;
  phase: "published" | "in_progress";
  title: string;
  journal?: string;
  authors?: string;
  sampleSize?: string;
  pdfUrl?: string;
  studyStatus?: string;
  description?: string;
};

export default async function ClinicalEvidencePage() {
  const data = await getClinicalStudies();
  const studies: Study[] = data ?? [];

  const published = studies.filter((s) => s.phase === "published");
  const inProgress = studies.filter((s) => s.phase === "in_progress");

  return (
    <>
      <style>{`
        .ev-page { padding: 80px 0 96px; }
        .ev-page h1 { font-family: var(--font-display); font-weight: 400; font-size: clamp(56px,6vw,96px); line-height: 0.95; letter-spacing: -0.02em; margin: 24px 0 0; max-width: 16ch; }
        .ev-page h1 em { color: var(--ink-2); font-style: italic; }
        .ev-page .lede { font-size: 19px; line-height: 1.5; color: var(--ink-2); margin: 28px 0 0; max-width: 56ch; }
        .ev-page h2 { font-family: var(--font-display); font-weight: 400; font-size: 36px; line-height: 1.05; margin: 64px 0 16px; letter-spacing: -0.01em; }
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
        .inprog-card h3 { font-family: var(--font-display); font-weight: 400; font-size: 24px; line-height: 1.15; margin: 0 0 8px; }
        .inprog-card p { margin: 0; }
        .ev-empty { padding: 40px 0; color: var(--muted); font-family: var(--font-mono); font-size: 13px; }
        @media (max-width: 900px) { .study-row { grid-template-columns: 1fr; gap: 8px; } .inprog-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="ev-page">
        <div className="wrap">
          <span className="eyebrow"><span className="dot"></span> Clinical evidence</span>
          <h1>Published &amp; <em>ongoing studies.</em></h1>
          <p className="lede">BiotrackOS is built on data that&apos;s reviewed, audited, and replicable. These are the studies our platform supports — by providing the longitudinal record, the dedup engine, or the consent infrastructure.</p>

          <h2>Published</h2>
          {published.length === 0 ? (
            <p className="ev-empty">No published studies yet — add them in Sanity Studio.</p>
          ) : (
            <div style={{ borderTop: "1px solid var(--line)", marginTop: 8 }}>
              {published.map((s) => (
                <div key={s._id} className="study-row">
                  <div className="study-journal">{s.journal}</div>
                  <div>
                    <div className="study-title">{s.title}</div>
                    {s.authors && <div className="study-authors">{s.authors}</div>}
                  </div>
                  <div className="study-n">{s.sampleSize}</div>
                  {s.pdfUrl
                    ? <a href={s.pdfUrl} target="_blank" rel="noopener noreferrer" className="study-link">PDF →</a>
                    : <span className="study-link" style={{ color: "var(--muted)" }}>—</span>
                  }
                </div>
              ))}
            </div>
          )}

          <h2>In progress</h2>
          {inProgress.length === 0 ? (
            <p className="ev-empty">No in-progress studies yet — add them in Sanity Studio.</p>
          ) : (
            <div className="inprog-grid">
              {inProgress.map((s) => (
                <div key={s._id} className="inprog-card">
                  {s.studyStatus && <div className="inprog-status">{s.studyStatus}</div>}
                  <h3>{s.title}</h3>
                  {s.description && <p>{s.description}</p>}
                </div>
              ))}
            </div>
          )}

          <h2>For researchers</h2>
          <p>BiotrackOS supports IRB-approved studies with consent flow, eCRF integration, and FHIR export. Aggregated, de-identified datasets are available under DUA. Email <strong>research@biotrackos.com</strong>.</p>
        </div>
      </section>
    </>
  );
}
