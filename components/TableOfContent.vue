<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

const route = useRoute()
const path = withoutTrailingSlash(route.path)

const { data: page } = await useAsyncData(`toc ${route.path}`, async () => await queryContent().where({ _path: path }).findOne())
</script>

<template>
  <aside class="min-w-[240px] h-max sticky top-8">
    <h5>Table of Contents</h5>
    <TableOfContentLink :links="page?.body.toc.links" />
  </aside>
</template>
