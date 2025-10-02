<script setup lang="ts">
const props = defineProps({
  image: String,
  name: String,
  date: String,
  link: String,
})
</script>

<template>
  <div class="flex justify-center items-center w-full px-5 py-2 rounded gap-x-5 bg-zinc-800 group">
    <nuxt-img
      provider="cloudinary"
      :src="`/about/${image}`"
      :placeholder="[10, 10]"
      sizes="sm:180px md:220px"
      width="100px"
      height="100px"
      alt="profile"
      class="max-w-[180px] max-h-[180px] sm:max-w-[220px] sm:max-h-[220px] rounded"
    />
    <div class="flex flex-col">
      <h4>{{ name }}</h4>
      <p class="text-zinc-400">
        {{ date }}
      </p>
      <NuxtLink :to="`${link}`" target="_blank" class="mt-2 flex items-center gap-x-1 max-w-max">
        Show Credential
        <Icon name="uil:external-link-alt" />
      </NuxtLink>
    </div>
  </div>
</template>

<style>
@keyframes progress {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
