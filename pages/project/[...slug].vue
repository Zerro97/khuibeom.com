<script setup lang="ts">
import { format, parseISO } from 'date-fns'

const renderer = ref()
</script>

<template>
  <NuxtLayout>
    <article>
      <ContentDoc v-slot="{ doc }">
        <section class="flex flex-col mb-6">
          <div class="relative mb-6">
            <nuxt-img
              v-if="doc.banner"
              :src="doc.banner"
              sizes="sm:400px md:600px lg:700px"
              class="w-full h-[300px] object-cover rounded"
            />
            <div v-else class="w-full h-[300px] bg-violet-500 rounded" />
            <CardIcon size="lg" :logo="doc.icon" class="absolute bottom-0 left-4 translate-y-1/4" />
          </div>
          <h1 class="text-4xl">
            {{ doc.title }}
          </h1>
          <p class="text-zinc-400">
            {{ format(parseISO(doc.from_date), 'MMMM yyyy') }}
            ~
            {{ doc.to_date.toLowerCase() === 'present' ? doc.to_date : format(parseISO(doc.to_date), 'MMMM yyyy') }}
          </p>
          <div class="flex items-center mt-1 mb-2 gap-x-2">
            <Icon name="mdi:human-male-male" />
            <p class="text-base text-zinc-200">
              {{ doc.team }}
            </p>
          </div>
          <LineBreak class="mt-1" />
        </section>
        <div class="flex gap-x-6 document-article">
          <ContentRenderer class="w-full first:m-0" :value="doc" />
          <!-- <ClientOnly> -->
          <TableOfContent />
        <!-- </ClientOnly> -->
        </div>
      </ContentDoc>
    </article>
  </NuxtLayout>
</template>
