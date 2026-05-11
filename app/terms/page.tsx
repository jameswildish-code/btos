import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of service — BiotrackOS" };

export default function TermsPage() {
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
          <h1>Terms of <em>service.</em></h1>
          <div className="meta"><span>Version 4.2</span><span>Effective 01 May 2026</span></div>

          <h2>1 — Agreement</h2>
          <p>These Terms govern your use of the BiotrackOS platform (&ldquo;Service&rdquo;) operated by BiotrackOS, Inc. (&ldquo;BiotrackOS&rdquo;, &ldquo;we&rdquo;). By signing an Order Form or using the Service, the entity identified (&ldquo;Customer&rdquo;) accepts these Terms in full.</p>

          <h2>2 — The service</h2>
          <p>BiotrackOS is a health-data platform that ingests, normalises, and surfaces connected-device, lab, genomic, epigenetic, and prescription data on behalf of Customer and its end users (&ldquo;Members&rdquo;). Specific features are described at biotrackos.com/product and in the applicable Order Form.</p>

          <h2>3 — Customer responsibilities</h2>
          <ul>
            <li>Obtain and maintain valid consent from each Member before connecting that Member&apos;s data sources.</li>
            <li>Configure access controls and SSO for authorised personnel.</li>
            <li>Use the Service in compliance with all applicable laws including HIPAA, GDPR, and the UK Data Protection Act 2018.</li>
            <li>Promptly notify BiotrackOS of any suspected unauthorised access.</li>
          </ul>

          <h2>4 — Fees &amp; billing</h2>
          <p>Fees are set out in the Order Form. Annual subscriptions auto-renew unless cancelled 30 days before term end. Overage is billed monthly in arrears. All fees exclude VAT and applicable taxes.</p>

          <h2>5 — Service levels</h2>
          <p>BiotrackOS targets 99.9% uptime on Production tier, measured monthly excluding scheduled maintenance. Credits for missed SLA are described in the SLA Addendum and capped at the prior month&apos;s fees.</p>

          <h2>6 — Data &amp; intellectual property</h2>
          <p>Customer retains all rights to Member data. BiotrackOS retains all rights to the Service, its codebase, models, and aggregated, de-identified usage analytics. BiotrackOS will not sell, lease, or otherwise commercialise Member data.</p>

          <h2>7 — Confidentiality</h2>
          <p>Each party will protect the other&apos;s Confidential Information using at least the same standard of care it applies to its own, and no less than reasonable care.</p>

          <h2>8 — Warranties &amp; disclaimers</h2>
          <p>BiotrackOS warrants that the Service will perform materially as documented. Except as expressly stated, the Service is provided &ldquo;AS IS&rdquo; and BiotrackOS disclaims all other warranties, including merchantability, fitness, and non-infringement.</p>

          <h2>9 — Limitation of liability</h2>
          <p>Neither party&apos;s aggregate liability shall exceed the fees paid by Customer in the twelve months preceding the claim. Neither party shall be liable for indirect, incidental, consequential, or punitive damages.</p>

          <h2>10 — Termination</h2>
          <p>Either party may terminate for material breach uncured after 30 days&apos; written notice. Upon termination, BiotrackOS will make Customer&apos;s data available for export for 60 days, then irreversibly delete it.</p>

          <h2>11 — Governing law</h2>
          <p>These Terms are governed by the laws of Denmark. The Copenhagen City Court has exclusive jurisdiction over disputes.</p>

          <h2>12 — Changes</h2>
          <p>We may update these Terms; material changes will be notified at least 30 days in advance via the Service and to billing contacts on file.</p>

          <h2>Contact</h2>
          <p>Questions: <strong>legal@biotrackos.com</strong> · BiotrackOS, Inc., Søtorvet 5, 1371 Copenhagen, Denmark.</p>
        </div>
      </section>
    </>
  );
}
