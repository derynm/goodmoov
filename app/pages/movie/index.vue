<template>
  <div>
    <div class="flex justify-between my-6 items-center">
      <IconArrowLeft class="cursor-pointer" @click="router.back()" />
      <AppTitle ornament-position="right">{{
        route.query.genre_name
      }}</AppTitle>
    </div>

    <div v-if="movies.length" class="grid grid-cols-2 gap-y-4">
      <CardMovie
        v-for="movieItem in movies"
        :key="movieItem.id"
        class="mx-auto"
        :movie="movieItem"
      />
    </div>
    <button
      v-if="movieList && page < movieList.total_pages"
      class="bg-[#543B85] rounded-sm px-6 py-2 mx-auto my-12 text-white block"
      @click="page++"
    >
      Load More
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Movie, MovieList } from '~/types'

const page = ref(1)
const movies = ref<Movie[]>([])
const route = useRoute()
const router = useRouter()

const { data: movieList } = useFetchApi<MovieList>('discover/movie', {
  query: {
    with_genres: route.query.genre,
    page
  },
  watch: [page]
})

watch(
  movieList,
  (newData) => {
    if (newData?.results) {
      movies.value.push(...newData.results)
    }
  },
  { immediate: true }
)
</script>
