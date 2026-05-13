import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, validation: (r) => r.max(160) }),
    defineField({ name: "publishedAt", title: "Published at", type: "datetime" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Research", "Product", "Engineering", "Opinion", "Clinical"] },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "person" }],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "label",
      title: "Card Label",
      type: "string",
      description: "Short label shown on the card artwork (e.g. VO₂, HRV, SLEEP)",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "report",
      title: "Downloadable Report (PDF)",
      type: "file",
      options: { accept: ".pdf" },
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt" },
  },
});
