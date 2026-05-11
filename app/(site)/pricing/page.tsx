import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pricing — BiotrackOS" };

export default function PricingPage() {
  return (
    <>
      <style>{`
        .pr-hero { padding: 80px 0 56px; border-bottom: 1px solid var(--line); }
        .pr-hero h1 em { color: var(--ink-2); font-style: italic; }
        .pr-hero .g { display: grid; grid-template-columns: 1.2fr 1fr; gap: 56px; align-items: end; }
        .pr-hero .audiences { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
        .pr-hero .audiences span { padding: 6px 12px; border: 1px solid var(--line); border-radius: 999px; background: var(--surface); font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-2); }
        .redirects { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 56px; padding-top: 40px; border-top: 1px solid var(--line); }
        .redirect-card { background: var(--surface); border: 1px solid var(--line); border-radius: 18px; padding: 24px; display: grid; grid-template-columns: 1fr auto; gap: 16px; align-items: center; transition: border-color .15s ease, transform .15s ease; text-decoration: none; color: inherit; }
        .redirect-card:hover { border-color: var(--ink); transform: translateY(-2px); }
        .redirect-card .l { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
        .redirect-card .t { font-family: var(--font-display); font-size: 22px; line-height: 1.15; margin: 6px 0 4px; }
        .redirect-card .s { font-size: 13px; color: var(--ink-2); margin: 0; }
        .redirect-card .ic { width: 48px; height: 48px; border-radius: 14px; background: var(--mint-soft); color: var(--teal); display: grid; place-items: center; font-family: var(--font-display); font-size: 20px; flex-shrink: 0; }
        .redirect-card .arrow { color: var(--teal); font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; }
        .tier-block { padding: 96px 0; border-bottom: 1px solid var(--line); }
        .tier-block .head { display: flex; justify-content: space-between; align-items: end; gap: 32px; flex-wrap: wrap; margin-bottom: 40px; }
        .tier-block h2 { font-family: var(--font-display); font-weight: 400; font-size: 56px; line-height: 1; margin: 12px 0 0; letter-spacing: -0.01em; }
        .tier-block h2 em { color: var(--ink-2); font-style: italic; }
        .tiers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .tier { background: var(--surface); border: 1px solid var(--line); border-radius: 22px; padding: 32px; display: flex; flex-direction: column; min-height: 600px; }
        .tier.dark { background: var(--ink); color: var(--bg); border-color: var(--ink); position: relative; }
        .tier.dark::after { content: "Most popular"; position: absolute; top: -10px; right: 24px; background: var(--lime); color: var(--ink); padding: 4px 12px; border-radius: 999px; font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; }
        .tier .name { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
        .tier.dark .name { color: #807C6F; }
        .tier .price { font-family: var(--font-display); font-size: 64px; line-height: 1; letter-spacing: -0.02em; margin: 18px 0 0; }
        .tier .price .per { font-family: var(--font-sans); font-size: 14px; color: var(--muted); margin-left: 8px; }
        .tier.dark .price .per { color: #807C6F; }
        .tier .desc { color: var(--muted); margin: 12px 0 6px; font-size: 14px; max-width: 36ch; }
        .tier.dark .desc { color: #C9C5B6; }
        .tier .for { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-2); margin: 18px 0 14px; padding-top: 14px; border-top: 1px dashed var(--line); }
        .tier.dark .for { color: #C9C5B6; border-color: #2A2F4A; }
        .tier ul { list-style: none; padding: 0; margin: 0 0 24px; display: grid; gap: 4px; }
        .tier li { display: grid; grid-template-columns: 18px 1fr; gap: 10px; padding: 10px 0; border-top: 1px dashed var(--line); font-size: 14px; }
        .tier.dark li { border-color: #2A2F4A; }
        .tier li::before { content:""; width: 12px; height: 12px; border-radius: 50%; background: var(--mint); margin-top: 4px; }
        .tier .actions { margin-top: auto; display: flex; flex-direction: column; gap: 8px; }
        .addon-hint { margin-top: 32px; padding: 20px 24px; border: 1px dashed var(--line); border-radius: 16px; display: grid; grid-template-columns: 1fr auto; gap: 16px; align-items: center; font-size: 14px; color: var(--ink-2); }
        .addon-hint strong { color: var(--ink); font-weight: 500; }
        .compare { padding: 96px 0; }
        .compare table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .compare th, .compare td { padding: 16px 12px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; }
        .compare th { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); font-weight: 500; }
        .compare th.tier-h { color: var(--ink); }
        .compare .check { color: var(--teal); }
        .compare .dash { color: var(--muted-2); }
        .compare .row-h { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); background: var(--bg-2); }
        .faq { padding: 96px 0; background: var(--bg-2); border-top: 1px solid var(--line); }
        .faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 40px; }
        .faq-item { padding: 20px 0; border-top: 1px solid var(--line); }
        .faq-item h5 { margin: 0 0 8px; font-size: 16px; font-weight: 500; }
        .faq-item p { margin: 0; color: var(--ink-2); font-size: 14px; }
        @media (max-width:1000px) { .pr-hero .g, .tiers, .faq-grid, .redirects { grid-template-columns: 1fr; } }
      `}</style>

      <section className="pr-hero">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Pricing · for teams &amp; organisations</span>
          <div className="g">
            <h1 className="h1" style={{marginTop:"16px"}}>Per-seat for teams.<br/><em>Per-cohort when it&rsquo;s bigger.</em></h1>
            <p className="lede">One plan for every team that runs care, performance, or risk on connected health data &mdash; from a two-clinician longevity lab to a national insurer.</p>
          </div>
          <div className="audiences">
            <span>Clinics</span><span>Longevity labs</span><span>Sports teams</span><span>Gyms &amp; coaching</span><span>Insurance</span><span>Corporate wellness</span><span>Research &amp; pharma</span><span>Public health</span>
          </div>
          <div className="redirects">
            <Link className="redirect-card" href="/app">
              <div>
                <div className="l">Looking for the app?</div>
                <div className="t">For people &mdash; not teams.</div>
                <p className="s">Free on iOS &amp; Android. Pro and Premium tiers for individuals running their own protocol.</p>
                <span className="arrow">See the consumer app &rarr;</span>
              </div>
              <div className="ic">&#x25CB;</div>
            </Link>
            <Link className="redirect-card" href="/platforms">
              <div>
                <div className="l">Looking for an SDK?</div>
                <div className="t">For platforms building on connected health.</div>
                <p className="s">Per-MAU pricing. One OAuth flow across every wearable. FHIR-native streams.</p>
                <span className="arrow">See platforms &amp; SDK &rarr;</span>
              </div>
              <div className="ic">&lt;/&gt;</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="tier-block">
        <div className="wrap-w">
          <div className="head">
            <div>
              <span className="eyebrow"><span className="dot"></span> Team plans</span>
              <h2>Three sizes.<br/><em>Same operating system.</em></h2>
            </div>
            <p style={{maxWidth:"38ch",color:"var(--muted)"}}>All plans include HIPAA, SOC 2, ISO 27001, FHIR exports, every connected source, and unlimited member records. You pay for the seats running care &mdash; not the people receiving it.</p>
          </div>
          <div className="tiers">
            <div className="tier">
              <div className="name">Starter</div>
              <div className="price">&euro;149<span className="per">/ seat / mo</span></div>
              <div className="desc">Get your first cohort live in days, not quarters.</div>
              <div className="for">For &mdash; Solo practitioners &middot; Small clinics &middot; Single-coach gyms &middot; Pilot programmes</div>
              <ul>
                <li>Up to 3 team seats</li>
                <li>Single cohort &amp; longitudinal record</li>
                <li>Standard rules &amp; alerts</li>
                <li>Branded member app</li>
                <li>FHIR &amp; CSV export</li>
                <li>Email support &middot; 14-day trial</li>
              </ul>
              <div className="actions">
                <Link className="btn btn-ghost" href="/contact">Start a trial</Link>
              </div>
            </div>
            <div className="tier dark">
              <div className="name">Team</div>
              <div className="price">&euro;349<span className="per">/ seat / mo</span></div>
              <div className="desc">For multi-clinician practices, sports teams, and longevity labs.</div>
              <div className="for">For &mdash; Longevity clinics &middot; Multi-clinician practices &middot; Pro sports teams &middot; Corporate wellness &middot; Mid-size insurers</div>
              <ul>
                <li>Unlimited team seats</li>
                <li>Unlimited cohorts &amp; programmes</li>
                <li>Custom rules, routing &amp; protocols</li>
                <li>EHR integrations (FHIR direct, CityEHR)</li>
                <li>White-label member app</li>
                <li>Marketplace add-ons (chat, risk calculators, scheduling)</li>
                <li>Priority support &amp; 99.95% SLA</li>
              </ul>
              <div className="actions">
                <Link className="btn btn-accent" href="/contact">Book a walkthrough &rarr;</Link>
              </div>
            </div>
            <div className="tier">
              <div className="name">Enterprise</div>
              <div className="price">Custom<span className="per">talk to us</span></div>
              <div className="desc">For insurers, hospital systems, sports federations, and research programmes at scale.</div>
              <div className="for">For &mdash; National insurers &middot; Hospital systems &middot; Sports federations &middot; Pharma &amp; clinical research &middot; Public-health programmes</div>
              <ul>
                <li>Volume seat &amp; per-cohort pricing</li>
                <li>Aggregate-only population dashboards</li>
                <li>Single-tenant deployment &middot; EU residency</li>
                <li>SCIM &amp; SSO &middot; advanced audit</li>
                <li>Custom integrations &amp; webhooks</li>
                <li>Dedicated CSM &middot; on-site rollout</li>
                <li>99.99% SLA &middot; named TAM</li>
              </ul>
              <div className="actions">
                <Link className="btn btn-primary" href="/contact">Contact sales &rarr;</Link>
              </div>
            </div>
          </div>
          <div className="addon-hint">
            <div><strong>Need more?</strong> Switch on add-ons by market &mdash; chat, CV risk calculators, claims, white-labeling, HRV coaching, aggregate dashboards. Billed as line items on any plan.</div>
            <Link className="btn btn-ghost" href="/marketplace#addons">See add-ons &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="compare">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Compare team plans</span>
          <h2 className="h1" style={{marginTop:"16px",maxWidth:"18ch"}}>All the details<br/>in one table.</h2>
          <table style={{marginTop:"32px"}}>
            <thead>
              <tr>
                <th></th>
                <th className="tier-h">Starter</th>
                <th className="tier-h">Team</th>
                <th className="tier-h">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row-h"><td colSpan={4}>Data &amp; sync</td></tr>
              <tr><td>Every connected source &mdash; wearables, labs, genomics, Rx</td><td className="check">&#9679;</td><td className="check">&#9679;</td><td className="check">&#9679;</td></tr>
              <tr><td>Unlimited longitudinal record per member</td><td className="check">&#9679;</td><td className="check">&#9679;</td><td className="check">&#9679;</td></tr>
              <tr><td>Custom rules, routing &amp; protocols</td><td>Standard</td><td className="check">Custom</td><td className="check">Custom</td></tr>
              <tr className="row-h"><td colSpan={4}>Team capabilities</td></tr>
              <tr><td>Team seats</td><td>Up to 3</td><td className="check">Unlimited</td><td className="check">Unlimited</td></tr>
              <tr><td>Cohort dashboards</td><td>1 cohort</td><td className="check">Unlimited</td><td className="check">Unlimited</td></tr>
              <tr><td>Member app</td><td>Branded</td><td>White-label</td><td>White-label</td></tr>
              <tr><td>EHR integrations</td><td className="dash">&mdash;</td><td className="check">&#9679;</td><td className="check">&#9679;</td></tr>
              <tr><td>Marketplace add-ons</td><td>Selected</td><td className="check">All</td><td className="check">All + bespoke</td></tr>
              <tr className="row-h"><td colSpan={4}>Compliance &amp; security</td></tr>
              <tr><td>HIPAA &middot; SOC 2 &middot; ISO 27001</td><td className="check">&#9679;</td><td className="check">&#9679;</td><td className="check">&#9679;</td></tr>
              <tr><td>EU residency / single-tenant</td><td className="dash">&mdash;</td><td className="dash">&mdash;</td><td className="check">&#9679;</td></tr>
              <tr><td>SCIM &middot; SSO &middot; advanced audit</td><td className="dash">&mdash;</td><td>SSO</td><td className="check">Full</td></tr>
              <tr className="row-h"><td colSpan={4}>Support</td></tr>
              <tr><td>Support channel</td><td>Email</td><td>Priority &middot; Slack</td><td>Named CSM &middot; TAM</td></tr>
              <tr><td>SLA</td><td>Best-effort</td><td>99.95%</td><td>99.99%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="faq">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Questions, briefly</span>
          <h2 className="h1" style={{marginTop:"16px",maxWidth:"20ch"}}>Things we get asked<br/>more than once a week.</h2>
          <div className="faq-grid">
            <div className="faq-item"><h5>Do you sell or share member data?</h5><p>No. Subscription is our only business model. Read our trust page for the audit trail and policies behind every byte.</p></div>
            <div className="faq-item"><h5>Does BiotrackOS replace our EHR?</h5><p>No &mdash; and it shouldn&rsquo;t. We sit beside it, feeding it deduped, FHIR-formatted continuous data via integration.</p></div>
            <div className="faq-item"><h5>Is there a free tier for teams?</h5><p>No, but every plan has a 14-day trial including a guided walkthrough with our onboarding crew. Members on your team always get the free consumer app.</p></div>
            <div className="faq-item"><h5>How do you charge insurers and corporates?</h5><p>Enterprise plans are volume-priced per active member, not per seat. Aggregate-only dashboards never expose individual data.</p></div>
            <div className="faq-item"><h5>How long does a team rollout take?</h5><p>Most customers go live in 2&ndash;5 days. The Continuum case study walks through a Friday-to-Monday rollout.</p></div>
            <div className="faq-item"><h5>What about the consumer app and the SDK?</h5><p>Different products, different pricing. <Link href="/app">App pricing →</Link> &middot; <Link href="/platforms">SDK pricing →</Link></p></div>
          </div>
        </div>
      </section>
    </>
  );
}
