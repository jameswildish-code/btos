import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Developer docs — BiotrackOS" };

export default function DocsPage() {
  return (
    <>
      <style>{`
        .docs-pg { padding: 80px 0 96px; }
        .docs-pg h1 em { color: var(--ink-2); font-style: italic; }
        .docs-areas { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 56px; }
        .docs-area { background: var(--surface); border: 1px solid var(--line); border-radius: 20px; padding: 28px; display: flex; flex-direction: column; gap: 12px; }
        .docs-area .da-icon { width: 44px; height: 44px; border-radius: 12px; background: var(--mint-soft); color: var(--teal); display: grid; place-items: center; font-family: var(--font-display); font-size: 20px; }
        .docs-area h3 { font-family: var(--font-display); font-weight: 400; font-size: 22px; line-height: 1.1; margin: 0; }
        .docs-area p { font-size: 14px; color: var(--muted); margin: 0; line-height: 1.5; flex: 1; }
        .docs-area .da-tag { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); }
        .docs-cta { margin-top: 64px; background: var(--ink); border-radius: 24px; padding: 56px; display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: center; position: relative; overflow: hidden; }
        .docs-cta::before { content: ""; position: absolute; inset: 0; background: radial-gradient(ellipse at left, rgba(47,191,163,.12), transparent 60%); pointer-events: none; }
        .docs-cta > * { position: relative; }
        .docs-cta h2 { font-family: var(--font-display); font-weight: 400; font-size: 36px; line-height: 1.05; color: var(--bg); margin: 0 0 8px; }
        .docs-cta p { color: #C9C5B6; margin: 0; font-size: 15px; max-width: 44ch; }
        @media (max-width:900px) { .docs-areas { grid-template-columns: 1fr 1fr; } .docs-cta { grid-template-columns: 1fr; gap: 24px; } }
        @media (max-width:600px) { .docs-areas { grid-template-columns: 1fr; } }
      `}</style>

      <section className="docs-pg">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Developer docs</span>
          <h1 className="h1" style={{ marginTop: 16, maxWidth: "18ch" }}>Build on the <em>connected record.</em></h1>
          <p className="lede" style={{ marginTop: 24, maxWidth: "54ch" }}>Everything you need to integrate, extend, and build on BiotrackOS — from REST and FHIR to SDKs, webhooks, and platform guides.</p>

          <div className="docs-areas">
            {[
              { icon: "⌁", tag: "API", h: "REST API", p: "Core endpoints for members, observations, sources, and cohorts. Versioned, paginated, and fully documented." },
              { icon: "◈", tag: "API", h: "FHIR R5", p: "Read and write against the FHIR endpoint. Bulk export for research and EHR integration." },
              { icon: "↯", tag: "Events", h: "Webhooks", p: "Per-event subscriptions, HMAC-signed payloads, and automatic retry with backoff." },
              { icon: "◻", tag: "SDK", h: "SDKs", p: "TypeScript, Python, Swift, Kotlin, and .NET. Sandbox keys included with synthetic data." },
              { icon: "⊕", tag: "Auth", h: "Authentication", p: "OAuth 2.1 + PKCE, SAML 2.0, and SCIM 2.0 for organisation provisioning." },
              { icon: "◎", tag: "Guides", h: "Integration guides", p: "Step-by-step guides for connecting wearables, onboarding organisations, and building on top of the platform." },
            ].map((a) => (
              <div key={a.h} className="docs-area">
                <div className="da-icon">{a.icon}</div>
                <div className="da-tag">{a.tag}</div>
                <h3>{a.h}</h3>
                <p>{a.p}</p>
              </div>
            ))}
          </div>

          <div className="docs-cta">
            <div>
              <h2>Full documentation is on its way.</h2>
              <p>We&apos;re moving our docs to a dedicated platform. In the meantime, request sandbox access or get in touch with a technical question.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link className="btn btn-accent" href="/contact">Request API access <span className="arrow">→</span></Link>
              <a href="mailto:developers@biotrackos.com" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#C9C5B6", textAlign: "center" }}>developers@biotrackos.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
