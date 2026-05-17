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
          <h1>Terms of <em>service.</em></h1>
          <div className="meta"><span>Version 1.0</span><span>Effective 17 May 2026</span></div>

          <p style={{ marginTop: 24 }}>These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the BiotrackOS platform (&ldquo;Service&rdquo;) operated by [ENTITY NAME] (&ldquo;BiotrackOS&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;). By signing an Order Form, creating an account, or otherwise using the Service, the organisation identified (&ldquo;Customer&rdquo;) agrees to these Terms in full. If you are entering into these Terms on behalf of a Customer, you represent that you have authority to bind that Customer.</p>

          <h2>1 &mdash; The Service</h2>
          <p>BiotrackOS is a health-data infrastructure platform that ingests, normalises, and surfaces connected-device, lab, genomic, epigenetic, and prescription data on behalf of Customer and its end users (&ldquo;Members&rdquo;). Specific features are described at biotrackos.com/product and in the applicable Order Form. BiotrackOS is not a medical device and does not provide medical advice, diagnosis, or treatment.</p>

          <h2>2 &mdash; Accounts</h2>
          <p>Customer is responsible for maintaining the confidentiality of all account credentials and for all activity that occurs under Customer&rsquo;s account. Customer must notify BiotrackOS immediately at security@biotrackos.com of any suspected unauthorised use or security breach.</p>

          <h2>3 &mdash; Customer responsibilities</h2>
          <p>Customer agrees to:</p>
          <ul>
            <li>Obtain and maintain valid, informed consent from each Member before connecting that Member&rsquo;s data sources, in compliance with all applicable laws.</li>
            <li>Configure appropriate access controls and ensure only authorised personnel access the Service.</li>
            <li>Comply with all applicable laws and regulations, including where relevant the UK Data Protection Act 2018, UK GDPR, EU GDPR, and HIPAA.</li>
            <li>Notify BiotrackOS promptly in writing of any actual or suspected security incident involving Member data.</li>
            <li>Not use the Service for any unlawful, abusive, or harmful purpose.</li>
          </ul>

          <h2>4 &mdash; Acceptable use</h2>
          <p>Customer must not: (a) reverse-engineer or attempt to extract the source code of the Service; (b) process data belonging to individuals who have not provided valid consent; (c) resell or sublicense the Service without express written permission from BiotrackOS; (d) use the Service to train third-party machine learning models; or (e) transmit malicious code or attempt to interfere with Service integrity or availability.</p>

          <h2>5 &mdash; Fees &amp; billing</h2>
          <p>Fees are set out in the applicable Order Form. Annual subscriptions auto-renew unless written notice of non-renewal is provided at least 30 days before the end of the subscription term. Usage overages are billed monthly in arrears. All fees are exclusive of VAT, sales tax, and other applicable taxes, which are Customer&rsquo;s responsibility.</p>

          <h2>6 &mdash; Service levels</h2>
          <p>BiotrackOS targets 99.9% monthly uptime for the Service, excluding scheduled maintenance windows communicated at least 48 hours in advance. If BiotrackOS fails to meet this target in any calendar month, Customer&rsquo;s sole remedy is a service credit as described in the SLA Addendum, capped at the fees paid for that month.</p>

          <h2>7 &mdash; Data &amp; intellectual property</h2>
          <p>Customer retains all rights, title, and interest in and to Member data. BiotrackOS retains all rights, title, and interest in and to the Service, including its software, models, algorithms, and aggregated or de-identified analytics that do not identify Customer or any Member. BiotrackOS will not sell, lease, or otherwise commercialise Member data. The BiotrackOS name, logo, and trademarks are the property of BiotrackOS and may not be used without prior written consent.</p>

          <h2>8 &mdash; Confidentiality</h2>
          <p>Each party agrees to protect the other&rsquo;s Confidential Information with at least the same standard of care it uses to protect its own confidential information, and no less than reasonable care, and not to disclose it to any third party except as necessary to perform obligations under these Terms or as required by law.</p>

          <h2>9 &mdash; Warranties &amp; disclaimers</h2>
          <p>BiotrackOS warrants that the Service will perform materially in accordance with its documentation under normal use and conditions. Except as expressly stated, the Service is provided &ldquo;as is&rdquo; and BiotrackOS disclaims all other warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. BiotrackOS does not warrant that the Service will be error-free or uninterrupted.</p>

          <h2>10 &mdash; Limitation of liability</h2>
          <p>To the maximum extent permitted by applicable law, neither party&rsquo;s aggregate liability to the other shall exceed the total fees paid by Customer in the twelve months immediately preceding the claim. Neither party shall be liable for indirect, incidental, consequential, special, or punitive damages, including loss of profits, loss of data, or business interruption, even if advised of the possibility of such damages.</p>

          <h2>11 &mdash; Termination</h2>
          <p>Either party may terminate these Terms for material breach that remains uncured 30 days after written notice identifying the breach. BiotrackOS may suspend access immediately where Customer&rsquo;s use poses a security risk or legal liability to BiotrackOS or third parties. Upon termination or expiry, BiotrackOS will make Customer&rsquo;s data available for export for 60 days, after which it will be irreversibly deleted and certified as such upon request.</p>

          <h2>12 &mdash; Governing law &amp; jurisdiction</h2>
          <p>These Terms are governed by the laws of [JURISDICTION], without regard to its conflict-of-law provisions. The courts of [JURISDICTION] shall have exclusive jurisdiction over disputes arising under these Terms, except where mandatory applicable law requires otherwise.</p>

          <h2>13 &mdash; Changes</h2>
          <p>BiotrackOS may update these Terms from time to time. Material changes will be communicated at least 30 days in advance via the Service and by email to the Customer&rsquo;s billing contact. Continued use of the Service after the effective date constitutes acceptance of the updated Terms.</p>

          <h2>14 &mdash; General</h2>
          <p>These Terms constitute the entire agreement between the parties on this subject matter and supersede all prior agreements. If any provision is unenforceable, it will be modified to the minimum extent necessary and the remainder will remain in effect. Neither party may assign these Terms without the other&rsquo;s prior written consent, except to an affiliate or in connection with a merger, acquisition, or sale of substantially all of its assets.</p>

          <h2>Contact</h2>
          <p>Legal enquiries: <strong>legal@biotrackos.com</strong> &middot; [REGISTERED ADDRESS].</p>
        </div>
      </section>
    </>
  );
}
