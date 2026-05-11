import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Customer Story",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "client" }, validation: (r) => r.required() }),
    defineField({ name: "client", title: "Client name", type: "string" }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      options: { list: ["Longevity clinic", "Sports & performance", "Insurance", "Corporate wellness", "Research & pharma", "Consumer", "Public health"] },
    }),
    defineField({ name: "logo", title: "Client logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
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
});
