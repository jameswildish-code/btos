import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BiotrackOS — The operating system for connected health",
  description: "One record across wearables, labs, genomics, and medications — for longevity clinics, performance teams, insurers, and the people they care for.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
