export const revalidate = 0;
import Link from "next/link";
import { getPressItems } from "@/lib/sanity";
import PressAllContent from "@/components/PressAllContent";

export const metadata = { title: "All Press — BiotrackOS" };

export default async function PressAllPage() {
  const data = await getPressItems();
  const items = data ?? [];

  return (
    <>
      <style>{`
        .press-all-hero { padding:72px 0 56px; border-bottom:1px solid var(--line); }
        .press-item { display:grid; grid-template-columns:160px 1fr auto; gap:32px; padding:32px 0; border-top:1px solid var(--line); align-items:start; }
        .press-item .pub { font-family:var(--font-display); font-size:22px; color:var(--ink-2); }
        .press-item .date { font-family:var(--font-mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); margin-top:4px; }
        .press-item h3 { font-family:var(--font-display); font-weight:400; font-size:24px; line-height:1.2; letter-spacing:-.01em; margin:0 0 8px; }
        .press-item p { font-size:14px; color:var(--muted); margin:0; max-width:56ch; }
        @media (max-width:900px) { .press-item { grid-template-columns:1fr; } }
      `}</style>

      <section className="press-all-hero">
        <div className="wrap-w">
          <div style={{ marginBottom: 24 }}>
            <Link href="/press" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none" }}>← Press</Link>
          </div>
          <span className="eyebrow"><span className="dot"></span> All coverage</span>
          <h1 className="h1" style={{ marginTop: 16 }}>Every mention,<br/><em>all in one place.</em></h1>
        </div>
      </section>

      <section style={{ padding: "80px 0 96px" }}>
        <div className="wrap-w">
          <PressAllContent items={items} />
        </div>
      </section>
    </>
  );
}
