<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
</script>

<template>
  <aside class="min-w-[240px] h-max sticky top-8">
    <h5>Table of Contents</h5>
    <TableOfContentLink :links="page?.body.toc.links" />
  </aside>
</template>
