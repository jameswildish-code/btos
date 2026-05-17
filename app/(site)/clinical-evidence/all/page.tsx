export const revalidate = 0;
import Link from "next/link";
import type { Metadata } from "next";
import { getClinicalStudies } from "@/lib/sanity";
import ClinicalEvidenceContent, { type Study } from "@/components/ClinicalEvidenceContent";

export const metadata: Metadata = { title: "All studies — BiotrackOS" };

export default async function ClinicalEvidenceAllPage() {
  const data = await getClinicalStudies();
  const studies: Study[] = data ?? [];
  const publishedCount = studies.filter((s) => s.phase === "published").length;
  const inProgressCount = studies.filter((s) => s.phase === "in_progress").length;

  return (
    <>
      <style>{`
        .ev-page { padding: 80px 0 96px; }
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
          <div style={{ marginBottom: 32 }}>
            <Link href="/clinical-evidence" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none" }}>← Research</Link>
          </div>
          <span className="eyebrow"><span className="dot"></span> All studies</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(56px,6vw,96px)", lineHeight: 0.95, letterSpacing: "-0.02em", margin: "24px 0 0", maxWidth: "16ch" }}>
            {publishedCount} published.<br/><em style={{ color: "var(--ink-2)", fontStyle: "italic" }}>{inProgressCount} in progress.</em>
          </h1>

          <h2 style={{ marginTop: 64 }}>Published</h2>
          <ClinicalEvidenceContent studies={studies} />

          <h2>For researchers</h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink-2)" }}>Want to collaborate? We partner with researchers and institutions to generate real-world evidence that matters. Get in touch at <strong>research@biotrackos.com</strong>.</p>
        </div>
      </section>
    </>
  );
}
