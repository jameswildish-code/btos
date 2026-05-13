import { defineField, defineType } from "sanity";

export default defineType({
  name: "integration",
  title: "Integration",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "integrationCategory" }],
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Order within category", type: "number", description: "Lower numbers appear first." }),
    defineField({ name: "tagline", title: "Tagline", type: "string", description: "Short description in the tile, e.g. 'Blood panels · launch partner'" }),
    defineField({ name: "logoText", title: "Logo text", type: "string", description: "Short initials shown in the logo box, e.g. 'KP', 'G'. Leave blank if uploading a logo image." }),
    defineField({ name: "logoImage", title: "Logo image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: [{ title: "Live", value: "live" }, { title: "Beta", value: "beta" }, { title: "Coming soon", value: "soon" }] },
      initialValue: "live",
    }),
    defineField({ name: "statusLabel", title: "Status label override", type: "string", description: "Custom badge text instead of the default (e.g. 'Q3' for a coming-soon integration)." }),
    defineField({
      name: "featured",
      title: "Featured in category",
      type: "boolean",
      description: "Show this integration as the large featured banner at the top of its category section. Only one should be featured per category.",
    }),
    defineField({ name: "featuredTitle", title: "Featured banner — headline", type: "text", rows: 3, description: "Multi-line headline for the featured banner. Line breaks are preserved." }),
    defineField({ name: "featuredDescription", title: "Featured banner — description", type: "text", rows: 3 }),
    defineField({ name: "marketplaceSlug", title: "Marketplace link slug", type: "string", description: "Slug of the marketplace listing, e.g. 'kp-pharma'. Leave blank to link to the main marketplace page." }),
  ],
  preview: {
    select: { title: "name", subtitle: "category.title", media: "logoImage" },
  },
});
