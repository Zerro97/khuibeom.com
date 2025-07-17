import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asSeoCollection({
        source: 'blog/*.md',
        type: 'page',
        schema: z.object({
          date: z.string(),
          banner: z.string(),
          icon: z.string(),
          time: z.number(),
          slug: z.string(),
          categories: z.array(z.string()),
          tags: z.array(z.string()),
        }),
      }),
    ),
    docs: defineCollection(
      asSeoCollection({
        source: 'docs/**/*.md',
        type: 'page',
        schema: z.object({
          layout: z.string(),
          title: z.string(),
          description: z.string(),
          keywords: z.string(),
        }),
      }),
    ),
    project: defineCollection(
      asSeoCollection({
        source: 'project/*.md',
        type: 'page',
        schema: z.object({
          year: z.string(),
          from_date: z.string(),
          to_date: z.string(),
          title: z.string(),
          description: z.string(),
          image: z.string(),
          icon: z.string(),
          slug: z.string(),
          livelink: z.string(),
          repo: z.string(),
          keywords: z.string(),
          team: z.number(),
        }),
      }),
    ),
  },
})
