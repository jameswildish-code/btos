"use client";
import Link from "next/link";
import { useState } from "react";

const PAGE_SIZE = 6;

export type Study = {
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

function PublishedSection({ studies, showViewAll }: { studies: Study[]; showViewAll?: boolean }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = studies.slice(0, visible);
  const hasMore = visible < studies.length;

  if (studies.length === 0) {
    return <p className="ev-empty">No published studies yet — add them in Sanity Studio.</p>;
  }

  return (
    <>
      <div style={{ borderTop: "1px solid var(--line)", marginTop: 8 }}>
        {shown.map((s) => (
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
      {hasMore && (
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", background: "none", border: "1px solid var(--line)", borderRadius: 999, padding: "12px 28px", cursor: "pointer", color: "var(--ink-2)" }}
          >
            Load more
          </button>
        </div>
      )}
      {showViewAll && (
        <div style={{ marginTop: 24 }}>
          <Link href="/clinical-evidence/all" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-2)", textDecoration: "none" }}>View all studies →</Link>
        </div>
      )}
    </>
  );
}

function InProgressSection({ studies }: { studies: Study[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = studies.slice(0, visible);
  const hasMore = visible < studies.length;

  if (studies.length === 0) {
    return <p className="ev-empty">No in-progress studies yet — add them in Sanity Studio.</p>;
  }

  return (
    <>
      <div className="inprog-grid">
        {shown.map((s) => (
          <div key={s._id} className="inprog-card">
            {s.studyStatus && <div className="inprog-status">{s.studyStatus}</div>}
            <h3>{s.title}</h3>
            {s.description && <p>{s.description}</p>}
          </div>
        ))}
      </div>
      {hasMore && (
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", background: "none", border: "1px solid var(--line)", borderRadius: 999, padding: "12px 28px", cursor: "pointer", color: "var(--ink-2)" }}
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}

export default function ClinicalEvidenceContent({ studies, showViewAll }: { studies: Study[]; showViewAll?: boolean }) {
  const published = studies.filter((s) => s.phase === "published");
  const inProgress = studies.filter((s) => s.phase === "in_progress");

  return (
    <>
      <PublishedSection studies={published} showViewAll={showViewAll} />
      <h2>In progress</h2>
      <InProgressSection studies={inProgress} />
    </>
  );
}
