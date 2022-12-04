<script setup lang="ts">
const posts = ref([{
  title: 'lorem',
  icon: 'logos:vitest',
  date: '2022 Nov 22',
  id: Math.random(),
}, {
  title: 'lorem',
  icon: 'logos:vitest',
  date: '2022 Nov 22',
  id: Math.random(),
}, {
  title: 'lorem',
  icon: 'logos:vitest',
  date: '2022 Nov 22',
  id: Math.random(),
}, {
  title: 'lorem',
  icon: 'logos:vitest',
  date: '2022 Nov 22',
  id: Math.random(),
}])

const projects = ref([{
  title: 'lorem',
  description: 'testing contents',
  icon: 'logos:vitest',
  id: Math.random(),
}, {
  title: 'lorem',
  description: 'testing contents',
  icon: 'logos:vitest',
  id: Math.random(),
}, {
  title: 'lorem',
  description: 'testing contents',
  icon: 'logos:vitest',
  id: Math.random(),
}, {
  title: 'lorem',
  description: 'testing contents',
  icon: 'logos:vitest',
  id: Math.random(),
}])
</script>

<template>
  <NuxtLayout>
    <section class="flex flex-col w-full mt-20">
      <h1>
        Hi, I'm Hui Beom
      </h1>
      <p class="mt-6 max-w-[450px]">
        Welcome to my site. 👋<br><br>
        I aim to use this site to share and document what I have learnt. Hope you enjoy!
      </p>
      <div class="flex mt-8 gap-x-4">
        <button class="px-4 py-2 transition duration-100 border rounded border-zinc-700 hover:bg-zinc-800">
          <NuxtLink to="/about">
            Learn more about me
          </NuxtLink>
        </button>
        <button class="px-4 py-2 transition duration-100 border rounded border-zinc-700 hover:bg-zinc-800">
          <NuxtLink to="/blog">
            Blog
          </NuxtLink>
        </button>
      </div>
    </section>
    <section class="flex flex-col w-full mt-20">
      <h2>
        Latest Posts
      </h2>
      <div class="flex flex-col w-full mt-6 gap-y-2">
        <div v-for="post in posts" :key="post.id" class="flex items-center px-4 py-2 rounded group hover:bg-zinc-800 hover:cursor-pointer">
          <Icon :name="post.icon" class="h-full mr-6 text-4xl" />
          <div class="flex flex-col">
            <h4 class="text-zinc-400 group-hover:text-zinc-100">
              {{ post.title }}
            </h4>
            <p class="text-sm text-zinc-500 group-hover:text-zinc-400">
              {{ post.date }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col w-full mt-20">
      <h2>
        Featured Projects
      </h2>
      <div class="grid w-full grid-cols-3 gap-2 mt-6">
        <div v-for="project in projects" :key="project.id" class="flex px-4 py-2 rounded group hover:bg-zinc-800 hover:cursor-pointer">
          <Icon :name="project.icon" class="h-full mr-6 text-4xl" />
          <div class="flex flex-col">
            <h4 class="text-zinc-400 group-hover:text-zinc-100">
              {{ project.title }}
            </h4>
            <p class="text-sm text-zinc-500 group-hover:text-zinc-400">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
