"use client";
import { useState } from "react";

const PAGE_SIZE = 8;

type PressItem = {
  _id: string;
  title: string;
  publication: string;
  publishedAt: string;
  url?: string;
  excerpt?: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
}

export default function PressAllContent({ items }: { items: PressItem[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = items.slice(0, visible);

  return (
    <>
      <div>
        {items.length === 0 ? (
          <p style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 13, marginTop: 32 }}>No press items or articles yet.</p>
        ) : (
          shown.map((item) => (
            <a key={item._id} href={item.url ?? "#"} target="_blank" rel="noopener noreferrer" className="press-item" style={{ display: "grid", textDecoration: "none", color: "inherit" }}>
              <div>
                <div className="pub">{item.publication}</div>
                <div className="date">{formatDate(item.publishedAt)}</div>
              </div>
              <div>
                <h3>{item.title}</h3>
                {item.excerpt && <p>{item.excerpt}</p>}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", paddingTop: 4 }}>Read →</div>
            </a>
          ))
        )}
      </div>

      {visible < items.length && (
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <button
            onClick={() => setVisible(v => v + PAGE_SIZE)}
            style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", background: "none", border: "1px solid var(--line)", borderRadius: 999, padding: "12px 28px", cursor: "pointer", color: "var(--ink-2)" }}
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}
