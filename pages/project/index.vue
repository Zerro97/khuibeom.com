<script setup lang="ts">
const projects = await queryContent('project').find()
</script>

<template>
  <NuxtLayout>
    <section>
      <h1>Projects</h1>
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
  </NuxtLayout>
</template>
