<template>
  <div class="flex overflow-x-auto h-full gap-2 snap-x text-white text-sm">
    <NuxtLink
      v-for="genre in props.genreList"
      :key="genre.id"
      :to="`/movie?genre=${genre.id}&genre_name=${genre.name}`"
      class="w-32 h-14 shrink-0 first:ml-6 last:mr-6 md:first:ml-0 md:last:mr-0 snap-center bg-[#543B85] p-2 flex items-end justify-end cursor-pointer"
      >{{ genre.name }}</NuxtLink
    >
  </div>
</template>

<script lang="ts" setup>
import type { Genre } from '~/types'

const props = defineProps<{
  genreList: Genre[]
}>()
</script>

<style></style>
