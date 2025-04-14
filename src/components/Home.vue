<template>
    <div class="home-container">
        <div class="blog-card" 
          ref="blogCard"
          @click="settingsStore.toggleShowingBg" 
          @mouseenter="handleMouseEnter"
          @mousemove="handleMouseMove($event)"
          @mouseleave="handleMouseLeave"
        >
            <h1>My blog</h1>
            <div class="blog-content">
                <p>Welcome</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSettingsStore } from '@/stores/settings'
const settingsStore = useSettingsStore()
const blogCard = ref(null);

// 鼠标进入磁吸贴
const handleMouseEnter = () => {
  if (!blogCard.value) return;
  blogCard.value.style.transform = 'translateZ(20px) translateY(-2px) ';
  blogCard.value.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
};

// 鼠标在磁吸贴上移动
const handleMouseMove = (event) => {
  if (!blogCard.value) return;
  const rect = blogCard.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // 计算鼠标相对于卡片中心的标准化位置 (-1 到 1)
  const normX = (event.clientX - centerX) / (rect.width / 2);
  const normY = (event.clientY - centerY) / (rect.height / 2);
  
  // 限制最大旋转角度
  const maxRotate = 15; // 最大旋转角度
  
  // 计算旋转角度 - 确保各象限方向正确
  const rotateY = normX * maxRotate;
  const rotateX = -normY * maxRotate;
  
  blogCard.value.style.transform = `translateZ(20px) translateY(-2px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

// 鼠标离开磁吸贴
const handleMouseLeave = () => {
  if (!blogCard.value) return;
  blogCard.value.style.transform = 'translateZ(0) translateY(0) rotateX(0) rotateY(0)';
  blogCard.value.style.boxShadow = 'none';
};
</script>

<style scoped>
.home-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  transition: transform 0.5s ease;
}

.blog-card {
  width: 200px; /* 根据你的设计调整 */
  height: 200px; /* 根据你的设计调整 */
  cursor: pointer;
  transform-style: preserve-3d; /* 关键：启用3D变换 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform; /* 优化性能 */
  
  /* 初始状态 */
  transform: translateZ(0);
  box-shadow: none;
}

.blog-card h1 {
  margin-bottom: 15px;
  transform: translateZ(30px); /* 让文字也有3D效果 */
}

.blog-content {
  transform: translateZ(30px); /* 让内容也有3D效果 */
}


h1,p{ 
  color: white;
}
</style>