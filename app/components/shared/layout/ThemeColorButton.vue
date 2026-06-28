<script setup lang="ts">
const appConfig = useAppConfig()

const colorClasses: Record<string, string> = {
  red: "bg-red-500",
  orange: "bg-orange-500",
  amber: "bg-amber-500",
  yellow: "bg-yellow-500",
  lime: "bg-lime-500",
  green: "bg-green-500",
  emerald: "bg-emerald-500",
  teal: "bg-teal-500",
  cyan: "bg-cyan-500",
  sky: "bg-sky-500",
  blue: "bg-blue-500",
  indigo: "bg-indigo-500",
  violet: "bg-violet-500",
  purple: "bg-purple-500",
  fuchsia: "bg-fuchsia-500",
  pink: "bg-pink-500",
  rose: "bg-rose-500",
}
const colors = ref(['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose',])
const currentColor = ref(appConfig.ui.colors.primary)
const open = ref(false)

const onSelect = (color: string) => {
  currentColor.value = color
  appConfig.ui.colors.primary = color
  open.value = false
}
</script>

<template>
  <UPopover v-model:open="open">
    <div class="hover:bg-neutral-700/30 hover:cursor-pointer p-1.5 rounded">
      <div :class="[colorClasses[currentColor], 'rounded-full w-5 h-5']" />
    </div>

    <template #content>
      <div class="grid grid-cols-2 p-1">
        <div
          v-for="color in colors"
          :key="color"
          :class="`hover:bg-neutral-800 p-1.5 rounded ${color == currentColor ? 'bg-neutral-800' : ''}`"
          @click="onSelect(color)"
        >
          <div :class="[colorClasses[color], 'rounded-full w-4 h-4']"/>
        </div>
      </div>
    </template>
    </UPopover>
</template>
