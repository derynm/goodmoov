<template>
  <div class="flex overflow-x-auto h-full gap-2 snap-x">
    <CardMovie
      v-for="movieItem in props.movieList?.results"
      :key="movieItem.id"
      class="shrink-0 first:ml-6 last:mr-6 md:first:ml-0 md:last:mr-0 snap-center"
      :movie="movieItem"
    />
  </div>
</template>

<script lang="ts" setup>
import type { MovieLatestList, MovieList } from '~/types'

const props = defineProps<{
  movieList: MovieList | MovieLatestList
}>()
</script>

<style></style>
