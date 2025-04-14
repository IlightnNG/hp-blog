<template>
  <div class="posts-container" :class="{'show': !settingsStore.settings.isShowingBg }">
    <div class="blog-card">
      <!-- 搜索框 -->
      <div class="search-section">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="搜索文章..."
          class="search-input"
        >
      </div>

      <!-- 标签区域 -->
      <div class="tags-section">
        <div class="tags-list">
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

      <!-- 文章列表 -->
      <div class="articles-section">
        <div 
          v-for="article in filteredArticles" 
          :key="article.id" 
          class="article-card"
          @click="selectArticle(article)"
        >
          <h3 class="article-title">{{ article.title }}</h3>
          <div class="article-meta">
            <span class="article-date">{{ article.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const settingsStore = useSettingsStore()
const router = useRouter();
const searchQuery = ref('');
const selectedTags = ref([]);

// 示例数据
const articles = ref([
  {
    id: 1,
    title: "Vue3 组合式 API 实践心得",
    date: "2024-03-15",
    tags: ["Vue3", "前端开发"]
  },
  {
    id: 2,
    title: "CSS 动画技巧分享",
    date: "2024-03-10",
    tags: ["CSS", "动画"]
  }
]);

// 获取所有标签
const tags = computed(() => {
  const tagSet = new Set();
  articles.value.forEach(article => {
    article.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet);
});

// 过滤文章
const filteredArticles = computed(() => {
  return articles.value.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.value.toLowerCase());
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

// 处理文章点击
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
  top: calc(-90% + 20px);
  left: 0;
  width: 300px;
  height: 90%;
  margin-left: 100px;
  transition: transform 0.5s cubic-bezier(.05,.47,.64,.99);
}

.posts-container.show {
  transform: translateY(100%);
}

.blog-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

/* 搜索框样式 */
.search-section {
  padding: 0 0;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: var(--border);
  border-radius: 8px;
  font-size: 14px;
}

/* 标签区域样式 */
.tags-section {
  padding: 0px 0;
  border-bottom: var(--border);
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 4px 12px;
  background: var(--tag-background);
  color: var(--tag-color);
  border-radius: 15px;
  font-size: 12px;
  cursor: pointer;
}

.tag.active {
  background: var(--tag-background-hover);
  color: white;
}

/* 文章列表样式 */
.articles-section {
  flex: 1;
  overflow-y: auto;
}

.article-card {
  padding: 15px;
  border: var(--border);
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
}

.article-title {
  font-size: 16px;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.article-meta {
  font-size: 12px;
  color: var(--text-secondary);
}

.article-card:hover {
  background: var(--tag-background);
}
</style>