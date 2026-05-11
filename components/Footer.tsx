import Link from "next/link";

const Logo = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <path d="M16 3.2 L27.4 9.6 L27.4 22.4 L16 28.8 L4.6 22.4 L4.6 9.6 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M7.5 16 L11.5 16 L13.4 12.2 L15.8 20.4 L18.2 13.6 L20.2 16 L24.5 16" fill="none" stroke="#0FE3D7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "#C9C5B6", padding: "96px 0 48px" }}>
      <style>{`
        .footer-grid { display:grid; grid-template-columns:1.6fr 1fr 1fr 1fr 1fr; gap:48px; padding-top:64px; border-top:1px solid #2A2F4A; margin-top:80px; }
        .footer-grid h5 { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:#807C6F; margin:0 0 16px; font-weight:500; }
        .footer-grid ul { list-style:none; padding:0; margin:0; display:grid; gap:10px; font-size:14px; }
        .footer-grid a:hover { color:var(--bg); }
        .footer-bottom { margin-top:64px; padding-top:24px; border-top:1px solid #2A2F4A; display:flex; justify-content:space-between; gap:24px; flex-wrap:wrap; font-family:var(--font-mono); font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#807C6F; }
        @media (max-width:960px) { .footer-grid { grid-template-columns:1fr 1fr; } }
        @media (max-width:600px) { .footer-grid { grid-template-columns:1fr; } .footer-cta-grid { grid-template-columns:1fr !important; } }
      `}</style>
      <div className="wrap-w">
        <div className="footer-cta-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
          <h2 className="h-display" style={{ color: "var(--bg)" }}>
            The operating system<br/><em>for connected health.</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
            <p style={{ color: "#C9C5B6", maxWidth: "36ch", margin: 0 }}>
              Connect every source. Power every team. Translate it back to the people it serves.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <Link className="btn btn-accent" href="/contact">Book a demo <span className="arrow">→</span></Link>
              <Link className="btn btn-ghost" style={{ borderColor: "#2A2F4A", color: "#C9C5B6" }} href="/pricing">See pricing</Link>
            </div>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <Link className="brand" href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.02em", fontSize: 14, color: "var(--bg)" }}>
              <span style={{ display: "inline-flex" }}><Logo /></span>
              <span>BIOTRACK<span style={{ opacity: 0.45 }}>OS</span></span>
            </Link>
            <p style={{ maxWidth: "32ch", fontSize: 14, color: "#807C6F", marginTop: 16 }}>
              The operating system for connected health — one record across wearables, labs, genomics, epigenetics, and medications.
            </p>
          </div>

          <div>
            <h5>Product</h5>
            <ul>
              <li><Link href="/product">Overview</Link></li>
              <li><Link href="/features/clinic-dashboard">Clinic dashboard</Link></li>
              <li><Link href="/app">Consumer app</Link></li>
              <li><Link href="/features/protocols">Protocols</Link></li>
              <li><Link href="/integrations">Integrations</Link></li>
              <li><Link href="/marketplace">Marketplace</Link></li>
              <li><Link href="/platforms">Platforms · SDK</Link></li>
            </ul>
          </div>

          <div>
            <h5>Markets</h5>
            <ul>
              <li><Link href="/markets#longevity">Clinics &amp; longevity labs</Link></li>
              <li><Link href="/markets#performance">Sports teams &amp; gyms</Link></li>
              <li><Link href="/markets#insurer">Insurance</Link></li>
              <li><Link href="/markets#wellness">Corporate wellness</Link></li>
              <li><Link href="/markets#research">Research &amp; pharma</Link></li>
              <li><Link href="/markets#public">Public health &amp; events</Link></li>
              <li><Link href="/markets#consumer">Consumer · direct</Link></li>
            </ul>
          </div>

          <div>
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/customers">Customers</Link></li>
              <li><Link href="/blog">Field notes</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/press">Press</Link></li>
            </ul>
          </div>

          <div>
            <h5>Resources</h5>
            <ul>
              <li><Link href="/docs">Developer docs</Link></li>
              <li><Link href="/trust-security">Trust &amp; security</Link></li>
              <li><Link href="/clinical-evidence">Clinical evidence</Link></li>
              <li><Link href="/status">Status</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/data-processing">Data processing</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 BiotrackOS, Inc. — HIPAA · SOC 2 Type II · ISO 27001</span>
          <span>System status — Operational</span>
        </div>
      </div>
    </footer>
  );
}
