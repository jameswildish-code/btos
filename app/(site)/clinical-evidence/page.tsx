export const revalidate = 0;
import Link from "next/link";
import type { Metadata } from "next";
import { getClinicalStudies } from "@/lib/sanity";
import ClinicalEvidenceContent from "@/components/ClinicalEvidenceContent";

export const metadata: Metadata = { title: "Clinical evidence — BiotrackOS" };

export default async function ClinicalEvidencePage() {
  const data = await getClinicalStudies();
  const studies = data ?? [];

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
        .ev-empty { color: var(--muted); font-family: var(--font-mono); font-size: 13px; padding: 24px 0; }
        @media (max-width: 900px) { .study-row { grid-template-columns: 1fr; gap: 8px; } .inprog-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="ev-page">
        <div className="wrap">
          <span className="eyebrow"><span className="dot"></span> Research</span>
          <h1>Studies &amp; <em>publications.</em></h1>
          <p className="lede">Research powered by the platform. Studies, publications, and real-world evidence — from our team, researchers and the institutions using BiotrackOS to collect, structure, and analyse health data.</p>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 64 }}>
            <h2 style={{ margin: 0 }}>Published</h2>
            <Link href="/clinical-evidence/all" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-2)", textDecoration: "none" }}>View all →</Link>
          </div>

          <ClinicalEvidenceContent studies={studies} />

          <h2>For researchers</h2>
          <p>Want to collaborate? We partner with researchers and institutions to generate real-world evidence that matters. Get in touch at <strong>research@biotrackos.com</strong>.</p>
        </div>
      </section>
    </>
  );
}
