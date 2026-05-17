"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const ZONES = [
  { id: "europe",   label: "Europe",       tz: "Europe/London"    },
  { id: "gulf",     label: "Gulf",         tz: "Asia/Dubai"       },
  { id: "americas", label: "Americas",     tz: "America/New_York" },
  { id: "apac",     label: "Asia Pacific", tz: "Australia/Sydney" },
];

function getTimes() {
  const out: Record<string, string> = {};
  ZONES.forEach(z => {
    out[z.id] = new Date().toLocaleTimeString("en-GB", { timeZone: z.tz, hour: "2-digit", minute: "2-digit", hour12: false });
  });
  return out;
}

function WorldClocks() {
  const [times, setTimes] = useState<Record<string, string>>({});
  useEffect(() => {
    setTimes(getTimes());
    const t = setInterval(() => setTimes(getTimes()), 30000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="tz-grid">
      {ZONES.map((z, i) => (
        <div key={z.id} className="tz-item" style={i > 0 ? { borderLeft: "1px solid rgba(255,255,255,.1)" } : {}}>
          <div className="tz-time">{times[z.id] ?? "——"}</div>
          <div className="tz-region">{z.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <style>{`
        .c-hero { padding: 72px 0 56px; border-bottom: 1px solid var(--line); }
        .c-hero h1 em { color: var(--ink-2); font-style: italic; }
        .contact-body { padding: 80px 0; }
        .contact-body .layout { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: start; }
        .channels { display: grid; gap: 12px; }
        .ch {
          display: grid; grid-template-columns: 56px 1fr auto; gap: 16px;
          padding: 20px; background: var(--surface); border: 1px solid var(--line); border-radius: 18px; align-items: center;
          transition: border-color .15s ease; text-decoration: none; color: inherit;
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
        .ch .badge.lime  { background: #F0FAD0; color: #6B9E1A; }
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
        .form-card h3 { font-family: var(--font-display); font-weight: 400; font-size: 32px; line-height: 1.05; letter-spacing: -0.01em; margin: 0 0 24px; }
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
        .form-card textarea:focus { outline: 1px solid var(--teal-bright); border-color: var(--teal-bright); }
        .form-card select option { background: #1a1f36; color: var(--bg); }
        .form-card .row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .form-card textarea { min-height: 110px; resize: vertical; }
        .form-card button { margin-top: 8px; }
        .tz-section { padding: 80px 0; background: var(--ink); }
        .tz-grid { display: grid; grid-template-columns: repeat(4,1fr); margin-top: 48px; }
        .tz-item { padding: 32px 32px 32px 0; }
        .tz-item + .tz-item { padding-left: 32px; }
        .tz-time { font-family: var(--font-display); font-size: clamp(48px,5vw,80px); line-height: 1; letter-spacing: -0.02em; color: var(--bg); }
        .tz-region { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: rgba(255,255,255,.4); margin-top: 10px; }
        @media (max-width:1000px) { .contact-body .layout { grid-template-columns: 1fr; gap: 32px; } .tz-grid { grid-template-columns: 1fr 1fr; gap: 0; } }
        @media (max-width:600px) { .tz-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>

      <section className="c-hero">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Contact</span>
          <h1 className="h1" style={{ marginTop: 16 }}>Get in touch.</h1>
          <p className="lede" style={{ marginTop: 24, maxWidth: "48ch" }}>Reach out and we&apos;ll get back to you.</p>
        </div>
      </section>

      <section className="contact-body">
        <div className="wrap-w">
          <div className="layout">
            <div>
              <span className="eyebrow"><span className="dot"></span> Direct channels</span>
              <h2 className="h2" style={{ marginTop: "12px", marginBottom: "24px" }}>Pick the right door.</h2>
              <div className="channels">
                <a className="ch" href="#form">
                  <div className="badge mint">✦</div>
                  <div>
                    <h4>Sales &amp; demos</h4>
                    <p>sales@biotrackos.com</p>
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
                    <h4>Press &amp; media</h4>
                    <p>press@biotrackos.com · brand kit available</p>
                  </div>
                  <div className="go">Email →</div>
                </a>
                <a className="ch" href="mailto:research@biotrackos.com">
                  <div className="badge lime">◎</div>
                  <div>
                    <h4>Research collaboration</h4>
                    <p>research@biotrackos.com</p>
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
              <span className="eyebrow" style={{ color: "#807C6F" }}><span className="dot"></span> Get in touch</span>
              <h3 style={{ marginTop: "12px" }}>Tell us what you need.</h3>
              <form onSubmit={(e) => { e.preventDefault(); const btn = e.currentTarget.querySelector('button'); if (btn) btn.textContent = 'Sent ✓'; }}>
                <div className="row2">
                  <label>First name<input type="text" placeholder="Jane" /></label>
                  <label>Last name<input type="text" placeholder="Smith" /></label>
                </div>
                <label>Email<input type="email" placeholder="you@company.com" /></label>
                <label>Organisation<input type="text" placeholder="Your organisation" /></label>
                <div className="row2">
                  <label>I am a<select>
                    <option value="">Select one</option>
                    <option>Clinic or health practice</option>
                    <option>Sports team or gym</option>
                    <option>Corporate wellness</option>
                    <option>Insurance or payer</option>
                    <option>Research or pharma</option>
                    <option>Developer or partner</option>
                    <option>Individual / consumer</option>
                    <option>Other</option>
                  </select></label>
                  <label>Organisation size<select>
                    <option value="">Select one</option>
                    <option>1–10</option>
                    <option>11–50</option>
                    <option>51–200</option>
                    <option>201–1,000</option>
                    <option>1,000+</option>
                  </select></label>
                </div>
                <label>What are you trying to solve?<textarea placeholder="What are you working on, and what would you like to see?"></textarea></label>
                <button className="btn btn-accent" type="submit">Send message →</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="tz-section">
        <div className="wrap-w">
          <span className="eyebrow" style={{ color: "#807C6F" }}><span className="dot"></span> Global</span>
          <h2 className="h1" style={{ marginTop: 16, color: "var(--bg)", maxWidth: "20ch" }}>Wherever you are,<br/><em style={{ color: "rgba(255,255,255,.5)", fontStyle: "italic" }}>we&apos;re in your timezone.</em></h2>
          <WorldClocks />
        </div>
      </section>
    </>
  );
}
