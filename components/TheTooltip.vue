<script setup lang="ts">

</script>

<template>
  <div class="relative group">
    <slot name="trigger" />
    <div class="absolute top-0 left-1/2 hidden group-hover:flex -translate-y-[100%] -translate-x-[50%]">
      <div class="px-4 py-1 mb-2 border rounded bg-zinc-900 border-zinc-700 w-max">
        <slot name="tooltip" />
      </div>
    </div>
  </div>
</template>
