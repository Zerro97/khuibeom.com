<script setup lang="ts">
const tabs = ref([{
  label: 'About',
  link: '/about',
  regex: /about/,
}, {
  label: 'Blog',
  link: '/blog',
  regex: /blog$|blog\//,
}, {
  label: 'Notes',
  link: '/notes/introduction',
  regex: /notes\//,
}, {
  label: 'Projects',
  link: '/project',
  regex: /project$|project\//,
}])

const route = useRoute()
function isMatching(path: RegExp) {
  return route.path.match(path)
}
</script>

<template>
  <div class="flex justify-center w-screen py-2">
    <div class="flex justify-between items-center max-w-[1080px] w-[90vw]">
      <NuxtLink to="/" class="transition p-1 rounded hover:bg-neutral-800" aria-label="Link to home">
        <NuxtImg width="34" height="34" alt="ladybug" src="/logo/ladybug.png" />
      </NuxtLink>
      <div class="flex items-center h-full gap-x-3 sm:gap-x-5 md:gap-x-8">
        <NuxtLink
          v-for="tab in tabs"
          :key="tab.label"
          :to="tab.link"
          :class="`${isMatching(tab.regex) ? 'text-primary-500' : 'text-neutral-300 hover:text-neutral-100'} transition text-sm sm:text-lg`"
        >
          {{ tab.label }}
        </NuxtLink>
      </div>
      <div class="hidden sm:flex items-center justify-center h-full w-max gap-x-1">
        <LayoutThemeColorButton />
        <NuxtLink to="https://github.com/Zerro97" class="flex items-center p-1 rounded hover:bg-neutral-800" aria-label="Link to github" target="_blank">
          <UIcon name="mdi:github" class="text-2xl text-neutral-300" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

    <!-- <div class="flex items-center justify-center h-full w-max">
      <NuxtLink to="/" data-cy="link-home" class="transition p-1 mr-2 rounded sm:p-2 sm:mr-4 md:mr-8 hover:bg-neutral-800" aria-label="Link to home">
        <NuxtImg width="34" height="34" alt="ladybug" src="/logo/ladybug.png" />
      </NuxtLink>
      <div class="flex items-center h-full gap-x-3 sm:gap-x-5 md:gap-x-8">
        <NuxtLink
          v-for="tab in tabs"
          :key="tab.label"
          :to="tab.link"
          :class="`${isMatching(tab.regex) ? 'text-primary-400' : 'text-neutral-300 hover:text-neutral-100'} transition text-sm sm:text-base  md:text-lg border-primary-500`"
        >
          {{ tab.label }}
        </NuxtLink>
      </div>
    </div>
    <div class="items-center justify-center hidden h-full w-max gap-x-1 sm:flex">
      <NuxtLink to="https://quiz.khuibeom.com/" class="p-1" aria-label="Link to quiz" target="_blank">
        <Icon name="tabler:hexagon-letter-q" class="text-3xl text-neutral-300 hover:text-neutral-100" />
      </NuxtLink>
      <NuxtLink to="https://github.com/Zerro97" class="p-1" aria-label="Link to github" target="_blank">
        <Icon name="mdi:github-face" class="text-3xl text-neutral-300 hover:text-neutral-100" />
      </NuxtLink>
    </div> -->
