<script setup lang="ts">
definePageMeta({
  layout: 'main',
})

useHead({
  meta: [
    { name: 'keywords', content: 'blog, tech, project, dev, web, showcase' },
  ],
})

useSeoMeta({
  title: 'Project',
  ogTitle: 'Project',
  description: 'List of projects that I worked in the past',
  ogDescription: 'List of projects that I worked in the past',
})

// defineOgImageStatic({
//   component: 'MyOgImage',
//   description: '',
//   background: '#27272a',
// })

const projects = await queryCollection('project')
  .order('from_date', 'DESC')
  .all()
</script>

<template>
  <section>
    <h1 data-cy="project-title">
      Projects
    </h1>
    <LineBreak class="mt-4" />
  </section>
  <section class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
    <CardProject
      v-for="project in projects"
      :key="project.slug"
      :title="project.title"
      :description="project.description"
      :year="project.year"
      :image="project.image"
      :slug="project.slug"
      :livelink="project.livelink"
      :repo="project.repo"
    />
  </section>
</template>
