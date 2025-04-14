<template>
    <div class="blog-container">
      <!-- 左侧100px边栏空间 -->
      <div class="sidebar-space"></div>
      
      <!-- 主内容网格 -->
      <div class="blog-grid">
        <!-- 标题行 - 跨4列 -->
        <div class="grid-title">
          <h1>欢迎来到我的博客</h1>
          <div class="title-divider"></div>
        </div>
        
        <!-- 文章列表 - 占第2列 -->
        <div class="articles-grid">
          <div 
            v-for="article in articles" 
            :key="article.id" 
            class="article-card"
            @click="selectArticle(article)"
          >
            <div class="article-header">
              <span class="article-date">{{ article.date }}</span>
              <div class="article-tags">
                <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
            <h2 class="article-title">{{ article.title }}</h2>
            <p class="article-excerpt">{{ article.excerpt }}</p>
          </div>
        </div>
        
        <!-- 搜索栏 - 第3列第1行 -->
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="搜索文章..."
            @input="handleSearch"
          >
        </div>
        
        <!-- 标签栏 - 第3列第2行 -->
        <div class="tags-section">
          <h3>标签</h3>
          <div class="tags-grid">
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
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  // 文章数据
  const articles = ref([
    {
      id: 1,
      title: "Vue3 组合式 API 实践心得",
      date: "2024-03-15",
      tags: ["Vue3", "前端开发", "JavaScript"],
      excerpt: "在使用 Vue3 的组合式 API 开发过程中，我发现了一些有趣的模式和最佳实践..."
    },
    {
      id: 2,
      title: "现代 CSS 动画技巧分享",
      date: "2024-03-10",
      tags: ["CSS", "动画", "前端设计"],
      excerpt: "CSS 动画不仅能让界面更生动，还能提升用户体验。本文将介绍一些现代 CSS 动画技巧..."
    },
    // 更多文章...
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
  
  // 搜索处理
  const handleSearch = () => {
    // 搜索逻辑
  };
  </script>
  
  <style scoped>
  /* 基础布局 */
  .blog-container {
    display: flex;
    min-height: 100vh;
    background-color: #f8fafc; /* 清冷的背景色 */
  }
  
  .sidebar-space {
    width: 100px;
    background-color: transparent;
  }
  
  .blog-grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding: 40px;
  }
  
  /* 标题样式 */
  .grid-title {
    grid-column: 1 / span 4;
    padding-bottom: 24px;
    border-bottom: 1px solid #e2e8f0; /* 简约的分隔线 */
  }
  
  .grid-title h1 {
    font-size: 2.5rem;
    color: #1e293b; /* 深色文字 */
    margin-bottom: 16px;
    font-weight: 500;
  }
  
  .title-divider {
    height: 1px;
    background-color: #e2e8f0;
    width: 100%;
  }
  
  /* 文章列表区域 */
  .articles-grid {
    grid-column: 2;
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .article-card {
    background: white;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;
    cursor: pointer;
    border: 1px solid #e2e8f0;
  }
  
  .article-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .article-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    font-size: 0.875rem;
    color: #64748b; /* 中等灰色 */
  }
  
  .article-title {
    font-size: 1.25rem;
    color: #1e293b;
    margin-bottom: 12px;
    font-weight: 500;
  }
  
  .article-excerpt {
    color: #64748b;
    line-height: 1.6;
    font-size: 0.95rem;
  }
  
  /* 标签样式 */
  .tag {
    display: inline-block;
    padding: 4px 12px;
    background-color: #e2e8f0;
    color: #475569;
    border-radius: 999px;
    font-size: 0.75rem;
    margin-right: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .tag:hover, .tag.active {
    background-color: #cbd5e1;
    color: #1e293b;
  }
  
  /* 搜索框 */
  .search-box {
    grid-column: 3;
    grid-row: 2;
  }
  
  .search-box input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    background: white;
    color: #1e293b;
  }
  
  .search-box input:focus {
    outline: none;
    border-color: #94a3b8;
    box-shadow: 0 0 0 2px rgba(148, 163, 184, 0.1);
  }
  
  /* 标签区域 */
  .tags-section {
    grid-column: 3;
    grid-row: 3;
    background: white;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
  }
  
  .tags-section h3 {
    color: #1e293b;
    font-size: 1.1rem;
    margin-bottom: 16px;
    font-weight: 500;
  }
  
  .tags-grid {
    display: flex;
    flex-wrap: wrap;
  }
  </style>