<script setup lang="ts">
const { toc } = useContent()
</script>

<template>
  <aside class="min-w-[240px] h-max sticky top-8">
    <h5>Table of Contents</h5>
    <TableOfContentLink :links="toc.links" />
  </aside>
</template>
