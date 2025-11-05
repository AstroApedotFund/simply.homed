import { defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'affiliateUrl',
      title: 'Affiliate URL',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Display price (e.g., $189.00)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Product Category',
      type: 'string',
      options: {
        list: [
          { title: 'Bedding', value: 'Bedding' },
          { title: 'Dining', value: 'Dining' },
          { title: 'Organization', value: 'Organization' },
          { title: 'Smart Home', value: 'Smart Home' },
          { title: 'Kitchen', value: 'Kitchen' },
          { title: 'Office', value: 'Office' },
          { title: 'Decor', value: 'Decor' },
          { title: 'Appliances', value: 'Appliances' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Show this product in featured sections',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
      price: 'price',
    },
    prepare(selection) {
      const { title, subtitle, media, price } = selection;
      return {
        title,
        subtitle: `${subtitle} | ${price}`,
        media,
      };
    },
  },
});