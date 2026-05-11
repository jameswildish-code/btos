"use client";
import Link from "next/link";
import { useState } from "react";

const ARTS = ["art-a", "art-b", "art-c", "art-d", "art-e", "art-f"];
const LABELS = ["VO₂", "HRV", "FHIR", "ZONE 2", "SLEEP", "COHORT"];
const CATS = ["All", "Research", "Clinical", "Engineering", "Product", "Opinion"];

type Post = {
  _id: string;
  slug: { current: string };
  title: string;
  category: string;
  publishedAt: string;
  author?: { name: string };
  readTime?: number;
  art?: string;
  label?: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
}

export default function BlogPosts({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <div className="filters">
        {CATS.map((c) => (
          <button key={c} className={active === c ? "on" : ""} onClick={() => setActive(c)}>{c}</button>
        ))}
      </div>

      <section className="grid-posts">
        <div className="wrap-w">
          <div className="row-head">
            <span className="eyebrow"><span className="dot"></span> {active === "All" ? "Latest" : active}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>{filtered.length} posts</span>
          </div>
          <div className="post-grid">
            {filtered.map((post, i) => {
              const art = post.art ?? ARTS[i % ARTS.length];
              const label = post.label ?? LABELS[i % LABELS.length];
              return (
                <Link key={post._id} className="post" href={`/blog/${post.slug.current}`}>
                  <div className={`art ${art}`}>
                    <div className="art-grid"></div>
                    <div className="label">{label}</div>
                  </div>
                  <div className="post-meta">
                    <span>{post.category}</span>
                    <span>{post.readTime} min</span>
                  </div>
                  <h3>{post.title}</h3>
                  <div className="post-footer">
                    <span>{post.author?.name}</span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
