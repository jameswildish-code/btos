import { defineField, defineType } from "sanity";

export default defineType({
  name: "addon",
  title: "Marketplace Add-on",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    defineField({
      name: "markets",
      title: "Relevant markets",
      type: "array",
      of: [{ type: "string" }],
      options: { list: ["Clinical", "Performance", "Insurance", "Corporate", "Research", "Consumer", "Public"] },
    }),
    defineField({
      name: "tier",
      title: "Min. plan tier",
      type: "string",
      options: { list: ["Starter", "Team", "Enterprise"] },
    }),
    defineField({ name: "price", title: "Price / month", type: "string" }),
    defineField({ name: "icon", title: "Icon", type: "image" }),
  ],
});
