<script setup lang="ts">
const workHistory = ref([{
  dateFrom: 'October 2022',
  dateTo: 'Present',
  title: 'Web Developer',
  description: 'SLMED',
  image: '/images/about/slmed-logo.png',
}, {
  dateFrom: 'August 2022',
  dateTo: 'September 2022',
  title: 'Frontend Developer',
  description: 'DP Planning (Contract)',
  image: '/images/about/dpplanning-logo.png',
}, {
  dateFrom: 'Novemeber 2020',
  dateTo: 'August 2022',
  title: 'Fullstack Developer',
  description: 'Republic of Korea Air Force',
  image: '/images/about/rokaf-logo.png',
}])

const educationHistory = ref([{
  dateFrom: 'Fall 2017',
  dateTo: 'Spring 2020',
  title: 'B.S. Computer Science',
  description: 'University of Wisconsin, Madison (USA)',
  image: '/images/about/UW-logo.png',
}, {
  dateFrom: 'Spring 2016',
  dateTo: 'Spring 2017',
  title: 'Applied Science',
  description: 'Taylor\'s University (Malaysia)',
  image: '/images/about/taylors-logo.png',
}])
</script>

<template>
  <NuxtLayout>
    <section class="flex">
      <div class="flex flex-col mr-14">
        <h1>About Me</h1>
        <p class="mt-3">
          I'm Hui Beom, a software developer from South Korea. I mostly dealt with frontend web development in my career and a bit of backend work as well.
        </p>
      </div>
      <img src="~/assets/images/profile.jpg" class="w-[240px] aspect-square rounded">
    </section>
    <section class="flex flex-col mt-10">
      <h2>What I'm working on now</h2>
      <p class="mt-3 text-zinc-400">
        Last Updated: Dec 5th
      </p>
      <p class="mt-2">
        I have been working on migrating a website using Nuxt 3 as well as making this blog. Along with the work, I'm picking up DevOps skill as well.
      </p>
    </section>
    <section class="grid grid-cols-2 mt-20">
      <div>
        <h2>Work History</h2>
        <div class="flex flex-col mt-4 gap-y-6">
          <CardAbout
            v-for="history in workHistory"
            :key="history.description"
            :date-from="history.dateFrom"
            :date-to="history.dateTo"
            :title="history.title"
            :description="history.description"
            :image="history.image"
          />
        </div>
      </div>
      <div>
        <h2>Education</h2>
        <div class="flex flex-col mt-4 gap-y-6">
          <CardAbout
            v-for="history in educationHistory"
            :key="history.description"
            :date-from="history.dateFrom"
            :date-to="history.dateTo"
            :title="history.title"
            :description="history.description"
            :image="history.image"
          />
        </div>
      </div>
    </section>
    <section class="flex flex-col mt-20">
      <h2>My Skill Sets</h2>
      <TheAlert class="mt-3">
        This is a personal, opinionated view of my current skills.
      </TheAlert>
      <div class="mt-6">
        <h4>Languages</h4>
        <div class="grid grid-cols-3 gap-2 mt-2">
          <CardSkill name="HTML" logo="logos:html-5" :cur-level="2" :max-level="3" />
          <CardSkill name="CSS" logo="logos:css-3" :cur-level="5" :max-level="8" />
          <CardSkill name="Javascript" logo="logos:javascript" :cur-level="5" :max-level="8" />
          <CardSkill name="Typescript" logo="logos:typescript-icon" :cur-level="1" :max-level="6" />
          <CardSkill name="Java" logo="logos:java" :cur-level="4" :max-level="10" />
          <CardSkill name="C" logo="logos:c" :cur-level="2" :max-level="10" />
          <CardSkill name="Python" logo="logos:python" :cur-level="2" :max-level="8" />
        </div>
      </div>
      <div class="mt-6">
        <h4>Web Frameworks/Libraries</h4>
        <div class="grid grid-cols-3 gap-2 mt-2">
          <CardSkill name="React" logo="logos:react" :cur-level="4" :max-level="8" />
          <CardSkill name="Vue" logo="logos:vue" :cur-level="4" :max-level="8" />
          <CardSkill name="Nuxt" logo="logos:nuxt-icon" :cur-level="2" :max-level="8" />
          <CardSkill name="Angular" logo="logos:angular-icon" :cur-level="1" :max-level="8" />
          <CardSkill name="Svelte" logo="logos:svelte-icon" :cur-level="2" :max-level="8" />
          <CardSkill name="NodeJS" logo="logos:nodejs-icon" :cur-level="4" :max-level="8" />
          <CardSkill name="Gatsby" logo="logos:gatsby" :cur-level="1" :max-level="7" />
          <CardSkill name="Strapi" logo="logos:strapi-icon" :cur-level="1" :max-level="3" />
          <CardSkill name="Spring" logo="logos:spring-icon" :cur-level="3" :max-level="8" />
          <CardSkill name=".NET Framework" logo="logos:dotnet" :cur-level="1" :max-level="8" />
          <CardSkill name="Tailwind" logo="logos:tailwindcss-icon" :cur-level="2" :max-level="5" />
          <CardSkill name="UnoCSS" logo="logos:unocss" :cur-level="2" :max-level="5" />
        </div>
      </div>
      <div class="mt-6">
        <h4>DBMS</h4>
        <div class="grid grid-cols-3 gap-2 mt-2">
          <CardSkill name="MySQL" logo="logos:mysql-icon" :cur-level="3" :max-level="8" />
          <CardSkill name="Oracle" logo="logos:oracle" :cur-level="3" :max-level="8" />
          <CardSkill name="Postgresql" logo="logos:postgresql" :cur-level="2" :max-level="8" />
          <CardSkill name="MongoDB" logo="logos:mongodb-icon" :cur-level="1" :max-level="8" />
        </div>
      </div>
      <div class="mt-6">
        <h4>DevOps & Cloud</h4>
        <div class="grid grid-cols-3 gap-2 mt-2">
          <CardSkill name="Docker" logo="logos:docker-icon" :cur-level="2" :max-level="5" />
          <CardSkill name="Nginx" logo="logos:nginx" :cur-level="1" :max-level="3" />
          <CardSkill name="Github Actions" logo="logos:github-octocat" :cur-level="1" :max-level="4" />
          <CardSkill name="AWS" logo="logos:aws" :cur-level="2" :max-level="10" />
        </div>
      </div>
      <div class="mt-6">
        <h4>My Current Favorite Stack</h4>
        <div class="flex mt-2 gap-x-4">
          <TheTooltip>
            <template #trigger>
              <Icon name="logos:nuxt-icon" class="text-4xl hover:grayscale-0 grayscale" />
            </template>
            <template #tooltip>
              <p>Nuxt 3</p>
            </template>
          </TheTooltip>
          <TheTooltip>
            <template #trigger>
              <Icon name="logos:vue" class="text-4xl hover:grayscale-0 grayscale" />
            </template>
            <template #tooltip>
              <p>Vue 3</p>
            </template>
          </TheTooltip>
          <TheTooltip>
            <template #trigger>
              <Icon name="logos:javascript" class="text-4xl hover:grayscale-0 grayscale" />
            </template>
            <template #tooltip>
              <p>Javascript</p>
            </template>
          </TheTooltip>
          <TheTooltip>
            <template #trigger>
              <Icon name="logos:unocss" class="text-4xl hover:grayscale-0 grayscale" />
            </template>
            <template #tooltip>
              <p>UnoCSS</p>
            </template>
          </TheTooltip>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
