<template>
  <div class="flex overflow-x-auto h-full gap-2 snap-x animate-pulse">
    <LoadingSkeletonCard
      v-for="i in 5"
      :key="i"
      class="shrink-0 first:ml-6 last:mr-6 md:first:ml-0 md:last:mr-0 snap-center"
    />
  </div>
</template>

<script setup lang="ts">
</script>

<style></style>