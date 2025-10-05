<template>
  <div>
    <div class="flex justify-between my-6 items-center">
      <IconArrowLeft class="cursor-pointer" @click="router.back()" />
    </div>

    <div class="space-y-6 text-white">
      <div class="flex gap-4 w-full">
        <img
          :src="imageTMDB(movieDetail?.poster_path!)"
          :alt="movieDetail?.title"
          class="object-contain bg-[#303743] h-60"
        />

        <div class="space-y-2">
          <p class="text-xs font-light">{{ year }}</p>
          <h2 class="text-xl">{{ movieDetail?.title }}</h2>
          <p class="text-xs">{{ genres }}</p>
          <p class="text-xs">{{ duration }}</p>
        </div>
      </div>

      <div class="space-y-4">
        <AppTitle as="h3">Overview</AppTitle>
        <p>{{ movieDetail?.overview }}</p>
      </div>

      <div class="space-y-4">
        <AppTitle as="h3">Cast</AppTitle>
        <CastHorizontalList
          :cast-list="movieDetail?.credits.cast!"
          class="-mx-6"
        />
      </div>

      <div class="space-y-4">
        <AppTitle as="h3" class="mb-2"> Latest </AppTitle>
        <ListHorizontalMovie
          v-if="movieDetail?.recommendations.results"
          class="-mx-6"
          :movie-list="movieDetail?.recommendations"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Genre, MovieDetail } from '~/types'

const route = useRoute()
const router = useRouter()

const { data: movieDetail } = useFetch<MovieDetail>(
  `/api/3/movie/${route.params.movie_id}`,
  {
    query: {
      append_to_response: 'credits,recommendations'
    },
    pick: [
      'genres',
      'title',
      'credits',
      'runtime',
      'vote_average',
      'recommendations',
      'release_date',
      'overview',
      'poster_path'
    ]
  }
)

const year = computed(() => {
  return movieDetail.value?.release_date?.split('-')[0] ?? '-'
})

const genres = computed(() => {
  return movieDetail.value?.genres.map((genre: Genre) => genre.name).join(', ')
})

const duration = computed(() => {
  const runtime = movieDetail.value?.runtime ?? 0
  const hours = (runtime - (runtime % 60)) / 60
  const minutes = runtime % 60

  if (!hours) return `${minutes}m`
  return `${hours}h ${minutes}m`
})
</script>

<style></style>
