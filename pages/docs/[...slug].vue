<script setup lang="ts">
definePageMeta({
  layout: 'docs',
})

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})

if (page.value) {
  useHead({
    meta: [
      { name: 'keywords', content: page.value.keywords },
    ],
  })

  useSeoMeta({
    title: () => `${page.value?.title}`,
    ogTitle: () => `${page.value?.title}`,
    description: () => page.value?.description,
    ogDescription: () => page.value?.description,
  })

  // defineOgImageStatic({
  //   component: 'MyOgImage',
  //   title: 'Documents',
  //   description: '',
  //   background: '#27272a',
  // })
}
</script>

<template>
  <template v-if="page">
    <ContentRenderer :value="page">
      <!-- <template #empty>
        <div class="flex flex-col items-center justify-center py-20">
          <h1>404</h1>
          <p>Page Not Found</p>
        </div>
      </template> -->
    </ContentRenderer>
  </template>
  <template v-else>
    <div class="flex flex-col items-center w-full">
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  </template>
</template>
