"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NewsletterForm from "@/components/NewsletterForm";

const ARTS = ["art-a", "art-b", "art-c", "art-d", "art-e", "art-f"];
const CATS = ["All", "Research", "Clinical", "Engineering", "Product", "Opinion"];
const PAGE_SIZE = 6;

type Post = {
  _id: string;
  slug: { current: string };
  title: string;
  excerpt?: string;
  category: string;
  publishedAt: string;
  author?: { name: string };
  readTime?: number;
  art?: string;
  label?: string;
  coverImage?: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export default function BlogContent({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const featured = posts[0];
  const rest = posts.slice(1);
  const filtered = active === "All" ? rest : posts.filter((p) => p.category === active);
  const shown = filtered.slice(0, visible);

  function handleFilter(cat: string) {
    setActive(cat);
    setVisible(PAGE_SIZE);
  }

  return (
    <>
      <section className="b-hero">
        <div className="wrap-w">
          <div className="g">
            <div>
              <span className="eyebrow"><span className="dot"></span> Blog</span>
              <h1 className="h1">Notes from a small<br/>group of people<br/><em>obsessed with signal.</em></h1>
            </div>
            <p className="lede">Clinical studies, product changelogs, opinions from our research team, and the occasional rant about CSV pipelines.</p>
          </div>
          <div className="filters">
            {CATS.map((c) => (
              <button key={c} className={active === c ? "on" : ""} onClick={() => handleFilter(c)}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      {active === "All" && featured && (
        <section className="featured">
          <div className="wrap-w">
            <Link className="feat-card" href={`/blog/${featured.slug.current}`}>
              <div className="feat-art">
                {featured.coverImage ? (
                  <Image src={featured.coverImage} alt={featured.title} fill style={{ objectFit: "cover" }} />
                ) : (
                  <div className="art-grid"></div>
                )}
                {featured.label && <div className="glyph">{featured.label}</div>}
              </div>
              <div className="feat-body">
                <span className="feat-meta">Featured · {featured.category} · {featured.readTime} min read</span>
                <h2>{featured.title}</h2>
                {featured.excerpt && <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{featured.excerpt}</p>}
                <div className="feat-meta" style={{ display: "flex", gap: 16, color: "var(--muted)" }}>
                  {featured.author?.name && <span>{featured.author.name}</span>}
                  <span>· {formatDate(featured.publishedAt)}</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="grid-posts">
        <div className="wrap-w">
          <div className="row-head">
            <span className="eyebrow"><span className="dot"></span> {active === "All" ? "Latest" : active}</span>
            {filtered.length > 0 && <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>{filtered.length} posts</span>}
          </div>
          {filtered.length === 0 && (
            <p style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 13, marginTop: 32 }}>
              {active === "All" ? "Articles are being written. Subscribe below to be notified when the first one lands." : `No ${active.toLowerCase()} articles yet — check back soon.`}
            </p>
          )}
          <div className="post-grid">
            {shown.map((post, i) => {
              const art = post.art ?? ARTS[i % ARTS.length];
              return (
                <Link key={post._id} className="post" href={`/blog/${post.slug.current}`}>
                  <div className={`art ${art}`}>
                    {post.coverImage ? (
                      <Image src={post.coverImage} alt={post.title} fill style={{ objectFit: "cover", borderRadius: 12 }} />
                    ) : (
                      <div className="art-grid"></div>
                    )}
                    {post.label && <div className="label">{post.label}</div>}
                  </div>
                  <div className="post-meta">
                    <span>{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime} MIN READ</span>
                  </div>
                  <h3>{post.title}</h3>
                  {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
                  <div className="post-footer">
                    <span>{post.author?.name ?? ""}</span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </Link>
              );
            })}
          </div>
          {visible < filtered.length && (
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <button onClick={() => setVisible(v => v + PAGE_SIZE)} style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", background: "none", border: "1px solid var(--line)", borderRadius: 999, padding: "12px 28px", cursor: "pointer", color: "var(--ink-2)" }}>
                Load more
              </button>
            </div>
          )}
        </div>
      </section>

      <div className="wrap-w">
        <div className="newsletter-band">
          <div>
            <span className="eyebrow" style={{ color: "#807C6F" }}><span className="dot"></span> Newsletter</span>
            <h2 style={{ marginTop: 12 }}>A quiet email,<br/>once a month.</h2>
            <p style={{ color: "#C9C5B6", margin: "12px 0 0", maxWidth: "40ch" }}>
              New research, product changes, and the occasional thing we changed our minds about. No tracking pixels.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </>
  );
}
