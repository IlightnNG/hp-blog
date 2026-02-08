<template>
  <div 
    class="back-to-top" 
    :class="{ 'show': isVisible }"
    @click="scrollToTop"
    role="button"
    :aria-label="ariaLabel"
    tabindex="0"
    @keydown.enter="scrollToTop"
    :style="styleObject"
  >
    <slot>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

const props = defineProps({
  targetSelector: {
    type: String,
    default: '.post-detail-container'
  },
  threshold: {
    type: Number,
    default: 300
  },
  ariaLabel: {
    type: String,
    default: '回到顶部'
  },
  position: {
    type: String,
    default: 'sticky',
    validator: (value) => ['fixed', 'sticky', 'absolute'].includes(value)
  },
  bottom: {
    type: String,
    default: '40px'
  },
  right: {
    type: String,
    default: 'calc(100% - 100px)'
  },
  immediate: {
    type: Boolean,
    default: false // 是否立即开始监听
  }
})

const emit = defineEmits(['click'])

const isVisible = ref(false)
let scrollContainer = null

// 检测滚动位置
const checkScroll = () => {
  if (!scrollContainer) return
  
  if (scrollContainer === window) {
    isVisible.value = window.scrollY > props.threshold
  } else {
    isVisible.value = scrollContainer.scrollTop > props.threshold
  }
}

// 滚动到顶部
const scrollToTop = () => {
  if (!scrollContainer) return
  
  if (scrollContainer === window) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } else {
    scrollContainer.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  emit('click')
}

// 初始化容器
const initContainer = () => {
  if (props.targetSelector === 'window') {
    scrollContainer = window
  } else {
    scrollContainer = document.querySelector(props.targetSelector)
  }
  
  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', checkScroll)
    // 立即检查一次状态
    checkScroll()
  }
}

// 清除事件监听
const cleanup = () => {
  if (scrollContainer) {
    scrollContainer.removeEventListener('scroll', checkScroll)
  }
}

onMounted(() => {
  if (props.immediate) {
    initContainer()
  }
})

onUnmounted(() => {
  cleanup()
})

// 监听 targetSelector 变化
watch(() => props.targetSelector, () => {
  cleanup()
  initContainer()
}, { immediate: false })

// 样式对象
const styleObject = computed(() => ({
  position: props.position,
  bottom: props.bottom,
  right: props.right
}))

// 暴露方法给父组件
defineExpose({
  initContainer,
  cleanup,
  scrollToTop,
  isVisible
})
</script>

<style scoped>
.back-to-top {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: var(--border);
  z-index: 100;
  box-shadow: var(--shadow-sm);
  transition: transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out), opacity var(--duration-normal) var(--ease-out);
  opacity: 0;
  visibility: hidden;
}

.back-to-top.show {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  transform: translateY(var(--hover-lift));
  box-shadow: var(--shadow-primary);
}

.back-to-top:active {
  transform: translateY(var(--hover-lift)) scale(var(--active-scale));
}

.back-to-top:focus {
  outline: var(--focus-ring);
  outline-offset: var(--focus-ring-offset);
}

.back-to-top svg {
  width: 24px;
  height: 24px;
  transition: transform var(--duration-normal) var(--ease-out);
}

.back-to-top:hover svg {
  transform: translateY(-2px);
}
</style>