import Link from "next/link";
import { getCaseStudy } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

const CONTINUUM = {
  client: "Continuum Longevity",
  industry: "Longevity clinic · Copenhagen",
  title: "How Continuum retired five dashboards in a weekend.",
  quote: "We retired five dashboards in a weekend. Our clinicians stopped reconciling data and started reading it.",
  quoteName: "Dr. Daria Kowalski",
  quoteRole: "Medical Director · Continuum Longevity",
  metrics: [
    { value: "4×", label: "Clinics live" },
    { value: "2,140", label: "Active patients" },
    { value: "93%", label: "Clinician adoption · week 1" },
    { value: "5", label: "Dashboards retired" },
  ],
  summary: "Continuum is a network of four longevity clinics operating across Copenhagen, Stockholm, and Oslo. Each clinic ran its own wearable vendor integrations — Apple Health, Garmin, Oura, and Whoop — through separate dashboards with no cross-vendor reconciliation.",
  body: null as null,
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let story: typeof CONTINUUM | null = null;
  try {
    const data = await getCaseStudy(slug);
    if (data) story = data;
  } catch { /* use static */ }
  if (!story) story = CONTINUUM;

  return (
    <>
      <style>{`
        .cs-hero { padding:72px 0 56px; border-bottom:1px solid var(--line); }
        .cs-hero .g { display:grid; grid-template-columns:1.2fr 0.8fr; gap:64px; align-items:end; }
        .cs-metrics { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-top:48px; padding-top:48px; border-top:1px solid var(--line); }
        .cs-metric .v { font-family:var(--font-display); font-size:48px; line-height:1; letter-spacing:-.02em; }
        .cs-metric .l { font-family:var(--font-mono); font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-top:8px; }
        .cs-quote { background:var(--ink); color:var(--bg); border-radius:24px; padding:56px; margin:64px 0; position:relative; overflow:hidden; }
        .cs-quote::before { content:""; position:absolute; inset:0; background:radial-gradient(ellipse at top right,rgba(47,191,163,.18),transparent 60%); pointer-events:none; }
        .cs-quote > * { position:relative; }
        .cs-quote blockquote { font-family:var(--font-display); font-weight:400; font-size:clamp(28px,3.5vw,48px); line-height:1.1; margin:0 0 32px; text-wrap:balance; }
        .cs-who { display:flex; gap:18px; align-items:center; }
        .cs-av { width:48px; height:48px; border-radius:50%; background:var(--mint); color:var(--teal); display:grid; place-items:center; font-family:var(--font-mono); font-weight:600; }
        .cs-body { max-width:72ch; margin:0 auto; padding:64px 0 96px; }
        .cs-body p { font-size:18px; line-height:1.7; color:var(--ink-2); margin:0 0 18px; }
        .cs-body h2 { font-family:var(--font-display); font-weight:400; font-size:36px; margin:56px 0 16px; }
        @media (max-width:900px) { .cs-hero .g { grid-template-columns:1fr; } .cs-metrics { grid-template-columns:1fr 1fr; } }
      `}</style>

      <section className="cs-hero">
        <div className="wrap-w">
          <div className="g">
            <div>
              <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
                <Link href="/customers" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)" }}>← Customers</Link>
              </div>
              <span className="eyebrow"><span className="dot"></span> Case study · {story.industry}</span>
              <h1 className="h1" style={{ marginTop: 16 }}>{story.title}</h1>
            </div>
            <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 20, padding: 28 }}>
              <div className="browser">
                <div className="browser-bar">
                  <span className="browser-dot"></span><span className="browser-dot"></span><span className="browser-dot"></span>
                  <div className="addr">app.biotrackos.com/continuum</div>
                </div>
                <div style={{ padding: 20, background: "var(--bg-2)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                    <span className="eyebrow">Cohort 04</span>
                    <span className="chip"><span className="dot"></span> Live</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 3 }}>
                    {Array.from({ length: 42 }, (_, i) => (
                      <span key={i} style={{ aspectRatio: "1/1", borderRadius: 3, background: ["#2FBFA3","#2A4A6E","#2F6F84","#1B2748"][i % 4], opacity: 0.6 + (i % 4) * 0.1, display: "block" }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cs-metrics">
            {story.metrics?.map((m: { value: string; label: string }) => (
              <div key={m.label} className="cs-metric">
                <div className="v">{m.value}</div>
                <div className="l">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="cs-quote">
          <blockquote>&ldquo;{story.quote}&rdquo;</blockquote>
          <div className="cs-who">
            <div className="cs-av">DK</div>
            <div>
              <div style={{ color: "var(--bg)", fontWeight: 500 }}>{story.quoteName}</div>
              <div style={{ color: "#807C6F", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", marginTop: 2 }}>{story.quoteRole}</div>
            </div>
          </div>
        </div>

        <div className="cs-body">
          {story.body ? (
            <PortableText value={story.body} />
          ) : (
            <>
              <p>{story.summary}</p>
              <h2>The before state</h2>
              <p>Before BiotrackOS, each Continuum clinic had its own data silo. The Apple Health integration fed one dashboard. Garmin required a separate export. Oura had its own API connection. The result: clinicians spent 30–45 minutes per patient session reconciling data across dashboards before they could begin actual analysis.</p>
              <p>Worse, there was no longitudinal view across devices. A patient whose HRV trend was declining on their Whoop couldn&apos;t be correlated against their sleep data from Oura without manual work. Cross-device deduplication didn&apos;t exist.</p>
              <h2>Rolling out BiotrackOS</h2>
              <p>The rollout took one weekend. The BiotrackOS onboarding API handled OAuth connections to each device vendor in a single consent flow per patient — no separate logins, no data-sharing terms to negotiate per vendor. Historical data backfilled automatically.</p>
              <p>By Monday morning, the four Continuum clinics had a single longitudinal record per patient, deduped across devices, with a cross-clinic cohort view for the medical director.</p>
              <h2>What changed</h2>
              <p>The most immediate change wasn&apos;t clinical — it was operational. Clinicians stopped using the session prep time to reconcile data and started using it to read it. The pre-session briefing became richer, faster, and more actionable.</p>
              <p>Three months in, Continuum identified a pattern in their longevity cohort: patients with HRV declining below a threshold in week two of a protocol consistently showed reduced VO₂ max improvement by week eight. The protocol was adjusted. Results improved.</p>
              <p>That discovery was only possible with a single continuous record. With five dashboards, it would have taken a dedicated data analyst weeks to surface.</p>
            </>
          )}
        </div>
      </div>

      <div style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", padding: "80px 0" }}>
        <div className="wrap-w" style={{ textAlign: "center" }}>
          <span className="eyebrow"><span className="dot"></span> Want results like these?</span>
          <h2 className="h2" style={{ marginTop: 16 }}>See BiotrackOS in action.</h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
            <Link className="btn btn-primary btn-lg" href="/contact">Book a demo <span className="arrow">→</span></Link>
            <Link className="btn btn-ghost btn-lg" href="/customers">More stories</Link>
          </div>
        </div>
      </div>
    </>
  );
}
