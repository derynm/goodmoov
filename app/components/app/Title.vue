<template>
  <component
    :is="props.as"
    class="w-fit relative text-white font-semibold"
    :class="ornamentClasses"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    as?: 'h1' | 'h2' | 'h3'
    ornamentPosition?: 'right' | 'left'
  }>(),
  {
    as: 'h1',
    ornamentPosition: 'left'
  }
)

const ornamentClasses = computed(() => ({
  'ornament-right': props.ornamentPosition === 'right',
  'ornament-left': props.ornamentPosition === 'left'
}))
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.25rem;
}

h3 {
  font-size: 1.125rem;
}

.ornament-right::before {
  content: '';
  position: absolute;
  height: 2px;
  width: 40px;
  background-color: #944ffa;
  top: 0px;
  right: 0px;
}

.ornament-left::before {
  content: '';
  position: absolute;
  height: 2px;
  width: 40px;
  background-color: #944ffa;
  top: 0px;
  left: 0px;
}
</style>
