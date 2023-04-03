<script setup lang="ts">
const route = useRoute()

const val = await queryContent().where({ _path: route.path }).findOne()
console.log(val)

const { data: page } = await useAsyncData(`toc ${route.path}`, async () => await queryContent().where({ _path: route.path }).findOne())
</script>

<template>
  <aside class="min-w-[240px] h-max sticky top-8">
    <h5>Table of Contents</h5>
    <TableOfContentLink :links="page?.body.toc.links" />
  </aside>
</template>
