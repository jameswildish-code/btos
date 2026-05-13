import { defineField, defineType } from "sanity";

export default defineType({
  name: "partner",
  title: "Marketplace Partner",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "partnerCategory" }],
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Order within category", type: "number", description: "Lower numbers appear first." }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: [{ title: "Live", value: "Live" }, { title: "Beta", value: "Beta" }, { title: "Coming soon", value: "Coming soon" }] },
      initialValue: "Live",
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    defineField({ name: "url", title: "Website URL", type: "url" }),
    defineField({ name: "logoText", title: "Logo text", type: "string", description: "Short initials shown in the logo box, e.g. 'KP'. Leave blank if uploading a logo image." }),
    defineField({ name: "logo", title: "Logo image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "featured",
      title: "Featured in category",
      type: "boolean",
      description: "Show this partner as the large featured banner at the top of its category section. Only one should be featured per category.",
    }),
    defineField({ name: "featuredTitle", title: "Featured banner — headline", type: "text", rows: 3, description: "Multi-line headline for the featured banner. Line breaks are preserved." }),
    defineField({ name: "featuredDescription", title: "Featured banner — description", type: "text", rows: 3 }),
  ],
  preview: {
    select: { title: "name", subtitle: "category.title", media: "logo" },
  },
});
