<script setup lang="ts">
const { getMeta } = useMeta()

useHead({
  title: 'About Me',
  meta: getMeta({
    title: 'About Me',
    description: 'I\'m  software developer from South Korea. I mostly worked on frontend development in my career and a bit of backend works',
    url: 'https://khuibeom.com/about',
    keywords: 'blog, tech, about, dev, web',
  }),
})

const workHistory = ref([{
  dateFrom: 'October 2022',
  dateTo: 'Present',
  title: 'Web Developer',
  description: 'SLMED',
  image: '/about/slmed-logo.png',
  link: 'https://slmed.co.kr',
}, {
  dateFrom: 'August 2022',
  dateTo: 'September 2022',
  title: 'Frontend Developer',
  description: 'DP Planning (Contract)',
  image: '/about/dpplanning-logo.png',
  link: 'http://www.dpplanning.co.kr/main/index.html',
}, {
  dateFrom: 'Novemeber 2020',
  dateTo: 'August 2022',
  title: 'Full Stack Developer',
  description: 'Republic of Korea Air Force',
  image: '/about/rokaf-logo.png',
  link: '',
}])

const educationHistory = ref([{
  dateFrom: 'Fall 2017',
  dateTo: 'Spring 2020',
  title: 'B.S. Computer Science',
  description: 'University of Wisconsin, Madison (USA)',
  image: '/about/UW-logo.png',
  link: 'https://www.wisc.edu/',
}, {
  dateFrom: 'Spring 2016',
  dateTo: 'Spring 2017',
  title: 'Applied Science',
  description: 'Taylor\'s University (Malaysia)',
  image: '/about/taylors-logo.png',
  link: 'https://university.taylors.edu.my/en.html',
}])
</script>

<template>
  <NuxtLayout>
    <section class="flex flex-col">
      <h1>About Me</h1>
      <div class="flex flex-col sm:flex-row-reverse">
        <nuxt-img
          provider="cloudinary"
          src="/about/profile.jpg"
          :placeholder="[10, 10]"
          sizes="sm:180px md:220px"
          width="220px"
          height="220px"
          alt="profile"
          class="mt-3 sm:mt-0 max-w-[180px] max-h-[180px] sm:max-w-[220px] sm:max-h-[220px] rounded"
        />
        <p class="mt-3 mr-14">
          I'm Hui Beom, a software developer from South Korea. I mostly dealt with frontend web development in my career and a bit of backend work as well.
        </p>
      </div>
    </section>
    <section class="flex flex-col mt-10">
      <h2>What I'm working on now</h2>
      <p class="mt-3 text-zinc-400">
        Last Updated: Dec 5th, 2022
      </p>
      <p class="mt-2">
        I have been working on migrating a website using Nuxt 3 as well as making this blog. Along with the work, I'm picking up DevOps skill as well.
      </p>
    </section>
    <section class="grid grid-cols-1 mt-14 sm:mt-16 md:mt-20 md:grid-cols-2">
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
            :link="history.link"
          />
        </div>
      </div>
      <div class="mt-16 md:mt-0">
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
            :link="history.link"
          />
        </div>
      </div>
    </section>
    <section class="flex flex-col mt-14 sm:mt-16 md:mt-20">
      <h2>My Skill Sets</h2>
      <p class="mt-4">
        While I believe that a good software developer is not defined by different technologies that they know, I thought it would still be beneficial to include it here for people who are curious
      </p>
      <HeadlessDisclosure v-slot="{ open }">
        <HeadlessDisclosureButton class="px-4 py-2 mt-4 border rounded max-w-max border-zinc-700">
          Display Skill Sets
          <Icon :name="`${open ? 'mdi:chevron-up' : 'mdi:chevron-down'}`" />
        </HeadlessDisclosureButton>
        <HeadlessDisclosurePanel>
          <TheAlert class="mt-3">
            This is a personal, opinionated view of my current skills.
          </TheAlert>
          <div class="mt-6">
            <h4>Languages</h4>
            <div class="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-2 md:grid-cols-3">
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
            <div class="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-2 md:grid-cols-3">
              <CardSkill name="React" logo="logos:react" :cur-level="4" :max-level="8" />
              <CardSkill name="Vue 3" logo="logos:vue" :cur-level="4" :max-level="8" />
              <CardSkill name="Nuxt 3" logo="logos:nuxt-icon" :cur-level="2" :max-level="8" />
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
            <div class="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-2 md:grid-cols-3">
              <CardSkill name="MySQL" logo="logos:mysql-icon" :cur-level="3" :max-level="8" />
              <CardSkill name="Oracle" logo="logos:oracle" :cur-level="3" :max-level="8" />
              <CardSkill name="Postgresql" logo="logos:postgresql" :cur-level="2" :max-level="8" />
              <CardSkill name="MongoDB" logo="logos:mongodb-icon" :cur-level="1" :max-level="8" />
            </div>
          </div>
          <div class="mt-6">
            <h4>DevOps & Cloud</h4>
            <div class="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-2 md:grid-cols-3">
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
        </HeadlessDisclosurePanel>
      </HeadlessDisclosure>
    </section>
    <section class="flex flex-col mt-14 sm:mt-16 md:mt-20">
      <h2>Miscellaneous</h2>
      <LinkButton to="https://drive.google.com/file/d/1eL_8LddDCQ_q2u-2q2f71jv4c1cWJMty/view" target="_blank" label="resume" class="mt-3 max-w-max">
        Resume
        <Icon name="uil:external-link-alt" />
      </LinkButton>
    </section>
  </NuxtLayout>
</template>
