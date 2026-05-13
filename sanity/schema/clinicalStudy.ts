import { defineField, defineType } from "sanity";

export default defineType({
  name: "clinicalStudy",
  title: "Clinical Study",
  type: "document",
  fields: [
    defineField({
      name: "phase",
      title: "Phase",
      type: "string",
      options: { list: [{ title: "Published", value: "published" }, { title: "In progress", value: "in_progress" }] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Order", type: "number", description: "Controls display order within each section." }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required(), description: "Full paper title (published) or study name (in progress)." }),

    // Published fields
    defineField({ name: "journal", title: "Journal & year", type: "string", description: "e.g. 'npj Digital Medicine · 2025'" }),
    defineField({ name: "authors", title: "Authors", type: "string" }),
    defineField({ name: "sampleSize", title: "Sample size", type: "string", description: "e.g. 'n = 14,228' or '—'" }),
    defineField({ name: "pdfUrl", title: "PDF / DOI link", type: "url" }),

    // In-progress fields
    defineField({ name: "studyStatus", title: "Enrolment status", type: "string", description: "e.g. 'Enrolled · 1,204 / 1,500' or 'Recruiting'" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
  ],
  preview: {
    select: { title: "title", subtitle: "phase" },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle === "published" ? "Published" : "In progress" };
    },
  },
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
