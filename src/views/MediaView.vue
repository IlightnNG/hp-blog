<template>
  <div class="media-container" @click.stop :class="{'show': !settingsStore.settings.isShowingBg }">
    <div class="media-content">
      <!-- 上部分：标题和介绍 -->
      <div class="header-section">
      <h1 class="title">记忆回廊</h1>
      <p class="introduction">
        The Memory Corridor
      </p>
      <div class="divider"></div>
    </div>
      
      <!-- 主要内容区域 -->
      <div class="main-content">
        <!-- 左侧：内容列表 -->
        <div class="items-section">
          <div class="filter-controls">
            <div class="filter-buttons">
              <button 
                v-for="type in mediaTypes" 
                :key="type.value"
                @click="setMediaType(type.value)"
                :class="{ 'active': selectedMediaType === type.value }"
              >
                {{ type.label }}
              </button>
            </div>
            <div class="sort-controls">
              <select v-model="sortBy">
                <option value="dateDesc">按时间倒序</option>
                <option value="dateAsc">按时间正序</option>
                <option value="ratingDesc">按评分高→低</option>
                <option value="ratingAsc">按评分低→高</option>
              </select>
            </div>
          </div>
          
          <div v-if="isLoading" class="blog-loading">
            <div class="blog-loading__spinner"></div>
            <p class="blog-loading__text">Loading...</p>
          </div>
          <div v-else class="items-list">
            <div 
              v-for="item in paginatedItems" 
              :key="item.id" 
              class="media-card"
              :class="item.type"
              @click="showDetail(item)">
              <!-- <div class="media-cover" @click="showDetail(item)">
                <img :src="item.cover" :alt="item.title" v-if="item.cover">
                <div class="cover-placeholder" v-else>
                  {{ item.type === 'movie' ? '🎬' : item.type === 'book' ? '📚' : '📺' }}
                </div>
                <div class="media-rating" v-if="item.rating">
                  <span>{{ item.rating }}</span>
                </div>
              </div> -->
              <div class="media-info" >
                <div class="media-meta">
                  <span class="media-date">{{ getTypeLabel(item.date) }}</span>
                  <span class="media-type">{{ getTypeLabel(item.type) }}</span>
                </div>
                <h2 class="media-title">{{ item.title }}</h2>
                <p class="media-summary">{{ item.summary }}</p>
                <!-- <div class="media-tags">
                  <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
                </div> -->
              </div>
            </div>
          </div>

          <!-- 分页 -->
          <div class="pagination-wrap" v-if="totalPages > 1">
            <div class="pagination-info">
              共 {{ filteredItems.length }} 条，第 {{ currentPage }} / {{ totalPages }} 页
            </div>
            <div class="pagination">
              <button
                class="page-btn"
                :disabled="currentPage <= 1"
                @click="currentPage = Math.max(1, currentPage - 1)"
              >
                上一页
              </button>
              <div class="page-numbers">
                <button
                  v-for="p in visiblePageNumbers"
                  :key="p"
                  class="page-num"
                  :class="{ active: p === currentPage, ellipsis: p === -1 }"
                  :disabled="p === -1"
                  @click="p !== -1 && (currentPage = p)"
                >
                  {{ p === -1 ? '...' : p }}
                </button>
              </div>
              <button
                class="page-btn"
                :disabled="currentPage >= totalPages"
                @click="currentPage = Math.min(totalPages, currentPage + 1)"
              >
                下一页
              </button>
            </div>
          </div>
        </div>
        
        <!-- 右侧：功能区 -->
        <div class="sidebar">
          <!-- 搜索框 -->
          <div class="search-box">
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="搜索作品..."
              @input="handleSearch"
            >
          </div>
          
          <!-- 统计信息 -->
          <div class="stats-section">
            <h3>我的统计</h3>
            <div class="stats-grid">
              <div class="stat-item">
                <span class="stat-value">{{ mediaStats.total }}</span>
                <span class="stat-label">总数量</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">{{ mediaStats.anime }}</span>
                <span class="stat-label">动漫</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">{{ mediaStats.books }}</span>
                <span class="stat-label">书籍</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">{{ mediaStats.cartoons }}</span>
                <span class="stat-label">漫画</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">{{ mediaStats.games }}</span>
                <span class="stat-label">游戏</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">{{ mediaStats.movies }}</span>
                <span class="stat-label">电影</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">{{ mediaStats.series }}</span>
                <span class="stat-label">剧集</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">...</span>
                <span class="stat-label">补充中</span>
              </div>
              
            </div>
          </div>

          <!-- 标签云 -->
          <!-- <div class="tags-section">
            <h3>分类标签</h3>
            <div class="tags-cloud">
              <span 
                v-for="tag in tags" 
                :key="tag"
                class="tag"
                :class="{ 'active': selectedTags.includes(tag) }"
                @click="toggleTag(tag)"
              >
                {{ tag }}
              </span>
            </div>
          </div> -->

        </div>
      </div>
    </div>
    
    <!-- 回到顶部按钮 -->
    <BackToTopButton
      :target-selector="'.media-container'"
      :threshold="300"
      :immediate="true"
    />
    
    <!-- 详情弹窗 -->
    <!-- <div class="media-detail-modal" v-if="selectedItem" @click.self="closeDetail">
      <div class="modal-content">
        <button class="close-btn" @click="closeDetail">×</button>
        <div class="modal-header">
          <div class="modal-title-section">
            <h2>{{ selectedItem.title }}</h2>
            <div class="modal-meta">
              <span class="modal-type">{{ getTypeLabel(selectedItem.type) }}</span>
              <span class="modal-date">{{ selectedItem.date }}</span>
              <span class="modal-rating" v-if="selectedItem.rating">评分: {{ selectedItem.rating }}/10</span>
            </div>
            <div class="modal-tags">
              <span v-for="tag in selectedItem.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <h3>作品概述</h3>
          <p class="modal-review">{{ selectedItem.summary }}</p>
          <h3>我的评价</h3>
          <p class="modal-review">{{ selectedItem.review }}</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

const settingsStore = useSettingsStore()

// 回到顶部相关
import BackToTopButton from '@/components/BackToTopButton.vue';

onMounted(() => {
  loadMedia();
  
})

onUnmounted(() => {
  
})

// 媒体类型选项
const mediaTypes = ref([
  { value: 'all', label: '全部' },
  { value: 'anime', label: '动漫' },
  { value: 'book', label: '书籍' },
  { value: 'cartoon', label: '漫画' },
  { value: 'game', label: '游戏' },
  { value: 'movie', label: '电影' },
  { value: 'series', label: '剧集' }
])

const selectedMediaType = ref('all')
const sortBy = ref('dateDesc')
const selectedItem = ref(null)
const isLoading = ref(true);

const mediaItems = ref([]);
// 加载所有媒体
const loadMedia = async () => {
  try {
    isLoading.value = true;
    mediaItems.value = [];
    
    const response = await fetch('/hp-blog/medias/list.json');
    if (!response.ok) throw new Error('列表加载失败');
    const mediaList = await response.json();
    
    mediaItems.value = mediaList.map(media => ({
      id: media.id || media.path.replace(/^.*\/(.*)\.md$/, '$1'),
      title: media.title || '无标题',
      type: media.type || '',
      date: media.date || new Date().toISOString().split('T')[0],
      rating: media.rating || 0.0,
      tags: Array.isArray(media.tags) ? media.tags : [],
      summary: media.summary || '',
      review: media.review || ''
    })).sort((a, b) => new Date(b.date) - new Date(a.date));
    
  } catch (error) {
    console.error('加载文章列表失败:', error);
    mediaItems.value = [];
  } finally {
    isLoading.value = false;
  }
};

// 搜索和标签过滤
const searchQuery = ref('')
const selectedTags = ref([])

// 获取所有唯一的标签
const tags = computed(() => {
  const tagSet = new Set()
  mediaItems.value.forEach(item => {
    item.tags.forEach(tag => tagSet.add(tag))
  })
  return Array.from(tagSet)
})

// 统计信息
const mediaStats = computed(() => {
  const stats = {
    total: mediaItems.value.length,
    anime: mediaItems.value.filter(item => item.type === 'anime').length,
    books: mediaItems.value.filter(item => item.type === 'book').length,
    cartoons: mediaItems.value.filter(item => item.type === 'cartoon').length,
    games: mediaItems.value.filter(item => item.type === 'game').length,
    movies: mediaItems.value.filter(item => item.type === 'movie').length,
    series: mediaItems.value.filter(item => item.type === 'series').length
  }
  return stats  
})

// 根据搜索词、类型和选中的标签过滤内容
const filteredItems = computed(() => {
  let items = mediaItems.value.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesTags = selectedTags.value.length === 0 || 
                        item.tags.some(tag => selectedTags.value.includes(tag))
    const matchesType = selectedMediaType.value === 'all' || 
                        item.type === selectedMediaType.value
    return matchesSearch && matchesTags && matchesType
  })
  
  // 排序
  switch(sortBy.value) {
    case 'dateDesc':
      items.sort((a, b) => new Date(b.date) - new Date(a.date))
      break
    case 'dateAsc':
      items.sort((a, b) => new Date(a.date) - new Date(b.date))
      break
    case 'ratingDesc':
      items.sort((a, b) => (b.rating || 0) - (a.rating || 0))
      break
    case 'ratingAsc':
      items.sort((a, b) => (a.rating || 0) - (b.rating || 0))
      break
  }
  
  return items
})

// 分页
const pageSize = 18
const currentPage = ref(1)

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredItems.value.length / pageSize))
)

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredItems.value.slice(start, start + pageSize)
})

// 可见的页码（中间省略号）
const visiblePageNumbers = computed(() => {
  const total = totalPages.value
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const cur = currentPage.value
  const pages = []
  if (cur <= 4) {
    for (let i = 1; i <= 5; i++) pages.push(i)
    pages.push(-1)
    pages.push(total)
  } else if (cur >= total - 3) {
    pages.push(1)
    pages.push(-1)
    for (let i = total - 4; i <= total; i++) pages.push(i)
  } else {
    pages.push(1)
    pages.push(-1)
    for (let i = cur - 1; i <= cur + 1; i++) pages.push(i)
    pages.push(-1)
    pages.push(total)
  }
  return pages
})

// 筛选、搜索或排序变化时回到第一页
watch([selectedMediaType, searchQuery, sortBy], () => {
  currentPage.value = 1
})
watch(selectedTags, () => {
  currentPage.value = 1
}, { deep: true })
watch(totalPages, (n) => {
  if (currentPage.value > n) currentPage.value = n
})

// 处理标签点击
const toggleTag = (tag) => {
  const index = selectedTags.value.indexOf(tag)
  if (index === -1) {
    selectedTags.value.push(tag)
  } else {
    selectedTags.value.splice(index, 1)
  }
}

// 设置媒体类型
const setMediaType = (type) => {
  selectedMediaType.value = type
}

// 显示详情
const showDetail = (item) => {
  selectedItem.value = item
}

// 关闭详情
const closeDetail = () => {
  selectedItem.value = null
}

// 获取类型标签
const getTypeLabel = (type) => {
  const found = mediaTypes.value.find(t => t.value === type)
  return found ? found.label : type
}

</script>
  
<style scoped>
.media-container {
  position: fixed;
  top: 0;
  left: calc(100% - 5.4%);
  width: calc(100% - 5.4%);
  height: 100vh;
  background: var(--bg);
  overflow-y: auto;
  transition: transform 0.5s var(--ease-out-expo);
  margin-left: 5.4%;
  z-index: 100;
}

.media-container.show {
  transform: translateX(-100%);
}

.media-content {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;   
}

.header-section {
  padding: 40px 0 0 0;
  width:100%;
  text-align: center;
  margin-bottom: 40px;
}

.title{
  text-align: justify;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: var(--text-title);
}


.header-section .introduction {
  text-align: justify;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-title);
}

.divider {
  width: 100%;
  height: 2px;
  background: var(--text-title);
}

.main-content {
  display: flex;
  gap: 40px;
  position: relative;
}

.items-section {
  flex: 2;
}

.filter-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.filter-buttons {
  display: flex;
  gap: 0.8rem;
}

.filter-buttons button {
  color: var(--text-secondary);
  padding: 0.5rem 1.2rem 0.6rem 1.2rem;
  border: var(--border);
  background: white;
  border-radius: 20px;
  cursor: pointer;
  transition: transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out), background var(--duration-normal) var(--ease-out), color var(--duration-normal) var(--ease-out);
  font-size: 0.9rem;
  box-shadow: var(--shadow-sm);
}

.filter-buttons button:hover {
  transform: translateY(var(--hover-lift-sm));
  box-shadow: var(--shadow-primary);
}

.filter-buttons button:active {
  transform: translateY(var(--hover-lift-sm)) scale(var(--active-scale));
}

.filter-buttons button.active {
  background: var(--target-color);
  color: white;
  border-color: var(--target-color);
}

.sort-controls select {
  color: var(--text-secondary);
  padding: 0.5rem 1rem 0.6rem 1rem;
  border: var(--border);
  border-radius: 20px;
  background: white;
  cursor: pointer;
  transition: transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out);
  box-shadow: var(--shadow-sm);
}

.sort-controls select:hover {
  transform: translateY(var(--hover-lift-sm));
  box-shadow: var(--shadow-primary);
}

.items-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.pagination-wrap {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.pagination-info {
  font-size: 0.9rem;
  color: var(--text-primary);
}

.pagination {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.page-btn {
  padding: 0.5rem 1rem;
  border: var(--border);
  border-radius: 8px;
  background: white;
  color: var(--text-primary);
  cursor: pointer;
  font-size: 0.9rem;
  transition: background var(--duration-normal) var(--ease-out), color var(--duration-normal) var(--ease-out), transform var(--duration-fast) var(--ease-out);
  box-shadow: var(--shadow-sm);
}

.page-btn:hover:not(:disabled) {
  background: var(--target-color);
  color: white;
  border-color: var(--target-color);
  transform: scale(var(--hover-scale-sm));
}

.page-btn:active:not(:disabled) {
  transform: scale(var(--active-scale));
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.page-num {
  min-width: 36px;
  height: 36px;
  padding: 0 0.4rem;
  border: var(--border);
  border-radius: 8px;
  background: white;
  color: var(--text-primary);
  cursor: pointer;
  font-size: 0.9rem;
  transition: background var(--duration-normal) var(--ease-out), color var(--duration-normal) var(--ease-out), transform var(--duration-fast) var(--ease-out);
  box-shadow: var(--shadow-sm);
}

.page-num:hover:not(:disabled):not(.ellipsis) {
  background: var(--target-color);
  color: white;
  border-color: var(--target-color);
  transform: scale(var(--hover-scale-sm));
}

.page-num:active:not(:disabled):not(.ellipsis) {
  transform: scale(var(--active-scale));
}

.page-num.active {
  background: var(--target-color);
  color: white;
  border-color: var(--target-color);
}

.page-num.ellipsis,
.page-num:disabled {
  cursor: default;
  border-color: transparent;
  background: transparent;
}

.media-card {
  display: flex;
  gap: 1.5rem;
  padding: 1.2rem;
  border: var(--border);
  background: white;
  border-radius: 12px;
  transition: transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out);
  cursor: pointer;
  height: 170px;
  box-shadow: var(--shadow-sm);
}

.media-card:hover {
  transform: translateY(var(--hover-lift));
  box-shadow: var(--shadow-primary);
}

.media-card:active {
  transform: translateY(var(--hover-lift)) scale(var(--active-scale));
}

.media-cover {
  width: 120px;
  height: 170px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.media-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cover-placeholder {
  width: 100%;
  height: 100%;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.media-rating {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
}

.media-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.media-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.media-date {
  padding: 0.2rem 0rem;
  font-size: 0.8rem;
}

.media-type {
  font-size: 0.8rem;
}

.media-title {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.media-summary {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-right: 0.5rem;
  font-size: 0.95rem;
  flex: 1;
  overflow: auto;
}

.media-summary::-webkit-scrollbar {
  width: 4px;
}

.media-summary::-webkit-scrollbar-track {
  background: color-mix(in srgb, var(--target-color) 8%, white);
  border-radius: 4px;
}

.media-summary::-webkit-scrollbar-thumb {
  background: var(--secondary-color);
  border-radius: 4px;
}

.media-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.sidebar {
  flex: 1;
  max-width: 300px;
  position: sticky;
  top: 40px;
  height: min-content;
}

.search-box input {
  width: 100%;
  padding: 1rem;
  border: var(--border);
  border-radius: 12px;
  font-size: 1rem;
  transition: transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out);
  background: white;
  color: var(--text-secondary);
  box-shadow: var(--shadow-sm);
}

.search-box input:hover {
  outline: none;
  transform: translateY(var(--hover-lift-sm));
  box-shadow: var(--shadow-md);
}

.search-box input:focus {
  outline: none;
  box-shadow: var(--shadow-primary);
}

.search-box input:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-ring-offset);
}

.tags-section {
  margin-top: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: var(--border);
  transition: transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out);
  box-shadow: var(--shadow-sm);
}

.tags-section:hover {
  transform: translateY(var(--hover-lift-sm));
  box-shadow: var(--shadow-primary);
}

.tags-section h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-size: 1.2rem;
}

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.tag {
  padding: 0.5rem 1rem;
  border: var(--tag-border);
  color: var(--tag-color);
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background var(--duration-normal) var(--ease-out), color var(--duration-normal) var(--ease-out), transform var(--duration-fast) var(--ease-out);
}

.tag:hover {
  background: var(--tag-background-hover);
  color: white;
  transform: scale(var(--hover-scale-sm));
}

.tag:active {
  transform: scale(var(--active-scale));
}

.tag.active {
  background: var(--tag-background-hover);
  color: white;
}

.stats-section {
  margin-top: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: var(--border);
  transition: transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out);
  box-shadow: var(--shadow-sm);
}

.stats-section:hover {
  transform: translateY(var(--hover-lift-sm));
  box-shadow: var(--shadow-primary);
}

.stats-section h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-size: 1.2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 8px;
}

.stat-value {
  display: block;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--text-primary);
  margin-bottom: 0.3rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.back-to-top {
  position: sticky;
  left: calc(100% - 100px);
  bottom: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out);
  border: var(--border);
  box-shadow: var(--shadow-sm);
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

.back-to-top svg {
  width: 24px;
  height: 24px;
  transition: transform var(--duration-normal) var(--ease-out);
}

.back-to-top:hover svg {
  transform: translateY(-2px);
}

/* 详情弹窗样式 */
.media-detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  position: relative;
  box-shadow: var(--shadow-primary);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background var(--duration-normal) var(--ease-out), color var(--duration-normal) var(--ease-out), transform var(--duration-fast) var(--ease-out);
  padding: 0px 0px 2px 0px;
}

.close-btn:hover {
  background: var(--target-color);
  color: white;
  transform: scale(var(--hover-scale-sm));
}

.close-btn:active {
  transform: scale(var(--active-scale));
}

.modal-header {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.modal-cover {
  width: 200px;
  height: 280px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-primary);
}

.modal-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-title-section {
  flex: 1;
}

.modal-title-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.modal-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.modal-type {
  padding: 0.3rem 0.8rem;
  background: var(--bg-secondary);
  border-radius: 12px;
}

.modal-rating {
  font-weight: bold;
  color: var(--target-color);
}

.modal-tags {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.modal-body h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}

.modal-review {
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--text-secondary);
}

.modal-notes {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
}

.modal-notes h3 {
  border-bottom: none;
}

.modal-notes ul {
  list-style-type: none;
  padding-left: 0;
}

.modal-notes li {
  padding: 0.8rem 0;
  border-bottom: 1px dashed var(--border);
  line-height: 1.6;
  color: var(--text-secondary);
}

.modal-notes li:last-child {
  border-bottom: none;
}

@media (max-width: 1200px) {
  .main-content {
    flex-direction: column;
  }
  
  .sidebar {
    max-width: 100%;
    position: relative;
    top: 0;
  }
  
  .media-content {
    padding: 40px 20px;
  }
}

@media (max-width: 768px) {
  .items-list {
    grid-template-columns: 1fr;
  }
  
  .modal-header {
    flex-direction: column;
  }
  
  .modal-cover {
    width: 100%;
    height: auto;
    aspect-ratio: 2/3;
    margin: 0 auto;
  }
  
  .filter-controls {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .media-card {
    flex-direction: column;
  }
  
  .media-cover {
    width: 100%;
    height: auto;
    aspect-ratio: 2/3;
  }
}
</style>