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
  <div class="w-screen h-20 backdrop-blur-md bg-slate-900 flex justify-between px-20">
    <div class="h-full w-max flex justify-center items-center">
      <NuxtLink to="/">
        <h1 class="text-slate-300 hover:text-slate-100 text-3xl mr-20">
          hb_kim
        </h1>
      </NuxtLink>
      <div class="flex items-center h-full gap-x-8">
        <NuxtLink v-for="tab in tabs" :key="tab.id" :to="tab.link">
          <p class="text-slate-300 text-lg hover:text-slate-100">
            {{ tab.label }}
          </p>
        </NuxtLink>
      </div>
    </div>
    <div class="h-full w-max flex justify-center items-center gap-x-1">
      <NuxtLink to="https://github.com/Zerro97" class="p-1">
        <IconMdi:github-face class="text-slate-300 hover:text-slate-100 text-xl" />
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/hui-beom-kim-4a0849165/" class="p-1">
        <IconMdi:linkedin class="text-slate-300 hover:text-slate-100 text-xl" />
      </NuxtLink>
    </div>
  </div>
</template>
