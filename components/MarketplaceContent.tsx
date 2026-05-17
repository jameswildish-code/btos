"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PAGE_SIZE = 8;

export type PartnerCategory = {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
};

export type Partner = {
  _id: string;
  name: string;
  status?: string;
  description?: string;
  url?: string;
  logoText?: string;
  logo?: string;
  featured?: boolean;
  featuredTitle?: string;
  featuredDescription?: string;
  category?: { _id: string; title: string; slug: { current: string } };
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

const statusDotColor: Record<string, string> = {
  Live: "var(--teal-bright)",
  Beta: "var(--amber)",
  "Coming soon": "var(--muted)",
};

function EmptyState({ message, cta }: { message: React.ReactNode; cta?: React.ReactNode }) {
  return (
    <div style={{ textAlign: "center", padding: "56px 0" }}>
      <h4 style={{ fontSize: 18, fontWeight: 500, margin: "0 0 8px" }}>Live on the platform.</h4>
      <p style={{ color: "var(--muted)", fontSize: 14, maxWidth: 400, margin: "0 auto 24px", lineHeight: 1.6 }}>{message}</p>
      {cta}
    </div>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="pcard">
      <div className="phead">
        <div className="plogo" style={partner.logo ? { padding: 0, overflow: "hidden", position: "relative" } : {}}>
          {partner.logo
            ? <Image src={partner.logo} alt={partner.name} fill style={{ objectFit: "contain" }} />
            : (partner.logoText ?? initials(partner.name))}
        </div>
        <div>
          <div className="pname">{partner.name}</div>
          {partner.category && <div className="pcat">{partner.category.title}</div>}
        </div>
      </div>
      {partner.description && <p className="pdesc">{partner.description}</p>}
      <div className="pfoot">
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>
          <span className="status-dot" style={{ background: statusDotColor[partner.status ?? ""] ?? "var(--muted)" }}></span>
          {partner.status}
        </span>
        {partner.url
          ? <a href={partner.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", color: "inherit" }}>View →</a>
          : <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>View →</span>}
      </div>
    </div>
  );
}

function PartnerCategorySection({
  category,
  partners,
}: {
  category: PartnerCategory;
  partners: Partner[];
}) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const featured = partners.find((p) => p.featured);
  const shown = partners.slice(0, visible);
  const hasMore = visible < partners.length;

  return (
    <div className="partner-cat-section" id={`partners-${category.slug.current}`}>
      <div className="partner-cat-head">
        <div>
          <h3 className="partner-cat-title">{category.title}.</h3>
        </div>
        {category.description && <p className="partner-cat-desc">{category.description}</p>}
      </div>

      {featured && (
        <div className="feat-banner">
          <div className="body">
            <span className="eyebrow" style={{ color: "#807C6F" }}>
              <span className="dot"></span> Featured · {category.title.toLowerCase()}
            </span>
            <h3>{featured.featuredTitle ?? featured.name}</h3>
            {featured.featuredDescription && <p>{featured.featuredDescription}</p>}
            <div style={{ marginTop: "8px" }}>
              {featured.url
                ? <a className="btn btn-accent btn-sm" href={featured.url} target="_blank" rel="noopener noreferrer">View partner <span className="arrow">→</span></a>
                : <Link className="btn btn-accent btn-sm" href="/contact">Get in touch <span className="arrow">→</span></Link>
              }
            </div>
          </div>
          <div className="art">
            {featured.logo
              ? <Image src={featured.logo} alt={featured.name} fill style={{ objectFit: "contain", padding: "32px" }} />
              : <span className="art-mark">{featured.name}</span>
            }
          </div>
        </div>
      )}

      {partners.length === 0 ? (
        <div className="partner-empty">
          <h4>Live on the platform.</h4>
          <p>This category is active. New partners are onboarded by application and reviewed before going live. <Link href="/contact">Apply →</Link></p>
        </div>
      ) : (
        <>
          <div className="partners-grid">
            {shown.map((p) => <PartnerCard key={p._id} partner={p} />)}
            {!hasMore && (
              <div className="pcard pcard-join">
                <div className="phead">
                  <div className="plogo" style={{ background: "var(--bg-2)", fontSize: 28, color: "var(--muted)" }}>+</div>
                  <div>
                    <div className="pname">Connect your service.</div>
                    <div className="pcat">{category.title}</div>
                  </div>
                </div>
                <p className="pdesc">Reach every BiotrackOS customer through a single integration.</p>
                <div className="pfoot">
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>
                    <span className="status-dot" style={{ background: "var(--muted)" }}></span>
                    Open
                  </span>
                  <Link className="btn btn-accent btn-sm" href="/contact">Apply →</Link>
                </div>
              </div>
            )}
          </div>

          {hasMore && (
            <div style={{ textAlign: "center", marginTop: 16, marginBottom: 8 }}>
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
    </div>
  );
}

function PartnersTab({ categories, partners }: { categories: PartnerCategory[]; partners: Partner[] }) {
  const byCategory = partners.reduce<Record<string, Partner[]>>((acc, p) => {
    const id = p.category?._id ?? "";
    if (!acc[id]) acc[id] = [];
    acc[id].push(p);
    return acc;
  }, {});

  if (categories.length === 0) {
    return (
      <EmptyState
        message={<>Partner categories are active. New partners are onboarded by application and reviewed before launch. <Link href="/contact">Apply →</Link></>}
      />
    );
  }

  return (
    <>
      {categories.map((cat) => (
        <PartnerCategorySection
          key={cat._id}
          category={cat}
          partners={byCategory[cat._id] ?? []}
        />
      ))}
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
      {addons.length === 0 ? (
        <EmptyState
          message={<>First-party features are in development. Have an idea for a market-specific module? <Link href="/contact">Pitch an idea →</Link></>}
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
              <button onClick={() => setVisible((v) => v + PAGE_SIZE)} style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", background: "none", border: "1px solid var(--line)", borderRadius: 999, padding: "12px 28px", cursor: "pointer", color: "var(--ink-2)" }}>
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
      {programmes.length === 0 ? (
        <EmptyState
          message={<>Programmes are open for submission. <Link href="/contact">Submit yours →</Link></>}
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
              <button onClick={() => setVisible((v) => v + PAGE_SIZE)} style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", background: "none", border: "1px solid var(--line)", borderRadius: 999, padding: "12px 28px", cursor: "pointer", color: "var(--ink-2)" }}>
                Load more
              </button>
            </div>
          )}
        </>
      )}
      <div className="submit-strip">
        <div>
          <h4>Submit a programme.</h4>
          <p>Submit your own programme for review, or work with us to develop and activate one. All submissions are evaluated by our team before going live.</p>
        </div>
        <Link className="btn btn-primary" href="/contact">Submit <span className="arrow">→</span></Link>
      </div>
    </>
  );
}

export default function MarketplaceContent({
  partnerCategories,
  partners,
  addons,
  programmes,
}: {
  partnerCategories: PartnerCategory[];
  partners: Partner[];
  addons: Addon[];
  programmes: Programme[];
}) {
  const [tab, setTab] = useState<"partners" | "addons" | "programmes">("partners");

  return (
    <>
      <section style={{ padding: "0 0 96px" }}>
        <div className="wrap-w">
          <div className="mp-tabs-bar">
            <div className="tabs">
              {([["partners", "Partners"], ["addons", "Add-ons"], ["programmes", "Programmes"]] as const).map(([id, label]) => (
                <button key={id} className={tab === id ? "on" : ""} onClick={() => setTab(id)}>{label}</button>
              ))}
            </div>
          </div>

          {tab === "partners"   && <PartnersTab   categories={partnerCategories} partners={partners} />}
          {tab === "addons"     && <AddonsTab     addons={addons} />}
          {tab === "programmes" && <ProgrammesTab programmes={programmes} />}
        </div>
      </section>
    </>
  );
}
