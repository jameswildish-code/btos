export const revalidate = 0;
import Link from "next/link";
import type { Metadata } from "next";
import { getPartners, getAddons, getProgrammes } from "@/lib/sanity";
import MarketplaceContent from "@/components/MarketplaceContent";

export const metadata: Metadata = { title: "Marketplace — BiotrackOS" };

export default async function MarketplacePage() {
  const [partners, addons, programmes] = await Promise.all([
    getPartners(),
    getAddons(),
    getProgrammes(),
  ]);

  return (
    <>
      <style>{`
        .m-hero { padding:72px 0 56px; border-bottom:1px solid var(--line); }
        .m-hero .g { display:grid; grid-template-columns:1.3fr 1fr; gap:56px; align-items:end; }
        .stats-strip { display:grid; grid-template-columns:repeat(4,1fr); gap:32px; margin-top:56px; padding-top:28px; border-top:1px solid var(--line); }
        .stats-strip .v { font-family:var(--font-display); font-size:48px; line-height:1; }
        .stats-strip .l { font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); margin-top:8px; }
        .mp-tabs-bar { padding:48px 0 0; }
        .tabs { display:inline-flex; padding:6px; background:var(--surface); border:1px solid var(--line); border-radius:999px; gap:4px; }
        .tabs button { padding:12px 22px; border-radius:999px; border:0; background:transparent; font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--ink-2); cursor:pointer; }
        .tabs button.on { background:var(--ink); color:var(--bg); }
        .tab-lede { margin:16px 0 32px; max-width:60ch; font-size:15px; color:var(--ink-2); }
        .filters { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px; }
        .filters button { padding:8px 14px; border-radius:999px; border:1px solid var(--line); background:var(--surface); font-family:var(--font-mono); font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--ink-2); cursor:pointer; }
        .filters button.on { background:var(--ink); color:var(--bg); border-color:var(--ink); }
        .partners-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:24px; }
        .pcard { background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:24px; display:flex; flex-direction:column; gap:14px; min-height:240px; text-decoration:none; color:inherit; transition:border-color .15s, transform .15s; }
        .pcard:hover { border-color:var(--ink); transform:translateY(-2px); }
        .pcard .phead { display:flex; gap:14px; align-items:center; }
        .pcard .plogo { width:56px; height:56px; border-radius:14px; background:var(--bg-2); display:grid; place-items:center; font-family:var(--font-display); font-size:24px; color:var(--ink); flex-shrink:0; position:relative; }
        .pcard .pname { font-size:17px; font-weight:500; margin:0; line-height:1.2; }
        .pcard .pcat { font-family:var(--font-mono); font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin:4px 0 0; }
        .pcard .pdesc { margin:0; font-size:13px; color:var(--ink-2); line-height:1.5; }
        .pcard .pfoot { display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:12px; border-top:1px solid var(--line); }
        .status-dot { width:6px; height:6px; border-radius:50%; display:inline-block; margin-right:6px; vertical-align:middle; }
        .addons-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:24px; }
        .addon-card { background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:24px; }
        .addon-card .atags { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px; }
        .addon-card .atag { font-family:var(--font-mono); font-size:10px; letter-spacing:.1em; text-transform:uppercase; padding:3px 8px; border-radius:999px; background:var(--bg-2); border:1px solid var(--line); color:var(--muted); }
        .addon-card h4 { font-size:16px; font-weight:600; margin:0 0 6px; }
        .addon-card p { font-size:13px; color:var(--ink-2); margin:0 0 16px; }
        .addon-price { font-family:var(--font-display); font-size:22px; }
        .prog-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:24px; }
        .prog-card { background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:24px; display:flex; flex-direction:column; gap:12px; }
        .prog-card .pspec { font-family:var(--font-mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--teal); margin-bottom:4px; }
        .prog-card h4 { font-size:16px; font-weight:600; margin:0; }
        .prog-card .auth { font-family:var(--font-mono); font-size:11px; letter-spacing:.1em; color:var(--muted); }
        .prog-card .pfoot { margin-top:auto; display:flex; justify-content:space-between; padding-top:12px; border-top:1px solid var(--line); font-family:var(--font-mono); font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); }
        .submit-strip { padding:40px; border:1px dashed var(--line); border-radius:20px; display:grid; grid-template-columns:1fr auto; gap:24px; align-items:center; margin-bottom:48px; }
        .submit-strip h4 { font-family:var(--font-display); font-weight:400; font-size:28px; margin:0; }
        .submit-strip p { margin:4px 0 0; color:var(--ink-2); font-size:14px; }
        @media (max-width:1000px) { .m-hero .g,.stats-strip,.partners-grid,.addons-grid,.prog-grid { grid-template-columns:1fr; gap:24px; } .submit-strip { grid-template-columns:1fr; } }
      `}</style>

      <section className="m-hero">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Marketplace</span>
          <div className="g">
            <h1 className="h1">Partners, add-ons,<br/><em>and programmes.</em></h1>
            <p className="lede">The commerce layer of BiotrackOS. Connect a data partner, switch on a feature, or roll out a clinician-authored programme — all in one place.</p>
          </div>
          <MarketplaceContent
            partners={partners ?? []}
            addons={addons ?? []}
            programmes={programmes ?? []}
          />
        </div>
      </section>
    </>
  );
}
