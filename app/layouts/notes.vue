<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
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
      <main class="flex max-w-[1080px] w-[90vw]">
        <nav class="relative">
          <UContentNavigation :navigation="navigation" highlight />
          <NotesAside class="hidden md:block min-w-[220px] max-w-[220px]" />
        </nav>
        <div class="w-full pl-0 md:pl-6 mt-6 sm:mt-8 md:mt-10">
          <slot />
        </div>
      </main>
      <LayoutFooter />
    </div>
  </div>
</template>
