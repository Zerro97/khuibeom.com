<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen bg-zinc-900 min-w-screen">
    <TopBar />
    <div class="max-w-[60rem] w-3/4 mx-auto">
      <NavBar />
      <div class="mt-8">
        <slot />
      </div>
      <TheFooter />
    </div>
  </div>
</template>
