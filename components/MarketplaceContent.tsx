"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PAGE_SIZE = 9;

type Partner = {
  _id: string;
  name: string;
  category: string;
  status: string;
  description?: string;
  logo?: string;
};

type Addon = {
  _id: string;
  name: string;
  description?: string;
  markets?: string[];
  tier?: string;
  price?: string;
  icon?: string;
};

type Programme = {
  _id: string;
  name: string;
  author?: string;
  specialty?: string;
  duration?: string;
  price?: string;
  description?: string;
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const statusDot: Record<string, string> = {
  Live: "var(--teal-bright)",
  Beta: "var(--amber)",
  "Coming soon": "var(--muted)",
};

function EmptyState({ message, cta }: { message: string; cta?: React.ReactNode }) {
  return (
    <div style={{ textAlign: "center", padding: "80px 0" }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 56, color: "var(--line)", marginBottom: 20 }}>∅</div>
      <h4 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 10px" }}>Nothing here yet</h4>
      <p style={{ color: "var(--muted)", fontSize: 14, maxWidth: 360, margin: "0 auto 24px", lineHeight: 1.6 }}>{message}</p>
      {cta}
    </div>
  );
}

function PartnersTab({ partners }: { partners: Partner[] }) {
  const cats = ["All", ...Array.from(new Set(partners.map((p) => p.category).filter(Boolean)))];
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = filter === "All" ? partners : partners.filter((p) => p.category === filter);
  const shown = filtered.slice(0, visible);

  const handleFilter = (cat: string) => {
    setFilter(cat);
    setVisible(PAGE_SIZE);
  };

  return (
    <>
      <p className="tab-lede">Data partners — the sources BiotrackOS connects and normalises for your team and your members.</p>

      {partners.length === 0 ? (
        <EmptyState
          message="Add Marketplace Partners in Sanity Studio to populate this section."
          cta={<Link className="btn btn-ghost" href="/contact">Become a partner →</Link>}
        />
      ) : (
        <>
          <div className="filters">
            {cats.map((c) => (
              <button key={c} className={filter === c ? "on" : ""} onClick={() => handleFilter(c)}>{c}</button>
            ))}
          </div>

          {shown.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 0", color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 13 }}>
              No partners in this category yet.
            </div>
          ) : (
            <div className="partners-grid">
              {shown.map((p) => (
                <div key={p._id} className="pcard">
                  <div className="phead">
                    <div className="plogo" style={p.logo ? { padding: 0, overflow: "hidden", position: "relative" } : {}}>
                      {p.logo
                        ? <Image src={p.logo} alt={p.name} fill style={{ objectFit: "contain" }} />
                        : initials(p.name)}
                    </div>
                    <div>
                      <div className="pname">{p.name}</div>
                      <div className="pcat">{p.category}</div>
                    </div>
                  </div>
                  {p.description && <p className="pdesc">{p.description}</p>}
                  <div className="pfoot">
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>
                      <span className="status-dot" style={{ background: statusDot[p.status] ?? "var(--muted)" }}></span>
                      {p.status}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>View →</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {visible < filtered.length && (
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", background: "none", border: "1px solid var(--line)", borderRadius: 999, padding: "12px 28px", cursor: "pointer", color: "var(--ink-2)" }}
              >
                Load more
              </button>
            </div>
          )}
        </>
      )}

      <div className="submit-strip">
        <div>
          <h4>Become a data partner.</h4>
          <p>Lab, genomics, epigenetics, or medication provider? Apply to join the marketplace.</p>
        </div>
        <Link className="btn btn-primary" href="/contact">Apply to join <span className="arrow">→</span></Link>
      </div>
    </>
  );
}

function AddonsTab({ addons }: { addons: Addon[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = addons.slice(0, visible);

  return (
    <>
      <p className="tab-lede">First-party features you can add to any plan. Tagged by market — filter to see what&apos;s relevant for your team.</p>

      {addons.length === 0 ? (
        <EmptyState
          message="Add Marketplace Add-ons in Sanity Studio to populate this section."
          cta={<Link className="btn btn-ghost" href="/contact">Pitch an add-on →</Link>}
        />
      ) : (
        <>
          <div className="addons-grid">
            {shown.map((a) => (
              <div key={a._id} className="addon-card">
                <div className="atags">
                  {a.markets?.map((m) => <span key={m} className="atag">{m}</span>)}
                  {a.tier && <span className="atag" style={{ borderColor: "var(--teal)", color: "var(--teal)" }}>{a.tier}+</span>}
                </div>
                <h4>{a.name}</h4>
                {a.description && <p>{a.description}</p>}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="addon-price">{a.price}</span>
                  <Link className="btn btn-ghost btn-sm" href="/contact">Add →</Link>
                </div>
              </div>
            ))}
          </div>

          {visible < addons.length && (
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", background: "none", border: "1px solid var(--line)", borderRadius: 999, padding: "12px 28px", cursor: "pointer", color: "var(--ink-2)" }}
              >
                Load more
              </button>
            </div>
          )}
        </>
      )}

      <div className="submit-strip">
        <div>
          <h4>Have an add-on idea?</h4>
          <p>Partner with us to build market-specific modules for the BiotrackOS ecosystem.</p>
        </div>
        <Link className="btn btn-primary" href="/contact">Pitch an add-on <span className="arrow">→</span></Link>
      </div>
    </>
  );
}

function ProgrammesTab({ programmes }: { programmes: Programme[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = programmes.slice(0, visible);

  return (
    <>
      <p className="tab-lede">Clinician-authored care programmes — defined protocols, enrolled members, and a 70/30 revenue share with the programme author.</p>

      {programmes.length === 0 ? (
        <EmptyState
          message="Add Marketplace Programmes in Sanity Studio to populate this section."
          cta={<Link className="btn btn-ghost" href="/contact">Submit a programme →</Link>}
        />
      ) : (
        <>
          <div className="prog-grid">
            {shown.map((p) => (
              <div key={p._id} className="prog-card">
                <div>
                  {p.specialty && <div className="pspec">{p.specialty}</div>}
                  <h4>{p.name}</h4>
                  {p.author && <div className="auth">{p.author}</div>}
                  {p.description && <p style={{ fontSize: 13, color: "var(--muted)", margin: "8px 0 0", lineHeight: 1.5 }}>{p.description}</p>}
                </div>
                <div className="pfoot">
                  {p.duration && <span>{p.duration}</span>}
                  {p.price && <span style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--ink)" }}>{p.price}</span>}
                </div>
              </div>
            ))}
          </div>

          {visible < programmes.length && (
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", background: "none", border: "1px solid var(--line)", borderRadius: 999, padding: "12px 28px", cursor: "pointer", color: "var(--ink-2)" }}
              >
                Load more
              </button>
            </div>
          )}
        </>
      )}

      <div className="submit-strip">
        <div>
          <h4>Submit a programme.</h4>
          <p>Clinicians earn 70% of programme revenue. Submit your protocol for review.</p>
        </div>
        <Link className="btn btn-primary" href="/contact">Submit a programme <span className="arrow">→</span></Link>
      </div>
    </>
  );
}

export default function MarketplaceContent({
  partners,
  addons,
  programmes,
}: {
  partners: Partner[];
  addons: Addon[];
  programmes: Programme[];
}) {
  const [tab, setTab] = useState<"partners" | "addons" | "programmes">("partners");

  const stats = [
    { v: "3",                              l: "Marketplace tiers" },
    { v: String(partners.filter((p) => p.status === "Live").length || partners.length), l: "Live this quarter" },
    { v: String(addons.length),            l: "Add-ons available" },
    { v: String(programmes.length),        l: "Clinician programmes" },
  ];

  return (
    <>
      <div className="stats-strip">
        {stats.map((s) => (
          <div key={s.l}><div className="v">{s.v}</div><div className="l">{s.l}</div></div>
        ))}
      </div>

      <section style={{ padding: "0 0 96px" }}>
        <div className="wrap-w">
          <div className="mp-tabs-bar">
            <div className="tabs">
              {([["partners", "Partners"], ["addons", "Add-ons"], ["programmes", "Programmes"]] as const).map(([id, label]) => (
                <button key={id} className={tab === id ? "on" : ""} onClick={() => setTab(id)}>{label}</button>
              ))}
            </div>
          </div>

          {tab === "partners"   && <PartnersTab   partners={partners} />}
          {tab === "addons"     && <AddonsTab     addons={addons} />}
          {tab === "programmes" && <ProgrammesTab programmes={programmes} />}
        </div>
      </section>
    </>
  );
}
