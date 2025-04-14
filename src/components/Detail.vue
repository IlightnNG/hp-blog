<template>
    <div class="post-detail-container" :class="{'show': !settingsStore.settings.isShowingBg }">
        <div class="post-detail-content">
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
                        <h2 v-if="section.title">{{ section.title }}</h2>
                        <div class="markdown-content" v-html="section.content"></div>
                    </div>
                </div>
                
                <!-- 右侧：目录 -->
                <div class="sidebar">
                    <div class="toc-container">
                        <h3>目录</h3>
                        <div class="toc-list">
                            <div 
                                v-for="(section, index) in currentPost.content" 
                                :key="index"
                                class="toc-item"
                                :class="{ 'active': currentSection === index }"
                                @click="scrollToSection(index)"
                            >
                                {{ section.title }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useSettingsStore } from '@/stores/settings';
import { useRoute } from 'vue-router';

const settingsStore = useSettingsStore();
const route = useRoute();
const currentSection = ref(0);

// 测试文章数据
const currentPost = ref({
id: 1,
title: "Vue3 组合式 API 实践心得",
date: "2024-03-15",
tags: ["Vue3", "前端开发", "JavaScript"],
content: [
    {
    title: "引言",
    content: `
        <p>在 Vue3 发布后，组合式 API 成为了前端开发中的一个重要话题。这种新的编程范式不仅改变了我们组织代码的方式，
        还为复杂组件的开发提供了更好的解决方案。本文将分享我在实际项目中使用组合式 API 的一些心得体会。</p>
    `
    },
    {
    title: "为什么选择组合式 API",
    content: `
        <p>传统的选项式 API 虽然直观易懂，但在处理复杂组件时往往会遇到一些问题：</p>
        <ul>
        <li>相关的逻辑代码被分散在不同的选项中，维护困难</li>
        <li>代码复用需要依赖 mixins，容易产生命名冲突</li>
        <li>TypeScript 支持有限，类型推导不够完善</li>
        </ul>
        <p>组合式 API 很好地解决了这些问题，让我们可以：</p>
        <ul>
        <li>按照逻辑关注点组织代码</li>
        <li>更好地复用逻辑代码</li>
        <li>获得更好的 TypeScript 支持</li>
        </ul>
    `
    },
    {
    title: "实践经验分享",
    content: `
        <p>在实际项目中，我总结了以下几点实践经验：</p>
        <h3>1. 合理拆分组合函数</h3>
        <p>将复杂的组件逻辑拆分为多个可复用的组合函数，每个函数负责一个独立的功能模块。
        这样不仅提高了代码的可维护性，还为后续的复用提供了可能。</p>
        <h3>2. 状态管理的新思路</h3>
        <p>使用 provide/inject 配合 ref 或 reactive，可以实现更灵活的状态管理方案。
        对于中小型项目，这种方案往往比使用 Vuex 更加轻量和简洁。</p>
        <h3>3. 生命周期钩子的使用</h3>
        <p>组合式 API 中的生命周期钩子使用起来更加直观，可以直接在相关的逻辑代码旁使用，
        提高了代码的可读性。</p>
    `
    },
    {
    title: "注意事项",
    content: `
        <p>在使用组合式 API 时，需要注意以下几点：</p>
        <ul>
        <li>避免过度解构 setup 上下文</li>
        <li>合理使用 ref 和 reactive</li>
        <li>注意响应式数据的性能开销</li>
        </ul>
        <p>同时，建议在项目中统一使用一种风格，不要混用组合式 API 和选项式 API，
        这样可以保持代码风格的一致性。</p>
    `
    },
    {
    title: "总结",
    content: `
        <p>组合式 API 为 Vue 开发带来了新的可能性，虽然学习曲线相对较陡，但带来的好处是显而易见的。
        希望这篇文章能够帮助你更好地理解和使用组合式 API。</p>
    `
    }
]
});

// 滚动到指定章节
const scrollToSection = (index) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        currentSection.value = index;
    }
};

// 监听滚动，更新当前章节
const checkCurrentSection = () => {
const sections = document.querySelectorAll('[id^="section-"]');
const container = document.querySelector('.post-detail-container');

if (container) {
    const scrollPosition = container.scrollTop;
    
    sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 200) {
        currentSection.value = index;
    }
    });
}
};

onMounted(() => {
    const container = document.querySelector('.post-detail-container');
    if (container) {
        container.addEventListener('scroll', checkCurrentSection);
    }
});

onUnmounted(() => {
    const container = document.querySelector('.post-detail-container');
    if (container) {
        container.removeEventListener('scroll', checkCurrentSection);
    }
});
</script>

<style scoped>
.post-detail-container {
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100vh;
    background: var(--bg);
    overflow-y: auto;
    transition: transform 0.5s cubic-bezier(.05,.47,.64,.99);
    margin-left: 100px;
    z-index: 100;
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
    width: 100%;
    height: 2px;
    background: var(--text-secondary);
    margin: 20px 0 0 0;
    opacity: 0.2;
}

.main-content {
display: flex;
gap: 40px;
position: relative;
}

.article-content {
flex: 2;
max-width: 900px;
}

.article-content h2 {
font-size: 1.8rem;
color: var(--text-primary);
margin: 2rem 0 1rem;
}

.article-content h3 {
font-size: 1.4rem;
color: var(--text-primary);
margin: 1.5rem 0 1rem;
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
background: var(--bg);
padding: 1.5rem;
border: var(--border);
border-radius: 12px;
}

.toc-container h3 {
color: var(--text-primary);
font-size: 1.2rem;
margin-bottom: 1rem;
}

.toc-list {
display: flex;
flex-direction: column;
gap: 0.8rem;
}

.toc-item {
color: var(--text-secondary);
cursor: pointer;
padding: 0.5rem;
border-radius: 6px;
transition: all 0.3s ease;
}

.toc-item:hover {
background: var(--tag-background);
color: var(--text-primary);
}

.toc-item.active {
background: var(--tag-background-hover);
color: var(--text-primary);
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