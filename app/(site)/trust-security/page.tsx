import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Trust & Security — BiotrackOS" };

export default function TrustSecurityPage() {
  return (
    <>
      <style>{`
        .ts-hero { background: var(--ink); color: var(--bg); padding: 96px 0 80px; border-bottom: 1px solid var(--ink); }
        .ts-hero .eyebrow .dot, .ts-hero .eyebrow { color: var(--mint); }
        .ts-hero h1 em { color: var(--mint); }
        .ts-hero p { color: #C9C5B6; max-width: 56ch; }
        .ts-badges { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-top: 56px; }
        .ts-badge { padding: 24px; border: 1px solid #2A2F4A; border-radius: 16px; background: #0F1738; }
        .ts-badge .b-mark { width: 44px; height: 44px; border-radius: 10px; background: rgba(47,191,163,0.16); color: var(--mint); display: grid; place-items: center; font-family: var(--font-display); font-size: 20px; }
        .ts-badge h4 { margin: 16px 0 4px; font-family: var(--font-display); font-weight: 400; font-size: 20px; color: var(--bg); }
        .ts-badge p { margin: 0; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #807C6F; }
        .ts-sec { padding: 96px 0; border-bottom: 1px solid var(--line); }
        .ts-sec h2 { font-family: var(--font-display); font-weight: 400; font-size: clamp(36px,4vw,56px); line-height: 1; margin: 16px 0 0; }
        .ts-sec h2 em { color: var(--ink-2); font-style: italic; }
        .controls { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-top: 48px; }
        .ctrl { padding: 24px; background: var(--surface); border: 1px solid var(--line); border-radius: 16px; }
        .ctrl .n { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--teal); }
        .ctrl h4 { margin: 12px 0 8px; font-family: var(--font-display); font-weight: 400; font-size: 22px; line-height: 1.1; }
        .ctrl p { margin: 0; color: var(--muted); font-size: 14px; }
        .regions { display: grid; grid-template-columns: repeat(5,1fr); gap: 12px; margin-top: 40px; }
        .reg { padding: 20px; border: 1px solid var(--line); border-radius: 14px; background: var(--surface); }
        .reg h5 { margin: 0 0 6px; font-family: var(--font-display); font-weight: 400; font-size: 20px; }
        .reg p { margin: 0; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
        .pol { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 32px; }
        .pol a { padding: 18px 20px; background: var(--surface); border: 1px solid var(--line); border-radius: 14px; display: flex; justify-content: space-between; align-items: center; color: var(--ink); text-decoration: none; }
        .pol a:hover { border-color: var(--ink); }
        .pol a span.t { font-weight: 500; }
        .pol a span.m { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
        @media (max-width:900px) { .ts-badges, .controls, .regions, .pol { grid-template-columns: 1fr 1fr; } }
        @media (max-width:600px) { .ts-badges, .controls, .regions, .pol { grid-template-columns: 1fr; } }
      `}</style>

      <section className="ts-hero">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Trust &amp; security</span>
          <h1 className="h1" style={{marginTop:"16px",color:"var(--bg)"}}>Built for the most<br/>sensitive data you<br/><em>handle.</em></h1>
          <p style={{marginTop:"24px"}}>BiotrackOS is built on the assumption that a person&apos;s health record is the most sensitive data they own. Everything below is what we do about that — not as a marketing claim, but as the foundation the platform is built on.</p>
          <div className="ts-badges">
            <div className="ts-badge"><div className="b-mark">H</div><h4>HIPAA</h4><p>BAA available on request</p></div>
            <div className="ts-badge"><div className="b-mark">GD</div><h4>GDPR · UK GDPR</h4><p>Compliant · Global</p></div>
            <div className="ts-badge" style={{opacity:.7}}><div className="b-mark">S2</div><h4>SOC 2 Type II</h4><p>In progress</p></div>
            <div className="ts-badge" style={{opacity:.7}}><div className="b-mark">27</div><h4>ISO 27001</h4><p>In progress</p></div>
          </div>
        </div>
      </section>

      <section className="ts-sec">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Controls</span>
          <h2>How the platform<br/><em>actually defends data.</em></h2>
          <div className="controls">
            <div className="ctrl"><div className="n">01 · Encryption</div><h4>AES-256 at rest, TLS 1.3 in transit.</h4><p>Per-tenant key envelopes managed via hardware security modules with regular rotation. No data leaves an HTTPS boundary, ever.</p></div>
            <div className="ctrl"><div className="n">02 · Access</div><h4>Least-privilege RBAC and SSO.</h4><p>SAML 2.0, OIDC, and SCIM provisioning supported. Internal access is just-in-time, time-boxed, and logged to an immutable audit store.</p></div>
            <div className="ctrl"><div className="n">03 · Tenancy</div><h4>Logical isolation, per-tenant keys.</h4><p>One shared infrastructure, but a query for one tenant can never reach another. Isolation is verified through regular security testing.</p></div>
            <div className="ctrl"><div className="n">04 · Audit</div><h4>Every read is recorded.</h4><p>Every record access — by a user, an integration, or an internal operator — is logged with actor, time, IP, and reason.</p></div>
            <div className="ctrl"><div className="n">05 · Consent</div><h4>Per-source, revocable, atomic.</h4><p>A person can revoke a single integration without affecting the others. Revocation is propagated within 60 seconds.</p></div>
            <div className="ctrl"><div className="n">06 · Resilience</div><h4>High availability, point-in-time recovery.</h4><p>Multi-region database with point-in-time recovery and cross-region backups. Recovery objectives tested regularly.</p></div>
          </div>
        </div>
      </section>

      <section className="ts-sec" style={{background:"var(--bg-2)"}}>
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Data residency</span>
          <h2>Global regions.<br/><em>You pick yours.</em></h2>
          <p className="lede" style={{marginTop:"18px",maxWidth:"60ch"}}>Tenant data, backups, and logs stay in the region you select at provisioning. We do not replicate health data across regions for any reason.</p>
          <div className="regions">
            <div className="reg"><h5>European Union</h5><p>GDPR · EU data residency</p></div>
            <div className="reg"><h5>United Kingdom</h5><p>UK GDPR · ICO registered</p></div>
            <div className="reg"><h5>United States</h5><p>HIPAA · CCPA</p></div>
            <div className="reg"><h5>Middle East</h5><p>UAE PDPL · KSA PDPL</p></div>
            <div className="reg"><h5>Asia Pacific</h5><p>Australian Privacy Act</p></div>
          </div>
        </div>
      </section>

      <section className="ts-sec">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Documents</span>
          <h2>Policies and reports,<br/><em>available on request.</em></h2>
          <div className="pol">
            <Link href="/security-disclosure"><span className="t">Responsible disclosure policy</span><span className="m">Public →</span></Link>
            <Link href="/data-processing"><span className="t">Data Processing Addendum (DPA)</span><span className="m">Public →</span></Link>
            <Link href="/privacy"><span className="t">Privacy policy</span><span className="m">Public →</span></Link>
            <Link href="/data-processing#subprocessors"><span className="t">Subprocessor list</span><span className="m">Public →</span></Link>
            <a href="mailto:security@biotrackos.com"><span className="t">Business continuity &amp; DR plan</span><span className="m">On request →</span></a>
            <a href="mailto:security@biotrackos.com"><span className="t">Security questionnaire</span><span className="m">On request →</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
