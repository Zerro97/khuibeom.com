<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h2 :id="id" class="relative flex items-center mt-10 mb-4 group">
    <a :href="`#${id}`">
      <span class="absolute hidden pr-2 -translate-x-full text-violet-400 group-hover:block">
        #
      </span>
      <slot />
    </a>
  </h2>
</template>
