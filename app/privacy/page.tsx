import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy — BiotrackOS" };

export default function PrivacyPage() {
  return (
    <>
      <style>{`
        .legal { padding: 80px 0 96px; }
        .legal .wrap { max-width: 760px; margin: 0 auto; padding: 0 24px; }
        .legal h1 { font-family: var(--font-display); font-weight: 400; font-size: clamp(44px,5vw,72px); line-height: 1; letter-spacing: -0.015em; margin: 24px 0 0; }
        .legal h1 em { color: var(--ink-2); font-style: italic; }
        .legal .meta { margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--line); font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); display: flex; justify-content: space-between; }
        .legal h2 { font-family: var(--font-display); font-weight: 400; font-size: 28px; line-height: 1.1; margin: 48px 0 12px; }
        .legal h3 { font-size: 16px; font-weight: 600; margin: 28px 0 8px; }
        .legal p, .legal li { font-size: 15px; line-height: 1.65; color: var(--ink-2); }
        .legal ul { padding-left: 20px; }
        .legal table { width: 100%; border-collapse: collapse; font-size: 14px; margin: 16px 0; }
        .legal th, .legal td { padding: 12px 8px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; }
        .legal th { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); font-weight: 500; }
      `}</style>

      <section className="legal">
        <div className="wrap">
          <span className="eyebrow"><span className="dot"></span> Legal</span>
          <h1>Privacy <em>policy.</em></h1>
          <div className="meta"><span>Version 3.1</span><span>Effective 01 May 2026</span></div>

          <p style={{marginTop:"24px"}}>This policy describes how BiotrackOS, Inc. handles personal data. It applies to people whose data flows through our platform — Members of customer organisations, and visitors to biotrackos.com.</p>

          <h2>What we collect</h2>
          <ul>
            <li><strong>Account data</strong> — name, email, role, organisation.</li>
            <li><strong>Health data</strong> — only what you (or your authorised provider) connect: wearable streams, lab panels, genomic reports, epigenetic results, prescription history.</li>
            <li><strong>Usage data</strong> — interactions with the Service, error logs, device metadata.</li>
          </ul>

          <h2>Why we process it</h2>
          <table>
            <thead><tr><th>Purpose</th><th>Legal basis (GDPR)</th></tr></thead>
            <tbody>
              <tr><td>Provide the Service to you</td><td>Contract · Art. 6(1)(b)</td></tr>
              <tr><td>Process health data on behalf of your provider</td><td>Explicit consent · Art. 9(2)(a)</td></tr>
              <tr><td>Security &amp; abuse prevention</td><td>Legitimate interest · Art. 6(1)(f)</td></tr>
              <tr><td>Legal &amp; regulatory compliance</td><td>Legal obligation · Art. 6(1)(c)</td></tr>
            </tbody>
          </table>

          <h2>What we don&apos;t do</h2>
          <p>We do not sell, lease, or otherwise commercialise your data. We do not use it to train AI models for third parties. We do not run advertising or behavioural tracking on biotrackos.com.</p>

          <h2>How long we keep it</h2>
          <p>Health data is retained for the term of the contract and 60 days after, then irreversibly deleted. Account data is retained for 7 years for legal and tax purposes. Logs are kept for 13 months.</p>

          <h2>Where it lives</h2>
          <p>You (or your provider) pick a region at sign-up — EU (Frankfurt, Ireland, Stockholm), UK (London), or US (Virginia, Oregon). Health data does not leave that region.</p>

          <h2>Subprocessors</h2>
          <p>We use a short list of vetted subprocessors for infrastructure, monitoring, and support. The current list is at <a href="/data-processing">biotrackos.com/data-processing</a> and updated at least 30 days before any change.</p>

          <h2>Your rights</h2>
          <ul>
            <li>Access — request a copy of your data.</li>
            <li>Rectification — correct inaccuracies.</li>
            <li>Erasure — request deletion (subject to legal retention).</li>
            <li>Portability — export in machine-readable form.</li>
            <li>Withdraw consent — at any time, per source.</li>
            <li>Lodge a complaint with your supervisory authority.</li>
          </ul>

          <h2>Contact</h2>
          <p>Data Protection Officer: <strong>dpo@biotrackos.com</strong>. EU representative: BiotrackOS ApS, Copenhagen.</p>
        </div>
      </section>
    </>
  );
}
