<template>
  <div class="space-y-6">
    <LoadingSkeletonBanner />

    <div class="-mx-6 md:mx-0">
      <LoadingSkeletonGenre />
    </div>

    <div>
      <div class="h-6 bg-gray-700 rounded w-20 mb-2 animate-pulse"></div>
      <div class="-mx-6 md:mx-0">
        <LoadingSkeletonMovieList class="mx-6 md:mx-0" />
      </div>
    </div>

    <div>
      <div class="h-6 bg-gray-700 rounded w-16 mb-2 animate-pulse"></div>
      <div class="-mx-6 md:mx-0">
        <LoadingSkeletonMovieList class="mx-6 md:mx-0" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
