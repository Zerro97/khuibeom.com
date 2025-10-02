<script setup lang="ts">
const props = defineProps<{ type: 'tag' | 'category' }>()
</script>

<template>
  <div class="flex items-center px-2 rounded bg-zinc-700 w-max gap-x-1 hover:bg-zinc-600 hover:cursor-pointer">
    <Icon v-if="type === 'category'" name="mdi:tag-outline" />
    <p v-else>
      #
    </p>
    <slot />
  </div>
</template>
