"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PAGE_SIZE = 6;
const ARTS = ["art-a", "art-b", "art-c", "art-d", "art-e", "art-f"];

type Metric = { value: string; label: string };
type Customer = {
  _id: string;
  slug: { current: string };
  client: string;
  industry: string;
  location?: string;
  title: string;
  summary?: string;
  metrics?: Metric[];
  logo?: string;
  coverImage?: string;
};

export default function CustomersContent({ customers }: { customers: Customer[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = customers.slice(0, visible);

  return (
    <section className="c-grid">
      <div className="wrap-w">
        <div className="row-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span className="eyebrow"><span className="dot"></span> Case studies</span>
          {customers.length > 0 && <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)" }}>{customers.length} stories</span>}
        </div>

        {customers.length === 0 && (
          <div style={{ padding: "56px 0", borderTop: "1px solid var(--line)" }}>
            <p style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 13 }}>No case studies yet.</p>
          </div>
        )}

        <div className="c-card-grid">
          {shown.map((c, i) => {
            const art = ARTS[i % ARTS.length];
            return (
              <Link key={c._id} className="c-card" href={`/customers/${c.slug.current}`}>
                <div className={`c-card-art ${art}`}>
                  {c.coverImage
                    ? <Image src={c.coverImage} alt={c.client} fill style={{ objectFit: "cover" }} />
                    : <span className="c-card-name">{c.client}</span>
                  }
                </div>
                <div className="c-card-body">
                  {c.logo && (
                    <div style={{ height: 40, position: "relative", width: "100%", marginBottom: 4 }}>
                      <Image src={c.logo} alt={c.client} fill style={{ objectFit: "contain", objectPosition: "left center" }} />
                    </div>
                  )}
                  <div className="c-card-meta">
                    <span>{c.industry}</span>
                    {c.location && <><span>·</span><span>{c.location}</span></>}
                  </div>
                  <h3 className="c-card-title">{c.title}</h3>
                  {c.summary && <p className="c-card-summary">{c.summary}</p>}
                  {c.metrics && c.metrics.length > 0 && (
                    <div className="c-card-stats">
                      {c.metrics.slice(0, 3).map((m) => (
                        <div key={m.label} className="c-stat">
                          <div className="c-stat-val">{m.value}</div>
                          <div className="c-stat-lab">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <span className="c-card-cta">Read story →</span>
                </div>
              </Link>
            );
          })}
        </div>

        {visible < customers.length && (
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button
              onClick={() => setVisible(v => v + PAGE_SIZE)}
              style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", background: "none", border: "1px solid var(--line)", borderRadius: 999, padding: "12px 28px", cursor: "pointer", color: "var(--ink-2)" }}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
