<template>
  <div class="space-y-6">
    <CarouselBanner :items="listBanner!" />

    <ListHorizontalGenre
      v-if="genreList?.genres"
      class="-mx-6"
      :genre-list="genreList.genres"
    />

    <div>
      <AppTitle as="h3" class="mb-2"> Popular </AppTitle>
      <ListHorizontalMovie
        v-if="popuplarList?.results.length"
        class="-mx-6"
        :movie-list="popuplarList"
      />
    </div>

    <div>
      <AppTitle as="h3" class="mb-2"> Latest </AppTitle>
      <ListHorizontalMovie
        v-if="latestList?.results.length"
        class="-mx-6"
        :movie-list="latestList"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GenreList, Movie, MovieLatestList, MovieList } from '~/types'

const { data: genreList } = useFetchApi<GenreList>('genre/movie/list')
const { data: popuplarList } = useFetchApi<MovieList>('movie/popular')
const { data: latestList } = useFetchApi<MovieLatestList>('movie/now_playing')

const listBanner = computed(() => {
  return popuplarList.value?.results
    .map((val: Movie) => {
      return {
        image: val.poster_path,
        title: val.title
      }
    })
    .slice(0, 5)
})
</script>

<style scoped></style>
