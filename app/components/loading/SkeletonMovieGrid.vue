<template>
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 animate-pulse">
    <LoadingSkeletonCard
      v-for="i in count"
      :key="i"
      class="mx-auto"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  count?: number
}>(), {
  count: 10
})
</script>

<style></style>