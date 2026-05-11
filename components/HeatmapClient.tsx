"use client";
import { useMemo } from "react";

export default function HeatmapClient() {
  const cells = useMemo(() => {
    const palette = ["#1B2748", "#23345C", "#2A4A6E", "#2F6F84", "#2FBFA3", "#D1F24A"];
    return Array.from({ length: 84 }, (_, i) => {
      const r = Math.random();
      let c: string;
      if (r < 0.08) c = palette[5];
      else if (r < 0.28) c = palette[4];
      else if (r < 0.52) c = palette[3];
      else if (r < 0.75) c = palette[2];
      else c = palette[1];
      return { c, o: 0.55 + Math.random() * 0.45, i };
    });
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(14,1fr)", gap: 4 }}>
      {cells.map((cell) => (
        <span
          key={cell.i}
          style={{
            aspectRatio: "1/1",
            borderRadius: 3,
            background: cell.c,
            opacity: cell.o,
            display: "block",
          }}
        />
      ))}
    </div>
  );
}
