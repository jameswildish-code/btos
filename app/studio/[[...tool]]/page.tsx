/**
 * Embedded Sanity Studio.
 * Access at /studio once you've set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local
 */
"use client";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
