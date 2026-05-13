import { defineField, defineType } from "sanity";

export default defineType({
  name: "integrationCategory",
  title: "Integration Category",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Category title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug (used as page anchor)", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "order", title: "Order", type: "number", description: "Lower numbers appear first (1, 2, 3…)" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3, description: "Shown as the section subtitle on the integrations page." }),
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
  },
});
