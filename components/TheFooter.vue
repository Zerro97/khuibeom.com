<template>
  <div class="flex flex-col w-full py-6 mt-10 border-t-2 border-zinc-800 gap-y-6">
    <div class="flex justify-center w-full gap-x-12">
      <NuxtLink to="https://github.com/Zerro97/khuibeom.com" target="_blank" class="hover:underline decoration-violet-600 decoration-4">
        Source Code
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/hui-beom-kim-4a0849165/" target="_blank" class="hover:underline decoration-violet-600 decoration-4">
        LinkedIn
      </NuxtLink>
      <NuxtLink to="https://quiz.khuibeom.com/" target="_blank" class="hover:underline decoration-violet-600 decoration-4">
        Quiz
      </NuxtLink>
    </div>
    <div class="flex justify-center w-full gap-x-8">
      <p class="text-zinc-400">
        Made with
        <NuxtLink to="https://nuxt.com/" target="_blank" aria-label="Link to Nuxt 3 website">
          <Icon class="ml-1 text-2xl" name="logos:nuxt-icon" />
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
