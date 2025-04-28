<template>
  <div class="posts-container" @click.stop :class="{'show': !settingsStore.settings.isShowingBg }">
    <div class="posts-content" >
      <!-- 上部分：标题和介绍 -->
      <div class="header-section">
        <h1 class="title">欢迎来到，我的博客</h1>
        <!-- <p class="introduction">在这里，我分享技术见解、生活感悟和有趣的发现。每一篇文章都是一次思考的沉淀。</p> -->
        <div class="divider"></div>
      </div>
      
      <!-- 主要内容区域 -->
      <div class="main-content">
        <!-- 左侧：文章列表 -->
        <div class="articles-section">
          <div class="articles-list">
            <div v-for="article in filteredArticles" :key="article.id" class="article-card" @click="selectArticle(article)">
              <div class="article-meta">
                <span class="article-date">{{ article.date }}</span>
                <div class="article-tags">
                  <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
              <h2 class="article-title">{{ article.title }}</h2>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              <!-- <div class="article-footer">
                <span class="read-more">阅读更多</span>
              </div> -->
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
                {{ tag }}
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

const settingsStore = useSettingsStore()

// 回到顶部相关
const showBackToTop = ref(false)

const checkScroll = () => {
  const container = document.querySelector('.posts-container')
  if (container) {
    showBackToTop.value = container.scrollTop > 300
  }
}

const scrollToTop = () => {
  const container = document.querySelector('.posts-container')
  if (container) {
    container.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  const container = document.querySelector('.posts-container')
  if (container) {
    container.addEventListener('scroll', checkScroll)
  }
})

onUnmounted(() => {
  const container = document.querySelector('.posts-container')
  if (container) {
    container.removeEventListener('scroll', checkScroll)
  }
})

// 文章数据
const articles = ref([
  {
    id: 1,
    title: "Vue3 组合式 API 实践心得",
    date: "2024-03-15",
    tags: ["Vue3", "前端开发", "JavaScript"],
    excerpt: "在使用 Vue3 的组合式 API 开发过程中，我发现了一些有趣的模式和最佳实践。本文将分享这些经验，帮助你更好地组织代码结构..."
  },
  {
    id: 2,
    title: "现代 CSS 动画技巧分享",
    date: "2024-03-10",
    tags: ["CSS", "动画", "前端设计"],
    excerpt: "CSS 动画不仅能让界面更生动，还能提升用户体验。本文将介绍一些现代 CSS 动画技巧，包括关键帧动画、过渡效果等..."
  },
  {
    id: 3,
    title: "TypeScript 类型体操实战",
    date: "2024-03-05",
    tags: ["TypeScript", "前端开发", "编程技巧"],
    excerpt: "TypeScript 的类型系统非常强大，但有时也会让人感到困惑。这篇文章将通过实际例子，展示如何玩转 TypeScript 类型..."
  },
  {
    id: 4,
    title: "浅谈前端性能优化",
    date: "2024-02-28",
    tags: ["性能优化", "前端开发", "最佳实践"],
    excerpt: "前端性能优化是一个永恒的话题。从资源加载到渲染优化，从缓存策略到代码分割，让我们一起探讨如何提升网站性能..."
  }
]);

// 搜索和标签过滤
const searchQuery = ref('');
const selectedTags = ref([]);

// 获取所有唯一的标签
const tags = computed(() => {
  const tagSet = new Set();
  articles.value.forEach(article => {
    article.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet);
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