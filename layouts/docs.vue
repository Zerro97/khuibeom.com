<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen bg-zinc-900 min-w-screen">
    <TopBar />
    <div class="lg:w-[64rem] md:w-full px-6 md:px-10 mx-auto z-10 bg-zinc-900">
      <NavBar />
      <div class="block md:hidden">
        <HeadlessDisclosure>
          <HeadlessDisclosureButton class="py-2">
            <Icon name="mdi:menu" />
          </HeadlessDisclosureButton>
          <HeadlessDisclosurePanel class="text-gray-500">
            <DocsDropdown>
              <HeadlessDisclosureButton href="/home">
                <Icon class="mt-4 mb-2 text-2xl text-zinc-300" name="mdi:close" />
              </HeadlessDisclosureButton>
            </DocsDropdown>
          </HeadlessDisclosurePanel>
        </HeadlessDisclosure>
      </div>
      <main class="flex min-h-screen mt-4">
        <nav class="relative">
          <DocsAside class="hidden md:block min-w-[220px] max-w-[220px]" />
        </nav>
        <div class="w-full pl-0 md:pl-6">
          <slot />
        </div>
      </main>
      <TheFooter />
    </div>
  </div>
</template>
