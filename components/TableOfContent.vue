<script setup lang="ts">
const route = useRoute()
const page = await queryContent('blog').where({ _path: route.path }).findOne()
</script>

<template>
  <aside class="min-w-[240px] h-max sticky top-8">
    <h5>Table of Contents</h5>
    <TableOfContentLink :links="page.body.toc.links" />
  </aside>
</template>
