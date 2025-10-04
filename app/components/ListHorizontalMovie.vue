<template>
  <div class="flex overflow-x-auto h-full gap-2">
    <CardMovie
      v-for="movieItem in props.movieList?.results"
      :key="movieItem.id"
      class="shrink-0"
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
