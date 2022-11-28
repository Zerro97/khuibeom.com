<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h3 :id="id" class="relative flex items-center mt-8 mb-3 group hover:underline underline-violet-600">
    <a :href="`#${id}`">
      <span class="absolute hidden pr-2 -translate-x-full text-violet-600 group-hover:block">
        #
      </span>
      <slot />
    </a>
  </h3>
</template>
