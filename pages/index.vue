<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <h1>
      Hi! I'm Hui Beom
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
  </div>
</template>
