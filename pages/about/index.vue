<template>
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
    <p class="mt-3">
      I have been working on migrating a website using Nuxt 3 as well as making this blog. Along with the work, I'm picking up DevOps skill as well.
    </p>
  </section>
  <section class="flex flex-col mt-20">
    <h2>My Skill Sets</h2>
    <TheAlert class="mt-3">
      This is my personal, opinionated view of the current skills.
    </TheAlert>
    <div class="mt-6">
      <h4>Scripting & Programming Languages</h4>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <SkillCard name="HTML" logo="logos:html-5" :cur-level="2" :max-level="3" />
        <SkillCard name="CSS" logo="logos:css-3" :cur-level="5" :max-level="8" />
        <SkillCard name="Javascript" logo="logos:javascript" :cur-level="5" :max-level="8" />
        <SkillCard name="Typescript" logo="logos:typescript-icon" :cur-level="1" :max-level="6" />
        <SkillCard name="Java" logo="logos:java" :cur-level="4" :max-level="10" />
        <SkillCard name="C" logo="logos:c" :cur-level="2" :max-level="10" />
        <SkillCard name="Python" logo="logos:python" :cur-level="2" :max-level="8" />
      </div>
    </div>
    <div class="mt-6">
      <h4>Web Frameworks & Libraries</h4>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <SkillCard name="React" logo="logos:react" :cur-level="4" :max-level="8" />
        <SkillCard name="Vue" logo="logos:vue" :cur-level="4" :max-level="8" />
        <SkillCard name="Nuxt" logo="logos:nuxt-icon" :cur-level="2" :max-level="8" />
        <SkillCard name="Angular" logo="logos:angular-icon" :cur-level="1" :max-level="8" />
        <SkillCard name="Svelte" logo="logos:svelte-icon" :cur-level="2" :max-level="8" />
        <SkillCard name="NodeJS" logo="logos:nodejs-icon" :cur-level="4" :max-level="8" />
        <SkillCard name="Gatsby" logo="logos:gatsby" :cur-level="1" :max-level="7" />
        <SkillCard name="Strapi" logo="logos:strapi-icon" :cur-level="1" :max-level="3" />
        <SkillCard name="Spring" logo="logos:spring-icon" :cur-level="3" :max-level="8" />
        <SkillCard name=".NET Framework" logo="logos:dotnet" :cur-level="1" :max-level="8" />
        <SkillCard name="Tailwind" logo="logos:tailwindcss-icon" :cur-level="2" :max-level="4" />
        <SkillCard name="UnoCSS" logo="logos:unocss" :cur-level="2" :max-level="4" />
      </div>
    </div>
    <div class="mt-6">
      <h4>DBMS</h4>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <SkillCard name="MySQL" logo="logos:mysql-icon" :cur-level="3" :max-level="8" />
        <SkillCard name="Oracle" logo="logos:oracle" :cur-level="3" :max-level="8" />
        <SkillCard name="Postgresql" logo="logos:postgresql" :cur-level="2" :max-level="8" />
        <SkillCard name="MongoDB" logo="logos:mongodb-icon" :cur-level="1" :max-level="8" />
      </div>
    </div>
    <div class="mt-6">
      <h4>DevOps & Cloud</h4>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <SkillCard name="Docker" logo="logos:docker-icon" :cur-level="2" :max-level="5" />
        <SkillCard name="Nginx" logo="logos:nginx" :cur-level="1" :max-level="3" />
        <SkillCard name="Github Actions" logo="logos:github-octocat" :cur-level="1" :max-level="3" />
        <SkillCard name="AWS" logo="logos:aws" :cur-level="2" :max-level="8" />
      </div>
    </div>
    <div class="mt-6">
      <h4>My Current Favorite Stack</h4>
      <div class="flex gap-x-4 mt-2">
        <Icon name="logos:nuxt-icon" class="text-4xl" />
        <Icon name="logos:vue" class="text-4xl" />
        <Icon name="logos:javascript" class="text-4xl" />
        <Icon name="logos:tailwindcss-icon" class="text-4xl" />
      </div>
    </div>
  </section>
</template>
