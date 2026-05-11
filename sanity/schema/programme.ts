import { defineField, defineType } from "sanity";

export default defineType({
  name: "programme",
  title: "Marketplace Programme",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Programme name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "author", title: "Author / clinician name", type: "string" }),
    defineField({ name: "specialty", title: "Specialty", type: "string" }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "price", title: "Price", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
  ],
});
