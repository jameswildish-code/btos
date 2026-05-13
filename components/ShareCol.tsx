"use client";
import { useState } from "react";

export default function ShareCol({ reportUrl }: { reportUrl?: string }) {
  const [copied, setCopied] = useState(false);

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}`;
  const xUrl = `https://x.com/intent/tweet?url=${encodeURIComponent(pageUrl)}`;

  return (
    <div style={{ position: "sticky", top: 96 }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Share</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <button onClick={copyLink} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: copied ? "var(--teal)" : "var(--ink-2)" }}>
          {copied ? "Copied!" : "Copy Link"}
        </button>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-2)", textDecoration: "none" }}>
          LinkedIn ↗
        </a>
        <a href={xUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-2)", textDecoration: "none" }}>
          X ↗
        </a>
      </div>

      {reportUrl && (
        <>
          <div style={{ margin: "24px 0 12px", borderTop: "1px solid var(--line)", paddingTop: 24, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted)" }}>Report</div>
          <a href={reportUrl} target="_blank" rel="noopener noreferrer" download style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-2)", textDecoration: "none" }}>
            Download PDF ↓
          </a>
        </>
      )}
    </div>
  );
}
