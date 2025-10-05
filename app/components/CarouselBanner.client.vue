<template>
  <div class="w-full">
    <div class="overflow-hidden rounded-xl">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="min-w-full aspect-video"
        >
          <img
            :src="imageTMDB(item.image)"
            :alt="item.title"
            class="w-full h-full object-cover bg-gray-300"
          />
        </div>
      </div>
    </div>

    <div class="flex justify-center gap-2 mt-4">
      <button
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'h-3 rounded-full transition-all duration-300',
          currentIndex === index
            ? 'w-8 bg-purple-600'
            : 'w-3 bg-gray-500 hover:bg-gray-400'
        ]"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const currentIndex = ref(0)

const props = defineProps<{
  items: Array<{ image: string; title: string }>
}>()

const goToSlide = (index: number) => {
  currentIndex.value = index
}

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.items.length
  }, 3000)
})
</script>
