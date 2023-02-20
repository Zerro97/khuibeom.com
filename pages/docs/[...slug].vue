<script setup lang="ts">
const route = useRoute()
const page = await queryContent('docs').where({ _path: route.path }).findOne()

useHead({
  meta: [
    { name: 'keywords', content: page.keywords },
  ],
})

useServerSeoMeta({
  title: page.title,
  description: page.description,
})

defineOgImageStatic({
  component: 'MyOgImage',
  title: page.title,
  description: '',
  background: '#27272a',
})
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
        <h1>404</h1>
        <p>Page Not Found</p>
      </template>
      <template #empty>
        <TheAlert class="">
          I will be working on this shortly. Stay tuned!
        </TheAlert>
      </template>
    </ContentDoc>
  </NuxtLayout>
</template>
