<template>
    <div class="main-scroll-container">
      <Home v-if="!settingsStore.settings.isShowingBg"/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSettingsStore } from '@/stores/settings'
const settingsStore = useSettingsStore()
import Home from '@/components/Home.vue';
</script>

<style scoped>
.main-scroll-container {
  position: relative;
  height: 100vh;
  overflow-y: auto;
  width: 100%;
  overflow-x: hidden;
}


</style>