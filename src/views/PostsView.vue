vue
<template>
  <div class="posts-container" @click.stop :class="{'show': !settingsStore.settings.isShowingBg }">
    <div class="posts-content">
      <!-- 上部分：标题和介绍 -->
      <div class="header-section">
        <h1 class="title">欢迎来到，我的博客</h1>
        <div class="divider"></div>
      </div>
      
      <!-- 主要内容区域 -->
      <div class="main-content">
        <!-- 左侧：文章列表 -->
        <div class="articles-section">
          <!-- 加载状态 -->
          <div v-if="isLoading" class="loading-container">
            <div class="loading-spinner"></div>
            <p>正在加载文章...</p>
          </div>
          
          <!-- 无文章状态 -->
          <div v-else-if="filteredArticles.length === 0" class="empty-state">
            <p>没有找到符合条件的文章</p>
          </div>
          
          <!-- 文章列表 -->
          <div v-else class="articles-list">
            <div v-for="article in filteredArticles" :key="article.id" class="article-card" @click="selectArticle(article)">
              <div class="article-meta">
                <span class="article-date">{{ formatDate(article.date) }}</span>
                <div class="article-tags">
                  <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
              <h2 class="article-title">{{ article.title }}</h2>
              <p class="article-excerpt">{{ article.excerpt }}</p>
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
              placeholder="搜索文章..."
              @input="handleSearch"
            >
          </div>
          
          <!-- 标签云 -->
          <div class="tags-section">
            <h3>标签云</h3>
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
    <div 
      class="back-to-top" 
      :class="{ 'show': showBackToTop }"
      @click="scrollToTop"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const settingsStore = useSettingsStore();

// 文章数据和状态
const articles = ref([]);
const isLoading = ref(true);
const searchQuery = ref('');
const selectedTags = ref([]);

// 回到顶部相关
const showBackToTop = ref(false);

// 加载所有文章
const loadArticles = async () => {
  try {
    isLoading.value = true;
    articles.value = [];
    
    // 方法1：使用 fetch API 加载（适用于静态部署）
    const response = await fetch(import.meta.env.BASE_URL + 'posts/list.json');
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

// 格式化日期
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('zh-CN', options);
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

// 滚动相关函数
const checkScroll = () => {
  const container = document.querySelector('.posts-container');
  if (container) {
    showBackToTop.value = container.scrollTop > 300;
  }
};

const scrollToTop = () => {
  const container = document.querySelector('.posts-container');
  if (container) {
    container.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};

// 生命周期钩子
onMounted(() => {
  loadArticles();
  const container = document.querySelector('.posts-container');
  if (container) {
    container.addEventListener('scroll', checkScroll);
  }
});

onUnmounted(() => {
  const container = document.querySelector('.posts-container');
  if (container) {
    container.removeEventListener('scroll', checkScroll);
  }
});
</script>

<style scoped>
.posts-container {
  position: fixed;
  top: 0;
  left: calc(100% - 100px);
  width: calc(100% - 100px);
  height: 100vh;
  background: var(--bg);
  overflow-y: auto;
  transition: transform 0.5s cubic-bezier(.05,.47,.64,.99);
  margin-left: 100px;
  z-index: 100;
}


.posts-container.show {
  transform: translateX(-100%);
}

.posts-content {
  max-width: 1400px;
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
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
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
  padding: 0 0;
}

.articles-section {
  flex: 2;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.article-card {
  padding: 2rem;
  border: var(--border);
  background: white;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 100px;
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
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
  transition: all 0.3s ease;
  background: white;
  color: var(--text-secondary);
}

.search-box input:hover {
  outline: none;
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
}

.search-box input:focus {
  outline: none;
  box-shadow: var(--shadow-primary);
}

.tags-section {
  margin-top: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: var(--border);
  transition: all 0.3s ease;
}

.tags-section:hover{
  transform: translateY(-2px);
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
  transition: all 0.3s ease;
}

.tag:hover {
  background: var(--tag-background-hover);
  color: white;
}

.tag.active {
  background: var(--tag-background-hover);
  color: white;
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
  transition: all 0.3s ease;
  border: var(--border);
}

.back-to-top.show {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-primary);
}

.back-to-top svg {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
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