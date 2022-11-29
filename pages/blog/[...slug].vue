<script setup lang="ts">
const print = (test) => {
  console.log(test)
}
</script>

<template>
  <article>
    <ContentDoc v-slot="{ doc }">
      <section class="flex flex-col mb-4">
        {{ doc.banner }}
        <img v-if="doc.banner" :src="require(doc.banner)" class="w-full h-[300px]">
        <div v-else class="w-full h-[300px]" />
        <h1>{{ doc.title }}</h1>
      </section>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </article>
</template>
