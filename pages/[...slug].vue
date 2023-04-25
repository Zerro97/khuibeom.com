<script setup lang="ts">
useServerSeoMeta({
  title: '404',
  description: 'Sorry! This page does not exist.',
})

defineOgImageStatic({
  component: 'MyOgImage',
  content: '',
  background: '#27272a',
})
</script>

<template>
  <NuxtLayout name="main">
    <div class="flex flex-col items-center justify-center w-full py-20">
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  </NuxtLayout>
</template>
