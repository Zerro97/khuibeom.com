<script setup lang="ts">
useSeoMeta({
  title: 'Hi, I\'m Hui Beom',
  description: 'Hi, I\'m Hui Beom. I\'m software developer from South Korea. I\'m using this site to document my learnings and share with the world what I have learnt.',
})

defineOgImageStatic({
  component: 'MyOgImage',
  title: 'Welcome to my site 👋',
  description: '',
  background: '#27272a',
})

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
