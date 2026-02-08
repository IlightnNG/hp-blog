<template>
  <div class="nav-container" @click.stop>
    <div 
      class="nav-logo"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      :class="{ 'expanded': isHovered || settingsStore.settings.isShowingBg}"
      
    >
      <div class="logo" @click="settingsStore.toggleShowingBg">HP</div>
      
      <transition name="fade">
        <div v-if="isHovered || settingsStore.settings.isShowingBg" class="nav-items" >
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="nav-icon"
            :title="item.title"
            @click="settingsStore.resetShowingBgAndAddGroupMode"
          >
            <component :is="item.icon" />
          </router-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Home, Mail, User, Settings, FileText, Sparkles } from 'lucide-vue-next';
import { useSettingsStore } from '@/stores/settings'
const settingsStore = useSettingsStore()

const isHovered = ref(false);

const base = '/hp-blog';

const navItems = [
  { path: base + '/', title: 'Home', icon: Home },
  { path: base + '/posts', title: 'Posts', icon: FileText },
  { path: base + '/media', title: 'Media', icon: Sparkles },
  { path: base + '/contact', title: 'Contact', icon: Mail },
  { path: base + '/settings', title: 'Settings', icon: Settings }
];
</script>

<style scoped>
.nav-container {
  position: fixed;
  top: 20px;
  left: 1%;
  z-index: 100;
}

.nav-logo {
  width: 60px;
  height: 60px;
  border-radius: 0px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: height var(--duration-slow) var(--ease-spring), box-shadow var(--duration-slow) var(--ease-out), backdrop-filter var(--duration-slow) var(--ease-out);
  overflow: hidden;
  box-shadow: var(--shadow-glass);
}

.nav-logo.expanded {
  backdrop-filter: blur(10px);
  height: 300px;
  border-radius: 0px;
  box-shadow: var(--shadow-glass-hover);
}

.logo {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  flex-shrink: 0;
  cursor: pointer;
  user-select: none;
  transition: transform var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out);
}

.logo:hover {
  transform: scale(1.05);
}

.logo:active {
  transform: scale(var(--active-scale));
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px 0;
}

.nav-icon {
  color: white;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform var(--duration-normal) var(--ease-out), color var(--duration-normal) var(--ease-out);
}

.nav-icon:hover {
  transform: scale(var(--hover-scale-sm));
  color: var(--target-color);
}

.nav-icon:active {
  transform: scale(var(--active-scale));
}

.fade-enter-active, .fade-leave-active {
  transition: opacity var(--duration-fast) var(--ease-out);
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 路由激活样式：与悬停一致，使用主题色 */
.router-link-active {
  color: var(--target-color) !important;
}
</style>