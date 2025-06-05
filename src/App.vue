<template>
  <div class="app">
    <Background />
    <!-- 导航栏组件 -->
    <NavBar/>
    <!-- <MainView/> -->
    <!-- 路由视图出口 -->
    <router-view />
  </div>
</template>

<script setup>
// 导入导航栏组件
import NavBar from './components/NavBar.vue'
import Background from './components/Background.vue'

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })
  
  const postsSection = document.querySelector('.articles-container')
  if (postsSection) observer.observe(postsSection)
})

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}




</style>