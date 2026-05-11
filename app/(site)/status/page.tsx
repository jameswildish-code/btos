import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Status — BiotrackOS" };

const systems = [
  { name: "API · core", status: "Operational" },
  { name: "API · FHIR", status: "Operational" },
  { name: "Webhooks", status: "Operational" },
  { name: "Ingestion · wearables", status: "Operational" },
  { name: "Ingestion · labs", status: "Operational" },
  { name: "Ingestion · genomics", status: "Operational" },
  { name: "Auth · SSO/SCIM", status: "Operational" },
  { name: "Web app · team workspace", status: "Operational" },
  { name: "Mobile apps", status: "Operational" },
  { name: "Marketing site", status: "Operational" },
];

const incidents = [
  {
    date: "May 4, 2026",
    status: "Resolved",
    title: "Elevated latency on /v2/observations (EU)",
    desc: "Brief connection-pool exhaustion in the EU region. Resolved within 14 minutes. No data loss.",
  },
  {
    date: "Apr 22, 2026",
    status: "Resolved",
    title: "Whoop ingestion delays",
    desc: "Upstream API maintenance. Backfilled within 2 hours of restoration.",
  },
  {
    date: "Mar 30, 2026",
    status: "Resolved",
    title: "Webhook delivery delays",
    desc: "Queue backlog after a partner rolled out a high-volume event type. Cleared within 45 minutes.",
  },
];

function UptimeBars() {
  const bars = Array.from({ length: 60 }, (_, i) => ({
    height: 10 + (i % 7) * 2,
    opacity: 0.4 + (i % 5) * 0.12,
  }));
  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "flex-end", height: "20px" }}>
      {bars.map((bar, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            width: "7px",
            height: `${bar.height}px`,
            background: "var(--teal)",
            borderRadius: "1px",
            opacity: bar.opacity,
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

export default function StatusPage() {
  return (
    <>
      <style>{`
        .status-pg { padding: 80px 0 96px; }
        .status-pg h1 { font-family: var(--font-display); font-weight: 400; font-size: clamp(56px,6vw,96px); line-height: 0.95; letter-spacing: -0.02em; margin: 24px 0 0; max-width: 16ch; }
        .status-pg h1 em { color: var(--ink-2); font-style: italic; }
        .status-pg h2 { font-family: var(--font-display); font-weight: 400; font-size: 36px; line-height: 1.05; margin: 64px 0 16px; letter-spacing: -0.01em; }
        .status-pg h3 { font-family: var(--font-display); font-weight: 400; font-size: 22px; margin: 0 0 8px; }
        .status-pg p, .status-pg li { font-size: 15px; line-height: 1.65; color: var(--ink-2); }
        .meta-row { display:flex; gap: 32px; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--line); font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); flex-wrap: wrap; }
        .system-row { display:grid; grid-template-columns:1.3fr 1fr 110px; gap:32px; align-items:center; padding:18px 0; border-bottom:1px solid var(--line); }
        .system-name { font-family:var(--font-display); font-size:18px; }
        .system-status-ok { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--teal); text-align:right; }
        .incident-row { display:grid; grid-template-columns:140px 120px 1fr; gap:32px; align-items:start; padding:24px 0; border-bottom:1px solid var(--line); }
        .incident-date { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); }
        .incident-resolved { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--teal); }
        .incident-title { font-family:var(--font-display); font-size:20px; margin-bottom:6px; }
        .incident-desc { color:var(--ink-2); font-size:14px; }
        @media (max-width:700px) { .system-row { grid-template-columns: 1fr 90px; } .system-row > :nth-child(2) { display:none; } .incident-row { grid-template-columns: 1fr; gap: 8px; } }
      `}</style>

      <section className="status-pg">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Status</span>
          <h1 className="h1">All systems <em>operational.</em></h1>
          <div className="meta-row">
            <span>Updated 14:08 CET</span>
            <span>Uptime 99.982% / 90d</span>
            <span>0 active incidents</span>
          </div>

          <h2>Systems</h2>
          <div style={{ borderTop: "1px solid var(--line)", marginTop: "8px" }}>
            {systems.map((sys) => (
              <div className="system-row" key={sys.name}>
                <div className="system-name">{sys.name}</div>
                <UptimeBars />
                <div className="system-status-ok">{sys.status}</div>
              </div>
            ))}
          </div>

          <h2>Recent incidents</h2>
          <div style={{ borderTop: "1px solid var(--line)", marginTop: "8px" }}>
            {incidents.map((inc) => (
              <div className="incident-row" key={inc.title}>
                <div className="incident-date">{inc.date}</div>
                <div className="incident-resolved">{inc.status}</div>
                <div>
                  <div className="incident-title">{inc.title}</div>
                  <div className="incident-desc">{inc.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h2>Subscribe</h2>
          <p>Get email or webhook notifications for incidents in the systems you depend on. <Link href="/contact">Set up notifications →</Link></p>
        </div>
      </section>
    </>
  );
}
