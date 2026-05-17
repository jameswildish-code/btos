"use client";
import type { Metadata } from "next";
import { useState } from "react";

const STYLES = `
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
  .terms-tabs { display: inline-flex; padding: 5px; background: var(--surface); border: 1px solid var(--line); border-radius: 999px; gap: 4px; margin-top: 32px; }
  .terms-tabs button { padding: 10px 20px; border-radius: 999px; border: 0; background: transparent; font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-2); cursor: pointer; transition: background .15s, color .15s; }
  .terms-tabs button.on { background: var(--ink); color: var(--bg); }
`;

function PlatformTerms() {
  return (
    <>
      <div className="meta">
        <span>Platform terms · For organisations</span>
        <span>Version 1.0 · Effective 17 May 2026</span>
      </div>

      <p style={{ marginTop: 24 }}>These Platform Terms of Service (&ldquo;Terms&rdquo;) govern your organisation&rsquo;s access to and use of the BiotrackOS platform dashboard and API (&ldquo;Service&rdquo;) operated by [ENTITY NAME] (&ldquo;BiotrackOS&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;). By signing an Order Form, creating an account, or otherwise using the Service, the organisation identified (&ldquo;Customer&rdquo;) agrees to these Terms in full. If you are entering into these Terms on behalf of a Customer, you represent that you have authority to bind that Customer. These Terms do not apply to individual end users of the BiotrackOS personal app — see the <strong>Personal App Terms</strong> tab above.</p>

      <h2>1 &mdash; The Service</h2>
      <p>BiotrackOS is a health-data infrastructure platform that ingests, normalises, and surfaces connected-device, lab, genomic, epigenetic, and prescription data on behalf of Customer and its end users (&ldquo;Members&rdquo;). Specific features are described at biotrackos.com/product and in the applicable Order Form. BiotrackOS is not a medical device and does not provide medical advice, diagnosis, or treatment.</p>

      <h2>2 &mdash; Accounts</h2>
      <p>Customer is responsible for maintaining the confidentiality of all account credentials and for all activity under Customer&rsquo;s account. Customer must notify BiotrackOS immediately at security@biotrackos.com of any suspected unauthorised use or security breach.</p>

      <h2>3 &mdash; Customer responsibilities</h2>
      <ul>
        <li>Obtain and maintain valid, informed consent from each Member before connecting that Member&rsquo;s data sources, in compliance with all applicable laws.</li>
        <li>Configure appropriate access controls and ensure only authorised personnel access the Service.</li>
        <li>Comply with all applicable laws and regulations in the jurisdictions you operate in, including UK GDPR, EU GDPR, HIPAA, the Australian Privacy Act 1988, and any other relevant data protection legislation.</li>
        <li>Notify BiotrackOS promptly in writing of any actual or suspected security incident involving Member data.</li>
        <li>Not use the Service for any unlawful, abusive, or harmful purpose.</li>
      </ul>

      <h2>4 &mdash; Acceptable use</h2>
      <p>Customer must not: (a) reverse-engineer or attempt to extract the source code of the Service; (b) process data belonging to individuals who have not provided valid consent; (c) resell or sublicense the Service without express written permission; (d) use the Service to train third-party machine learning models; or (e) transmit malicious code or attempt to interfere with Service integrity or availability.</p>

      <h2>5 &mdash; Fees &amp; billing</h2>
      <p>Fees are set out in the applicable Order Form. Annual subscriptions auto-renew unless written notice of non-renewal is provided at least 30 days before the end of the subscription term. Usage overages are billed monthly in arrears. All fees are exclusive of VAT, GST, sales tax, and other applicable taxes, which are Customer&rsquo;s responsibility.</p>

      <h2>6 &mdash; Service levels</h2>
      <p>BiotrackOS targets 99.9% monthly uptime for the Service, excluding scheduled maintenance windows communicated at least 48 hours in advance. If BiotrackOS fails to meet this target in any calendar month, Customer&rsquo;s sole remedy is a service credit as described in the SLA Addendum, capped at the fees paid for that month.</p>

      <h2>7 &mdash; Data &amp; intellectual property</h2>
      <p>Customer retains all rights, title, and interest in and to Member data. BiotrackOS retains all rights, title, and interest in and to the Service, including its software, models, algorithms, and aggregated or de-identified analytics that do not identify Customer or any Member. BiotrackOS will not sell, lease, or otherwise commercialise Member data. The BiotrackOS name, logo, and trademarks may not be used without prior written consent.</p>

      <h2>8 &mdash; Confidentiality</h2>
      <p>Each party agrees to protect the other&rsquo;s Confidential Information with at least the same standard of care it uses to protect its own, and no less than reasonable care, and not to disclose it to any third party except as necessary to perform obligations under these Terms or as required by law.</p>

      <h2>9 &mdash; Indemnification</h2>
      <p>Customer agrees to indemnify and hold harmless BiotrackOS, its officers, directors, and employees from any claims, damages, or costs (including reasonable legal fees) arising from: (a) Customer&rsquo;s breach of these Terms; (b) Customer&rsquo;s violation of any applicable law; or (c) Customer&rsquo;s failure to obtain valid Member consents.</p>

      <h2>10 &mdash; Warranties &amp; disclaimers</h2>
      <p>BiotrackOS warrants that the Service will perform materially in accordance with its documentation under normal use. Except as expressly stated, the Service is provided &ldquo;as is&rdquo; and BiotrackOS disclaims all other warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. BiotrackOS does not warrant that the Service will be error-free or uninterrupted.</p>

      <h2>11 &mdash; Limitation of liability</h2>
      <p>To the maximum extent permitted by applicable law, neither party&rsquo;s aggregate liability to the other shall exceed the total fees paid by Customer in the twelve months immediately preceding the claim. Neither party shall be liable for indirect, incidental, consequential, special, or punitive damages, including loss of profits, loss of data, or business interruption, even if advised of the possibility of such damages.</p>

      <h2>12 &mdash; Force majeure</h2>
      <p>Neither party shall be liable for delays or failures in performance resulting from causes beyond their reasonable control, including natural disasters, acts of government, pandemics, or internet infrastructure failures, provided the affected party gives prompt written notice and uses reasonable efforts to resume performance.</p>

      <h2>13 &mdash; Termination</h2>
      <p>Either party may terminate these Terms for material breach that remains uncured 30 days after written notice identifying the breach. BiotrackOS may suspend access immediately where Customer&rsquo;s use poses a security risk or legal liability. Upon termination or expiry, BiotrackOS will make Customer&rsquo;s data available for export for 60 days, after which it will be irreversibly deleted and certified as such upon request.</p>

      <h2>14 &mdash; Governing law &amp; jurisdiction</h2>
      <p>These Terms are governed by the laws of [JURISDICTION], without regard to its conflict-of-law provisions. The courts of [JURISDICTION] shall have exclusive jurisdiction over disputes arising under these Terms, except where mandatory applicable law requires otherwise. Customers in the EU may also have rights under mandatory local consumer and commercial law.</p>

      <h2>15 &mdash; Changes</h2>
      <p>BiotrackOS may update these Terms from time to time. Material changes will be communicated at least 30 days in advance via the Service and by email to the Customer&rsquo;s billing contact. Continued use of the Service after the effective date constitutes acceptance of the updated Terms.</p>

      <h2>16 &mdash; General</h2>
      <p>These Terms constitute the entire agreement between the parties on this subject matter and supersede all prior agreements. If any provision is unenforceable, it will be modified to the minimum extent necessary and the remainder will remain in effect. Neither party may assign these Terms without the other&rsquo;s prior written consent, except to an affiliate or in connection with a merger, acquisition, or sale of substantially all of its assets.</p>

      <h2>Contact</h2>
      <p>Legal enquiries: <strong>legal@biotrackos.com</strong> &middot; Enterprise agreements, custom DPAs, and HIPAA BAAs are available on request. &middot; [REGISTERED ADDRESS].</p>
    </>
  );
}

function AppTerms() {
  return (
    <>
      <div className="meta">
        <span>Personal app terms · For individuals</span>
        <span>Version 1.0 · Effective 17 May 2026</span>
      </div>

      <p style={{ marginTop: 24 }}>These Personal App Terms (&ldquo;Terms&rdquo;) govern your individual use of the BiotrackOS mobile application and personal health record (&ldquo;App&rdquo;) operated by [ENTITY NAME] (&ldquo;BiotrackOS&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;). If you are accessing BiotrackOS as an employee or member of an organisation, the organisation&rsquo;s agreement with BiotrackOS also applies — see the <strong>Platform Terms</strong> tab above.</p>

      <h2>1 &mdash; The App</h2>
      <p>The BiotrackOS App lets you connect your health data sources — including wearables, lab results, genomic reports, and medication records — into one personal longitudinal health record. The App is not a medical device. It does not provide medical advice, clinical diagnosis, or treatment recommendations. Always consult a qualified healthcare professional for medical decisions.</p>

      <h2>2 &mdash; Eligibility</h2>
      <p>You must be at least 18 years old to create a BiotrackOS account. In the EU and UK, individuals aged 16 and over may use the App with appropriate consent. If you are under the applicable age in your jurisdiction, you must have verifiable parental or guardian consent before creating an account. We reserve the right to terminate accounts found to be in breach of this requirement.</p>

      <h2>3 &mdash; Your account</h2>
      <p>You are responsible for keeping your login credentials confidential and for all activity under your account. Notify us immediately at security@biotrackos.com if you suspect unauthorised access. You may not transfer or share your account with any other person.</p>

      <h2>4 &mdash; Your data</h2>
      <p>You own your health data. BiotrackOS acts as a custodian — we store and present it back to you, and to any health professional or organisation you explicitly authorise. We will never access, use, or share your health data without your consent, except where required by law. You can withdraw consent for any connected source at any time from within the App. A full description of how we handle your data is in our <a href="/privacy">Privacy Policy</a>.</p>

      <h2>5 &mdash; Connecting data sources</h2>
      <p>When you connect a third-party service (such as a wearable, lab, or health provider), you are authorising BiotrackOS to retrieve data from that service on your behalf. You should review the terms and privacy policy of each third-party service you connect. BiotrackOS is not responsible for the data practices of third-party services.</p>

      <h2>6 &mdash; Subscription &amp; payments</h2>
      <p>[PLACEHOLDER — to be completed when consumer subscription pricing is confirmed. Include: pricing, billing cycle, free trial terms if applicable, cancellation terms, and refund policy.] Payments are processed securely via Stripe. We do not store your payment card details.</p>

      <h2>7 &mdash; Cancellation &amp; deletion</h2>
      <p>You may cancel your subscription and delete your account at any time from within the App or by contacting support@biotrackos.com. Upon deletion, your personal data will be permanently removed within 30 days, except where we are required by law to retain certain records. You can request an export of your data before deletion.</p>

      <h2>8 &mdash; Your consumer rights</h2>
      <p>If you are a consumer located in the EU or UK, you have rights under applicable consumer protection law that these Terms do not limit or exclude:</p>
      <ul>
        <li><strong>EU consumers:</strong> you have a 14-day right of withdrawal from the date of purchase for digital services not yet begun. Your statutory rights under EU consumer law apply in full.</li>
        <li><strong>UK consumers:</strong> your rights under the Consumer Rights Act 2015 and Consumer Contracts Regulations 2013 apply in full.</li>
        <li><strong>Australian consumers:</strong> your rights under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010) apply in full and are not excluded by these Terms.</li>
      </ul>

      <h2>9 &mdash; App Store terms</h2>
      <p>The App is distributed via the Apple App Store and Google Play Store. Your download and use of the App is also subject to the terms of the relevant app store. Apple and Google are not parties to these Terms and have no obligation to provide support or maintenance for the App. In the event of any conflict between these Terms and the applicable app store terms, these Terms prevail to the extent permitted.</p>

      <h2>10 &mdash; Acceptable use</h2>
      <p>You must not use the App to: (a) upload or share data belonging to any other person without their consent; (b) attempt to reverse-engineer or extract any part of the App; (c) use the App in any way that violates applicable law; or (d) interfere with the security or integrity of the App or its infrastructure.</p>

      <h2>11 &mdash; Disclaimers</h2>
      <p>The App is provided &ldquo;as is&rdquo;. BiotrackOS does not guarantee the accuracy, completeness, or timeliness of any health data processed through the App. The App is a tool for data aggregation and personal insight only — it is not a substitute for professional medical advice. To the extent permitted by applicable law, BiotrackOS excludes all liability for decisions made on the basis of information in the App.</p>

      <h2>12 &mdash; Limitation of liability</h2>
      <p>To the maximum extent permitted by applicable consumer law, BiotrackOS&rsquo;s liability to you for any claim arising from your use of the App is limited to the amount you paid us in the three months preceding the claim. Nothing in these Terms limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded by law.</p>

      <h2>13 &mdash; Governing law</h2>
      <p>If you are a consumer in the EU, UK, or Australia, you have the right to bring a claim in the courts of your country of residence, and the mandatory consumer protection laws of your country apply regardless of any other governing law clause. For all other users, these Terms are governed by the laws of [JURISDICTION].</p>

      <h2>14 &mdash; Changes</h2>
      <p>We will notify you of material changes to these Terms at least 30 days in advance via the App and by email. If you do not accept the changes, you may cancel your account before the effective date. Continued use after the effective date constitutes acceptance.</p>

      <h2>Contact</h2>
      <p>Support: <strong>support@biotrackos.com</strong><br />Data &amp; privacy: <strong>dpo@biotrackos.com</strong><br />[REGISTERED ADDRESS]</p>
    </>
  );
}

export default function TermsPage() {
  const [tab, setTab] = useState<"platform" | "app">("platform");

  return (
    <>
      <style>{STYLES}</style>

      <section className="legal">
        <div className="wrap">
          <span className="eyebrow"><span className="dot"></span> Legal</span>
          <h1>Terms of <em>service.</em></h1>

          <div className="terms-tabs">
            <button className={tab === "platform" ? "on" : ""} onClick={() => setTab("platform")}>Platform</button>
            <button className={tab === "app" ? "on" : ""} onClick={() => setTab("app")}>Personal app</button>
          </div>

          {tab === "platform" ? <PlatformTerms /> : <AppTerms />}
        </div>
      </section>
    </>
  );
}
