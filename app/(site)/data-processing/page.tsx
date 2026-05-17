import type { Metadata } from "next";

export const metadata = { title: "Data processing addendum — BiotrackOS" };

export default function DataProcessingPage() {
  return (
    <>
      <style>{`
        .legal { padding: 80px 0 96px; }
        .legal .inner { max-width: 760px; margin: 0 auto; padding: 0 24px; }
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
        <div className="inner">
          <span className="eyebrow"><span className="dot"></span> Legal</span>
          <h1>Data processing <em>addendum.</em></h1>
          <div className="meta">
            <span>Version 1.0</span>
            <span>Effective 17 May 2026</span>
          </div>

          <p style={{ marginTop: 24 }}>
            This Data Processing Addendum (&ldquo;DPA&rdquo;) forms part of and is incorporated into the Terms of Service or master agreement between [ENTITY NAME] (&ldquo;Processor&rdquo;) and Customer (&ldquo;Controller&rdquo;). It governs the processing of Personal Data by BiotrackOS on behalf of Customer in the course of providing the Service.
          </p>

          <h2>Definitions</h2>
          <p>&ldquo;Personal Data&rdquo;, &ldquo;Special Category Data&rdquo;, &ldquo;Processing&rdquo;, &ldquo;Controller&rdquo;, &ldquo;Processor&rdquo;, &ldquo;Data Subject&rdquo;, and &ldquo;Supervisory Authority&rdquo; have the meanings given in applicable Data Protection Law. &ldquo;Data Protection Law&rdquo; means UK GDPR, the UK Data Protection Act 2018, EU GDPR 2016/679, and any applicable successor or equivalent legislation as amended from time to time.</p>

          <h2>1 &mdash; Scope &amp; roles</h2>
          <p>Controller determines the purposes and means of processing Member Personal Data. Processor processes Personal Data solely on documented instructions from Controller, unless required to do so by applicable law, in which case Processor shall inform Controller before processing unless prohibited by law from doing so.</p>

          <h2>2 &mdash; Subject matter</h2>
          <ul>
            <li><strong>Nature of processing:</strong> ingestion, normalisation, storage, retrieval, and presentation of health and associated personal data.</li>
            <li><strong>Purpose:</strong> provision of the BiotrackOS Service as described in the applicable Order Form.</li>
            <li><strong>Duration:</strong> term of the Order Form plus 60 days for data export and deletion.</li>
            <li><strong>Data subjects:</strong> Members enrolled by Controller.</li>
            <li><strong>Categories of personal data:</strong> identification data (name, email), contact data, and health data (Special Category data under Art. 9 GDPR).</li>
          </ul>

          <h2>3 &mdash; Processor obligations</h2>
          <p>Processor will:</p>
          <ul>
            <li>Process Personal Data only on documented instructions from Controller.</li>
            <li>Ensure that personnel authorised to process Personal Data are bound by appropriate confidentiality obligations.</li>
            <li>Implement and maintain the technical and organisational security measures described in §4.</li>
            <li>Not engage a subprocessor without prior authorisation from Controller as set out in §5.</li>
            <li>Assist Controller in fulfilling data subject rights requests, breach notification obligations, and data protection impact assessments using appropriate technical and organisational measures.</li>
            <li>Make available all information necessary to demonstrate compliance with this DPA and cooperate with reasonable audits as set out in §8.</li>
          </ul>

          <h2>4 &mdash; Security measures</h2>
          <p>Processor implements appropriate technical and organisational measures (&ldquo;TOMs&rdquo;) including:</p>
          <ul>
            <li>Encryption of data at rest (AES-256) and in transit (TLS 1.3 minimum).</li>
            <li>Role-based access control (RBAC) with SSO enforcement for all personnel with access to Personal Data.</li>
            <li>Immutable audit logging of all data access events.</li>
            <li>Annual penetration testing by an independent third party.</li>
            <li>Documented incident response procedure with defined escalation paths.</li>
            <li>Regular security awareness training for all staff with access to Personal Data.</li>
          </ul>

          <h2>5 &mdash; Subprocessors</h2>
          <p>Controller authorises BiotrackOS to use the following subprocessors:</p>
          <table>
            <thead>
              <tr>
                <th>Subprocessor</th>
                <th>Purpose</th>
                <th>Region</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Amazon Web Services", purpose: "Infrastructure hosting", region: "EU · UK · US" },
                { name: "Cloudflare", purpose: "WAF, DDoS mitigation, edge delivery", region: "Global edge — no health data" },
                { name: "Datadog", purpose: "Infrastructure monitoring and logging — no PHI", region: "EU · US" },
                { name: "Twilio SendGrid", purpose: "Transactional email", region: "EU · US" },
                { name: "Stripe", purpose: "Billing and payment processing", region: "EU · US" },
              ].map((r) => (
                <tr key={r.name}>
                  <td>{r.name}</td>
                  <td>{r.purpose}</td>
                  <td>{r.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Processor will notify Controller at least 30 days before adding or replacing any subprocessor. Controller may object on reasonable grounds within that period. All subprocessors are bound by contractual obligations no less protective than this DPA.</p>

          <h2>6 &mdash; International transfers</h2>
          <p>Where Personal Data is transferred outside the UK or EEA, Processor relies on:</p>
          <ul>
            <li><strong>UK transfers:</strong> International Data Transfer Agreements (IDTAs) approved by the Information Commissioner&rsquo;s Office.</li>
            <li><strong>EU transfers:</strong> Standard Contractual Clauses (Module 2 &mdash; Controller to Processor) approved by the European Commission (Decision 2021/914), supplemented by the technical measures in §4.</li>
          </ul>

          <h2>7 &mdash; Data subject requests</h2>
          <p>Processor will promptly notify Controller (and in any event within 5 business days) of any data subject request received directly by Processor. Processor will provide reasonable technical assistance to enable Controller to respond within applicable statutory timeframes.</p>

          <h2>8 &mdash; Personal data breach</h2>
          <p>Processor will notify Controller without undue delay and in any event within 24 hours of becoming aware of a Personal Data Breach affecting Controller&rsquo;s data. Notification will include: (a) a description of the breach; (b) categories and approximate number of data subjects and records affected; (c) likely consequences; and (d) measures taken or proposed to address the breach.</p>

          <h2>9 &mdash; Audit rights</h2>
          <p>Processor will make available all information necessary to demonstrate compliance with this DPA and will permit and contribute to audits, including inspections, conducted by Controller or a mandated auditor, provided that: (a) Controller gives at least 30 days&rsquo; prior written notice; (b) audits do not unreasonably disrupt Processor&rsquo;s operations; and (c) the auditor is bound by confidentiality obligations acceptable to Processor.</p>

          <h2>10 &mdash; Deletion &amp; return</h2>
          <p>Upon termination or expiry of the Service, Processor will, at Controller&rsquo;s written request, either securely delete or return all Personal Data within 60 days, and delete existing copies unless applicable law requires retention. Processor will provide written certification of deletion upon request.</p>

          <h2>11 &mdash; Execution</h2>
          <p>This DPA is incorporated automatically into all Order Forms signed on or after 17 May 2026. To execute a separately signed copy, contact <strong>legal@biotrackos.com</strong>.</p>

          <h2>Contact</h2>
          <p>Data Protection Officer: <strong>dpo@biotrackos.com</strong><br />[REGISTERED ADDRESS]</p>
        </div>
      </section>
    </>
  );
}
