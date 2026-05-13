import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Lost signal — BiotrackOS" };

export default function NotFound() {
  return (
    <>
      <style>{`
        .nf-main {
          flex: 1; display: grid; place-items: center;
          padding: clamp(48px, 7vw, 96px) clamp(24px, 5vw, 72px);
          min-height: 100vh;
        }
        .wrap-404 { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(56px, 6vw, 96px); align-items: center; max-width: 1200px; }
        .text-col .eyebrow {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--ink-2);
          display: flex; align-items: center; gap: 14px;
        }
        .text-col .eyebrow .rule { width: 48px; height: 1px; background: var(--ink-2); }
        .text-col .code {
          font-family: var(--font-display); font-size: clamp(140px, 18vw, 220px);
          line-height: 0.86; letter-spacing: -0.04em; color: var(--ink); margin: 24px 0 8px;
          display: inline-block;
        }
        .text-col .code .zero { position: relative; display: inline-block; }
        .text-col .code .zero::after {
          content: ""; position: absolute; left: 16%; right: 16%; top: 46%;
          height: 8px; background: var(--teal-bright); opacity: 0.95;
          transform: rotate(-12deg); transform-origin: center;
          animation: drawSlash 1.4s 0.3s cubic-bezier(.7,.15,.25,1) both;
          border-radius: 2px;
        }
        @keyframes drawSlash { from { transform: rotate(-12deg) scaleX(0); } to { transform: rotate(-12deg) scaleX(1); } }
        .text-col h1 {
          font-family: var(--font-display); font-weight: 400;
          font-size: clamp(40px, 5vw, 64px); line-height: 1.02; letter-spacing: -0.02em;
          margin: 16px 0 0; max-width: 18ch;
        }
        .text-col h1 em { font-style: italic; color: var(--ink-2); }
        .text-col p { color: var(--ink-2); font-size: 17px; line-height: 1.5; margin: 24px 0 0; max-width: 44ch; }
        .nf-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 28px; }
        .nf-quick { margin-top: 36px; padding-top: 20px; border-top: 1px solid var(--line); }
        .nf-quick-lbl { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); margin-bottom: 10px; }
        .nf-quick-row { display: flex; flex-wrap: wrap; gap: 12px 22px; font-size: 14px; }
        .nf-quick-row a { color: var(--ink); text-decoration: underline; text-underline-offset: 4px; }
        .nf-quick-row a:hover { color: var(--teal); }
        .nf-visual {
          aspect-ratio: 1.05/1; width: 100%; max-width: 480px; margin: 0 auto;
          position: relative; background: var(--surface); border: 1px solid var(--line); border-radius: 24px; padding: 32px;
          overflow: hidden;
        }
        .nf-vmeta {
          position: absolute; top: 20px; left: 24px; right: 24px;
          display: flex; justify-content: space-between; align-items: center;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted);
        }
        .nf-vmeta .live { color: var(--teal); display: inline-flex; align-items: center; gap: 8px; }
        .nf-vmeta .live .d {
          width: 6px; height: 6px; border-radius: 50%; background: var(--teal-bright);
          animation: blink 1.4s ease-in-out infinite;
        }
        @keyframes blink { 50% { opacity: 0.3; } }
        .nf-visual svg { width: 100%; height: 100%; }
        .grid-bg line { stroke: var(--ink); opacity: 0.06; }
        .ecg-line {
          fill: none; stroke: var(--teal-bright); stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round;
          stroke-dasharray: 1200; stroke-dashoffset: 1200;
          animation: ecgDraw 4.4s cubic-bezier(.4,.0,.2,1) forwards;
        }
        @keyframes ecgDraw { to { stroke-dashoffset: 0; } }
        .nf-vftr {
          position: absolute; bottom: 20px; left: 24px; right: 24px;
          display: flex; justify-content: space-between; gap: 12px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted);
        }
        .nf-vftr .stat strong { display: block; font-family: var(--font-display); font-size: 28px; letter-spacing: -0.01em; color: var(--ink); font-style: normal; font-weight: 400; }
        @media (max-width: 860px) {
          .wrap-404 { grid-template-columns: 1fr; }
          .nf-visual { max-width: 380px; }
        }
      `}</style>

      <main className="nf-main">
        <div className="wrap-404">
          <div className="text-col">
            <div className="eyebrow"><span className="rule"></span><span>Wrong turn · No. 404</span></div>
            <div className="code">4<span className="zero">0</span>4</div>
            <h1>This page <em>wandered off</em> the trail.</h1>
            <p>The link may have changed or the page never made it to the wider rollout. Nothing is broken on your end — head back and we&apos;ll point you somewhere useful.</p>

            <div className="nf-actions">
              <Link href="/" className="btn btn-primary">Back to safety <span className="arrow">→</span></Link>
              <Link href="/contact" className="btn btn-ghost">Tell us what you needed</Link>
            </div>

            <div className="nf-quick">
              <div className="nf-quick-lbl">Or pick up the trail —</div>
              <div className="nf-quick-row">
                <Link href="/product">Product</Link>
                <Link href="/app">Consumer app</Link>
                <Link href="/markets">Markets</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/customers">Customers</Link>
                <Link href="/blog">Field notes</Link>
              </div>
            </div>
          </div>

          <div className="nf-visual" aria-hidden="true">
            <div className="nf-vmeta">
              <span>Signal · still here</span>
              <span className="live"><span className="d"></span> Wandering</span>
            </div>
            <svg viewBox="0 0 500 360" preserveAspectRatio="xMidYMid meet">
              <g className="grid-bg">
                <line x1="0" y1="60" x2="500" y2="60" strokeWidth="1"/>
                <line x1="0" y1="120" x2="500" y2="120" strokeWidth="1"/>
                <line x1="0" y1="180" x2="500" y2="180" strokeWidth="1"/>
                <line x1="0" y1="240" x2="500" y2="240" strokeWidth="1"/>
                <line x1="0" y1="300" x2="500" y2="300" strokeWidth="1"/>
                <line x1="60" y1="20" x2="60" y2="340" strokeWidth="1"/>
                <line x1="120" y1="20" x2="120" y2="340" strokeWidth="1"/>
                <line x1="180" y1="20" x2="180" y2="340" strokeWidth="1"/>
                <line x1="240" y1="20" x2="240" y2="340" strokeWidth="1"/>
                <line x1="300" y1="20" x2="300" y2="340" strokeWidth="1"/>
                <line x1="360" y1="20" x2="360" y2="340" strokeWidth="1"/>
                <line x1="420" y1="20" x2="420" y2="340" strokeWidth="1"/>
              </g>
              <path className="ecg-line" d="M0,180 L40,180 L52,180 L58,140 L66,220 L72,150 L84,180 L120,180 L140,180 L152,180 L158,140 L166,220 L172,150 L184,180 L220,180 L260,160 L320,130 L380,100 L440,70 L500,40"/>
            </svg>
            <div className="nf-vftr">
              <div className="stat"><strong>0</strong><span>Broken</span></div>
              <div className="stat"><strong>404</strong><span>Status</span></div>
              <div className="stat"><strong>↗</strong><span>Off the chart</span></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
