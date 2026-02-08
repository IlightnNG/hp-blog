<template>
  <div class="contact-container" @click.stop :class="{'show': !settingsStore.settings.isShowingBg }">
    <div class="contact-content">
      <div class="contact-block">
        <h1 class="page-title">联系 <span class="title-en">/ Contact</span></h1>
        <p class="page-sub">有想说的，从这里开始。<br><span class="sub-en">Say what you want — start here.</span></p>

        <div class="links">
          <a
            href="https://github.com/IlightnNG"
            target="_blank"
            rel="noopener noreferrer"
            class="link-row"
          >
            <span class="link-label">GitHub</span>
            <span class="link-value">IlightnNG</span>
            <span class="link-action link-arrow" aria-hidden="true">→</span>
          </a>

          <div class="link-row">
            <span class="link-label">微信 <span class="label-en">WeChat</span></span>
            <span class="link-value">{{ wechatId }}</span>
            <span class="link-action">
              <button
                type="button"
                class="row-btn"
                :class="{ 'copied': copyStatus === 'ok', 'failed': copyStatus === 'fail' }"
                @click.prevent="copyWechat"
              >
                {{ copyStatus === 'ok' ? '已复制 Copied' : copyStatus === 'fail' ? '失败 Failed' : '复制 Copy' }}
              </button>
            </span>
          </div>
        </div>

        <p class="hint">
          开源、技术、创作相关都欢迎。加微信请备注来源（如：博客）。<br>
          <span class="hint-en">Open source, tech, or creative — all welcome. When adding WeChat, please note where you’re from (e.g. blog).</span>
        </p>
      </div>
    </div>

    <BackToTopButton
      :target-selector="'.contact-container'"
      :threshold="300"
      :immediate="true"
    />
  </div>
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { ref } from 'vue'
import BackToTopButton from '@/components/BackToTopButton.vue'

const settingsStore = useSettingsStore()

const wechatId = 'wx_IlightnNG'
const copyStatus = ref('')

const copyWechat = async () => {
  try {
    await navigator.clipboard.writeText(wechatId)
    copyStatus.value = 'ok'
    setTimeout(() => { copyStatus.value = '' }, 2000)
  } catch {
    copyStatus.value = 'fail'
    setTimeout(() => { copyStatus.value = '' }, 2000)
  }
}
</script>

<style scoped>
.contact-container {
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

.contact-container.show {
  transform: translateX(-100%);
}

.contact-content {
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
}

.contact-block {
  width: 100%;
  max-width: 480px;
  text-align: left;
}

.page-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 600;
  color: var(--text-title);
  letter-spacing: 0.02em;
  margin-bottom: 0.35em;
  line-height: 1.1;
}

.title-en {
  font-weight: 400;
  font-size: 0.45em;
  opacity: 0.85;
  color: var(--text-secondary);
}

.page-sub {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.sub-en {
  font-size: 0.95rem;
  opacity: 0.9;
}

/* 总框与内部分隔统一：同色系、同线宽，内线略浅 */
.links {
  display: flex;
  flex-direction: column;
  gap: 0;
  --link-border: color-mix(in srgb, var(--text-title) 50%, transparent);
  --link-divider: color-mix(in srgb, var(--text-title) 28%, transparent);
  border: 2px solid var(--link-border);
  border-radius: 8px;
  background: color-mix(in srgb, var(--bg-glass) 50%, transparent);
  padding: 0;
  box-shadow: 0 2px 14px color-mix(in srgb, var(--text-title) 10%, transparent);
  overflow: hidden;
}

/* 两行统一：标签 + 内容 + 操作，左侧圆角矩形条用 ::before */
.link-row {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.15rem 1.35rem;
  padding-left: 1.35rem;
  border-bottom: 2px solid var(--link-divider);
  text-decoration: none;
  color: inherit;
  transition: background var(--duration-normal) var(--ease-out), color var(--duration-normal) var(--ease-out);
  cursor: default;
}

.link-row::before {
  content: '';
  position: absolute;
  left: 0.65rem;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 56%;
  min-height: 20px;
  background: var(--target-color);
  border-radius: 3px;
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-out);
}

.link-row:hover::before {
  opacity: 1;
}

a.link-row {
  cursor: pointer;
}

.link-row:last-child {
  border-bottom: none;
}

/* 统一悬停：两行相同高亮与左边圆角条 */
.link-row:hover {
  background: color-mix(in srgb, var(--target-color) 12%, transparent);
}

.link-row:hover .link-value {
  color: var(--target-color);
}

.link-label {
  flex: 0 0 5.5em;
  font-size: 0.95rem;
  color: var(--text-secondary);
  transition: color var(--duration-normal) var(--ease-out);
}

.link-row:hover .link-label {
  color: var(--text-primary);
}

.label-en {
  font-size: 0.9em;
  opacity: 0.85;
}

.link-value {
  flex: 1;
  font-size: 1rem;
  color: var(--text-primary);
  font-family: var(--font-family-code);
  transition: color var(--duration-normal) var(--ease-out);
}

/* 右侧操作区：箭头与按钮共用一槽 */
.link-action {
  flex-shrink: 0;
}

.link-arrow {
  display: block;
  color: var(--text-secondary);
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 1;
  transition: color var(--duration-normal) var(--ease-out), transform var(--duration-normal) var(--ease-out);
}

.link-row:hover .link-arrow {
  color: var(--target-color);
  transform: translateX(5px);
}

.row-btn {
  padding: 0.4rem 0.9rem;
  border: 2px solid var(--target-color);
  border-radius: 8px;
  background: transparent;
  color: var(--text-primary);
  font-size: 0.85rem;
  cursor: pointer;
  transition: background var(--duration-normal) var(--ease-out), color var(--duration-normal) var(--ease-out), transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out);
}

.row-btn:hover {
  background: var(--target-color);
  color: white;
  transform: scale(1.04);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--target-color) 35%, transparent);
}

.row-btn:active {
  transform: scale(0.98);
}

.row-btn.copied {
  background: var(--target-color);
  color: white;
  border-color: var(--target-color);
}

.row-btn.failed {
  border-color: var(--text-secondary);
  color: var(--text-secondary);
}

.hint {
  margin-top: 1.75rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.hint-en {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.88rem;
  opacity: 0.85;
}
</style>
