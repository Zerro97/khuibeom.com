<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen min-w-screen flex flex-col">
    <LayoutLoadingIndicator />
    <div class="aura-container">
      <div class="aura aura-1" />
      <div class="aura aura-2" />
      <div class="aura aura-3" />
      <div class="aura aura-4" />
      <div class="aura aura-5" />
    </div>
    <div class="flex flex-col items-center relative">
      <LayoutNavBar />
      <main class="flex flex-col items-center max-w-[1080px] w-[90vw]">
        <slot />
      </main>
      <LayoutFooter />
    </div>
  </div>
</template>
