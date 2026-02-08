<template>
  <div class="posts-container" @click.stop :class="{'show': !settingsStore.settings.isShowingBg }">
    <div class="posts-content">
      <!-- 上部分：标题和介绍 -->
      <div class="header-section">
        <h1 class="title">欢迎来到，我的博客</h1>
        <p class="introduction">
          Welcome to HP's blog! 
        </p>
        <div class="divider"></div>
      </div>
      
      <!-- 主要内容区域 -->
      <div class="main-content">
        <!-- 左侧：文章列表 -->
        <div class="articles-section">
          <!-- 加载状态 -->
          <div v-if="isLoading" class="blog-loading">
            <div class="blog-loading__spinner"></div>
            <p class="blog-loading__text">Loading Posts...</p>
          </div>
          
          <!-- 无文章状态 -->
          <div v-else-if="filteredArticles.length === 0" class="empty-state">
            <p>No Post</p>
          </div>
          
          <!-- 文章列表 -->
          <div v-else class="articles-list">
            <div v-for="article in paginatedArticles" :key="article.id" class="article-card" @click="selectArticle(article)">
              <div class="article-meta">
                <span class="article-date">{{ formatDate(article.date) }}</span>
                <div class="article-tags">
                  <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
              <h2 class="article-title">{{ article.title }}</h2>
              <p class="article-excerpt">{{ article.excerpt }}</p>
            </div>

            <!-- 分页 -->
            <div class="pagination-wrap" v-if="totalPages > 1">
              <div class="pagination-info">
                共 {{ filteredArticles.length }} 篇，第 {{ currentPage }} / {{ totalPages }} 页
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
        </div>
        
        <!-- 右侧：功能区 -->
        <div class="sidebar">
          <!-- 搜索框 -->
          <div class="search-box">
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Search..."
              @input="handleSearch"
            >
          </div>
          
          <!-- 标签云 -->
          <div class="tags-section">
            <h3>标签云 Tags</h3>
            <div class="tags-cloud">
              <span 
                v-for="tag in tags" 
                :key="tag"
                class="tag"
                :class="{ 'active': selectedTags.includes(tag) }"
                @click="toggleTag(tag)"
              >
                {{ tag }} ({{ tagCounts[tag] || 0 }})
              </span>
            </div>
          </div> 
        </div>
      </div>
    </div>
    
    <!-- 回到顶部按钮 -->
    <BackToTopButton
      :target-selector="'.posts-container'"
      :threshold="300"
      :immediate="true"
    />
  </div>
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
// 回到顶部相关
import BackToTopButton from '@/components/BackToTopButton.vue';

const router = useRouter();
const settingsStore = useSettingsStore();

// 文章数据和状态
const articles = ref([]);
const isLoading = ref(true);
const searchQuery = ref('');
const selectedTags = ref([]);



// 加载所有文章
const loadArticles = async () => {
  try {
    isLoading.value = true;
    articles.value = [];
    const response = await fetch('/hp-blog/posts/list.json');
    if (!response.ok) throw new Error('列表加载失败');
    const postList = await response.json();
    
    articles.value = postList.map(post => ({
      id: post.id || post.path.replace(/^.*\/(.*)\.md$/, '$1'),
      title: post.title || '无标题',
      date: post.date || new Date().toISOString().split('T')[0],
      tags: Array.isArray(post.tags) ? post.tags : [],
      excerpt: post.excerpt || ''
    })).sort((a, b) => new Date(b.date) - new Date(a.date));
    
  } catch (error) {
    console.error('加载文章列表失败:', error);
    articles.value = [];
  } finally {
    isLoading.value = false;
  }
};

// 计算标签和标签计数
const tags = computed(() => {
  const tagSet = new Set();
  articles.value.forEach(article => {
    article.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
});

const tagCounts = computed(() => {
  const counts = {};
  articles.value.forEach(article => {
    article.tags.forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });
  return counts;
});

// 根据搜索词和选中的标签过滤文章
const filteredArticles = computed(() => {
  return articles.value.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesTags = selectedTags.value.length === 0 || 
                       article.tags.some(tag => selectedTags.value.includes(tag));
    return matchesSearch && matchesTags;
  });
});

// 分页（与 Media 页一致）
const pageSize = 10;
const currentPage = ref(1);

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredArticles.value.length / pageSize))
);

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredArticles.value.slice(start, start + pageSize);
});

const visiblePageNumbers = computed(() => {
  const total = totalPages.value;
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const cur = currentPage.value;
  const pages = [];
  if (cur <= 4) {
    for (let i = 1; i <= 5; i++) pages.push(i);
    pages.push(-1);
    pages.push(total);
  } else if (cur >= total - 3) {
    pages.push(1);
    pages.push(-1);
    for (let i = total - 4; i <= total; i++) pages.push(i);
  } else {
    pages.push(1);
    pages.push(-1);
    for (let i = cur - 1; i <= cur + 1; i++) pages.push(i);
    pages.push(-1);
    pages.push(total);
  }
  return pages;
});

watch([searchQuery, selectedTags], () => {
  currentPage.value = 1;
}, { deep: true });
watch(totalPages, (n) => {
  if (currentPage.value > n) currentPage.value = n;
});

// 格式化日期
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-EN', options);
};

// 处理标签点击
const toggleTag = (tag) => {
  const index = selectedTags.value.indexOf(tag);
  if (index === -1) {
    selectedTags.value.push(tag);
  } else {
    selectedTags.value.splice(index, 1);
  }
};

// 处理文章选择
const selectArticle = (article) => {
  router.push({
    name: 'PostDetail',
    params: { id: article.id }
  });
};



// 生命周期钩子
onMounted(() => {
  loadArticles();
  
});

onUnmounted(() => {
  
});
</script>

<style scoped>
.posts-container {
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


.posts-container.show {
  transform: translateX(-100%);
}

.posts-content {
  max-width: 1250px;
  /* max-width: 70vw; */
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
/* .header-section  {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 1000px;
  margin: 0 auto;
} */

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

.articles-section {
  flex: 2;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.pagination-wrap {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid color-mix(in srgb, var(--text-title) 25%, transparent);
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

.article-card {
  padding: 2rem;
  border: var(--border);
  background: white;
  border-radius: 12px;
  transition: transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out);
  cursor: pointer;
  min-width: 100px;
  box-shadow: var(--shadow-sm);
}

.article-card:hover {
  transform: translateY(var(--hover-lift));
  box-shadow: var(--shadow-primary);
}

.article-card:active {
  transform: translateY(var(--hover-lift)) scale(var(--active-scale));
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
}

.article-date {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.article-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.article-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.article-excerpt {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.article-footer {
  display: flex;
  justify-content: flex-end;
}

.read-more {
  color: var(--text-secondary);
  font-weight: 500;
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

/* 回到顶部由 BackToTopButton 组件提供，此处仅保留占位/兼容 */
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

@media (max-width: 1200px) {
  .main-content {
    flex-direction: column;
  }
  
  .sidebar {
    max-width: 100%;
    position: relative;
    top: 0;
  }
  
  .posts-content {
    padding: 40px 20px;
  }
}


</style>