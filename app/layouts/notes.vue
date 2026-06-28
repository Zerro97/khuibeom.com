<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <div class="min-h-screen min-w-screen flex flex-col bg-neutral-900">
    <LayoutLoadingIndicator />
    <div class="flex flex-col items-center relative">
      <div class="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-primary-500/8 via-transparent to-transparent pointer-events-none" />
      <LayoutNavBar />
      <main class="flex max-w-[1080px] w-[90vw] mt-[60px]">
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
