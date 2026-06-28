<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <div>
    <button aria-label="Show More" class="flex items-center px-4 py-2 mt-2 border rounded display border-neutral-700 gap-x-2 cursor-pointer" @click="(isOpen = !isOpen)">
      <slot>
        Show More
      </slot>
      <Icon
        :name="`${isOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'}`"
      />
    </button>
    <div :class="`${isOpen ? 'block' : 'hidden'}`">
      <slot ref="content" name="content" />
    </div>
  </div>
</template>

<style>
.display p {
  margin: 0px;
}
</style>
