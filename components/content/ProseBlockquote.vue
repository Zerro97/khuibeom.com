<template>
  <div class="blockquote px-4 py-2 my-4 rounded bg-zinc-800 border-l-5 border-zinc-600">
    <slot />
  </div>
</template>

<style>
.blockquote p {
  @apply text-zinc-400;
}
.blockquote > p:first-of-type {
  @apply mt-0
}
</style>
