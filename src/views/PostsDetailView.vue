<template>
  <div class="post-detail-container" @click.stop :class="{'show': !settingsStore.settings.isShowingBg }">
    <!-- 返回按钮 -->
    <div class="back-button" @click="goBack">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Back</span>
    </div>
    <!-- 加载状态 -->
    <div v-if="isLoading" class="post-detail-loading-wrap">
      <div class="blog-loading">
        <div class="blog-loading__spinner"></div>
        <p class="blog-loading__text">Loading...</p>
      </div>
    </div>
    
    <!-- 文章不存在状态 -->
    <div v-else-if="!currentPost" class="empty-state">
      <p>No Post or Loading Error</p>
      <button @click="goBack" class="back-button">Back To List</button>
    </div>

    
    <div v-else class="post-detail-content">
        
        <!-- 文章头部信息 -->
        <div class="header-section">
            <h1>{{ currentPost.title }}</h1>
            <div class="post-meta">
                <div class="post-tags">
                    <span class="tag" >{{ currentPost.date }}</span>
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
              <h3>Content</h3>
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
                  {{ item.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- 回到顶部按钮 -->
    <BackToTopButton
      :target-selector="'.post-detail-container'"
      :threshold="300"
      :immediate="true"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useSettingsStore } from '@/stores/settings';
import { useRoute, useRouter } from 'vue-router';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import fm from 'front-matter';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { solidity } from '@/utils/hljs-solidity';
import BackToTopButton from '@/components/BackToTopButton.vue';

// 注册 Solidity 语法高亮（highlight.js 官方未内置，aliases 含 'sol'）
hljs.registerLanguage('solidity', solidity);

// marked 15 需通过 marked-highlight 扩展才能对代码块做语法高亮，setOptions({ highlight }) 已不再生效
const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    emptyLangClass: 'hljs',
    highlight(code, lang) {
      const language = lang && hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language, ignoreIllegals: true }).value;
    }
  })
);
marked.setOptions({ breaks: true, gfm: true });

const settingsStore = useSettingsStore();
const route = useRoute();
const router = useRouter();
const currentSection = ref("");
const currentPost = ref(null);
const isLoading = ref(true);



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
    
    // 转换 Markdown 为 HTML（使用 marked-highlight 扩展做代码高亮）
    const htmlContent = marked.parse(body);
    
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
    let title = heading.textContent;
    let number = '';


    // 去除原本序号
    const numberPattern = /^\d+(\.\d+)*\.?\s+/;
    if (numberPattern.test(title)) {
      title = title.replace(numberPattern, '');
    }

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
  
  // 为每个代码块添加语言标签与复制按钮（左上角语言、右上角复制）
  const copyBtnHtml = `<span class="code-block-copy-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg></span><span class="code-block-copy-text">复制</span>`;
  Array.from(tempDiv.querySelectorAll('pre')).forEach((pre) => {
    const codeEl = pre.querySelector('code');
    let lang = 'plaintext';
    if (codeEl && codeEl.className) {
      const m = codeEl.className.match(/(?:^|\s)(?:hljs\s+)?language-([\w+-]+)/);
      if (m) lang = m[1];
    }
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    const header = document.createElement('div');
    header.className = 'code-block-header';
    const langSpan = document.createElement('span');
    langSpan.className = 'code-block-lang';
    langSpan.textContent = lang;
    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'code-block-copy';
    copyBtn.setAttribute('aria-label', '复制代码');
    copyBtn.innerHTML = copyBtnHtml;
    header.appendChild(langSpan);
    header.appendChild(copyBtn);
    wrapper.appendChild(header);
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
  });

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
      content: tempDiv.innerHTML
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

// 代码块一键复制（事件委托，兼容异步渲染的内容）
const onContainerClick = (e) => {
  const btn = e.target.closest('.code-block-copy');
  if (!btn) return;
  const wrapper = btn.closest('.code-block-wrapper');
  if (!wrapper) return;
  const pre = wrapper.querySelector('pre');
  if (!pre) return;
  const text = pre.textContent || '';
  navigator.clipboard.writeText(text).then(() => {
    const textEl = btn.querySelector('.code-block-copy-text');
    if (textEl) textEl.textContent = '已复制';
    btn.classList.add('copied');
    setTimeout(() => {
      if (textEl) textEl.textContent = '复制';
      btn.classList.remove('copied');
    }, 1500);
  });
};

onMounted(() => {
  loadPost();
  const container = document.querySelector('.post-detail-container');
  if (container) {
    container.addEventListener('scroll', checkCurrentSection);
    container.addEventListener('click', onContainerClick);
  }
});

onUnmounted(() => {
  const container = document.querySelector('.post-detail-container');
  if (container) {
    container.removeEventListener('scroll', checkCurrentSection);
    container.removeEventListener('click', onContainerClick);
  }
});
</script>

<style scoped>
.post-detail-container {
  position: fixed;
  top: 0;
  left: calc(100% - 5.4%);
  width: calc(100% - 5.4%);
  height: 100vh;
  background: var(--bg);
  overflow-y: auto;
  transition: transform 0.5s var(--ease-out-expo);
  margin-left: 5.4%;
  z-index: 10;
}


.post-detail-container.show {
  transform: translateX(-100%);
}

.post-detail-loading-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.post-detail-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
  font-family: var(--font-family-base);
}

.header-section {
  text-align: center;
  margin-bottom: 60px;
}

.header-section h1 {
  font-family: var(--font-family-base);
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  letter-spacing: 0.02em;
}

.post-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.post-tags {
  display: flex;
  gap: 10px;
}

.tag {
  padding: 0.5rem 1rem;
  background: var(--tag-background);
  color: var(--text-primary);
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
}

.divider {
  width: 100%;
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
  flex: 1;
  font-family: var(--font-family-base);
}

/* 二级、三级标题与正文同字族，避免浏览器用默认标题字体 */
.article-content :deep(h2) {
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 2rem -0.8rem 0.5rem;
  letter-spacing: 0.02em;
}

/* 三级标题强制与正文同一字体族，覆盖浏览器默认 */
.article-content .markdown-content :deep(h3),
.article-content :deep(h3) {
  font-family: var(--font-family-base);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0.5rem 0 0.5rem;
  letter-spacing: 0.01em;
}

.markdown-content {
  color: var(--text-secondary);
  font-family: var(--font-family-base);
  font-size: 1.0625rem; /* 17px 更利阅读 */
  line-height: 1.75;
  letter-spacing: 0.02em;
}

.markdown-content :deep(p) {
  margin: 1rem 0;
}

.markdown-content :deep(ul) {
  margin: 1rem 0;
  padding-left: 2rem;
}

.markdown-content :deep(li) {
  margin: 0.5rem 0;
}

.markdown-content :deep(ol) {
  margin: 1rem 0;
  padding-left: 2rem;
}

/* Markdown表格样式 */
.markdown-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  display: block;
  overflow-x: auto;
  /* word-break: break-word; */
}


.markdown-content :deep(th),
.markdown-content :deep(td) {
  padding: 0.8rem 1rem;
  /* border: 1px solid var(--target-color); */
  border-bottom: 1px solid var(--target-color);
  text-align: left;
  min-width: 200px;
}

.markdown-content :deep(th) {
  border-top: 2px solid var(--target-color);
  font-weight: 600;
  color: var(--text-primary);
}

/* 表格滚动条样式 */
.markdown-content :deep(table)::-webkit-scrollbar {
  height: 8px;
}

.markdown-content :deep(table)::-webkit-scrollbar-track {
  background: white;
  border-radius: 4px;
}

.markdown-content :deep(table)::-webkit-scrollbar-thumb {
  background: var(--target-color);
  border-radius: 4px;
}

.markdown-content :deep(a) {
  color: var(--link-color, #3498db); /* 使用CSS变量，有回退值 */
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color var(--duration-normal) var(--ease-out), border-color var(--duration-normal) var(--ease-out);
  font-weight: 500;
  position: relative;
}

.markdown-content :deep(a:hover) {
  color: var(--link-hover-color, #2980b9);
  border-bottom: 1px solid currentColor;
}

.markdown-content :deep(a:visited) {
  color: var(--link-visited-color, #9b59b6);
}

.markdown-content :deep(a:active) {
  color: var(--link-active-color, #e74c3c);
}

/* 代码块：背景与边框贴合博客主色 --target-color */
.markdown-content :deep(.code-block-wrapper) {
  margin: 1em 0;
  border-radius: 8px;
  overflow: hidden;
  background: color-mix(in srgb, var(--target-color) 10%, white);
  border: 1px solid color-mix(in srgb, var(--target-color) 28%, transparent);
}

.markdown-content :deep(.code-block-header) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: color-mix(in srgb, var(--target-color) 16%, white);
  border-bottom: 1px solid color-mix(in srgb, var(--target-color) 22%, transparent);
  font-family: var(--font-family-code);
  font-size: 0.8rem;
}

.markdown-content :deep(.code-block-lang) {
  color: var(--text-secondary);
  font-weight: 600;
  text-transform: capitalize;
}

.markdown-content :deep(.code-block-copy) {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  font-family: var(--font-family-base);
  font-size: 0.8rem;
  transition: background var(--duration-normal) var(--ease-out), color var(--duration-normal) var(--ease-out), transform var(--duration-fast) var(--ease-out);
}

.markdown-content :deep(.code-block-copy:hover) {
  background: color-mix(in srgb, var(--target-color) 25%, transparent);
  color: var(--target-color);
}

.markdown-content :deep(.code-block-copy:active) {
  transform: scale(var(--active-scale));
}

.markdown-content :deep(.code-block-copy.copied) {
  color: #2e7d32;
}

.markdown-content :deep(.code-block-copy-icon) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* 代码块内容区背景与博客主色一致 */
.markdown-content :deep(.code-block-wrapper pre) {
  margin: 0;
  border-radius: 0;
  border: none;
  background: color-mix(in srgb, var(--target-color) 10%, white);
  padding: 16px;
  overflow: auto;
  line-height: 1.45;
}

.markdown-content :deep(pre:not(.code-block-wrapper pre)) {
  background: color-mix(in srgb, var(--target-color) 10%, white);
  border-radius: 6px;
  padding: 16px;
  overflow: auto;
  line-height: 1.45;
  margin: 1em 0;
  border: 1px solid color-mix(in srgb, var(--target-color) 28%, transparent);
}

/* 代码块内的代码 - 保留高亮.js的样式 */
.markdown-content :deep(pre code) {
    font-size: 85%;
    background: none;
    color: inherit;
}

.markdown-content :deep(pre code .hljs) {
    background: none;
}

/* 行内代码：与博客主色一致的浅底 */
.markdown-content :not(pre)>:deep(code) {
  background-color: color-mix(in srgb, var(--target-color) 18%, white);
  border-radius: 4px;
  padding: 0.2em 0.4em;
  color: var(--text-secondary);
  font-size: 85%;
  border: 1px solid color-mix(in srgb, var(--target-color) 22%, transparent);
}

/* 代码滚动条样式 */
.markdown-content :deep(pre::-webkit-scrollbar) {
  height: 8px;
}

.markdown-content :deep(pre::-webkit-scrollbar-track) {
  background: white;
  border-radius: 4px;
}

.markdown-content :deep(pre::-webkit-scrollbar-thumb) {
  background: var(--target-color);
  border-radius: 4px;
}

.sidebar {
  flex: 2;
  max-width: 300px;
  /* max-width: 20vw; */
  position: sticky;
  top: 40px;
  height: fit-content;
}

.toc-container {
  padding: 1.8rem;
  border: var(--border);
  border-radius: 12px;
  background: white;
}

.toc-container h3 {
  color: var(--text-primary);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.toc-list {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  max-height: 70vh; /* 限制列表最大高度 */
  overflow-y: auto; /* 添加滚动条 */
}

/* 可选：自定义滚动条样式 */
.toc-list::-webkit-scrollbar {
  width: 3px;
}

.toc-list::-webkit-scrollbar-track {
  background: var(--bg);
  border-radius: 3px;
}

.toc-list::-webkit-scrollbar-thumb {
  background: var(--target-color);
  border-radius: 3px;
}

.toc-item {
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  margin-right: 0.3rem;
  border-radius: 6px;
  transition: background var(--duration-normal) var(--ease-out), color var(--duration-normal) var(--ease-out), transform var(--duration-fast) var(--ease-out);
}

.toc-item:hover {
  background: var(--tag-background);
  color: var(--text-primary);
  transform: translateX(2px);
}

.toc-item:active {
  transform: translateX(2px) scale(var(--active-scale));
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
    top: 28px;
    left: 1.5rem;
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
    transition: transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out), background var(--duration-normal) var(--ease-out);
    box-shadow: var(--shadow-sm);
}

.back-button:hover {
    transform: translateX(-4px);
    background: var(--button-background-hover);
    box-shadow: var(--shadow-primary);
}

.back-button:active {
    transform: translateX(-4px) scale(var(--active-scale));
}

.back-button svg {
    width: 20px;
    height: 20px;
    transition: transform var(--duration-normal) var(--ease-out);
}

.back-button:hover svg {
    transform: translateX(-2px);
}

.back-button span {
    font-size: 1rem;
    font-weight: 700;
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