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
        .legal .meta { margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--line); font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
        .legal h2 { font-family: var(--font-display); font-weight: 400; font-size: 28px; line-height: 1.1; margin: 48px 0 12px; }
        .legal h3 { font-size: 16px; font-weight: 600; margin: 28px 0 8px; }
        .legal p, .legal li { font-size: 15px; line-height: 1.65; color: var(--ink-2); }
        .legal ul { padding-left: 20px; margin: 12px 0; }
        .legal li { margin-bottom: 6px; }
        .legal table { width: 100%; border-collapse: collapse; font-size: 14px; margin: 16px 0; }
        .legal th, .legal td { padding: 12px 8px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; }
        .legal th { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); font-weight: 500; }
        .legal a { color: var(--ink); }
        .region-block { background: var(--surface); border: 1px solid var(--line); border-radius: 14px; padding: 24px; margin-bottom: 16px; }
        .region-block h3 { margin-top: 0; }
      `}</style>

      <section className="legal">
        <div className="wrap">
          <span className="eyebrow"><span className="dot"></span> Legal</span>
          <h1>Privacy <em>policy.</em></h1>
          <div className="meta">
            <span>Version 1.0 · Applies to: Platform &amp; Personal app</span>
            <span>Effective 17 May 2026</span>
          </div>

          <p style={{ marginTop: 24 }}>This Privacy Policy describes how [ENTITY NAME] (&ldquo;BiotrackOS&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) collects, uses, stores, and shares personal data in connection with our platform, personal app, and biotrackos.com. It applies to Members of customer organisations, individual app users, administrators, and visitors to our website. BiotrackOS operates globally — your specific rights by region are set out in the <strong>Your rights by region</strong> section below.</p>

          <h2>Who is the data controller?</h2>
          <p>Where we process personal data on behalf of an organisation customer, BiotrackOS acts as a data <strong>processor</strong> and the customer organisation is the <strong>controller</strong>. Where we process data for our own purposes — including account management, billing, security, and website analytics — BiotrackOS is the <strong>controller</strong>. This distinction is described further in our <Link href="/data-processing">Data Processing Addendum</Link>.</p>

          <h2>What we collect</h2>
          <ul>
            <li><strong>Account data</strong> &mdash; name, email address, job role, and organisation name.</li>
            <li><strong>Health data</strong> &mdash; only what you or your authorised provider explicitly connect: wearable and device streams, lab results, genomic reports, epigenetic data, medication and prescription history. We never collect health data without a consent record tied to your account.</li>
            <li><strong>Usage data</strong> &mdash; feature interactions, session metadata, error logs, IP address, browser type, and device type.</li>
            <li><strong>Analytics data</strong> &mdash; pages visited, time on page, navigation paths, and general usage patterns collected via analytics tools (see Cookies &amp; tracking below).</li>
            <li><strong>Communications</strong> &mdash; if you contact us by email or via our contact form, we retain those records to respond and improve our service.</li>
          </ul>

          <h2>Why we process it</h2>
          <table>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Legal basis</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Provide, maintain, and improve the Service and App</td><td>Contract — GDPR Art. 6(1)(b)</td></tr>
              <tr><td>Process health data on behalf of your provider or organisation</td><td>Explicit consent — GDPR Art. 9(2)(a)</td></tr>
              <tr><td>Detect and prevent fraud, abuse, and security incidents</td><td>Legitimate interest — GDPR Art. 6(1)(f)</td></tr>
              <tr><td>Send account and service communications</td><td>Contract — GDPR Art. 6(1)(b)</td></tr>
              <tr><td>Analytics and product improvement</td><td>Consent (where required) / Legitimate interest — GDPR Art. 6(1)(f)</td></tr>
              <tr><td>Comply with legal and regulatory obligations</td><td>Legal obligation — GDPR Art. 6(1)(c)</td></tr>
            </tbody>
          </table>

          <h2>Cookies &amp; tracking</h2>
          <p>We use cookies and similar technologies on biotrackos.com and within the platform. These fall into two categories:</p>
          <ul>
            <li><strong>Essential cookies</strong> &mdash; required for the site and platform to function (authentication, session management, security). These cannot be disabled.</li>
            <li><strong>Analytics cookies</strong> &mdash; used to understand how people use our website and platform so we can improve them. These are set by [ANALYTICS PROVIDER — e.g. Vercel Analytics, Google Analytics]. Analytics cookies are only placed where you have given consent, or where we rely on legitimate interest under applicable law.</li>
          </ul>
          <p>Full details of every cookie we set — including name, purpose, and duration — are listed on our <Link href="/cookies">Cookie Policy</Link> page. You can manage your preferences there at any time. EU and UK visitors will be asked for consent via our cookie banner before analytics cookies are set.</p>

          <h2>What we do not do</h2>
          <p>We do not sell, rent, or otherwise commercialise your personal data. We do not use Member health data to train third-party AI or machine learning models. We do not share your data with third parties for their own advertising or marketing purposes. We do not make solely automated decisions that produce legal or similarly significant effects based on your health data.</p>

          <h2>Who we share data with</h2>
          <ul>
            <li><strong>Our customers (organisations)</strong> &mdash; the controllers that determine how Member data is used within their platform.</li>
            <li><strong>Vetted subprocessors</strong> &mdash; for infrastructure, email, monitoring, analytics, and billing. The current list is at <Link href="/data-processing">biotrackos.com/data-processing</Link>.</li>
            <li><strong>Legal authorities</strong> &mdash; only where required by law, court order, or to protect the rights and safety of individuals, and only to the minimum extent required.</li>
          </ul>

          <h2>How long we keep it</h2>
          <ul>
            <li><strong>Health and Member data</strong> &mdash; retained for the duration of the relevant contract or account, plus 60 days for data export, then irreversibly deleted.</li>
            <li><strong>Account and billing data</strong> &mdash; retained for 7 years in accordance with tax and accounting obligations.</li>
            <li><strong>Security and access logs</strong> &mdash; retained for 13 months.</li>
            <li><strong>Analytics data</strong> &mdash; retained for [PERIOD — confirm with your analytics provider, typically 14 months for Google Analytics].</li>
          </ul>

          <h2>Where data is stored</h2>
          <p>You or your provider selects a storage region at onboarding. Health data does not leave that region. Available regions are set out in your Order Form. Infrastructure is hosted on Amazon Web Services. For website and analytics data, please refer to our <Link href="/data-processing">Data Processing Addendum</Link> for provider locations.</p>

          <h2>Your rights by region</h2>
          <p>Depending on where you are located, you have different rights over your personal data. To exercise any right, contact <strong>dpo@biotrackos.com</strong>. We will respond within one calendar month.</p>

          <div className="region-block">
            <h3>United Kingdom</h3>
            <p>Under UK GDPR and the Data Protection Act 2018, you have the right to: access your data; rectify inaccuracies; erasure (&ldquo;right to be forgotten&rdquo;); restrict processing; data portability; object to processing based on legitimate interests; and withdraw consent at any time. You may lodge a complaint with the Information Commissioner&rsquo;s Office (ICO) at ico.org.uk.</p>
          </div>

          <div className="region-block">
            <h3>European Union</h3>
            <p>Under EU GDPR, you have the same rights as UK users above. You may lodge a complaint with the supervisory authority in your EU member state. Our EU representative is [EU REPRESENTATIVE ENTITY, if applicable — required if you don&apos;t have an EU establishment and process EU resident data].</p>
          </div>

          <div className="region-block">
            <h3>United States — California (CCPA / CPRA)</h3>
            <p>If you are a California resident, you have the right to: know what personal information we collect and how it is used; request deletion of your personal information; opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of your personal information (we do not sell or share personal information for advertising purposes); correct inaccurate personal information; and limit use of sensitive personal information. We will not discriminate against you for exercising these rights. To submit a request, contact <strong>privacy@biotrackos.com</strong> or use [CCPA REQUEST FORM LINK]. US healthcare customers requiring a HIPAA Business Associate Agreement should contact <strong>legal@biotrackos.com</strong>.</p>
          </div>

          <div className="region-block">
            <h3>Australia</h3>
            <p>BiotrackOS complies with the Australian Privacy Act 1988 and the Australian Privacy Principles (APPs). You have the right to access and correct your personal information. Health information is treated as sensitive information under the APPs and handled with additional care. Where applicable, we also comply with the My Health Records Act 2012. You may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.</p>
          </div>

          <div className="region-block">
            <h3>Middle East (UAE &amp; Saudi Arabia)</h3>
            <p>For users in the United Arab Emirates, BiotrackOS processes personal data in compliance with Federal Decree-Law No. 45 of 2021 on Personal Data Protection (UAE PDPL). For users in Saudi Arabia, we comply with the Saudi Personal Data Protection Law (PDPL) and its implementing regulations. You have the right to access, correct, and request deletion of your personal data. Contact <strong>dpo@biotrackos.com</strong> to exercise these rights.</p>
          </div>

          <h2>Children&apos;s data</h2>
          <p>The BiotrackOS platform is not directed at children under the age of 16. We do not knowingly collect personal data from children under 16 without verifiable parental consent. If you believe we have inadvertently collected such data, contact dpo@biotrackos.com and we will delete it promptly.</p>

          <h2>Changes to this policy</h2>
          <p>We will notify you of material changes at least 30 days in advance via the Service or App and to the email address on file. The current version is always available at biotrackos.com/privacy.</p>

          <h2>Contact</h2>
          <p>Data Protection Officer: <strong>dpo@biotrackos.com</strong><br />General privacy enquiries: <strong>privacy@biotrackos.com</strong><br />[REGISTERED ADDRESS]</p>
        </div>
      </section>
    </>
  );
}
