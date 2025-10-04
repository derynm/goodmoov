<template>
  <div>
    <ListHorizontalMovie
      v-if="latestList?.results.length"
      :movie-list="latestList"
    />
  </div>
</template>

<script setup lang="ts">
import type { MovieLatestList } from '~/types'

// const { data: popuplarList } = useFetchApi('discover/movie', {
//   query: {
//     sort_by: 'popularity.desc'
//   }
// })
const { data: latestList } = useFetchApi<MovieLatestList>('discover/movie', {
  query: {
    sort_by: 'popularity.desc',
    with_release_type: '2|3',
    'release_date.gte': '2025-08-03',
    'release_date.lte': '2025-10-16"'
  }
})
</script>

<style scoped></style>
