<script setup lang="ts">
const posts = await queryContent('blog').find()
const projects = await queryContent('project').find()

const { visibleHeadings } = useScrollSpy()
watch(visibleHeadings, () => {
  console.log(visibleHeadings)
})
</script>

<template>
  <NuxtLayout>
    <section class="flex flex-col w-full mt-20">
      <transition name="fade" mode="out-in">
        <h1 v-if="true">
          Hi, I'm Hui Beom
        </h1>
      </transition>
      <p class="mt-6 max-w-[450px]">
        Welcome to my site. 👋<br><br>
        I aim to use this site to share and document what I have learnt. Hope you enjoy!
      </p>
      <div class="flex mt-8 gap-x-4">
        <LinkButton to="/about">
          Learn more about me
        </LinkButton>
        <LinkButton to="/blog">
          Blog
        </LinkButton>
      </div>
    </section>
    <section class="flex flex-col w-full mt-20">
      <div class="flex items-center justify-between">
        <h2>
          Latest Posts
        </h2>
        <LinkButton to="/blog">
          View All
        </LinkButton>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-6">
        <CardPost
          v-for="(post, index) in posts"
          :key="post.slug"
          :tags="post.tags"
          :categories="post.categories"
          :title="post.title"
          :description="post.description"
          :date="post.date"
          :time="post.time"
          :banner="post.banner"
          :icon="post.icon"
          :link="post.slug"
          :class="`translate-x-[${index * 50}px]`"
        />
      </div>
    </section>
    <section class="flex flex-col w-full mt-20">
      <div class="flex items-center justify-between">
        <h2>
          Projects
        </h2>
        <LinkButton to="/project">
          View All
        </LinkButton>
      </div>
      <div class="grid w-full grid-cols-3 gap-2 mt-6">
        <CardProject
          v-for="project in projects"
          :key="project.slug"
          :title="project.title"
          :description="project.description"
          :year="project.year"
          :image="project.image"
          :slug="project.slug"
          :livelink="project.livelink"
          :repo="project.repo"
        />
      </div>
    </section>
  </NuxtLayout>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
