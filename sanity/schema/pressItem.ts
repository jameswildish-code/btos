import { defineField, defineType } from "sanity";

export default defineType({
  name: "pressItem",
  title: "Press Item",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Article title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "publication", title: "Publication", type: "string" }),
    defineField({ name: "publishedAt", title: "Published at", type: "date" }),
    defineField({ name: "url", title: "URL", type: "url" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 2 }),
  ],
  preview: {
    select: { title: "title", subtitle: "publication" },
  },
});
