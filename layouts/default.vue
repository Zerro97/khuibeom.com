<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen bg-zinc-900 min-w-screen">
    <TopBar />
    <div class="lg:w-[64rem] md:w-full px-6 md:px-10 mx-auto z-10 bg-zinc-900">
      <NavBar />
      <main class="mt-4">
        <slot />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
