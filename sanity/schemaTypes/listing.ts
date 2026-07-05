import { defineField, defineType } from "sanity";

export const listing = defineType({
  name: "listing",
  title: "Listing",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      type: "string",
      options: { list: ["For Sale", "Pending", "Sold"] },
      initialValue: "For Sale",
    }),
    defineField({ name: "price", type: "number", validation: (Rule) => Rule.required().positive() }),
    defineField({ name: "beds", type: "number" }),
    defineField({ name: "baths", type: "number" }),
    defineField({ name: "sqft", type: "number" }),
    defineField({ name: "image", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    defineField({
      name: "address",
      type: "object",
      fields: [
        defineField({ name: "street", type: "string" }),
        defineField({ name: "city", type: "string" }),
        defineField({ name: "state", type: "string" }),
        defineField({ name: "zip", type: "string" }),
      ],
    }),
    defineField({ name: "description", type: "text" }),
  ],
  preview: {
    select: { title: "title", subtitle: "address.city", media: "image" },
  },
});
