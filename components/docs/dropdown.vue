<script setup lang="ts">
onMounted(() => {
  if (process.client)
    document.querySelector('body').style.overflowY = 'hidden'
})

onUnmounted(() => {
  if (process.client)
    document.querySelector('body').style.overflowY = 'visible'
})
</script>

<template>
  <div ref="el" class="fixed top-0 left-0 w-screen h-screen pl-6 shadow testing dropdown bg-zinc-900">
    <slot />
    <DocsAside />
  </div>
</template>
