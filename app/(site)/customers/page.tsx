export const revalidate = 0;
import Link from "next/link";
import Image from "next/image";
import { getCaseStudies, getFeaturedCaseStudy } from "@/lib/sanity";
import CustomersContent from "@/components/CustomersContent";

export const metadata = { title: "Customers — BiotrackOS" };

export default async function CustomersPage() {
  const [featured, all] = await Promise.all([
    getFeaturedCaseStudy(),
    getCaseStudies(),
  ]);

  const customers = (all ?? []).filter((c: { _id: string }) => !featured || c._id !== featured._id);

  return (
    <>
      <style>{`
        .c-hero { padding:72px 0 56px; border-bottom:1px solid var(--line); }
        .c-hero .g { display:grid; grid-template-columns:1.3fr 1fr; gap:64px; align-items:end; }
        .c-feature { margin-top:56px; background:var(--ink); color:var(--bg); border-radius:28px; overflow:hidden; display:grid; grid-template-columns:1.1fr 1fr; position:relative; text-decoration:none; }
        .c-feature::before { content:""; position:absolute; inset:0; background:radial-gradient(ellipse at top right,rgba(47,191,163,.18),transparent 60%); pointer-events:none; z-index:1; }
        .c-feat-body { padding:56px; position:relative; z-index:2; display:flex; flex-direction:column; justify-content:center; gap:20px; }
        .c-feat-img { position:relative; min-height:380px; background:linear-gradient(135deg,#1F2A48,#2A4A6E 60%,#2FBFA3); overflow:hidden; }
        .c-feat-img-grid { position:absolute; inset:0; background:repeating-linear-gradient(to right,transparent 0,transparent 19px,rgba(255,255,255,.05) 19px,rgba(255,255,255,.05) 20px),repeating-linear-gradient(to bottom,transparent 0,transparent 19px,rgba(255,255,255,.05) 19px,rgba(255,255,255,.05) 20px); }
        .c-feature h2 { font-family:var(--font-display); font-weight:400; font-size:clamp(32px,3.5vw,52px); line-height:1.05; letter-spacing:-.01em; margin:0; color:var(--bg); }
        .c-feature h2 em { color:var(--mint); font-style:italic; }
        .c-feature p { color:#C9C5B6; font-size:15px; line-height:1.6; margin:0; max-width:48ch; }
        .c-feat-stats { display:flex; gap:32px; flex-wrap:wrap; }
        .c-feat-stats .num { font-family:var(--font-display); font-size:40px; line-height:1; color:var(--lime); }
        .c-feat-stats .lab { font-family:var(--font-mono); font-size:10px; letter-spacing:.12em; color:#C9C5B6; text-transform:uppercase; margin-top:4px; }
        .c-grid { padding:80px 0 96px; }
        .c-card-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:32px; }
        .c-card { background:var(--surface); border:1px solid var(--line); border-radius:20px; overflow:hidden; display:flex; flex-direction:column; text-decoration:none; color:inherit; transition:border-color .15s; }
        .c-card:hover { border-color:var(--ink-2); }
        .c-card-art { aspect-ratio:16/9; position:relative; overflow:hidden; }
        .c-card-name { position:absolute; left:20px; bottom:16px; font-family:var(--font-display); font-size:32px; line-height:1; color:rgba(255,255,255,.9); z-index:1; }
        .c-card-body { padding:24px; display:flex; flex-direction:column; gap:12px; flex:1; }
        .c-card-meta { font-family:var(--font-mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); display:flex; gap:8px; }
        .c-card-title { font-family:var(--font-display); font-weight:400; font-size:22px; line-height:1.15; margin:0; letter-spacing:-.01em; }
        .c-card-summary { font-size:13px; color:var(--muted); margin:0; line-height:1.5; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
        .c-card-stats { display:flex; gap:20px; padding-top:12px; border-top:1px solid var(--line); margin-top:auto; }
        .c-stat-val { font-family:var(--font-display); font-size:24px; line-height:1; }
        .c-stat-lab { font-family:var(--font-mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); margin-top:4px; }
        .c-card-cta { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--ink-2); margin-top:auto; }
        .art-a { background:linear-gradient(135deg,#1F2A48 0%,#2A4A6E 100%); }
        .art-b { background:linear-gradient(135deg,#2FBFA3 0%,#1A8E78 100%); }
        .art-c { background:linear-gradient(135deg,#E7E2D2 0%,#A39D8A 100%); }
        .art-d { background:linear-gradient(135deg,#D1F24A 0%,#8DAE2C 100%); }
        .art-e { background:linear-gradient(135deg,#F4CFCB 0%,#C46A6A 100%); }
        .art-f { background:linear-gradient(135deg,#BFD8EF 0%,#2A6FDB 100%); }
        .row-head { display:flex; justify-content:space-between; align-items:baseline; }
        @media (max-width:1000px) { .c-hero .g,.c-feature { grid-template-columns:1fr; } .c-feat-img { min-height:220px; } .c-feat-body { padding:32px; } }
        @media (max-width:768px) { .c-card-grid { grid-template-columns:1fr; } }
      `}</style>

      <section className="c-hero">
        <div className="wrap-w">
          <div className="g">
            <div>
              <span className="eyebrow"><span className="dot"></span> Customers</span>
              <h1 className="h1">Who&apos;s building<br/><em>on BiotrackOS.</em></h1>
            </div>
            <p className="lede">The organisations and builders using BiotrackOS — and what happened next.</p>
          </div>

          {featured && (
            <Link className="c-feature" href={`/customers/${featured.slug.current}`}>
              <div className="c-feat-body">
                <span className="eyebrow" style={{ color: "#807C6F" }}><span className="dot"></span> Featured · {featured.industry}</span>
                <h2>{featured.title}</h2>
                {featured.summary && <p>{featured.summary}</p>}
                {featured.metrics?.length > 0 && (
                  <div className="c-feat-stats">
                    {featured.metrics.map((m: { value: string; label: string }) => (
                      <div key={m.label}>
                        <div className="num">{m.value}</div>
                        <div className="lab">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                <span className="btn btn-accent" style={{ alignSelf: "flex-start" }}>Read the case study <span className="arrow">→</span></span>
              </div>
              <div className="c-feat-img">
                {featured.coverImage
                  ? <Image src={featured.coverImage} alt={featured.client} fill style={{ objectFit: "cover" }} />
                  : <div className="c-feat-img-grid" />
                }
              </div>
            </Link>
          )}
        </div>
      </section>

      <CustomersContent customers={customers} />

      <div style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", padding: "80px 0" }}>
        <div className="wrap-w" style={{ textAlign: "center" }}>
          <span className="eyebrow"><span className="dot"></span> {customers.length > 0 ? "Want results like these?" : "Ready to be on this page?"}</span>
          <h2 className="h2" style={{ marginTop: 16 }}>See BiotrackOS in action.</h2>
          <p style={{ color: "var(--muted)", maxWidth: "44ch", margin: "12px auto 0", lineHeight: 1.6 }}>
            {customers.length > 0
              ? "Join the teams already running on BiotrackOS. Book a 20-minute walkthrough with your data."
              : "We're working with our first customers now. If you'd like to be featured here, get in touch."}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28 }}>
            <Link className="btn btn-primary btn-lg" href="/contact">Book a demo <span className="arrow">→</span></Link>
            <Link className="btn btn-ghost btn-lg" href="/pricing">See pricing</Link>
          </div>
        </div>
      </div>
    </>
  );
}
