<script setup lang="ts">
const tabs = ref([{
  label: 'About Me',
  link: '/about',
  id: 1,
}, {
  label: 'Blog',
  link: '/blog',
  id: 2,
}, {
  label: 'Docs',
  link: '/docs/introduction',
  id: 3,
}, {
  label: 'Projects',
  link: '/project',
  id: 4,
}])
</script>

<template>
  <div class="flex justify-between w-full h-16 md:h-20 backdrop-blur-md bg-zinc-900">
    <div class="flex items-center justify-center h-full w-max">
      <NuxtLink to="/" class="p-1 mr-2 rounded sm:p-2 sm:mr-4 md:mr-8 hover:bg-zinc-800" aria-label="Link to home">
        <nuxt-img provider="cloudinary" width="34" height="34" alt="ladybug" src="/logo/ladybug.png" />
      </NuxtLink>
      <div class="flex items-center h-full gap-x-3 sm:gap-x-5 md:gap-x-8">
        <NuxtLink
          v-for="tab in tabs"
          :key="tab.id"
          :to="tab.link"
          class="text-sm sm:text-base text-zinc-300 md:text-lg border-violet-500 hover:text-zinc-100"
          active-class="!text-violet-400"
        >
          {{ tab.label }}
        </NuxtLink>
      </div>
    </div>
    <div class="items-center justify-center hidden h-full w-max gap-x-1 sm:flex">
      <NuxtLink to="https://github.com/Zerro97" class="p-1" aria-label="Link to github">
        <Icon name="mdi:github-face" class="text-3xl text-zinc-300 hover:text-zinc-100" />
      </NuxtLink>
    </div>
  </div>
</template>
