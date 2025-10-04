<template>
  <div class="min-h-dvh flex flex-col">
    <AppNavbar />
    <main class="max-w-5xl mx-auto px-6 flex-1 mt-14 w-full">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
