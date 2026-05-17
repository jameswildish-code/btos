import type { Metadata } from "next";

export const metadata: Metadata = { title: "Company — BiotrackOS" };

export default function AboutPage() {
  return (
    <>
      <style>{`
        .a-hero { padding: 80px 0 96px; }
        .a-hero h1 em { font-style: italic; color: var(--ink-2); }
        .manifesto { display:grid; grid-template-columns: 1fr 1fr; gap: 64px; margin-top: 64px; align-items: start; }
        .manifesto p { font-size: 19px; line-height: 1.55; color: var(--ink-2); }
        .principles { padding: 96px 0; background: var(--bg-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .pri { display:grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 40px; }
        .pri .p { padding: 32px 0 0; border-top: 1px solid var(--ink); }
        .pri .n { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; color: var(--muted); margin-bottom: 24px; }
        .pri h4 { font-family: var(--font-display); font-weight: 400; font-size: 32px; line-height: 1.02; margin: 0 0 12px; }
        .pri p  { color: var(--ink-2); margin: 0; }
        .founder { padding: 96px 0; border-top: 1px solid var(--line); }
        .founder-grid { display: grid; grid-template-columns: 280px 1fr; gap: 80px; align-items: start; margin-top: 48px; }
        .founder-ava { width: 100%; aspect-ratio: 1/1; border-radius: 20px; background: linear-gradient(135deg, var(--mint) 0%, var(--mint-soft) 100%); display: grid; place-items: center; font-family: var(--font-display); font-size: 96px; color: var(--teal); }
        .founder-name { font-size: 17px; font-weight: 500; margin: 16px 0 4px; }
        .founder-role { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
        .founder-message { font-family: var(--font-display); font-weight: 400; font-size: 26px; line-height: 1.35; letter-spacing: -0.01em; color: var(--ink-2); }
        .founder-message em { font-style: italic; color: var(--ink); }
        .founder-sig { margin-top: 40px; font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
        .group { padding: 80px 0; background: var(--bg-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        @media (max-width:1000px) {
          .manifesto, .pri, .founder-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>

      <section className="a-hero">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Company</span>
          <h1 className="h-display" style={{marginTop:"16px"}}>A company built<br/>so a body can <em>be<br/>understood</em> in one place.</h1>
          <div className="manifesto">
            <p>BiotrackOS started in 2023, but the problem had been building for years. After founding a corporate health platform that was later acquired, bringing a wearable to market, and being approached — again and again — to monitor populations, connect patient devices, and build data donation platforms, the pattern became impossible to ignore.</p>
            <p>The data was never the problem. The infrastructure was. BiotrackOS was built to be that infrastructure — not another device, not another app, but the layer that connects every source, respects every person, and gives the right information to the right place.</p>
          </div>
        </div>
      </section>

      <section className="principles">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Principles</span>
          <h2 className="h1" style={{marginTop:"16px",maxWidth:"18ch"}}>Five rules we won&apos;t break.</h2>
          <div className="pri">
            <div className="p">
              <div className="n">01</div>
              <h4>One record per person.</h4>
              <p>A body has one history. Our job is to make sure the software treats it that way.</p>
            </div>
            <div className="p">
              <div className="n">02</div>
              <h4>Consent is the API.</h4>
              <p>Nothing leaves a person&apos;s record without their permission — granular, revocable, audit-logged.</p>
            </div>
            <div className="p">
              <div className="n">03</div>
              <h4>Signal over surveillance.</h4>
              <p>We build for the data that changes a decision, not the data that scrolls.</p>
            </div>
            <div className="p">
              <div className="n">04</div>
              <h4>Built right, or not at all.</h4>
              <p>Security, compliance, and data integrity are floors, not features. We don&apos;t ship around them.</p>
            </div>
            <div className="p" style={{gridColumn:"span 2"}}>
              <div className="n">05</div>
              <h4>We make money when our customers do.</h4>
              <p>No ads, no data resale, no surprise upcharges. Subscription is the only business model we know how to be proud of.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="founder">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Founder</span>
          <div className="founder-grid">
            <div>
              <div className="founder-ava">JW</div>
              <div className="founder-name">James Wildish</div>
              <div className="founder-role">Founder</div>
            </div>
            <div>
              <p className="founder-message">
                &ldquo;I&apos;ve spent the last decade building in health. A corporate wellness platform, a wearable, and more conversations than I can count with clinics, research teams, and organisations all trying to do the same thing — <em>use the data they already had.</em>
                <br/><br/>
                The data was never the problem. The infrastructure was.
                <br/><br/>
                BiotrackOS is the company I kept wishing existed. Not another device. Not another app. The layer that connects everything, respects the person behind every data point, and gives the right information to the right place. We&apos;re building it properly, and we&apos;re not stopping until it works.&rdquo;
              </p>
              <div className="founder-sig">— James Wildish, Founder</div>
            </div>
          </div>
        </div>
      </section>

      <section className="group">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Group</span>
          <h2 className="h1" style={{marginTop:"16px",maxWidth:"22ch"}}>Part of The Original Fit Factory.</h2>
          <p style={{marginTop:24,fontSize:19,lineHeight:1.55,color:"var(--ink-2)",maxWidth:"56ch"}}>BiotrackOS sits within The Original Fit Factory — a group with deep roots in health, fitness, and performance. That foundation shapes how we build: with domain knowledge, long-term thinking, and a genuine stake in getting health data right.</p>
          <p style={{marginTop:32,fontSize:16,lineHeight:1.6,color:"var(--ink-2)",maxWidth:"56ch"}}>Our clinical direction is shaped by <strong>The One Health Collective</strong> — our clinician advisory network, bringing together practitioners across medicine, research, and performance. <span style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".12em",textTransform:"uppercase",background:"var(--mint-soft)",color:"var(--teal)",padding:"2px 8px",borderRadius:999,marginLeft:4}}>Coming soon</span></p>
        </div>
      </section>
    </>
  );
}
