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

const route = useRoute()
const isMatching = (path: string) => {
  return route.path.includes(path === '/docs/introduction' ? '/docs' : path)
}
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
          :class="`${isMatching(tab.link) ? 'text-violet-400' : 'text-zinc-300 hover:text-zinc-100'} text-sm sm:text-base  md:text-lg border-violet-500`"
        >
          {{ tab.label }}
        </NuxtLink>
      </div>
    </div>
    <div class="items-center justify-center hidden h-full w-max gap-x-1 sm:flex">
      <NuxtLink to="https://quiz.khuibeom.com/" class="p-1" aria-label="Link to quiz" target="_blank">
        <Icon name="tabler:hexagon-letter-q" class="text-3xl text-zinc-300 hover:text-zinc-100" />
      </NuxtLink>
      <NuxtLink to="https://github.com/Zerro97" class="p-1" aria-label="Link to github" target="_blank">
        <Icon name="mdi:github-face" class="text-3xl text-zinc-300 hover:text-zinc-100" />
      </NuxtLink>
    </div>
  </div>
</template>
