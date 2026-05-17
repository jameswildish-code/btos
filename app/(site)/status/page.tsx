import type { Metadata } from "next";

export const metadata: Metadata = { title: "Status — BiotrackOS" };

export default function StatusPage() {
  return (
    <>
      <style>{`
        .status-pg { padding: 96px 0; min-height: 60vh; display: flex; align-items: center; }
        .status-inner { max-width: 56ch; }
        .status-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--teal); display: inline-block; margin-right: 10px; animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: .4; } }
      `}</style>

      <section className="status-pg">
        <div className="wrap-w">
          <div className="status-inner">
            <span className="eyebrow"><span className="dot"></span> Status</span>
            <h1 className="h1" style={{ marginTop: 16 }}>Live status <em>is on its way.</em></h1>
            <p className="lede" style={{ marginTop: 24 }}>
              We&apos;re moving to a dedicated status page at <strong>status.biotrackos.com</strong> — with real-time uptime, incident history, and notifications for the systems you depend on.
            </p>
            <p style={{ marginTop: 16, fontSize: 15, color: "var(--muted)", lineHeight: 1.6 }}>
              In the meantime, for any service issues or questions email <a href="mailto:support@biotrackos.com" style={{ color: "var(--teal)" }}>support@biotrackos.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
