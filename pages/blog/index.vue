<template>
  <section>
    <h1>Blog</h1>
    <input
      class="w-full mt-5 rounded px-4 py-2 bg-zinc-800 border border-zinc-700"
      type="text"
      placeholder="Search"
    >
  </section>
  <section class="grid grid-cols-3 mt-6 gap-4">
    <CardPost link="intro" />
    <CardPost />
    <CardPost />
    <CardPost />
  </section>
</template>

