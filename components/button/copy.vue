<script setup lang="ts">
const alert = () => {
  console.log('in')
}
</script>

<template>
  <button
    class="absolute px-2 py-1 border rounded top-2 right-2 border-zinc-700 w-max hover:bg-zinc-700 hover:cursor-pointer"
    @click="alert"
  >
    <Icon name="mdi:content-copy" />
  </button>
</template>
