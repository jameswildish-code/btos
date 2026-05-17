import Link from "next/link";

const Logo = () => (
  <svg viewBox="0 0 360 90" width="156" height="39" aria-label="BiotrackOS" role="img">
    <text x="8" y="64" fontSize={64} fontFamily="'Instrument Serif', serif" fill="var(--bg)">{"b"}<tspan fontStyle="italic" fill="#0FA697">{"i"}<animate attributeName="opacity" values="1;0.5;1" dur="2.4s" repeatCount="indefinite"/></tspan>{"otrack"}</text>
    <text x="262" y="24" fontFamily="'Geist Mono', monospace" fontSize={14} letterSpacing="2.5" fontWeight={500} fill="#807C6F">{"OS"}</text>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "#C9C5B6", padding: "96px 0 48px" }}>
      <style>{`
        .footer-grid { display:grid; grid-template-columns:1.6fr 1fr 1fr 1fr; gap:48px; padding-top:64px; border-top:1px solid #2A2F4A; margin-top:80px; }
        .footer-grid h5 { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:#807C6F; margin:0 0 16px; font-weight:500; }
        .footer-grid ul { list-style:none; padding:0; margin:0; display:grid; gap:10px; font-size:14px; }
        .footer-grid a:hover { color:var(--bg); }
        .footer-bottom { margin-top:64px; padding-top:24px; border-top:1px solid #2A2F4A; display:flex; justify-content:space-between; align-items:center; gap:24px; flex-wrap:wrap; font-family:var(--font-mono); font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#807C6F; }
        .footer-bottom a { color:#807C6F; }
        .footer-bottom a:hover { color:var(--bg); }
        .footer-legal { display:flex; gap:24px; }
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
              Every signal the body generates. One record. Always up to date.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <Link className="btn btn-accent" href="/contact">Book a demo <span className="arrow">→</span></Link>
              <Link className="btn btn-ghost" style={{ borderColor: "#2A2F4A", color: "#C9C5B6" }} href="/product">How it works</Link>
            </div>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <Link href="/" style={{ display: "inline-flex" }}>
              <Logo />
            </Link>
            <p style={{ maxWidth: "32ch", fontSize: 14, color: "#807C6F", marginTop: 16 }}>
              Built for the people behind the data.
            </p>
          </div>

          <div>
            <h5>Product</h5>
            <ul>
              <li><Link href="/product">Product overview</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/features/clinic-dashboard">Professional workspace</Link></li>
              <li><Link href="/app">Personal app</Link></li>
              <li><Link href="/features/protocols">Protocols</Link></li>
              <li><Link href="/integrations">Integrations</Link></li>
              <li><Link href="/marketplace">Marketplace</Link></li>
              <li><Link href="/platforms">API &amp; SDK</Link></li>
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
              <li><Link href="/markets#consumer">Individual · direct</Link></li>
            </ul>
          </div>

          <div style={{ display: "grid", gap: 40 }}>
            <div>
              <h5>Company</h5>
              <ul>
                <li><Link href="/about">About BiotrackOS</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/press">Press</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5>Resources</h5>
              <ul>
                <li><Link href="/blog">Field notes</Link></li>
                <li><Link href="/customers">Customer stories</Link></li>
                <li><Link href="/clinical-evidence">Clinical evidence</Link></li>
                <li><Link href="/trust-security">Trust &amp; security</Link></li>
                <li><Link href="/docs">Developer docs</Link></li>
                <li><Link href="/status">Status</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 BiotrackOS</span>
          <div className="footer-legal">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/data-processing">Data processing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
