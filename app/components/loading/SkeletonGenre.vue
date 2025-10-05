<template>
  <div class="flex overflow-x-auto h-full gap-2 snap-x text-white text-sm">
    <div
      v-for="i in 6"
      :key="i"
      class="w-32 h-14 shrink-0 first:ml-6 last:mr-6 md:first:ml-0 md:last:mr-0 snap-center bg-[#543B85] p-2 flex items-end justify-end cursor-pointer animate-pulse"
    >
      <div class="h-4 bg-gray-300 rounded w-16 opacity-30"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style></style>