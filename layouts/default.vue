<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen bg-zinc-900 min-w-screen">
    <div class="w-screen h-2 bg-violet-600" />
    <NavBar />
    <slot />
  </div>
</template>
