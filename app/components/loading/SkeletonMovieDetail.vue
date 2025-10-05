<template>
  <div class="space-y-6 text-white animate-pulse">
    <div class="flex gap-4 w-full">
      <div class="w-40 h-60 bg-gray-700 rounded object-contain"></div>
      <div class="space-y-2 flex-1">
        <div class="h-3 bg-gray-700 rounded w-16"></div>
        <div class="h-8 bg-gray-700 rounded w-3/4"></div>
        <div class="h-3 bg-gray-700 rounded w-32"></div>
        <div class="h-3 bg-gray-700 rounded w-24"></div>
      </div>
    </div>

    <div class="space-y-4">
      <div class="h-6 bg-gray-700 rounded w-24"></div>
      <div class="space-y-2">
        <div class="h-4 bg-gray-700 rounded w-full"></div>
        <div class="h-4 bg-gray-700 rounded w-full"></div>
        <div class="h-4 bg-gray-700 rounded w-3/4"></div>
      </div>
    </div>

    <div class="space-y-4">
      <div class="h-6 bg-gray-700 rounded w-16"></div>
      <div class="flex overflow-x-auto gap-2">
        <div
          v-for="i in 5"
          :key="i"
          class="shrink-0 first:ml-6 last:mr-6 md:first:ml-0 md:last:mr-0"
        >
          <div class="space-y-2">
            <div class="w-20 h-28 bg-gray-700"></div>
            <div class="h-3 bg-gray-700 rounded w-16 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <div class="h-6 bg-gray-700 rounded w-32"></div>
      <LoadingSkeletonMovieList />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
