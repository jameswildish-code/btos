import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { mediaPlugin } from "sanity-plugin-media";
import { schemaTypes } from "@/sanity/schema";

export default defineConfig({
  name: "biotrackos",
  title: "BiotrackOS",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [structureTool(), visionTool(), mediaPlugin()],
  schema: { types: schemaTypes },
});
