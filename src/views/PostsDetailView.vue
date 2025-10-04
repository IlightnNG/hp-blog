<template>
  <div class="post-detail-container" @click.stop :class="{'show': !settingsStore.settings.isShowingBg }">
    <!-- 返回按钮 -->
    <div class="back-button" @click="goBack">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>返回</span>
    </div>
    <!-- 加载状态 -->
    <div v-if="isLoading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>正在加载文章...</p>
    </div>
    
    <!-- 文章不存在状态 -->
    <div v-else-if="!currentPost" class="empty-state">
      <p>文章不存在或加载失败</p>
      <button @click="goBack" class="back-button">返回文章列表</button>
    </div>

    
    <div v-else class="post-detail-content">
        
        <!-- 文章头部信息 -->
        <div class="header-section">
            <h1>{{ currentPost.title }}</h1>
            <div class="post-meta">
                <span class="post-date">{{ currentPost.date }}</span>
                <div class="post-tags">
                    <span v-for="tag in currentPost.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
            </div>
            <div class="divider"></div>
        </div>
        
        <!-- 主要内容区域 -->
        <div class="main-content">
          <!-- 左侧：文章内容 -->
          <div class="article-content">
              <div v-for="(section, index) in currentPost.content" :key="index" :id="'section-' + index">
                  <div class="markdown-content" v-html="section.content"></div>
              </div>
          </div>
          
          <!-- 右侧：目录 -->
          <div class="sidebar">
            <div class="toc-container">
              <h3>目录</h3>
              <div class="toc-list">
                <div 
                  v-for="(item, index) in tocItems" 
                  :key="index"
                  class="toc-item"
                  :class="{ 
                    'active': currentSection === item.id,
                    'toc-h2': item.level === 2,
                    'toc-h3': item.level === 3
                  }"
                  @click="scrollToSection(item.id)"
                >
                  {{ item.number }} {{ item.title }}
                </div>
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
import { ref, onMounted, onUnmounted } from 'vue';
import { useSettingsStore } from '@/stores/settings';
import { useRoute, useRouter } from 'vue-router';
import { marked } from 'marked';
import fm from 'front-matter';

// 代码块
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // 选择你喜欢的样式

// 配置 marked 使用 highlight.js
marked.setOptions({
  highlight: function(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-', // 高亮代码块的语言前缀
  breaks: true,
  gfm: true
});

const settingsStore = useSettingsStore();
const route = useRoute();
const router = useRouter();
const currentSection = ref("");
const currentPost = ref(null);
const isLoading = ref(true);


// 回到顶部相关
const showBackToTop = ref(false)

const checkScroll = () => {
  const container = document.querySelector('.post-detail-container')
  if (container) {
    showBackToTop.value = container.scrollTop > 300
  }
}

const scrollToTop = () => {
  const container = document.querySelector('.post-detail-container')
  if (container) {
    container.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

// 创建错误状态的文章
const createErrorPost = () => ({
  title: "加载失败",
  date: new Date().toISOString().split('T')[0],
  tags: [],
  content: [{ title: "错误", content: "无法加载文章内容" }]
});

// 加载文章内容
const loadPost = async () => {
  try {
    isLoading.value = true;
    currentPost.value = null;
    
    const postId = route.params.id.replace('.md', '');
    
    
    // 方法1：使用 fetch 获取原始内容
    const response = await fetch(`/hp-blog/posts/${postId}.md`);
    if (!response.ok) throw new Error('文章未找到');
    
    const text = await response.text();
    // console.log('Raw markdown content:', text); // 调试
    
    // 解析 front matter
    const { attributes, body } = fm(text);
    // console.log('Parsed attributes:', attributes); // 调试
    
    // 转换 Markdown 为 HTML
    marked.setOptions({
      breaks: true,
      gfm: true
    });
    const htmlContent = marked(body);
    
    // 解析内容为章节
    currentPost.value = {
      title: attributes.title || '无标题',
      date: attributes.date || new Date().toISOString().split('T')[0],
      tags: Array.isArray(attributes.tags) ? attributes.tags : [],
      content: parseContentToSections(htmlContent)
    };
    
  } catch (error) {
    console.error('加载文章失败:', error);
    currentPost.value = createErrorPost();
  } finally {
    isLoading.value = false;

  }
};

// 添加tocItems响应式变量
const tocItems = ref([]);
// 解析内容为章节
const parseContentToSections = (htmlContent) => {
  const sections = [];
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  
  // 获取所有h2和h3元素
  const headings = tempDiv.querySelectorAll('h2, h3');
  
  // 重置tocItems
  tocItems.value = [];
  
  let h2Count = 0;
  let h3Count = 0;
  
  // 首先提取所有标题信息
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.substring(1));
    const title = heading.textContent;
    let number = '';
    
    if (level === 2) {
      h2Count++;
      h3Count = 0;
      number = `${h2Count}`;
    } else if (level === 3) {
      h3Count++;
      number = `${h2Count}.${h3Count}`;
    }
    
    // 为标题添加ID - 使用更简单的ID格式
    const id = `heading-${index}`;
    heading.id = id;
    
    // 添加到目录项
    tocItems.value.push({
      id,
      title,
      level,
      number
    });
  });
  
  // 重新设置HTML内容（包含ID）
  const updatedHtmlContent = tempDiv.innerHTML;
  
  // 分割内容为章节（基于h2）
  const h2Elements = tempDiv.querySelectorAll('h2');
  
  if (h2Elements.length > 0) {
    h2Elements.forEach((h2, index) => {
      const title = h2.textContent;
      const nextH2 = h2Elements[index + 1];
      
      const sectionContent = [];
      let currentNode = h2;
      
      // 从当前h2开始，包含h2本身
      while (currentNode && currentNode !== nextH2) {
        sectionContent.push(currentNode.outerHTML || currentNode.textContent);
        currentNode = currentNode.nextSibling;
      }
      
      sections.push({
        title,
        content: sectionContent.join('')
      });
    });
  } else {
    sections.push({
      title: '',
      content: updatedHtmlContent
    });
  }
  
  return sections;
};


// 滚动到指定章节
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    currentSection.value = id;
  }
};

// 监听滚动，更新当前章节
const checkCurrentSection = () => {
  const container = document.querySelector('.post-detail-container');
  if (!container) return;
  
  // 当前标题判定
  const scrollPosition = container.scrollTop - 300;
  
  // 找到当前最接近视口的标题
  let closestItem = null;
  let minDistance = Infinity;
  
  tocItems.value.forEach(item => {
    const element = document.getElementById(item.id);
    if (element) {
      const distance = Math.abs(element.offsetTop - scrollPosition );
      if (distance < minDistance) {
        minDistance = distance;
        closestItem = item;
      }
    }
  });
  
  if (closestItem) {
    currentSection.value = closestItem.id;
  }
};

// 处理返回跳转
const goBack = () => {
  router.push({
    name: 'Posts'
  }); 
};

onMounted(() => {
  loadPost();
  const container = document.querySelector('.post-detail-container');
  if (container) {
      container.addEventListener('scroll', checkCurrentSection);
      container.addEventListener('scroll', checkScroll);
  }
});

onUnmounted(() => {
  const container = document.querySelector('.post-detail-container');
  if (container) {
      container.removeEventListener('scroll', checkCurrentSection);
      container.removeEventListener('scroll', checkScroll);
  }
});
</script>

<style scoped>
.post-detail-container {
  position: fixed;
  top: 0;
  left: calc(100% - 100px);
  width: calc(100% - 100px);
  height: 100vh;
  background: var(--bg);
  overflow-y: auto;
  transition: transform 0.5s cubic-bezier(.05,.47,.64,.99);
  margin-left: 100px;
  z-index: 10;
}

.post-detail-container.show {
  transform: translateX(-100%);
}

.post-detail-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 40px;
}

.header-section {
  text-align: center;
  margin-bottom: 60px;
}

.header-section h1 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.post-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.post-date {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.post-tags {
  display: flex;
  gap: 10px;
}

.tag {
  padding: 0.5rem 1rem;
  background: var(--tag-background);
  color: var(--tag-color);
  border-radius: 20px;
  font-size: 0.9rem;
}

.divider {
  width: 95%;
  height: 2px;
  background: var(--target-color);
  margin: 20px 0 0 0;
}

.main-content {
  display: flex;
  gap: 40px;
  position: relative;
}

.article-content {
  padding: 3rem;
  border: var(--border);
  border-radius: 12px;
  background: white;
  min-width: 100px;
  flex: 2;
  max-width: 900px;
}

.article-content :deep(h2) {
  font-size: 2rem;
  color: var(--text-primary);
  margin: 2rem 0 0.5rem;
}

.article-content :deep(h3) {
  font-size: 1.4rem;
  color: var(--text-primary);
  margin: 0.5rem 0 0.5rem;
}

.markdown-content {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
}

.markdown-content p {
  margin: 1rem 0;
}

.markdown-content ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.markdown-content li {
  margin: 0.5rem 0;
}

.sidebar {
  flex: 1;
  max-width: 300px;
  position: sticky;
  top: 40px;
  height: fit-content;
}

.toc-container {
  padding: 2rem;
  border: var(--border);
  border-radius: 12px;
  background: white;
}

.toc-container h3 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.toc-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.toc-item {
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.toc-item:hover {
  background: var(--tag-background);
  color: var(--text-primary);
}

.toc-item.active {
  background: var(--bg);
  color: var(--text-primary);
}

.toc-h3 {
  font-size: 1rem;
  padding-left: 1.5rem;
  color: var(--text-secondary);
}

.toc-h2 {
  font-weight: 600;
  padding-top: 0.5rem;
  padding-left: 0.5rem;

}


.back-button {
    position: sticky;
    top: 40px;
    left: 50px;
    width: 100px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: var(--button-background);
    border: var(--border);
    border-radius: 25px;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.3s ease;
}

.back-button:hover {
    transform: translateX(-3px);
    background: var(--button-background-hover);
    box-shadow: var(--shadow-primary);
}

.back-button svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
}

.back-button:hover svg {
    transform: translateX(-2px);
}

.back-button span {
    font-size: 1rem;
    font-weight: 500;
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

.post-detail-content {
  padding: 40px 20px;
}
}
</style>