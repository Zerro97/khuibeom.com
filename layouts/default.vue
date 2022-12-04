<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen bg-zinc-900 min-w-screen">
    <TopBar />
    <div class="lg:w-[64rem] md:w-full px-10 mx-auto">
      <NavBar />
      <main class="mt-6">
        <slot />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
