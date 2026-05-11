import Link from "next/link";

export const metadata = { title: "Security disclosure — BiotrackOS" };

export default function SecurityDisclosurePage() {
  return (
    <>
      <style>{`
        .legal { padding: 80px 0 96px; }
        .legal .inner { max-width: 760px; margin: 0 auto; padding: 0 24px; }
        .legal h1 { font-family: var(--font-display); font-weight: 400; font-size: clamp(44px,5vw,72px); line-height: 1; letter-spacing: -0.015em; margin: 24px 0 0; }
        .legal h1 em { color: var(--ink-2); font-style: italic; }
        .legal .meta { margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--line); font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); display: flex; justify-content: space-between; }
        .legal h2 { font-family: var(--font-display); font-weight: 400; font-size: 28px; line-height: 1.1; margin: 48px 0 12px; }
        .legal p, .legal li { font-size: 15px; line-height: 1.65; color: var(--ink-2); }
        .legal ul { padding-left: 20px; }
        .legal table { width: 100%; border-collapse: collapse; font-size: 14px; margin: 16px 0; }
        .legal th, .legal td { padding: 12px 8px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; }
        .legal th { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); font-weight: 500; }
        .pgp { font-family: var(--font-mono); font-size: 13px; }
      `}</style>

      <section className="legal">
        <div className="inner">
          <span className="eyebrow"><span className="dot"></span> Trust</span>
          <h1>Responsible <em>disclosure.</em></h1>
          <div className="meta">
            <span>Version 2.0</span>
            <span>Updated 12 April 2026</span>
          </div>

          <p style={{ marginTop: 24 }}>
            We take security seriously. If you&rsquo;ve found a vulnerability in any BiotrackOS product or service, we want to hear about it &mdash; and we&rsquo;ll work with you to confirm, fix, and credit the report.
          </p>

          <h2>How to report</h2>
          <p>
            Email <strong>security@biotrackos.com</strong> with a description, reproduction steps, and your contact details. PGP key fingerprint:{" "}
            <code className="pgp">A4F2 0E11 7C92 88BD 4DEC 4DA8 9C0F E7B1 6B33 22CA</code>{" "}
            &middot; <Link href="#">download key</Link>.
          </p>

          <h2>What we promise</h2>
          <ul>
            <li>Acknowledge receipt within <strong>2 business days</strong>.</li>
            <li>Provide an initial triage within <strong>5 business days</strong>.</li>
            <li>Maintain regular communication while we work the issue.</li>
            <li>Credit you in our hall of fame and our public changelog (unless you&rsquo;d rather stay anonymous).</li>
            <li>Not pursue legal action against good-faith researchers.</li>
          </ul>

          <h2>Safe harbour</h2>
          <p>We consider security research conducted under this policy to be authorised. We will not initiate legal action against you or ask law enforcement to investigate, provided you:</p>
          <ul>
            <li>Make a good-faith effort to avoid privacy violations, destruction of data, and interruption of the service.</li>
            <li>Do not access more data than necessary to demonstrate the vulnerability.</li>
            <li>Give us reasonable time to investigate and address before public disclosure (typically 90 days).</li>
            <li>Do not violate any other law.</li>
          </ul>

          <h2>Scope</h2>
          <table>
            <thead>
              <tr>
                <th>In scope</th>
                <th>Out of scope</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["app.biotrackos.com", "Third-party services (Stripe, Datadog)"],
                ["api.biotrackos.com", "Social engineering of staff"],
                ["iOS / Android consumer apps", "Physical attacks on offices"],
                ["biotrackos.com marketing site", "DoS / brute-force at scale"],
                ["FHIR & partner APIs", "Spam or social abuse reports"],
              ].map(([ins, out]) => (
                <tr key={ins}>
                  <td>{ins}</td>
                  <td>{out}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Bounty</h2>
          <p>We pay bounties for qualifying issues, based on severity (CVSS 3.1) and impact.</p>
          <table>
            <thead>
              <tr>
                <th>Severity</th>
                <th>Bounty (EUR)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Critical", "€5,000 – €25,000"],
                ["High", "€1,500 – €5,000"],
                ["Medium", "€500 – €1,500"],
                ["Low", "€100 – €500"],
              ].map(([sev, bounty]) => (
                <tr key={sev}>
                  <td>{sev}</td>
                  <td>{bounty}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Hall of fame</h2>
          <p>
            Our gratitude to: <strong>Sara K.</strong> &middot; <strong>F. Lindqvist</strong> &middot; <strong>devnull@</strong> &middot; <strong>R. Maillard</strong> &middot; <strong>Tomas H.</strong> &middot; and 14 researchers who preferred to remain anonymous.
          </p>
        </div>
      </section>
    </>
  );
}
