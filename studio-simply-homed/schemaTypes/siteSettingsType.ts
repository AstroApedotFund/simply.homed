import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'Haven & Hearth',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Hero Image',
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
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (rule) => rule.required().max(100),
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading',
          type: 'string',
          validation: (rule) => rule.required().max(150),
        }),
      ],
    }),
    defineField({
      name: 'newsletterSection',
      title: 'Newsletter Section',
      type: 'object',
      fields: [
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
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
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (rule) => rule.required().max(100),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          validation: (rule) => rule.required().max(200),
        }),
        defineField({
          name: 'cta',
          title: 'Call to Action Text',
          type: 'string',
          validation: (rule) => rule.required().max(30),
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({
          name: 'about',
          title: 'About Section',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'text',
              rows: 4,
              validation: (rule) => rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'contact',
          title: 'Contact Section',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'email',
              title: 'Contact Email',
              type: 'string',
              validation: (rule) => rule.required().email(),
            }),
            defineField({
              name: 'socials',
              title: 'Social Media Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Platform Name',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'url',
                      title: 'URL',
                      type: 'url',
                      validation: (rule) =>
                        rule.required().uri({
                          scheme: ['http', 'https'],
                        }),
                    }),
                    defineField({
                      name: 'icon',
                      title: 'Icon Name',
                      type: 'string',
                      description: 'Lowercase icon identifier (e.g., instagram, facebook)',
                      validation: (rule) => rule.required(),
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'name',
                      subtitle: 'url',
                    },
                  },
                },
              ],
            }),
          ],
        }),
        defineField({
          name: 'links',
          title: 'Footer Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Link Text',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                  description: 'Internal path or external URL',
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: 'name',
                  subtitle: 'url',
                },
              },
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: 'Global Site Settings',
      };
    },
  },
});