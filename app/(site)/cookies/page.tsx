import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Cookie policy — BiotrackOS" };

export default function CookiesPage() {
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
        .cookie-category { background: var(--surface); border: 1px solid var(--line); border-radius: 14px; padding: 24px; margin-bottom: 16px; }
        .cookie-category h3 { margin: 0 0 4px; display: flex; align-items: center; gap: 10px; }
        .cookie-badge { font-family: var(--font-mono); font-size: 9px; letter-spacing: .12em; text-transform: uppercase; padding: 3px 8px; border-radius: 999px; border: 1px solid; }
        .badge-required { color: var(--teal); border-color: var(--teal); background: var(--mint-soft); }
        .badge-optional { color: var(--muted); border-color: var(--line); background: var(--bg-2); }
        .cookie-category > p { margin: 8px 0 0; }
      `}</style>

      <section className="legal">
        <div className="wrap">
          <span className="eyebrow"><span className="dot"></span> Legal</span>
          <h1>Cookie <em>policy.</em></h1>
          <div className="meta">
            <span>Version 1.0</span>
            <span>Effective 17 May 2026</span>
          </div>

          <p style={{ marginTop: 24 }}>This Cookie Policy explains what cookies and similar tracking technologies BiotrackOS uses on biotrackos.com and within the platform. It applies to all visitors and users globally. For full details on how we handle your personal data, see our <Link href="/privacy">Privacy Policy</Link>.</p>

          <h2>What are cookies?</h2>
          <p>Cookies are small text files placed on your device when you visit a website or use an application. They are widely used to make sites work, to remember your preferences, and to provide information to the site owner about how visitors use their service. Similar technologies — such as local storage, pixels, and session tokens — work in a comparable way and are covered by this policy.</p>

          <h2>What we use</h2>

          <div className="cookie-category">
            <h3>Essential cookies <span className="cookie-badge badge-required">Always on</span></h3>
            <p>These cookies are necessary for the site and platform to function. They cannot be disabled. No personal health data is contained in these cookies.</p>
            <table>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>session</td>
                  <td>Maintains your authenticated session while logged in</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td>csrf_token</td>
                  <td>Protects against cross-site request forgery attacks</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td>cookie_consent</td>
                  <td>Stores your cookie preference choices</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>[ADD ANY OTHER ESSENTIAL COOKIES]</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cookie-category">
            <h3>Analytics &amp; performance cookies <span className="cookie-badge badge-optional">Requires consent (EU/UK)</span></h3>
            <p>These cookies help us understand how people use our website and platform so we can improve them. They collect information about pages visited, time spent, errors encountered, and navigation paths. This data is aggregated and does not identify you personally. These cookies are only placed with your consent where required by applicable law.</p>
            <table>
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Cookie / Technology</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>[ANALYTICS PROVIDER — e.g. Vercel Analytics]</td>
                  <td>[COOKIE NAME]</td>
                  <td>Page views, navigation paths, performance metrics</td>
                  <td>[DURATION]</td>
                </tr>
                <tr>
                  <td>[ANALYTICS PROVIDER — e.g. Google Analytics]</td>
                  <td>_ga, _ga_*</td>
                  <td>User sessions, traffic sources, page engagement</td>
                  <td>2 years / 13 months</td>
                </tr>
                <tr>
                  <td>[ADD ANY OTHER ANALYTICS COOKIES]</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Your choices</h2>
          <p>You can manage your cookie preferences at any time:</p>
          <ul>
            <li><strong>Cookie banner</strong> &mdash; when you first visit biotrackos.com, you will be shown a cookie consent banner (EU, UK, and other applicable regions). You can accept or decline non-essential cookies there.</li>
            <li><strong>Change preferences</strong> &mdash; [LINK TO COOKIE PREFERENCE CENTRE — to be implemented with your consent management tool]</li>
            <li><strong>Browser settings</strong> &mdash; most browsers allow you to block or delete cookies via their settings. Note that blocking essential cookies will prevent the platform from functioning correctly.</li>
            <li><strong>Opt-out tools</strong> &mdash; for Google Analytics, you can use the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>.</li>
          </ul>

          <h2>Third-party cookies</h2>
          <p>Some cookies on our site are set by third-party services (such as analytics providers). We do not control these cookies and they are governed by the privacy policies of the respective providers. Links to the relevant privacy policies are:</p>
          <ul>
            <li>[ANALYTICS PROVIDER — e.g. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>]</li>
            <li>[ADD OTHER THIRD-PARTY PROVIDERS AS APPLICABLE]</li>
          </ul>

          <h2>Do Not Track</h2>
          <p>Some browsers send a &ldquo;Do Not Track&rdquo; (DNT) signal. Currently there is no agreed industry standard for responding to DNT signals. We will update this policy when a standard is established.</p>

          <h2>Changes to this policy</h2>
          <p>We will update this policy when we add or remove cookies. Material changes will be communicated via our cookie banner and at biotrackos.com/cookies.</p>

          <h2>Contact</h2>
          <p>Cookie and privacy enquiries: <strong>privacy@biotrackos.com</strong></p>
        </div>
      </section>
    </>
  );
}
