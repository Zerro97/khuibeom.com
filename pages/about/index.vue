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
    <div class="mt-6">
      <h4>Scripting & Programming Languages</h4>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
    <div class="mt-6">
      <h4>Web Frameworks</h4>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
    <div class="mt-6">
      <h4>DBMS</h4>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
    <div class="mt-6">
      <h4>DevOps & Cloud</h4>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  </section>
</template>
