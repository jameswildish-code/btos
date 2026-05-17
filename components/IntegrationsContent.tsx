"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PAGE_SIZE = 8;

export type Category = {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
};

export type Integration = {
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
      <div className="logo" style={integration.logoImage ? { padding: 0, overflow: "hidden", position: "relative" } : {}}>
        {integration.logoImage
          ? <Image src={integration.logoImage} alt={integration.name} fill style={{ objectFit: "contain" }} />
          : (integration.logoText ?? "")}
      </div>
      <h4>{integration.name}</h4>
      {integration.tagline && <p>{integration.tagline}</p>}
      <StatusBadge status={integration.status} statusLabel={integration.statusLabel} />
    </div>
  );
}

function CategorySection({
  category,
  integrations,
  index,
}: {
  category: Category;
  integrations: Integration[];
  index: number;
}) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const featured = integrations.find((i) => i.featured);
  const num = String(index + 1).padStart(2, "0");
  const shown = integrations.slice(0, visible);
  const hasMore = visible < integrations.length;

  return (
    <section className="int-section" id={category.slug.current}>
      <div className="wrap-w">
        <div className="head">
          <div>
            <span className="eyebrow"><span className="dot"></span> Category {num}</span>
            <h2>{category.title}.</h2>
          </div>
          {category.description && <p className="desc">{category.description}</p>}
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

        {integrations.length === 0 ? (
          <div className="int-empty">
            <h4>Live on the platform.</h4>
            <p>This category is active. New integrations are onboarded by application and reviewed before launch. <Link href="/contact">Apply →</Link></p>
          </div>
        ) : (
          <>
            <div className="int-grid">
              {shown.map((integration) => (
                <IntegrationTile key={integration._id} integration={integration} />
              ))}
              {!hasMore && (
                <div className="tile soon">
                  <div className="logo">+</div>
                  <h4>Connect your service.</h4>
                  <p>Reach every BiotrackOS customer through a single integration.</p>
                  <Link href="/contact" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--teal)", marginTop: "auto" }}>Apply →</Link>
                </div>
              )}
            </div>

            {hasMore && (
              <div style={{ textAlign: "center", marginTop: 24 }}>
                <button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", background: "none", border: "1px solid var(--line)", borderRadius: 999, padding: "12px 28px", cursor: "pointer", color: "var(--ink-2)" }}
                >
                  Load more
                </button>
              </div>
            )}

            {!hasMore && integrations.length > PAGE_SIZE && (
              <div className="int-grid" style={{ marginTop: 12 }}>
                <div className="tile soon">
                  <div className="logo">+</div>
                  <h4>Connect your service.</h4>
                  <p>Reach every BiotrackOS customer through a single integration.</p>
                  <Link href="/contact" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--teal)", marginTop: "auto" }}>Apply →</Link>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default function IntegrationsContent({
  categories,
  integrations,
}: {
  categories: Category[];
  integrations: Integration[];
}) {
  const byCategory = integrations.reduce<Record<string, Integration[]>>((acc, i) => {
    const id = i.category?._id ?? "";
    if (!acc[id]) acc[id] = [];
    acc[id].push(i);
    return acc;
  }, {});

  if (categories.length === 0) {
    return (
      <section style={{ padding: "120px 0", textAlign: "center" }}>
        <div className="wrap-w">
          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 64, color: "var(--line)", marginBottom: 24 }}>∅</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 32, marginBottom: 12 }}>No integrations configured</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.6, marginBottom: 28 }}>Add Integration Categories and Integrations in Sanity Studio to populate this page.</p>
            <Link className="btn btn-ghost" href="/contact">Get in touch →</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {categories.map((cat, idx) => (
        <CategorySection
          key={cat._id}
          category={cat}
          integrations={byCategory[cat._id] ?? []}
          index={idx}
        />
      ))}
    </>
  );
}
