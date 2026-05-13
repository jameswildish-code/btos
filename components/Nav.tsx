"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

type FeaturedPost = { title: string; excerpt?: string; slug: { current: string }; coverImage?: string; label?: string };

const Logo = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <path d="M16 3.2 L27.4 9.6 L27.4 22.4 L16 28.8 L4.6 22.4 L4.6 9.6 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M7.5 16 L11.5 16 L13.4 12.2 L15.8 20.4 L18.2 13.6 L20.2 16 L24.5 16" fill="none" stroke="#0FE3D7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

type MegaItem = { label: string; desc: string; href: string };
type MegaCol = { eyebrow: string; items: MegaItem[] };
type MegaPromo = { kind: "demo" | "article"; eyebrow: string; title: string; body: string; cta: string; href: string };
type NavEntry =
  | { id: string; type: "link"; label: string; href: string }
  | { id: string; type: "mega"; label: string; columns: MegaCol[]; promo?: MegaPromo };

const NAV: NavEntry[] = [
  { id: "home", type: "link", label: "Home", href: "/" },
  {
    id: "product", type: "mega", label: "Product",
    columns: [
      { eyebrow: "Product", items: [
        { label: "Product overview",  desc: "The platform, in one page.",            href: "/product" },
        { label: "Clinic dashboard",  desc: "For clinicians managing cohorts.",       href: "/features/clinic-dashboard" },
        { label: "Consumer app",      desc: "BiotrackOS for iPhone & Android.",       href: "/app" },
        { label: "Protocols",         desc: "Biomarker-driven recommendations.",      href: "/features/protocols" },
        { label: "Integrations",      desc: "6 categories. Real partners.",           href: "/integrations" },
        { label: "Marketplace",       desc: "Partners, add-ons & programmes.",        href: "/marketplace" },
        { label: "Platforms · SDK",   desc: "Wearable SDK as a service.",             href: "/platforms" },
      ]},
      { eyebrow: "Markets", items: [
        { label: "Clinics & longevity labs", desc: "Cohort dashboards & protocols.", href: "/markets#longevity" },
        { label: "Sports teams & gyms",      desc: "Coach + athlete, one record.",   href: "/markets#performance" },
        { label: "Insurance",                desc: "Consented streams, never surveys.", href: "/markets#insurer" },
        { label: "Corporate wellness",       desc: "Aggregate-only, individually private.", href: "/markets#wellness" },
        { label: "Research & pharma",        desc: "Real-world signal, audit-ready.", href: "/markets#research" },
        { label: "Public health & events",   desc: "City programs, mass-event cohorts.", href: "/markets#public" },
        { label: "Consumer · direct",        desc: "The free app most people stay on.", href: "/markets#consumer" },
      ]},
    ],
    promo: { kind: "demo", eyebrow: "New", title: "A 20-minute walkthrough.", body: "See a real clinic cohort, your data sources, and live alerts.", cta: "Book a demo", href: "/contact" },
  },
  { id: "customers", type: "link", label: "Customers", href: "/customers" },
  { id: "pricing",   type: "link", label: "Pricing",   href: "/pricing" },
  {
    id: "resources", type: "mega", label: "Resources",
    columns: [
      { eyebrow: "Learn", items: [
        { label: "Field notes",      desc: "Research, opinion, changelog.",   href: "/blog" },
        { label: "Customer stories", desc: "How teams ship with BiotrackOS.", href: "/customers" },
        { label: "Clinical evidence",desc: "Published & ongoing studies.",    href: "/clinical-evidence" },
      ]},
      { eyebrow: "Trust", items: [
        { label: "Trust & security",  desc: "HIPAA · SOC 2 · ISO 27001.",    href: "/trust-security" },
        { label: "Developer docs",    desc: "API, FHIR, webhooks.",           href: "/docs" },
        { label: "Status",            desc: "All systems operational.",       href: "/status" },
      ]},
    ],
    promo: { kind: "article", eyebrow: "Latest", title: "The case against the quarterly checkup.", body: "Why three-month cadence is a calendar artifact — and what changes when data is continuous.", cta: "Read article", href: "/blog/the-case-against-the-quarterly" },
  },
  {
    id: "company", type: "mega", label: "Company",
    columns: [
      { eyebrow: "Company", items: [
        { label: "About BiotrackOS", desc: "Founders, principles, timeline.", href: "/about" },
        { label: "Careers",          desc: "Open roles across Europe.",       href: "/careers" },
        { label: "Press",            desc: "Brand kit & media inquiries.",    href: "/press" },
        { label: "Contact",          desc: "Sales, support, partnerships.",   href: "/contact" },
      ]},
      { eyebrow: "Legal", items: [
        { label: "Terms",             desc: "Service terms & SLA.",           href: "/terms" },
        { label: "Privacy",           desc: "GDPR, HIPAA, retention.",        href: "/privacy" },
        { label: "Data processing",   desc: "DPA & subprocessor list.",       href: "/data-processing" },
        { label: "Security disclosure", desc: "security@biotrackos.com",      href: "/security-disclosure" },
      ]},
    ],
  },
];

const activeMap: Record<string, string> = {
  "/": "home",
  "/product": "product", "/integrations": "product",
  "/customers": "customers",
  "/pricing": "pricing",
  "/blog": "resources", "/clinical-evidence": "resources",
  "/about": "company", "/contact": "company", "/careers": "company",
  "/markets": "product",
};

function ArticlePromo({ promo, featuredPost }: { promo: MegaPromo; featuredPost?: FeaturedPost | null }) {
  const post = featuredPost;
  const href = post ? `/blog/${post.slug.current}` : promo.href;
  const title = post?.title ?? promo.title;
  const body = post?.excerpt ?? promo.body;
  return (
    <Link className="mega-promo mega-promo-art" href={href}>
      <div className="mega-promo-art-img" style={{ position: "relative" }}>
        {post?.coverImage
          ? <Image src={post.coverImage} alt={title} fill style={{ objectFit: "cover", borderRadius: 10 }} />
          : <span className="glyph">{post?.label ?? "QTR."}</span>
        }
      </div>
      <div>
        <span className="eyebrow"><span className="dot" style={{ animation: "none" }}></span> {promo.eyebrow}</span>
        <h5>{title}</h5>
        <p>{body}</p>
        <span className="mega-promo-cta-link">{promo.cta} <span className="arrow">→</span></span>
      </div>
    </Link>
  );
}

export default function Nav({ featuredPost }: { featuredPost?: FeaturedPost | null }) {
  const pathname = usePathname();
  const activeTop = activeMap[pathname] ?? "";
  const [openId, setOpenId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenId(id);
  };
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setOpenId(null), 120);
  };

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => {
    setDrawerOpen(false);
    setOpenAccordion(null);
  };
  const toggleAccordion = (id: string) =>
    setOpenAccordion((prev) => (prev === id ? null : id));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpenId(null); closeDrawer(); }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  // Close drawer on route change
  useEffect(() => { closeDrawer(); }, [pathname]);

  return (
    <>
      <style>{`
        .nav {
          background: color-mix(in srgb, var(--bg) 88%, transparent);
          backdrop-filter: saturate(120%) blur(10px);
          -webkit-backdrop-filter: saturate(120%) blur(10px);
          border-bottom: 1px solid var(--line-2);
          position: sticky; top: 0; z-index: 50;
        }
        .nav-inner { display:flex; align-items:center; justify-content:space-between; height:72px; }
        .brand { display:inline-flex; align-items:center; gap:10px; font-family:var(--font-sans); font-weight:600; letter-spacing:.02em; font-size:14px; color:var(--ink); }
        .nav-links { display:flex; gap:4px; align-items:center; font-size:14px; }
        .nav-links a, .mega-trigger { padding:8px 12px; border-radius:8px; color:var(--ink-2); position:relative; }
        .nav-links a:hover, .mega-trigger:hover, .mega-trigger.is-open { background:var(--bg-2); color:var(--ink); }
        .nav-links a.active, .mega-trigger.active { color:var(--ink); }
        .nav-links a.active::after, .mega-trigger.active::after { content:""; position:absolute; left:12px; right:12px; bottom:2px; height:1px; background:var(--ink); }
        .mega-trigger.active::after { right:22px; }
        .mega-trigger { display:inline-flex; align-items:center; gap:6px; background:transparent; border:0; font:inherit; font-size:14px; cursor:pointer; }
        .mega-caret { transition:transform .18s ease; opacity:.55; }
        .mega-trigger.is-open .mega-caret { transform:rotate(180deg); opacity:1; }
        .nav-cta { display:flex; align-items:center; gap:10px; }
        .nav-burger { display:none; }

        .mega-container { position:absolute; left:0; right:0; top:100%; pointer-events:none; }
        .mega-panel { position:absolute; left:0; right:0; top:0; opacity:0; transform:translateY(-6px); transition:opacity .16s ease, transform .16s ease; pointer-events:none; }
        .mega-panel.is-visible { opacity:1; transform:translateY(0); pointer-events:auto; }
        .mega-inner { margin:8px auto 0; max-width:1180px; background:var(--surface); border:1px solid var(--line); border-radius:20px; box-shadow:0 30px 60px -30px rgba(20,18,12,.18), 0 2px 6px rgba(20,18,12,.04); padding:28px 32px; display:grid; grid-template-columns:1fr; gap:32px; }
        .mega-panel.has-promo .mega-inner { grid-template-columns:1.55fr 1fr; }
        .mega-cols { display:grid; grid-template-columns:repeat(2,1fr); gap:28px; }
        .mega-col-eyebrow { font-family:var(--font-mono); font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); padding-bottom:12px; margin-bottom:6px; border-bottom:1px solid var(--line); }
        .mega-col-items { display:grid; gap:2px; }
        .mega-item { display:grid; gap:2px; padding:10px 12px; border-radius:12px; color:var(--ink); transition:background .14s ease; }
        .mega-item:hover { background:var(--bg-2); }
        .mega-item-label { font-size:14px; font-weight:500; }
        .mega-item-desc { font-size:12px; color:var(--muted); line-height:1.4; }
        .mega-promo { border-radius:16px; padding:22px; display:flex; flex-direction:column; gap:14px; min-height:100%; text-decoration:none; }
        .mega-promo h5 { margin:10px 0 4px; font-family:var(--font-display); font-weight:400; font-size:24px; line-height:1.1; letter-spacing:-.01em; }
        .mega-promo p { margin:0; font-size:13px; line-height:1.5; }
        .mega-promo-dark { background:var(--ink); color:var(--bg); position:relative; overflow:hidden; justify-content:space-between; }
        .mega-promo-dark::before { content:""; position:absolute; inset:0; background:radial-gradient(ellipse at top right, rgba(47,191,163,.20), transparent 60%); pointer-events:none; }
        .mega-promo-dark > * { position:relative; }
        .mega-promo-dark p { color:#C9C5B6; }
        .mega-promo-art { background:var(--bg-2); color:var(--ink); border:1px solid var(--line); }
        .mega-promo-art-img { aspect-ratio:5/2; border-radius:10px; background:linear-gradient(135deg,#1F2A48,#2A4A6E 60%,#2FBFA3); position:relative; overflow:hidden; }
        .mega-promo-art-img::after { content:""; position:absolute; inset:0; background:repeating-linear-gradient(to right,transparent 0,transparent 9px,rgba(255,255,255,.06) 9px,rgba(255,255,255,.06) 10px),repeating-linear-gradient(to bottom,transparent 0,transparent 9px,rgba(255,255,255,.06) 9px,rgba(255,255,255,.06) 10px); }
        .mega-promo-art-img .glyph { position:absolute; left:14px; bottom:10px; font-family:var(--font-display); font-size:36px; color:rgba(255,255,255,.9); line-height:1; }
        .mega-promo-art p { color:var(--muted); }
        .mega-promo-cta-link { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--ink); margin-top:6px; }
        .mega-promo-cta { margin-top:auto; }
        .nav.mega-open::after { content:""; position:fixed; left:0; right:0; top:72px; bottom:0; background:rgba(20,18,12,.10); z-index:-1; pointer-events:none; }

        @media (max-width:960px) {
          .nav-links { display:none; }
          .nav-burger {
            display:inline-flex; align-items:center; gap:10px;
            height:38px; padding:0 14px 0 12px;
            border-radius:999px; border:1px solid var(--line);
            background:var(--surface); color:var(--ink);
            font-family:var(--font-mono); font-size:11px; letter-spacing:.14em;
            text-transform:uppercase; cursor:pointer;
          }
          .nav-burger .burger-lines { width:14px; height:10px; position:relative; display:inline-block; }
          .nav-burger .burger-lines i { position:absolute; left:0; right:0; height:1.5px; background:currentColor; border-radius:1px; transition:transform .25s ease, top .2s ease .05s; }
          .nav-burger .burger-lines i:nth-child(1) { top:2px; }
          .nav-burger .burger-lines i:nth-child(2) { top:7px; }
          .nav-burger.is-open .burger-lines i:nth-child(1) { top:4.25px; transform:rotate(45deg); transition:top .2s ease, transform .25s ease .05s; }
          .nav-burger.is-open .burger-lines i:nth-child(2) { top:4.25px; transform:rotate(-45deg); transition:top .2s ease, transform .25s ease .05s; }
          .nav-cta .btn-ghost { display:none; }
          .nav-cta .btn-primary { height:38px; padding:0 14px; font-size:12px; }
        }
        @media (max-width:420px) { .nav-cta .btn-primary .arrow { display:none; } }

        /* Mobile drawer */
        .m-backdrop {
          position:fixed; inset:0; z-index:90;
          background:rgba(20,18,12,.32);
          opacity:0; pointer-events:none;
          transition:opacity .28s ease;
          backdrop-filter:blur(2px);
        }
        .m-backdrop.is-open { opacity:1; pointer-events:auto; }
        .m-drawer {
          position:fixed; top:0; right:0; z-index:100;
          width:min(440px,92vw); height:100dvh; max-height:100dvh;
          background:var(--bg);
          display:flex; flex-direction:column;
          border-left:1px solid var(--line);
          transform:translateX(100%);
          transition:transform .36s cubic-bezier(.4,.0,.2,1);
          box-shadow:-24px 0 60px -30px rgba(20,18,12,.25);
          visibility:hidden;
        }
        .m-drawer.is-open { transform:translateX(0); visibility:visible; }
        .m-head { display:flex; align-items:center; justify-content:space-between; padding:16px 24px 14px; border-bottom:1px solid var(--line-2); flex:0 0 auto; }
        .m-eyebrow { font-family:var(--font-mono); font-size:11px; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); display:inline-flex; align-items:center; gap:8px; }
        .m-eyebrow .dot { width:6px; height:6px; border-radius:50%; background:var(--teal-bright); box-shadow:0 0 0 3px rgba(47,191,163,.22); animation:m-pulse 2.2s ease-in-out infinite; }
        @keyframes m-pulse { 0%,100%{opacity:1} 50%{opacity:.35} }
        .m-close { display:inline-flex; align-items:center; gap:8px; height:32px; padding:0 12px 0 10px; border-radius:999px; border:1px solid var(--line); background:transparent; color:var(--ink); font-family:var(--font-mono); font-size:10px; letter-spacing:.16em; text-transform:uppercase; cursor:pointer; }
        .m-close:hover { background:var(--bg-2); }
        .m-nav { flex:1 1 auto; overflow-y:auto; padding:8px 0 24px; -webkit-overflow-scrolling:touch; }
        .m-list { list-style:none; margin:0; padding:0; }
        .m-item { border-bottom:1px solid var(--line-2); }
        .m-item:last-child { border-bottom:0; }
        .m-row { display:grid; align-items:center; grid-template-columns:30px 1fr auto; gap:12px; padding:12px 24px; width:100%; text-align:left; background:transparent; border:0; cursor:pointer; color:var(--ink); text-decoration:none; }
        .m-num { font-family:var(--font-mono); font-size:10px; letter-spacing:.14em; color:var(--muted); padding-top:10px; }
        .m-label { font-family:var(--font-display); font-weight:400; font-size:30px; line-height:1.05; letter-spacing:-.02em; }
        .m-label.is-active { font-style:italic; }
        .m-arrow { font-family:var(--font-mono); font-size:14px; color:var(--muted); }
        .m-caret { width:28px; height:28px; display:inline-flex; align-items:center; justify-content:center; border:1px solid var(--line); border-radius:50%; color:var(--ink); transition:transform .28s ease, background .18s ease, border-color .18s ease; }
        .m-item-mega.is-open .m-caret { transform:rotate(180deg); background:var(--ink); color:var(--bg); border-color:var(--ink); }
        .m-panel { display:grid; grid-template-rows:0fr; transition:grid-template-rows .32s cubic-bezier(.4,.0,.2,1); }
        .m-panel-inner { overflow:hidden; padding:0 24px; }
        .m-item-mega.is-open .m-panel { grid-template-rows:1fr; }
        .m-item-mega.is-open .m-panel-inner { padding-bottom:18px; }
        .m-section { margin-top:12px; }
        .m-section:first-child { margin-top:4px; }
        .m-section-eyebrow { font-family:var(--font-mono); font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); padding:8px 0; border-bottom:1px solid var(--line-2); margin-bottom:6px; }
        .m-sublist { list-style:none; margin:0; padding:0; display:grid; gap:2px; }
        .m-sublist a { display:grid; gap:2px; padding:10px 12px; margin:0 -12px; border-radius:10px; color:var(--ink); text-decoration:none; }
        .m-sublist a:hover { background:var(--bg-2); }
        .m-sub-label { font-size:15px; font-weight:500; }
        .m-sub-desc { font-size:12px; color:var(--muted); line-height:1.4; }
        .m-foot { border-top:1px solid var(--line-2); padding:14px 24px max(16px,env(safe-area-inset-bottom)); background:var(--bg); display:grid; gap:12px; flex:0 0 auto; }
        .m-signin { width:100%; justify-content:center; height:44px; }
        @media (min-width:961px) { .m-backdrop, .m-drawer { display:none !important; } }
        @media (max-width:420px) { .m-label{font-size:26px;} .m-row{padding:10px 20px;} .m-head,.m-foot{padding-left:20px;padding-right:20px;} .m-panel-inner{padding:0 20px;} }
        @media (max-height:640px) { .m-label{font-size:24px;} }
      `}</style>

      <header className={`nav${openId ? " mega-open" : ""}`}>
        <div className="wrap-w nav-inner">
          <Link className="brand" href="/">
            <span style={{ display: "inline-flex", color: "var(--ink)" }}><Logo /></span>
            <span>BIOTRACK<span style={{ opacity: 0.45 }}>OS</span></span>
          </Link>

          <nav className="nav-links" onMouseLeave={closeMega}>
            {NAV.map((entry) => {
              if (entry.type === "link") {
                return (
                  <Link key={entry.id} href={entry.href} className={activeTop === entry.id ? "active" : ""}>
                    {entry.label}
                  </Link>
                );
              }
              return (
                <button
                  key={entry.id}
                  type="button"
                  className={`mega-trigger${activeTop === entry.id ? " active" : ""}${openId === entry.id ? " is-open" : ""}`}
                  aria-haspopup="true"
                  aria-expanded={openId === entry.id}
                  onMouseEnter={() => openMega(entry.id)}
                  onFocus={() => openMega(entry.id)}
                  onClick={() => openId === entry.id ? setOpenId(null) : openMega(entry.id)}
                >
                  {entry.label}
                  <svg className="mega-caret" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                    <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              );
            })}
          </nav>

          <div className="nav-cta">
            <Link className="btn btn-ghost btn-sm" href="/contact">Sign in</Link>
            <Link className="btn btn-primary btn-sm" href="/contact">Get started <span className="arrow">→</span></Link>
            <button
              className={`nav-burger${drawerOpen ? " is-open" : ""}`}
              type="button"
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={drawerOpen}
              onClick={() => drawerOpen ? closeDrawer() : openDrawer()}
            >
              <span className="burger-lines" aria-hidden="true"><i></i><i></i></span>
              <span className="burger-label">Menu</span>
            </button>
          </div>
        </div>

        <div className="mega-container">
          {NAV.filter((n): n is Extract<NavEntry, { type: "mega" }> => n.type === "mega").map((group) => (
            <div
              key={group.id}
              className={`mega-panel${group.promo ? " has-promo" : ""}${openId === group.id ? " is-visible" : ""}`}
              onMouseEnter={() => openMega(group.id)}
              onMouseLeave={closeMega}
            >
              <div className="mega-inner">
                <div className="mega-cols">
                  {group.columns.map((col) => (
                    <div key={col.eyebrow} className="mega-col">
                      <div className="mega-col-eyebrow">{col.eyebrow}</div>
                      <div className="mega-col-items">
                        {col.items.map((item) => (
                          <Link key={item.href} className="mega-item" href={item.href}>
                            <span className="mega-item-label">{item.label}</span>
                            <span className="mega-item-desc">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {group.promo && (
                  group.promo.kind === "demo" ? (
                    <div className="mega-promo mega-promo-dark">
                      <div>
                        <span className="eyebrow" style={{ color: "#807C6F" }}>
                          <span className="dot" style={{ animation: "none" }}></span> {group.promo.eyebrow}
                        </span>
                        <h5>{group.promo.title}</h5>
                        <p>{group.promo.body}</p>
                      </div>
                      <div className="mega-promo-cta">
                        <Link className="btn btn-accent btn-sm" href={group.promo.href}>{group.promo.cta} <span className="arrow">→</span></Link>
                      </div>
                    </div>
                  ) : (
                    <ArticlePromo promo={group.promo} featuredPost={featuredPost} />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`m-backdrop${drawerOpen ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={closeDrawer}
      />
      <aside
        className={`m-drawer${drawerOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!drawerOpen}
      >
        <div className="m-head">
          <span className="m-eyebrow"><span className="dot"></span> Menu — No. 01</span>
          <button className="m-close" type="button" aria-label="Close menu" onClick={closeDrawer}>
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            <span>Close</span>
          </button>
        </div>

        <nav className="m-nav" aria-label="Primary mobile">
          <ul className="m-list">
            {NAV.map((entry, idx) => {
              const num = String(idx + 1).padStart(2, "0");
              const isActive = activeTop === entry.id;
              if (entry.type === "link") {
                return (
                  <li key={entry.id} className="m-item">
                    <Link className="m-row" href={entry.href} onClick={closeDrawer}>
                      <span className="m-num">{num}</span>
                      <span className={`m-label${isActive ? " is-active" : ""}`}>{entry.label}</span>
                      <span className="m-arrow" aria-hidden="true">→</span>
                    </Link>
                  </li>
                );
              }
              const isOpen = openAccordion === entry.id;
              return (
                <li key={entry.id} className={`m-item m-item-mega${isOpen ? " is-open" : ""}`}>
                  <button
                    className="m-row m-trigger"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleAccordion(entry.id)}
                  >
                    <span className="m-num">{num}</span>
                    <span className={`m-label${isActive ? " is-active" : ""}`}>{entry.label}</span>
                    <span className="m-caret" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14">
                        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  <div className="m-panel">
                    <div className="m-panel-inner">
                      {entry.columns.map((col) => (
                        <div key={col.eyebrow} className="m-section">
                          <div className="m-section-eyebrow">{col.eyebrow}</div>
                          <ul className="m-sublist">
                            {col.items.map((item) => (
                              <li key={item.href}>
                                <Link href={item.href} onClick={closeDrawer}>
                                  <span className="m-sub-label">{item.label}</span>
                                  <span className="m-sub-desc">{item.desc}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="m-foot">
          <Link className="btn btn-ghost m-signin" href="/contact" onClick={closeDrawer}>Sign in</Link>
        </div>
      </aside>
    </>
  );
}
