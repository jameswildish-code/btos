"use client";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <style>{`
        .c-hero { padding: 72px 0 56px; border-bottom: 1px solid var(--line); }
        .c-hero .g { display: grid; grid-template-columns: 1.3fr 1fr; gap: 64px; align-items: end; }
        .c-hero h1 em { color: var(--ink-2); font-style: italic; }
        .contact-body { padding: 80px 0; }
        .contact-body .layout { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: start; }
        .channels { display: grid; gap: 12px; }
        .ch {
          display: grid; grid-template-columns: 56px 1fr auto; gap: 16px;
          padding: 20px; background: var(--surface); border: 1px solid var(--line); border-radius: 18px; align-items: center;
          transition: border-color .15s ease, background .15s ease; text-decoration: none; color: inherit;
        }
        .ch:hover { border-color: var(--ink); }
        .ch .badge {
          width: 56px; height: 56px; border-radius: 14px;
          display: grid; place-items: center;
          font-family: var(--font-display); font-size: 28px;
        }
        .ch .badge.mint  { background: var(--mint-soft); color: var(--teal); }
        .ch .badge.sky   { background: var(--sky); color: #2A6FDB; }
        .ch .badge.sand  { background: #FFF1C7; color: #9A7B1A; }
        .ch .badge.coral { background: #F4CFCB; color: #C46A6A; }
        .ch h4 { margin: 0 0 4px; font-size: 17px; font-weight: 500; }
        .ch p { margin: 0; color: var(--muted); font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
        .ch .go { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink); white-space: nowrap; }
        .form-card {
          background: var(--ink); color: var(--bg); border-radius: 22px; padding: 40px;
          position: relative; overflow: hidden;
        }
        .form-card::before {
          content:""; position: absolute; inset: 0;
          background: radial-gradient(ellipse at top right, rgba(47,191,163,.15), transparent 60%);
        }
        .form-card > * { position: relative; }
        .form-card h3 { font-family: var(--font-display); font-weight: 400; font-size: 32px; line-height: 1.05; letter-spacing: -0.01em; margin: 0 0 8px; }
        .form-card p  { color: #C9C5B6; margin: 0 0 24px; max-width: 36ch; font-size: 14px; }
        .form-card form { display: grid; gap: 14px; }
        .form-card label { display: grid; gap: 6px; font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #807C6F; }
        .form-card input,
        .form-card select,
        .form-card textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          color: var(--bg);
          padding: 12px 14px; border-radius: 12px;
          font: inherit; font-size: 15px;
        }
        .form-card input:focus,
        .form-card select:focus,
        .form-card textarea:focus {
          outline: 1px solid var(--teal-bright); border-color: var(--teal-bright);
        }
        .form-card select option { background: #1a1f36; color: var(--bg); }
        .form-card .row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .form-card textarea { min-height: 110px; resize: vertical; }
        .form-card button { margin-top: 8px; }
        .offices { padding: 80px 0; border-top: 1px solid var(--line); background: var(--bg-2); }
        .off-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 40px; }
        .off { padding: 24px 0; border-top: 1px solid var(--ink); }
        .off .city { font-family: var(--font-display); font-size: 32px; line-height: 1; }
        .off p { color: var(--ink-2); margin: 12px 0; font-size: 14px; line-height: 1.5; }
        .off .meta { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
        @media (max-width:1000px) { .contact-body .layout, .off-grid, .c-hero .g { grid-template-columns: 1fr; gap: 32px; } }
      `}</style>

      <section className="c-hero">
        <div className="wrap-w">
          <div className="g">
            <div>
              <span className="eyebrow"><span className="dot"></span> Contact</span>
              <h1 className="h1">Say hello to a quiet,<br/><em>responsive</em> team.</h1>
            </div>
            <p className="lede">Most inboxes here are answered in under four hours, Monday through Friday, in Copenhagen, London, and Lisbon time zones.</p>
          </div>
        </div>
      </section>

      <section className="contact-body">
        <div className="wrap-w">
          <div className="layout">
            <div>
              <span className="eyebrow"><span className="dot"></span> Direct channels</span>
              <h2 className="h2" style={{marginTop:"12px",marginBottom:"24px"}}>Pick the right door.</h2>
              <div className="channels">
                <a className="ch" href="#form">
                  <div className="badge mint">✦</div>
                  <div>
                    <h4>Sales &amp; clinic walkthroughs</h4>
                    <p>sales@biotrackos.com · ~4h response</p>
                  </div>
                  <div className="go">Book a demo →</div>
                </a>
                <a className="ch" href="mailto:support@biotrackos.com">
                  <div className="badge sky">♡</div>
                  <div>
                    <h4>Customer support</h4>
                    <p>support@biotrackos.com · live chat in-app</p>
                  </div>
                  <div className="go">Email →</div>
                </a>
                <a className="ch" href="mailto:partners@biotrackos.com">
                  <div className="badge sand">⌘</div>
                  <div>
                    <h4>Partnerships &amp; integrations</h4>
                    <p>partners@biotrackos.com</p>
                  </div>
                  <div className="go">Email →</div>
                </a>
                <a className="ch" href="mailto:press@biotrackos.com">
                  <div className="badge coral">⊕</div>
                  <div>
                    <h4>Press &amp; research</h4>
                    <p>press@biotrackos.com · brand kit available</p>
                  </div>
                  <div className="go">Email →</div>
                </a>
                <a className="ch" href="mailto:security@biotrackos.com">
                  <div className="badge mint">▲</div>
                  <div>
                    <h4>Security disclosures</h4>
                    <p>security@biotrackos.com · PGP key on file</p>
                  </div>
                  <div className="go">Email →</div>
                </a>
              </div>
            </div>

            <div className="form-card" id="form">
              <span className="eyebrow" style={{color:"#807C6F"}}><span className="dot"></span> Talk to sales</span>
              <h3 style={{marginTop:"12px"}}>Tell us a little about your team.</h3>
              <p>We&apos;ll route you to the right person and reply within four working hours.</p>
              <form onSubmit={(e) => { e.preventDefault(); const btn = e.currentTarget.querySelector('button'); if (btn) btn.textContent = 'Sent ✓'; }}>
                <div className="row2">
                  <label>First name<input type="text" placeholder="Sofia" /></label>
                  <label>Last name<input type="text" placeholder="Holm" /></label>
                </div>
                <label>Work email<input type="email" placeholder="you@clinic.com" /></label>
                <label>Organization<input type="text" placeholder="Continuum Longevity" /></label>
                <div className="row2">
                  <label>You are a<select>
                    <option>Longevity clinic</option>
                    <option>Performance coach / gym</option>
                    <option>Insurer / payer</option>
                    <option>Corporate wellness</option>
                    <option>Consumer (Premium)</option>
                    <option>Other</option>
                  </select></label>
                  <label>Team size<select>
                    <option>1–10</option>
                    <option>11–50</option>
                    <option>51–200</option>
                    <option>201–1,000</option>
                    <option>1,000+</option>
                  </select></label>
                </div>
                <label>What are you hoping to do?<textarea placeholder="A short note is fine — what you're trying to fix, when you'd like to be live, who else needs to be in the conversation."></textarea></label>
                <button className="btn btn-accent" type="submit">Send → we reply in ~4h</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="offices">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Offices</span>
          <h2 className="h1" style={{marginTop:"16px",maxWidth:"18ch"}}>Three rooms,<br/>one company.</h2>
          <div className="off-grid">
            <div className="off">
              <div className="city">Copenhagen</div>
              <p>Pilestræde 28, 1112 København K<br/>Denmark</p>
              <span className="meta">HQ · Engineering · Clinical</span>
            </div>
            <div className="off">
              <div className="city">London</div>
              <p>4 Soho Square, W1D 3QB<br/>United Kingdom</p>
              <span className="meta">Sales · Customer Success</span>
            </div>
            <div className="off">
              <div className="city">Lisbon</div>
              <p>Rua da Boavista 84, 1200-070<br/>Portugal</p>
              <span className="meta">Engineering · Design</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
