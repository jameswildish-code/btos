import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getFeaturedPost } from "@/lib/sanity";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const featuredPost = await getFeaturedPost();
  return (
    <>
      <Nav featuredPost={featuredPost} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
