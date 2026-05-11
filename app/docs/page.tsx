import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Developer docs — BiotrackOS" };

export default function DocsPage() {
  return (
    <>
      <style>{`
        .docs-pg { padding: 80px 0 96px; }
        .docs-pg h1 { font-family: var(--font-display); font-weight: 400; font-size: clamp(56px,6vw,96px); line-height: 0.95; letter-spacing: -0.02em; margin: 24px 0 0; max-width: 16ch; }
        .docs-pg h1 em { color: var(--ink-2); font-style: italic; }
        .docs-pg .lede { font-size: 19px; line-height: 1.5; color: var(--ink-2); margin: 28px 0 0; max-width: 56ch; }
        .docs-pg h2 { font-family: var(--font-display); font-weight: 400; font-size: 36px; line-height: 1.05; margin: 64px 0 16px; letter-spacing: -0.01em; }
        .docs-pg h3 { font-family: var(--font-display); font-weight: 400; font-size: 22px; margin: 0 0 8px; }
        .docs-pg p, .docs-pg li { font-size: 15px; line-height: 1.65; color: var(--ink-2); }
        .docs-pg .meta-row { display:flex; gap: 32px; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--line); font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); flex-wrap: wrap; }
        .docs-quickstart-grid { display:grid; grid-template-columns:1.4fr 1fr; gap:48px; margin-top:48px; align-items:start; }
        .docs-sandbox { border:1px solid var(--line); padding:24px; background:var(--bg); }
        .docs-ref-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:0; border-top:1px solid var(--line); }
        .docs-ref-item { display:block; padding:24px; border-right:1px solid var(--line); border-bottom:1px solid var(--line); text-decoration:none; color:inherit; background:var(--bg); }
        .docs-ref-item:hover { background: var(--bg-2); }
        .docs-ref-item .name { font-family:var(--font-display); font-size:18px; margin-bottom:8px; }
        .docs-ref-item .desc { font-size:13px; color:var(--ink-2); }
        @media (max-width:900px) { .docs-quickstart-grid { grid-template-columns: 1fr; } .docs-ref-grid { grid-template-columns: repeat(2,1fr); } }
      `}</style>

      <section className="docs-pg">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Developer docs</span>
          <h1 className="h1">Build on the <em>connected record.</em></h1>
          <p className="lede">REST + GraphQL + FHIR + webhooks. OAuth 2.1 + SCIM for SSO. Sandbox keys ship with synthetic Members so you can build before you sign.</p>

          <div className="docs-quickstart-grid">
            <div>
              <h2 style={{marginTop:"0"}}>Quickstart</h2>
              <pre style={{background:"#0E1014",color:"#E8E5D8",padding:"24px",fontFamily:"var(--font-mono)",fontSize:"13px",lineHeight:"1.6",overflowX:"auto",borderRadius:"0",margin:"0"}}>
{`$ `}<span style={{color:"#7DCFB6"}}>curl</span>{` https://api.biotrackos.com/v2/members \\
  -H `}<span style={{color:"#E5C07B"}}>{'"Authorization: Bearer $BIOTRACK_KEY"'}</span>{`

`}<span style={{color:"#5C6370"}}>{`{
  "data": [
    {
      "id": "mem_4xQ2",
      "name": "J. Patel",
      "sources": ["oura", "thriva", "muhdo"],
      "last_sync": "2026-05-11T08:42:11Z"
    }
  ]
}`}</span>
              </pre>
            </div>
            <div className="docs-sandbox">
              <h3 style={{fontSize:"22px"}}>Get a sandbox key</h3>
              <p style={{margin:"0 0 16px"}}>No credit card. Includes 12 synthetic Members across all source types.</p>
              <Link href="/contact" className="btn btn-primary btn-sm">Request access <span className="arrow">→</span></Link>
            </div>
          </div>

          <h2>Reference</h2>
          <div className="docs-ref-grid">
            <a href="#" className="docs-ref-item">
              <div className="name">REST API</div>
              <div className="desc">/v2/members, /v2/observations, /v2/sources, /v2/cohorts</div>
            </a>
            <a href="#" className="docs-ref-item">
              <div className="name">GraphQL</div>
              <div className="desc">Single query endpoint. Subscriptions over WebSocket.</div>
            </a>
            <a href="#" className="docs-ref-item">
              <div className="name">FHIR R5</div>
              <div className="desc">Read &amp; write against /fhir. Bulk export ($export).</div>
            </a>
            <a href="#" className="docs-ref-item">
              <div className="name">Webhooks</div>
              <div className="desc">Per-event subscriptions, HMAC-signed, retry-with-backoff.</div>
            </a>
            <a href="#" className="docs-ref-item">
              <div className="name">SDKs</div>
              <div className="desc">TypeScript, Python, Swift, Kotlin, .NET.</div>
            </a>
            <a href="#" className="docs-ref-item">
              <div className="name">Auth</div>
              <div className="desc">OAuth 2.1 + PKCE. SCIM 2.0 for org provisioning.</div>
            </a>
            <a href="#" className="docs-ref-item">
              <div className="name">Rate limits</div>
              <div className="desc">5k req/min default. Higher on Production tier.</div>
            </a>
            <a href="#" className="docs-ref-item">
              <div className="name">Status</div>
              <div className="desc">status.biotrackos.com — uptime &amp; incidents.</div>
            </a>
          </div>

          <h2>Guides</h2>
          <ul>
            <li><a href="#">Onboard a new clinic in 6 hours</a></li>
            <li><a href="#">Connect a wearable source (OAuth + token refresh)</a></li>
            <li><a href="#">Subscribe to alert webhooks</a></li>
            <li><a href="#">FHIR bulk export for research</a></li>
            <li><a href="#">Building on top of BiotrackOS — a partner&apos;s reference architecture</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
