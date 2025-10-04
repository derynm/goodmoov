<template>
  <footer class="bg-[#21252B]">
    <div class="max-w-5xl mx-auto p-6 space-y-11">
      <AppLogo class="text-right" />
      <div class="text-white text-xs flex justify-between items-end">
        <div class="text-[10px]">
          <p>© 2025 goodmoov</p>
          <p>All right reserved</p>
        </div>
        <ul>
          <li
            v-for="(menu, index) in menus"
            :key="index"
            class="text-right leading-6"
          >
            <a href="#">{{ menu }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const menus: string[] = ['Privacy Policy', 'Legal Information', 'About']
</script>
