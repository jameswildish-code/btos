export const revalidate = 0;
import Link from "next/link";
import type { Metadata } from "next";
import { getIntegrationCategories, getIntegrations } from "@/lib/sanity";
import IntegrationsContent, { type Category, type Integration } from "@/components/IntegrationsContent";

export const metadata: Metadata = { title: "Integrations — BiotrackOS" };

export default async function IntegrationsPage() {
  const [categoryData, integrationData] = await Promise.all([
    getIntegrationCategories(),
    getIntegrations(),
  ]);

  const categories: Category[] = categoryData ?? [];
  const integrations: Integration[] = integrationData ?? [];

  return (
    <>
      <style>{`
        .i-hero { padding: 72px 0 48px; border-bottom: 1px solid var(--line); }
        .i-hero h1 em { color: var(--ink-2); font-style: italic; }
        .i-hero .g { display: grid; grid-template-columns: 1.3fr 1fr; gap: 56px; align-items: end; }
        .cat-nav { display: flex; gap: 8px; flex-wrap: wrap; padding: 28px 0; border-bottom: 1px solid var(--line); position: sticky; top: 72px; background: color-mix(in srgb, var(--bg) 92%, transparent); backdrop-filter: blur(12px); z-index: 4; }
        .cat-nav a { padding: 8px 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--surface); font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-2); text-decoration: none; }
        .cat-nav a:hover { border-color: var(--ink); color: var(--ink); }
        .int-section { padding: 80px 0; border-bottom: 1px solid var(--line); }
        .int-section .head { display: flex; justify-content: space-between; align-items: end; gap: 32px; flex-wrap: wrap; margin-bottom: 32px; }
        .int-section h2 { font-family: var(--font-display); font-weight: 400; font-size: 52px; line-height: 1.02; letter-spacing: -0.01em; margin: 12px 0 0; }
        .int-section .desc { color: var(--muted); max-width: 42ch; font-size: 14px; }
        .feat-banner { display: grid; grid-template-columns: 1.2fr 1fr; gap: 0; background: var(--ink); color: var(--bg); border-radius: 24px; overflow: hidden; position: relative; margin-bottom: 24px; }
        .feat-banner::before { content:""; position:absolute; inset:0; background: radial-gradient(ellipse at top right, rgba(47,191,163,.16), transparent 60%); }
        .feat-banner > * { position: relative; }
        .feat-banner .body { padding: 40px; display: flex; flex-direction: column; gap: 16px; justify-content: center; }
        .feat-banner h3 { font-family: var(--font-display); font-weight: 400; font-size: 40px; line-height: 1.05; letter-spacing: -0.01em; margin: 0; white-space: pre-line; }
        .feat-banner p { color: #C9C5B6; margin: 0; max-width: 42ch; }
        .feat-banner .art { background: linear-gradient(135deg, #1F2A48, #2A4A6E 60%, #2FBFA3); position: relative; overflow: hidden; display: grid; place-items: center; min-height: 280px; }
        .feat-banner .art::after { content:""; position:absolute; inset:0; background: repeating-linear-gradient(to right, transparent 0, transparent 15px, rgba(255,255,255,0.06) 15px, rgba(255,255,255,0.06) 16px), repeating-linear-gradient(to bottom, transparent 0, transparent 15px, rgba(255,255,255,0.06) 15px, rgba(255,255,255,0.06) 16px); }
        .feat-banner .art-mark { font-family: var(--font-display); font-size: 64px; color: rgba(255,255,255,0.95); position: relative; z-index: 1; text-align: center; padding: 0 24px; line-height: 1.1; }
        .int-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .tile { background: var(--surface); border: 1px solid var(--line); border-radius: 16px; padding: 22px; display: flex; flex-direction: column; gap: 12px; min-height: 180px; position: relative; transition: border-color .15s ease, transform .15s ease; }
        .tile:hover { border-color: var(--ink); transform: translateY(-2px); }
        .tile .logo { width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center; font-family: var(--font-display); font-size: 18px; background: var(--bg-2); color: var(--ink); flex-shrink: 0; }
        .tile h4 { font-size: 15px; font-weight: 500; margin: 0; }
        .tile p { font-size: 12px; color: var(--muted); margin: 0; }
        .status { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--teal); position: absolute; top: 18px; right: 18px; display: inline-flex; align-items: center; gap: 6px; }
        .status .d { width: 6px; height: 6px; border-radius: 50%; background: var(--teal-bright); animation: livePulse 2.4s ease-in-out infinite; }
        .tile.beta .status { color: #9A7B1A; }
        .tile.beta .status .d { background: #C9A23A; animation: liveBlink 3.2s ease-in-out infinite; }
        .tile.soon .status { color: var(--muted); }
        .tile.soon .status .d { background: var(--muted-2); animation: liveBlink 3.2s ease-in-out infinite; }
        .int-empty { text-align: center; padding: 56px 0; }
        .int-empty h4 { font-size: 18px; font-weight: 500; margin: 0 0 8px; }
        .int-empty p { font-size: 14px; color: var(--muted); }
        .partner-cta { margin: 0; background: var(--bg-2); border-top: 1px solid var(--line); padding: 96px 0; }
        .partner-cta .panel { background: var(--surface); border: 1px solid var(--line); border-radius: 24px; padding: 48px; }
        .partner-cta .panel-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 40px; padding-bottom: 40px; border-bottom: 1px solid var(--line); flex-wrap: wrap; }
        .partner-cta h2 { font-family: var(--font-display); font-weight: 400; font-size: 48px; line-height: 1.05; letter-spacing: -0.01em; margin: 12px 0 12px; }
        .partner-cta .panel-top p { color: var(--ink-2); margin: 0; max-width: 44ch; }
        .partner-cta .panel-points { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; padding-top: 40px; }
        .partner-cta .point h5 { font-size: 15px; font-weight: 600; margin: 0 0 8px; }
        .partner-cta .point p { font-size: 14px; color: var(--ink-2); margin: 0; line-height: 1.6; }
        @media (max-width:900px) { .partner-cta .panel-points { grid-template-columns: 1fr; } .partner-cta .panel-top { flex-direction: column; } }
        @media (max-width:1100px){ .int-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width:900px) { .i-hero .g, .feat-banner, .partner-cta .panel { grid-template-columns: 1fr; gap: 24px; } .feat-banner .art { min-height: 180px; } }
      `}</style>

      <section className="i-hero">
        <div className="wrap-w">
          <div className="g">
            <div>
              <span className="eyebrow"><span className="dot"></span> Integrations</span>
              <h1 className="h1">Every source.<br/><em>One record.</em></h1>
            </div>
            <p className="lede">From wearables and devices to lab results, genomics, medications, and clinical records — every data point, structured and time-aligned into one longitudinal record.</p>
          </div>
          {categories.length > 0 && (
            <nav className="cat-nav">
              {categories.map((cat) => (
                <a key={cat._id} href={`#${cat.slug.current}`}>{cat.title}</a>
              ))}
            </nav>
          )}
        </div>
      </section>

      <IntegrationsContent categories={categories} integrations={integrations} />

      <section className="partner-cta">
        <div className="wrap-w">
          <div className="panel">
            <div className="panel-top">
              <div>
                <span className="eyebrow"><span className="dot"></span> Integrate your service</span>
                <h2>One integration.<br/><em style={{ color: "var(--ink-2)" }}>Every customer we serve.</em></h2>
                <p>Open to qualified integrations across every category. If your service generates or holds health-relevant data, we want to hear from you.</p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <Link className="btn btn-primary btn-lg" href="/contact">Apply <span className="arrow">→</span></Link>
              </div>
            </div>
            <div className="panel-points">
              <div className="point">
                <h5>Connect once.</h5>
                <p>Your service becomes available to every clinic, team, and individual on the platform.</p>
              </div>
              <div className="point">
                <h5>Reach them at the right moment.</h5>
                <p>Customers find and connect your service when they&apos;re ready — you reach them at the point of intent.</p>
              </div>
              <div className="point">
                <h5>Co-marketed at launch.</h5>
                <p>Featured and promoted across our growing customer network.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
