import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const schema = z.object({
  category: z.enum(['layout', 'form', 'element', 'navigation', 'data', 'overlay']).optional(),
  framework: z.string().optional(),
  module: z.string().optional(),
  navigation: z.object({
    title: z.string().optional()
  }),
  links: z.array(z.object({
    label: z.string(),
    icon: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
    to: z.string(),
    target: z.string().optional()
  }))
})

/**
 * defineContentConfig({})
 */
export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    docs: defineCollection({
      type: 'page',
      source: [{
        include: '**',
        exclude: ['index.md']
      }].filter(Boolean),
      schema: schema
    })
  }
})
