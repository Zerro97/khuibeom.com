<script setup lang="ts">

</script>

<template>
  <div class="relative group">
    <slot name="trigger" />
    <div class="absolute top-0 hidden group-hover:flex -translate-y-[100%] ">
      <div class="px-4 py-1 mb-2 border rounded bg-zinc-900 border-zinc-800 w-max">
        <slot name="tooltip" />
      </div>
    </div>
  </div>
</template>
