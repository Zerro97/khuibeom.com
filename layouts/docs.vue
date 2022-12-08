<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen bg-zinc-900 min-w-screen">
    <TopBar />
    <div class="lg:w-[64rem] md:w-full px-10 mx-auto z-10 bg-zinc-900">
      <NavBar />
      <main class="flex mt-4 gap-x-8">
        <nav class="hidden md:block min-w-[220px] max-w-[220px]">
          <DocsAside />
        </nav>
        <div class="w-full">
          <slot />
        </div>
      </main>
      <TheFooter />
    </div>
  </div>
</template>
