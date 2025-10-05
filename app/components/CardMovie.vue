<template>
  <NuxtLink :to="`/movie/${movie.id}`" class="text-white max-w-40 space-y-1">
    <div class="relative">
      <img
        :src="imageTMDB(props.movie.poster_path)"
        :alt="props.movie.original_title"
        class="w-40 object-contain bg-[#303743] h-60"
      />
      <span
        class="absolute bottom-0 right-0 bg-[#00000080] p-2 text-xs font-light"
        >{{ rating }}</span
      >
    </div>
    <p class="truncate text-sm">{{ props.movie.original_title }}</p>
    <p class="font-light text-xs">{{ year }}</p>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { Movie } from '~/types'

const props = defineProps<{
  movie: Movie
}>()

const year = computed(() => {
  return props.movie.release_date?.split('-')[0] ?? '-'
})

const rating = computed(() => {
  return props.movie.vote_average?.toFixed(1)
})
</script>

<style></style>
