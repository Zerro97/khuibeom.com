<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData('docs', async () => await queryContent('docs').where({ _path: route.path }).findOne())

if (page.value) {
  useHead({
    meta: [
      { name: 'keywords', content: page.value.keywords },
    ],
  })

  useServerSeoMeta({
    title: () => page.value?.title,
    description: () => page.value?.description,
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
  <NuxtLayout name="docs">
    <ContentDoc>
      <template #default="{ doc }">
        <ContentRenderer class="" :value="doc">
          <template #empty>
            <div class="flex flex-col items-center justify-center py-20">
              <h1>404</h1>
              <p>Page Not Found</p>
            </div>
          </template>
        </ContentRenderer>
      </template>
      <template #not-found>
        <div class="flex flex-col items-center w-full">
          <h1>404</h1>
          <p>Page Not Found</p>
        </div>
      </template>
      <template #empty>
        <TheAlert class="">
          I will be working on this shortly. Stay tuned!
        </TheAlert>
      </template>
    </ContentDoc>
  </NuxtLayout>
</template>
