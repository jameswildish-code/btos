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
      type: "string",
      options: { list: ["Wearables & devices", "Labs & blood panels", "Genomics & DNA", "Epigenetics", "Medications & Rx", "Clinical / EHR"] },
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Live", "Beta", "Coming soon"] },
      initialValue: "Live",
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    defineField({ name: "url", title: "Website URL", type: "url" }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
  ],
});
