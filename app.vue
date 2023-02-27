<script setup lang="ts">
const route = useRoute()
const routePath = ref('')
const isCanvasShown = ref(false)

watch(route, () => {
  if (process.client) {
    routePath.value = route.path.toLocaleLowerCase()
    isCanvasShown.value = !(routePath.value.includes('/docs/')
        || routePath.value.includes('/blog/')
        || routePath.value.includes('/project/')
        || window.innerWidth < 1024)
  }
}, { immediate: true })
</script>

<template>
  <div>
    <ClientOnly>
      <BackgroundCanvas v-if="isCanvasShown" />
    </ClientOnly>
    <SeoKit />
    <NuxtPage />
  </div>
</template>
