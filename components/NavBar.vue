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
  link: '/docs',
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
      <NuxtLink to="/" class="p-1 mr-3 rounded sm:p-2 sm:mr-4 md:mr-8 hover:bg-zinc-800">
        <nuxt-img sizes="sm:100vw md:50vw lg:400px" width="34" height="34" src="/logo/ladybug.png" />
      </NuxtLink>
      <div class="flex items-center h-full gap-x-4 sm:gap-x-6 md:gap-x-8">
        <NuxtLink v-for="tab in tabs" :key="tab.id" :to="tab.link">
          <p class="text-base md:text-lg text-zinc-300 hover:text-zinc-100">
            {{ tab.label }}
          </p>
        </NuxtLink>
      </div>
    </div>
    <div class="items-center justify-center hidden h-full w-max gap-x-1 sm:flex">
      <NuxtLink to="https://github.com/Zerro97" class="p-1">
        <Icon name="mdi:github-face" class="text-3xl text-zinc-300 hover:text-zinc-100" />
      </NuxtLink>
    </div>
  </div>
</template>
