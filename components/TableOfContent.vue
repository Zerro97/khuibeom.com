<script setup type="ts">
const { toc } = useContent()
</script>

<template>
  <aside class="min-w-[240px] sticky top-0">
    <h5>Table of Contents</h5>
    <ul v-if="toc && toc.links" class="list-none">
      <li v-for="link in toc.links" :key="link.text" class="">
        <a
          :href="`#${link.id}`"
          class="text-sm text-zinc-400 hover:text-zinc-300"
        >
          {{ link.text }}
        </a>
        <ul v-if="link.children" class="list-none">
          <li v-for="subLink in link.children" :key="subLink.text" class="">
            <a
              :href="`#${subLink.id}`"
              class="ml-4 text-sm text-zinc-400 hover:text-zinc-300"
            >
              {{ subLink.text }}
            </a>
            <ul v-if="subLink.children" class="list-none">
              <li v-for="finalLink in subLink.children" :key="finalLink.text" class="">
                <a
                  :href="`#${finalLink.id}`"
                  class="ml-8 text-sm text-zinc-400 hover:text-zinc-300"
                >
                  {{ subLink.text }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>
