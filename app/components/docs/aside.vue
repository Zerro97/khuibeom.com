<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('docs')
})
</script>

<template>
  <DocsAsideTree v-if="navigation" :links="navigation[0].children" class="sticky top-0 py-0 pr-2 pb-6 md:pb-0 h-[calc(100vh-48px)] md:max-h-screen md:h-max md:py-4 overflow-auto bg-zinc-900" />
</template>
