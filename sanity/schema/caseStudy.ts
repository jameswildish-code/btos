import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Customer Story",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "client" }, validation: (r) => r.required() }),
    defineField({ name: "client", title: "Client name", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string", description: "e.g. Copenhagen, Denmark" }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      options: { list: ["Longevity clinic", "Sports & performance", "Insurance", "Corporate wellness", "Research & pharma", "Consumer", "Public health"] },
    }),
    defineField({ name: "featured", title: "Featured story", type: "boolean", description: "Show this as the featured story at the top of the customers page. Only one should be featured at a time." }),
    defineField({ name: "logo", title: "Client logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3, validation: (r) => r.max(200) }),
    defineField({
      name: "metrics",
      title: "Key metrics",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "value", title: "Value", type: "string" },
        { name: "label", title: "Label", type: "string" },
      ]}],
    }),
    defineField({ name: "quote", title: "Pull quote", type: "text", rows: 3 }),
    defineField({ name: "quoteName", title: "Quote — person name", type: "string" }),
    defineField({ name: "quoteRole", title: "Quote — person role", type: "string" }),
    defineField({
      name: "body",
      title: "Full story",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: { title: "client", subtitle: "industry" },
  },
});
