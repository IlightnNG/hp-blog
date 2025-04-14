<template>
  <div class="home-container">
    <div class="blog-card" :class="{ 'glass-effect': settingsStore.settings.isGlassMode }">
      <h1>My blog</h1>
      <div class="blog-content">
        <p>Welcome</p>
      </div>
    </div>
    <div class="scroll-indicator" @click="scrollToPosts">
      <span>Scroll down</span>
      <div class="arrow-down"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSettingsStore } from '@/stores/settings'
const settingsStore = useSettingsStore()

const homeContainer = ref(null)

const scrollToPosts = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  })
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const postsSection = document.querySelector('.posts-section')
      if (entry.isIntersecting && postsSection) {
        postsSection.classList.add('in-view')
      }
    })
  }, { threshold: 0.5 })
  
  if (homeContainer.value) {
    observer.observe(homeContainer.value)
  }
})
</script>

<style scoped>
.home-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 防止内容溢出导致滚动条 */
}

.blog-card {
  padding: 40px;
  max-width: 600px;
  width: 90%;
  text-align: center;
  position: relative;
  z-index: 2;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  z-index: 2;
  animation: bounce 2s infinite;
}

.arrow-down {
  width: 20px;
  height: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.7);
  border-right: 2px solid rgba(255, 255, 255, 0.7);
  transform: rotate(45deg);
  margin-top: 8px;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translate(-50%, 0);
  }
  40% {
    transform: translate(-50%, -10px);
  }
  60% {
    transform: translate(-50%, -5px);
  }
}
</style>