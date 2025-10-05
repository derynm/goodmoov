<template>
  <div class="flex overflow-x-auto h-full gap-2 snap-x">
    <div
      v-for="cast in props.castList"
      :key="cast.id"
      class="shrink-0 first:ml-6 last:mr-6 md:first:ml-0 md:last:mr-0 snap-center w-20 space-y-2"
    >
      <img class="h-28 w-full" :src="imageTMDB(cast.profile_path)" />
      <p class="text-center text-xs">{{ cast.name }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Cast } from '~/types'

const props = defineProps<{
  castList: Cast[]
}>()
</script>

<style></style>
