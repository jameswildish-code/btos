export const revalidate = 0;
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getIntegrationCategories, getIntegrations } from "@/lib/sanity";

export const metadata: Metadata = { title: "Integrations — BiotrackOS" };

type Category = {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
};

type Integration = {
  _id: string;
  name: string;
  tagline?: string;
  status?: "live" | "beta" | "soon";
  statusLabel?: string;
  featured?: boolean;
  featuredTitle?: string;
  featuredDescription?: string;
  marketplaceSlug?: string;
  logoText?: string;
  logoImage?: string;
  category?: { _id: string };
};

// Static fallback — used until you populate Sanity Studio
const STATIC_CATEGORIES: Category[] = [
  { _id: "wearables", title: "Wearables & devices", slug: { current: "wearables" }, description: "Every wearable and consumer device your people already own. Heart rate, HRV, sleep, training load, glucose, weight, blood oxygen — deduplicated across overlapping sources." },
  { _id: "labs", title: "Labs & blood panels", slug: { current: "labs" }, description: "Comprehensive blood biomarker panels ingested directly into the person's record. Annual or quarterly cadence; auto-trended against wearable signals." },
  { _id: "genomics", title: "Genomics & DNA", slug: { current: "genomics" }, description: "Whole-genome and microarray data, securely imported once and referenced throughout the record — pharmacogenomic interactions, risk variants, traits." },
  { _id: "epigenetics", title: "Epigenetic age & methylation", slug: { current: "epigenetics" }, description: "Biological-age tests, methylation panels, and glycan biomarkers — re-tested at intervals, charted alongside the rest of the record so protocols actually have a number to move." },
  { _id: "medications", title: "Medications & Rx", slug: { current: "medications" }, description: "Prescription, refill, and adherence data from pharmacy partners and e-prescribing networks — charted on the same timeline as biometrics, so changes have context." },
  { _id: "ehr", title: "Clinical & EHR", slug: { current: "ehr" }, description: "Bidirectional pipelines into the EHRs your team already runs. We close the loop you've been holding shut with spreadsheets." },
];

const STATIC_INTEGRATIONS: Integration[] = [
  { _id: "s-ah", name: "Apple Health", tagline: "HealthKit · live", status: "live", logoText: "", category: { _id: "wearables" } },
  { _id: "s-wh", name: "Whoop", tagline: "Strain, recovery, sleep", status: "live", logoText: "♛", category: { _id: "wearables" } },
  { _id: "s-gc", name: "Garmin Connect", tagline: "Training, fēnix, Forerunner", status: "live", logoText: "G", category: { _id: "wearables" } },
  { _id: "s-ou", name: "Oura", tagline: "Ring · sleep, HRV, temp", status: "live", logoText: "○", category: { _id: "wearables" } },
  { _id: "s-wi", name: "Withings", tagline: "Scale, BP, sleep mat", status: "live", logoText: "W", category: { _id: "wearables" } },
  { _id: "s-po", name: "Polar", tagline: "Vantage, Pacer Pro, H10", status: "live", logoText: "P", category: { _id: "wearables" } },
  { _id: "s-sh", name: "Samsung Health", tagline: "Galaxy Watch · Fit", status: "live", logoText: "S", category: { _id: "wearables" } },
  { _id: "s-rs", name: "Reebok Smart Ring", tagline: "HR, HRV, recovery", status: "live", logoText: "R", category: { _id: "wearables" } },
  { _id: "s-dx", name: "Dexcom", tagline: "CGM · G7", status: "beta", logoText: "D", category: { _id: "wearables" } },
  { _id: "s-ll", name: "Levels / Lingo", tagline: "CGM streams", status: "beta", logoText: "L", category: { _id: "wearables" } },
  { _id: "s-fb", name: "Fitbit", tagline: "Charge, Sense, Versa", status: "live", logoText: "F", category: { _id: "wearables" } },
  { _id: "s-es", name: "Eight Sleep", tagline: "Pod · sleep tracking", status: "soon", statusLabel: "Q3", logoText: "8", category: { _id: "wearables" } },
  { _id: "s-kp", name: "KP Pharma", tagline: "Blood panels · launch partner", status: "live", logoText: "KP", featured: true, featuredTitle: "KP Pharma.\nOur blood-panel\nlaunch partner.", featuredDescription: "Order, draw, and result flow lands directly in the person's BiotrackOS record — no manual upload, no PDFs. Trended automatically against the rest of the record.", marketplaceSlug: "", category: { _id: "labs" } },
  { _id: "s-mu-g", name: "Muhdo", tagline: "DNA insights · launch partner", status: "live", logoText: "M", category: { _id: "genomics" } },
  { _id: "s-mu-e1", name: "Muhdo", tagline: "Epigenetic age · launch partner", status: "live", logoText: "M", category: { _id: "epigenetics" } },
  { _id: "s-mu-e2", name: "Muhdo", tagline: "Methylation panel", status: "live", logoText: "M", category: { _id: "epigenetics" } },
  { _id: "s-dp", name: "DataPharm", tagline: "Prescription data · launch partner", status: "live", logoText: "DP", category: { _id: "medications" } },
  { _id: "s-ce", name: "CityEHR", tagline: "EHR · launch partner", status: "live", logoText: "C", category: { _id: "ehr" } },
  { _id: "s-fh", name: "FHIR direct", tagline: "R4 export / webhook", status: "live", logoText: "F", category: { _id: "ehr" } },
];

function StatusBadge({ status, statusLabel }: { status?: string; statusLabel?: string }) {
  const label = statusLabel ?? (status === "live" ? "Live" : status === "beta" ? "Beta" : "Soon");
  return (
    <span className={`status${status === "beta" ? " beta" : status === "soon" ? " soon" : ""}`}>
      <span className="d" />
      {label}
    </span>
  );
}

function IntegrationTile({ integration }: { integration: Integration }) {
  const statusClass = integration.status === "beta" ? " beta" : integration.status === "soon" ? " soon" : "";
  return (
    <div className={`tile${statusClass}`}>
      <div className="logo" style={integration.logoImage ? { padding: 0, overflow: "hidden" } : {}}>
        {integration.logoImage
          ? <Image src={integration.logoImage} alt={integration.name} fill style={{ objectFit: "contain" }} />
          : integration.logoText ?? ""}
      </div>
      <h4>{integration.name}</h4>
      {integration.tagline && <p>{integration.tagline}</p>}
      <StatusBadge status={integration.status} statusLabel={integration.statusLabel} />
    </div>
  );
}

export default async function IntegrationsPage() {
  const [categoryData, integrationData] = await Promise.all([
    getIntegrationCategories(),
    getIntegrations(),
  ]);

  const categories: Category[] = categoryData?.length ? categoryData : STATIC_CATEGORIES;
  const integrations: Integration[] = integrationData?.length ? integrationData : STATIC_INTEGRATIONS;

  const byCategory = integrations.reduce<Record<string, Integration[]>>((acc, i) => {
    const catId = i.category?._id ?? "";
    if (!acc[catId]) acc[catId] = [];
    acc[catId].push(i);
    return acc;
  }, {});

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
        .feat-banner .art-mark { font-family: var(--font-display); font-size: 72px; color: rgba(255,255,255,0.95); position: relative; z-index: 1; text-align: center; padding: 0 24px; line-height: 1.1; }
        .int-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .tile { background: var(--surface); border: 1px solid var(--line); border-radius: 16px; padding: 22px; display: flex; flex-direction: column; gap: 12px; min-height: 180px; position: relative; transition: border-color .15s ease, transform .15s ease; }
        .tile:hover { border-color: var(--ink); transform: translateY(-2px); }
        .tile .logo { width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center; font-family: var(--font-display); font-size: 20px; background: var(--bg-2); color: var(--ink); position: relative; flex-shrink: 0; }
        .tile h4 { font-size: 15px; font-weight: 500; margin: 0; }
        .tile p { font-size: 12px; color: var(--muted); margin: 0; }
        .status { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--teal); position: absolute; top: 18px; right: 18px; display: inline-flex; align-items: center; gap: 6px; }
        .status .d { width: 6px; height: 6px; border-radius: 50%; background: var(--teal-bright); animation: livePulse 2.4s ease-in-out infinite; }
        .tile.beta .status { color: #9A7B1A; }
        .tile.beta .status .d { background: #C9A23A; animation: liveBlink 3.2s ease-in-out infinite; }
        .tile.soon .status { color: var(--muted); }
        .tile.soon .status .d { background: var(--muted-2); animation: liveBlink 3.2s ease-in-out infinite; }
        .partner-cta { margin: 0; background: var(--bg-2); border-top: 1px solid var(--line); padding: 96px 0; }
        .partner-cta .panel { background: var(--surface); border: 1px solid var(--line); border-radius: 24px; padding: 48px; display: grid; grid-template-columns: 1.2fr 1fr; gap: 56px; align-items: center; }
        .partner-cta h2 { font-family: var(--font-display); font-weight: 400; font-size: 48px; line-height: 1.05; letter-spacing: -0.01em; margin: 12px 0 16px; }
        .partner-cta p { color: var(--ink-2); margin: 0; }
        .partner-cta .why { display:grid; gap: 14px; margin-top: 24px; }
        .partner-cta .why .row { display: grid; grid-template-columns: 28px 1fr; gap: 12px; font-size: 14px; }
        .partner-cta .why .row .n { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; color: var(--muted); padding-top: 2px; }
        @media (max-width:1100px){ .int-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width:900px) { .i-hero .g, .feat-banner, .partner-cta .panel { grid-template-columns: 1fr; gap: 24px; } .feat-banner .art { min-height: 180px; } }
      `}</style>

      <section className="i-hero">
        <div className="wrap-w">
          <div className="g">
            <div>
              <span className="eyebrow"><span className="dot"></span> Integrations</span>
              <h1 className="h1">One record across<br/>devices, labs, genes,<br/><em>and prescriptions.</em></h1>
            </div>
            <p className="lede">BiotrackOS ingests, deduplicates, and time-aligns data from {categories.length} categories of source — and we add new ones every quarter. If your service isn&apos;t here, <Link href="/marketplace#join">apply to join the marketplace</Link>.</p>
          </div>
          <nav className="cat-nav">
            {categories.map((cat) => (
              <a key={cat._id} href={`#${cat.slug.current}`}>{cat.title}</a>
            ))}
            <Link href="/marketplace" style={{ background: "var(--ink)", color: "var(--bg)", borderColor: "var(--ink)" }}>Marketplace →</Link>
          </nav>
        </div>
      </section>

      {categories.map((cat, idx) => {
        const catIntegrations = byCategory[cat._id] ?? [];
        const featured = catIntegrations.find((i) => i.featured);
        const num = String(idx + 1).padStart(2, "0");
        return (
          <section key={cat._id} className="int-section" id={cat.slug.current}>
            <div className="wrap-w">
              <div className="head">
                <div>
                  <span className="eyebrow"><span className="dot"></span> Category {num}</span>
                  <h2>{cat.title}.</h2>
                </div>
                {cat.description && <p className="desc">{cat.description}</p>}
              </div>

              {featured && (
                <div className="feat-banner">
                  <div className="body">
                    <span className="eyebrow" style={{ color: "#807C6F" }}><span className="dot"></span> Featured · {cat.title.toLowerCase()}</span>
                    <h3>{featured.featuredTitle ?? featured.name}</h3>
                    {featured.featuredDescription && <p>{featured.featuredDescription}</p>}
                    <div style={{ marginTop: "8px" }}>
                      <Link
                        className="btn btn-accent btn-sm"
                        href={featured.marketplaceSlug ? `/marketplace/${featured.marketplaceSlug}` : "/marketplace"}
                      >
                        See on marketplace <span className="arrow">→</span>
                      </Link>
                    </div>
                  </div>
                  <div className="art">
                    {featured.logoImage
                      ? <Image src={featured.logoImage} alt={featured.name} fill style={{ objectFit: "contain", padding: "32px" }} />
                      : <span className="art-mark">{featured.name}</span>
                    }
                  </div>
                </div>
              )}

              <div className="int-grid">
                {catIntegrations.map((integration) => (
                  <IntegrationTile key={integration._id} integration={integration} />
                ))}
                <div className="tile soon">
                  <div className="logo">+</div>
                  <h4>Your service?</h4>
                  <p><Link href="/marketplace#join">Request to join →</Link></p>
                  <span className="status"><span className="d" />Open</span>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="partner-cta">
        <div className="wrap-w">
          <div className="panel">
            <div>
              <span className="eyebrow"><span className="dot"></span> Become a partner</span>
              <h2>Run a lab, DNA service,<br/>or pharmacy?<br/><em style={{ color: "var(--ink-2)", fontStyle: "italic" }}>Join the marketplace.</em></h2>
              <p>BiotrackOS is open to qualified data partners across labs, genomics, epigenetics, and pharmacy. Apply once, integrate once, reach every clinic on the platform.</p>
              <div className="why">
                <div className="row"><span className="n">01</span><span>Single integration — built and maintained by our engineering team.</span></div>
                <div className="row"><span className="n">02</span><span>Featured placement in the BiotrackOS marketplace, with consent-gated discovery.</span></div>
                <div className="row"><span className="n">03</span><span>Co-marketing across our growing customer network.</span></div>
              </div>
            </div>
            <div>
              <Link className="btn btn-primary btn-lg" href="/marketplace#join">Apply to join <span className="arrow">→</span></Link>
              <div style={{ marginTop: "12px" }}><Link className="btn btn-ghost btn-sm" href="/marketplace">Browse the marketplace</Link></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
