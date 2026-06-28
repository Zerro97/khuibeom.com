<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen min-w-screen flex flex-col bg-neutral-900">
    <LayoutLoadingIndicator />
    <div class="flex flex-col items-center relative">
      <div class="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-primary-500/8 via-transparent to-transparent pointer-events-none" />
      <LayoutNavBar />
      <main class="flex flex-col items-center max-w-[1080px] w-[90vw] mt-[60px]">
        <slot />
      </main>
      <LayoutFooter />
    </div>
  </div>
</template>
