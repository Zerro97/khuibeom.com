<script setup lang="ts">
const articles = await queryContent('blog').find()
</script>

<template>
  <section>
    <h1>Blog</h1>
    <input
      class="w-full px-4 py-2 mt-5 border rounded bg-zinc-800 border-zinc-700"
      type="text"
      placeholder="Search"
    >
  </section>
  <section class="grid grid-cols-3 gap-4 mt-6">
    <CardPost
      v-for="article in articles"
      :key="article.slug"
      :title="article.title"
      :description="article.description"
      :date="article.date"
      :time="article.time"
      :banner="article.banner"
      :link="article.slug"
    />
  </section>
</template>

