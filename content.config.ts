import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { defineOgImageSchema } from 'nuxt-og-image/content'
import { defineRobotsSchema } from '@nuxtjs/robots/content'
import { defineSchemaOrgSchema } from 'nuxt-schema-org/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
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
        ogImage: defineOgImageSchema(),
        robots: defineRobotsSchema(),
        schemaOrg: defineSchemaOrgSchema(),
        sitemap: defineSitemapSchema(),
      }),
    }),
    notes: defineCollection({
      source: 'notes/**/*.md',
      type: 'page',
      schema: z.object({
        layout: z.string(),
        title: z.string(),
        description: z.string(),
        keywords: z.string(),
        ogImage: defineOgImageSchema(),
        robots: defineRobotsSchema(),
        schemaOrg: defineSchemaOrgSchema(),
        sitemap: defineSitemapSchema(),
      }),
    }),
    project: defineCollection({
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
        ogImage: defineOgImageSchema(),
        robots: defineRobotsSchema(),
        schemaOrg: defineSchemaOrgSchema(),
        sitemap: defineSitemapSchema(),
      }),
    }),
  },
})
