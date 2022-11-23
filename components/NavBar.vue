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
  label: 'Projects',
  link: '/project',
  id: 3,
}])
</script>

<template>
  <div class="flex justify-between w-screen h-20 px-20 backdrop-blur-md bg-zinc-900">
    <div class="flex items-center justify-center h-full w-max">
      <NuxtLink to="/">
        <h1 class="mr-20 text-3xl text-zinc-300 hover:text-zinc-100">
          hb_kim
        </h1>
      </NuxtLink>
      <div class="flex items-center h-full gap-x-8">
        <NuxtLink v-for="tab in tabs" :key="tab.id" :to="tab.link">
          <p class="text-lg text-zinc-300 hover:text-zinc-100">
            {{ tab.label }}
          </p>
        </NuxtLink>
      </div>
    </div>
    <div class="flex items-center justify-center h-full w-max gap-x-1">
      <NuxtLink to="https://github.com/Zerro97" class="p-1">
        <Icon name="mdi:github-face" class="text-3xl text-zinc-300 hover:text-zinc-100" />
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/hui-beom-kim-4a0849165/" class="p-1">
        <Icon name="mdi:linkedin" class="text-3xl text-zinc-300 hover:text-zinc-100" />
      </NuxtLink>
    </div>
  </div>
</template>
