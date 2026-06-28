<template>
  <div class="blockquote px-4 py-2 my-4 rounded bg-neutral-800 border-l-5 border-neutral-600">
    <slot />
  </div>
</template>

<style>
.blockquote p {
  color: var(--color-neutral-400);
}
.blockquote > p:first-of-type {
  margin-top: 0;
}
</style>
