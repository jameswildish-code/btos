import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy policy — BiotrackOS" };

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
        .legal ul { padding-left: 20px; margin: 12px 0; }
        .legal li { margin-bottom: 6px; }
        .legal table { width: 100%; border-collapse: collapse; font-size: 14px; margin: 16px 0; }
        .legal th, .legal td { padding: 12px 8px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; }
        .legal th { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); font-weight: 500; }
        .legal a { color: var(--ink); }
      `}</style>

      <section className="legal">
        <div className="wrap">
          <span className="eyebrow"><span className="dot"></span> Legal</span>
          <h1>Privacy <em>policy.</em></h1>
          <div className="meta"><span>Version 1.0</span><span>Effective 17 May 2026</span></div>

          <p style={{ marginTop: 24 }}>This Privacy Policy describes how [ENTITY NAME] (&ldquo;BiotrackOS&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) collects, uses, stores, and shares personal data in connection with our platform and biotrackos.com. It applies to Members of customer organisations whose data flows through our platform, to administrators and users of the Service, and to visitors to biotrackos.com.</p>

          <h2>Who is the data controller?</h2>
          <p>Where we process personal data on behalf of a customer organisation, BiotrackOS acts as a data <strong>processor</strong> and the customer is the <strong>controller</strong>. Where we process data for our own purposes &mdash; such as account management, billing, and security &mdash; BiotrackOS is the controller. This distinction is described further in our <Link href="/data-processing">Data Processing Addendum</Link>.</p>

          <h2>What we collect</h2>
          <ul>
            <li><strong>Account data</strong> &mdash; name, email address, job role, and organisation name.</li>
            <li><strong>Health data</strong> &mdash; only what you or your authorised provider explicitly connect: wearable and device streams, lab results, genomic reports, epigenetic data, medication and prescription history. We never collect health data without a consent record.</li>
            <li><strong>Usage data</strong> &mdash; feature interactions, session metadata, error logs, IP address, browser type, and device type.</li>
            <li><strong>Communications</strong> &mdash; if you contact us by email or via our contact form, we retain those records to respond and improve our service.</li>
          </ul>

          <h2>Why we process it</h2>
          <table>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Legal basis (UK &amp; EU GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Provide, maintain, and improve the Service</td><td>Contract &mdash; Art. 6(1)(b)</td></tr>
              <tr><td>Process health data on behalf of your provider</td><td>Explicit consent &mdash; Art. 9(2)(a)</td></tr>
              <tr><td>Detect and prevent fraud, abuse, and security incidents</td><td>Legitimate interest &mdash; Art. 6(1)(f)</td></tr>
              <tr><td>Send account and service communications</td><td>Contract &mdash; Art. 6(1)(b)</td></tr>
              <tr><td>Comply with legal and regulatory obligations</td><td>Legal obligation &mdash; Art. 6(1)(c)</td></tr>
            </tbody>
          </table>
          <p>Where we rely on legitimate interest, we have carried out a balancing test and concluded our interests do not override your rights and freedoms.</p>

          <h2>What we do not do</h2>
          <p>We do not sell, rent, or otherwise commercialise your personal data. We do not use Member health data to train third-party AI or machine learning models. We do not run behavioural advertising or third-party tracking scripts on biotrackos.com. We do not make solely automated decisions that produce legal or similarly significant effects based on your health data.</p>

          <h2>Who we share data with</h2>
          <p>We share data only with:</p>
          <ul>
            <li><strong>Our customers</strong> &mdash; the organisations (Controllers) that determine why and how Member data is used.</li>
            <li><strong>Vetted subprocessors</strong> &mdash; for infrastructure, transactional email, monitoring, and billing. The current list is at <Link href="/data-processing">biotrackos.com/data-processing</Link>.</li>
            <li><strong>Legal authorities</strong> &mdash; only where required by law, court order, or to protect the rights and safety of individuals, and only to the minimum extent required.</li>
          </ul>
          <p>We do not share your data with third parties for their own marketing or commercial purposes.</p>

          <h2>How long we keep it</h2>
          <p>Health and Member data is retained for the duration of the contract and for 60 days thereafter to allow data export, after which it is irreversibly deleted. Account and billing data is retained for 7 years in accordance with tax and accounting obligations. Security and access logs are retained for 13 months.</p>

          <h2>Where data is stored</h2>
          <p>You or your provider selects a storage region at onboarding. Health data does not leave that region. Available regions are set out in your Order Form. Infrastructure is hosted on Amazon Web Services.</p>

          <h2>Your rights</h2>
          <p>Under UK GDPR and EU GDPR you have the right to:</p>
          <ul>
            <li><strong>Access</strong> &mdash; request a copy of your personal data.</li>
            <li><strong>Rectification</strong> &mdash; correct inaccurate or incomplete data.</li>
            <li><strong>Erasure</strong> &mdash; request deletion where there is no lawful basis to retain.</li>
            <li><strong>Restriction</strong> &mdash; limit processing in certain circumstances.</li>
            <li><strong>Portability</strong> &mdash; receive your data in a structured, machine-readable format.</li>
            <li><strong>Withdraw consent</strong> &mdash; at any time, for any connected data source, without affecting the lawfulness of prior processing.</li>
            <li><strong>Object</strong> &mdash; to processing based on legitimate interests.</li>
            <li><strong>Lodge a complaint</strong> &mdash; with your supervisory authority (in the UK: the Information Commissioner&rsquo;s Office, ico.org.uk).</li>
          </ul>
          <p>To exercise any of these rights, contact <strong>dpo@biotrackos.com</strong>. We will respond within one calendar month.</p>

          <h2>Cookies</h2>
          <p>biotrackos.com uses only essential cookies required for the site to function. We do not use analytics, advertising, or tracking cookies.</p>

          <h2>Changes to this policy</h2>
          <p>We will notify you of material changes at least 30 days in advance via the Service and to the email address on file.</p>

          <h2>Contact</h2>
          <p>Data Protection Officer: <strong>dpo@biotrackos.com</strong><br />[REGISTERED ADDRESS]</p>
        </div>
      </section>
    </>
  );
}
