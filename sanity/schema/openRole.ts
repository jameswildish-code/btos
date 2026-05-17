import { defineField, defineType } from "sanity";

export default defineType({
  name: "openRole",
  title: "Open Role",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Job title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      options: { list: ["Engineering", "Product", "Design", "Clinical", "Sales", "Marketing", "Operations", "People"] },
    }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: { list: ["Full-time", "Part-time", "Contract"] },
    }),
    defineField({ name: "isOpen", title: "Role is open", type: "boolean", initialValue: true }),
    defineField({ name: "externalUrl", title: "Link to full job details", type: "url" }),
  ],
});
