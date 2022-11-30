<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h5 :id="id" class="relative flex items-center mt-6 mb-2 text-lg group">
    <a :href="`#${id}`">
      <span class="absolute hidden pr-2 -translate-x-full text-violet-400 group-hover:block">
        #
      </span>
      <slot />
    </a>
  </h5>
</template>
