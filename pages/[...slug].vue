<script setup lang="ts">
useHead({
  title: '404',
  meta: [
    { name: 'title', content: '404' },
    { name: 'description', content: 'Sorry! This page does not exist.' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center w-full py-20">
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  </NuxtLayout>
</template>
