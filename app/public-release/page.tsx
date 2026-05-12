import WaitlistForm from "@/components/WaitlistForm";

export const metadata = { title: "BiotrackOS — Public release" };

export default function PublicReleasePage() {
  return (
    <>
      <style>{`
        html, body { height: 100%; }
        body { background:var(--bg); display:flex; flex-direction:column; min-height:100vh; overflow-x:hidden; position:relative; }

        header.masthead {
          position:relative; z-index:3;
          display:grid; grid-template-columns:1fr auto 1fr;
          align-items:center; gap:24px;
          padding:22px clamp(24px,5vw,72px) 18px;
          border-bottom:1.5px solid var(--ink);
          font-family:var(--font-mono); font-size:10.5px; letter-spacing:.18em;
          text-transform:uppercase; color:var(--ink);
          background:var(--bg);
        }
        .masthead .mid { text-align:center; font-family:var(--font-display); font-size:26px; letter-spacing:.04em; text-transform:none; font-style:italic; line-height:1; color:var(--ink); }
        .masthead .mid em { font-style:italic; color:var(--ink-2); }
        .masthead .right { display:flex; gap:18px; justify-content:flex-end; align-items:center; }

        main.pr-main {
          position:relative; z-index:2; flex:1;
          padding:clamp(40px,7vw,96px) clamp(24px,5vw,72px) clamp(56px,7vw,96px);
          max-width:1440px; width:100%; margin:0 auto;
          display:grid; grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);
          gap:clamp(40px,5vw,96px); align-items:center;
        }
        .lead-eyebrow { font-family:var(--font-mono); font-size:11px; letter-spacing:.22em; text-transform:uppercase; color:var(--ink-2); display:flex; align-items:center; gap:16px; margin-bottom:clamp(28px,4vw,40px); }
        .lead-eyebrow .rule { flex:0 0 56px; height:1px; background:var(--ink-2); }

        h1.lede { font-family:var(--font-display); font-weight:400; font-size:clamp(54px,7.8vw,124px); line-height:.94; letter-spacing:-.024em; margin:0; color:var(--ink); text-wrap:balance; max-width:14ch; }
        h1.lede em { font-style:italic; color:var(--ink-2); }
        h1.lede .draw { display:inline-block; position:relative; }
        h1.lede .draw::after { content:""; position:absolute; left:-2px; right:-2px; bottom:.06em; height:6px; background:var(--teal-bright); opacity:.9; transform-origin:left center; animation:scaleX 1.7s 0.4s cubic-bezier(.7,.15,.25,1) both; border-radius:2px; }
        @keyframes scaleX { from{transform:scaleX(0)} to{transform:scaleX(1)} }

        .dek { margin-top:clamp(28px,4vw,40px); font-size:clamp(16px,1.15vw,19px); line-height:1.6; color:var(--ink); max-width:56ch; }
        .dek p { margin:0 0 14px; }
        .dek strong { color:var(--ink); font-weight:500; }

        .waitlist { margin-top:clamp(36px,5vw,48px); width:100%; max-width:520px; }
        .waitlist .lbl { font-family:var(--font-mono); font-size:10px; letter-spacing:.22em; text-transform:uppercase; color:var(--muted); margin-bottom:10px; }
        .waitlist form { display:flex; align-items:stretch; border-bottom:1.5px solid var(--ink); padding:4px 0; }
        .waitlist input { flex:1; border:0; background:transparent; outline:none; font:inherit; font-size:17px; padding:10px 0; color:var(--ink); }
        .waitlist input::placeholder { color:var(--muted-2, var(--muted)); }
        .waitlist button { border:0; background:transparent; cursor:pointer; font:inherit; font-family:var(--font-mono); font-size:11px; letter-spacing:.22em; text-transform:uppercase; color:var(--ink); padding:0 4px; display:inline-flex; align-items:center; gap:8px; }
        .waitlist button .arrow { transition:transform .2s ease; }
        .waitlist button:hover .arrow { transform:translateX(4px); }
        .waitlist .note { margin-top:10px; font-family:var(--font-mono); font-size:10px; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); }
        .waitlist.ok form { border-color:var(--teal); }
        .waitlist.ok input { color:var(--teal); }

        /* Constellation */
        .stage { position:relative; width:100%; aspect-ratio:1/1; max-width:560px; justify-self:end; align-self:center; }
        .stage svg { width:100%; height:100%; overflow:visible; display:block; }
        .ring-outer,.ring-inner { fill:none; stroke:var(--ink); stroke-width:1; stroke-dasharray:1 5; stroke-linecap:round; opacity:.18; }
        .ring-inner { opacity:.12; }
        .spoke { stroke:var(--ink); stroke-width:.6; opacity:.14; }
        .signal { fill:var(--teal-bright); filter:drop-shadow(0 0 4px rgba(0,209,178,.45)); animation:signalTravel 4.8s ease-in-out infinite; }
        @keyframes signalTravel { 0%{opacity:0} 18%{opacity:1} 82%{opacity:1} 100%{opacity:0} }
        .src-ring { fill:var(--bg); stroke:var(--ink); stroke-width:1; }
        .src-dot { fill:var(--teal-bright); transform-box:fill-box; transform-origin:center; animation:srcBreathe 4.6s ease-in-out infinite; }
        @keyframes srcBreathe { 0%,100%{opacity:.55;transform:scale(1)} 50%{opacity:1;transform:scale(1.18)} }
        .core-ring { fill:var(--bg); stroke:var(--ink); stroke-width:1.4; }
        .core-glow { fill:none; stroke:var(--teal-bright); stroke-width:1.2; transform-box:fill-box; transform-origin:center; animation:coreGlow 5.6s ease-in-out infinite; }
        @keyframes coreGlow { 0%,100%{opacity:0;transform:scale(.92)} 40%{opacity:.45;transform:scale(1.18)} }
        .core-mark { fill:none; stroke:var(--ink); stroke-width:1.6; stroke-linejoin:round; stroke-linecap:round; }
        .src-label { font-family:var(--font-display); font-style:italic; font-size:15px; fill:var(--ink-2); letter-spacing:.005em; }

        footer.pr-foot { position:relative; z-index:2; margin-top:auto; padding:18px clamp(24px,5vw,72px) 22px; border-top:1px solid var(--line); display:flex; justify-content:space-between; align-items:center; gap:24px; font-family:var(--font-mono); font-size:10px; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); background:var(--bg); }
        footer.pr-foot a { color:var(--ink-2); text-decoration:none; margin-left:22px; }
        footer.pr-foot a:hover { color:var(--ink); }

        @media (max-width:960px) { main.pr-main{grid-template-columns:1fr;gap:48px} .stage{justify-self:center;max-width:380px} }
        @media (max-width:720px) { .masthead{grid-template-columns:1fr auto} .masthead .right{display:none} .masthead .mid{font-size:20px;text-align:right} .stage{max-width:300px} }
        @media (max-width:560px) { .masthead{grid-template-columns:1fr} .masthead .mid{text-align:left} footer.pr-foot{flex-wrap:wrap;gap:12px} footer.pr-foot a{margin-left:0;margin-right:18px} }
        @media (prefers-reduced-motion:reduce) { .signal,.src-dot,.core-glow{animation:none} }
      `}</style>

      <header className="masthead">
        <div className="left"><span>BiotrackOS</span></div>
        <div className="mid">Public <em>release</em></div>
        <div className="right"></div>
      </header>

      <main className="pr-main">
        <section>
          <div className="lead-eyebrow">
            <span className="rule"></span>
            <span>An operating system for connected health</span>
          </div>

          <h1 className="lede">
            <em>Opening soon</em> to the <span className="draw">wider&nbsp;market.</span>
          </h1>

          <div className="dek">
            <p>BiotrackOS is the operating system for connected health — <strong>one record across wearables, lab panels, genomics, epigenetics, medications, clinical notes, lifestyle and self-reported context</strong>, built for the teams who care for people — and for the people whose data it represents.</p>
            <p>The platform is moving from a closed rollout into the wider market. Leave an email if you&apos;d like to be notified when it opens.</p>
          </div>

          <WaitlistForm />
        </section>

        <aside className="stage" aria-hidden="true">
          <svg viewBox="0 0 500 500">
            <circle className="ring-outer" cx="250" cy="250" r="210"/>
            <circle className="ring-inner" cx="250" cy="250" r="140"/>

            <line className="spoke" x1="250" y1="250" x2="250"    y2="40"/>
            <line className="spoke" x1="250" y1="250" x2="398.49" y2="101.51"/>
            <line className="spoke" x1="250" y1="250" x2="460"    y2="250"/>
            <line className="spoke" x1="250" y1="250" x2="398.49" y2="398.49"/>
            <line className="spoke" x1="250" y1="250" x2="250"    y2="460"/>
            <line className="spoke" x1="250" y1="250" x2="101.51" y2="398.49"/>
            <line className="spoke" x1="250" y1="250" x2="40"     y2="250"/>
            <line className="spoke" x1="250" y1="250" x2="101.51" y2="101.51"/>

            {[
              { delay: "0s",   path: "M0,-188 L0,-18" },
              { delay: "0.7s", path: "M132.94,-132.94 L12.73,-12.73" },
              { delay: "1.4s", path: "M188,0 L18,0" },
              { delay: "2.1s", path: "M132.94,132.94 L12.73,12.73" },
              { delay: "2.8s", path: "M0,188 L0,18" },
              { delay: "3.5s", path: "M-132.94,132.94 L-12.73,12.73" },
              { delay: "4.2s", path: "M-188,0 L-18,0" },
              { delay: "4.9s", path: "M-132.94,-132.94 L-12.73,-12.73" },
            ].map((s, i) => (
              <circle key={i} className="signal" r="2.6" cx="250" cy="250">
                <animateMotion dur="5.6s" repeatCount="indefinite" begin={s.delay} path={s.path}/>
              </circle>
            ))}

            {[
              { t: "translate(250 40)",     delay: "0s" },
              { t: "translate(398.49 101.51)", delay: ".5s" },
              { t: "translate(460 250)",    delay: "1.0s" },
              { t: "translate(398.49 398.49)", delay: "1.5s" },
              { t: "translate(250 460)",    delay: "2.0s" },
              { t: "translate(101.51 398.49)", delay: "2.5s" },
              { t: "translate(40 250)",     delay: "3.0s" },
              { t: "translate(101.51 101.51)", delay: "3.5s" },
            ].map((n, i) => (
              <g key={i} transform={n.t}>
                <circle className="src-ring" r="7"/>
                <circle className="src-dot" r="3" style={{ animationDelay: n.delay }}/>
              </g>
            ))}

            <text className="src-label" x="250"  y="22"  textAnchor="middle">Wearables</text>
            <text className="src-label" x="414"  y="94"  textAnchor="start">Lab panels</text>
            <text className="src-label" x="478"  y="254" textAnchor="start">Genomics</text>
            <text className="src-label" x="414"  y="414" textAnchor="start">Epigenetics</text>
            <text className="src-label" x="250"  y="483" textAnchor="middle">Medications</text>
            <text className="src-label" x="86"   y="414" textAnchor="end">Clinical notes</text>
            <text className="src-label" x="22"   y="254" textAnchor="end">Lifestyle</text>
            <text className="src-label" x="86"   y="94"  textAnchor="end">Self-reported</text>

            <circle className="core-glow" cx="250" cy="250" r="34"/>
            <circle className="core-ring" cx="250" cy="250" r="26"/>
            <g transform="translate(250 250)">
              <path className="core-mark" d="M0,-12 L10.4,-6 L10.4,6 L0,12 L-10.4,6 L-10.4,-6 Z"/>
            </g>
          </svg>
        </aside>
      </main>

      <footer className="pr-foot">
        <span>© 2026 BiotrackOS</span>
      </footer>
    </>
  );
}
