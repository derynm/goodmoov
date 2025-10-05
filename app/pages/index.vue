<template>
  <div v-if="pending" class="space-y-6">
    <LoadingSkeletonHomePage />
  </div>
  <div v-else class="space-y-6">
    <CarouselBanner :items="listBanner!" />

    <ListHorizontalGenre
      v-if="genreList?.genres"
      class="-mx-6 md:mx-0"
      :genre-list="genreList.genres"
    />

    <div>
      <AppTitle as="h3" class="mb-2"> Popular </AppTitle>
      <ListHorizontalMovie
        v-if="popuplarList?.results.length"
        class="-mx-6 md:mx-0"
        :movie-list="popuplarList"
      />
    </div>

    <div>
      <AppTitle as="h3" class="mb-2"> Latest </AppTitle>
      <ListHorizontalMovie
        v-if="latestList?.results.length"
        class="-mx-6 md:mx-0"
        :movie-list="latestList"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GenreList, Movie, MovieLatestList, MovieList } from '~/types'

const { data: genreList, pending: genrePending } = useFetch<GenreList>(
  '/api/3/genre/movie/list'
)
const { data: popuplarList, pending: popularPending } = useFetch<MovieList>(
  '/api/3/movie/popular'
)
const { data: latestList, pending: latestPending } = useFetch<MovieLatestList>(
  '/api/3/movie/now_playing'
)

const pending = computed(
  () => genrePending.value || popularPending.value || latestPending.value
)

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
