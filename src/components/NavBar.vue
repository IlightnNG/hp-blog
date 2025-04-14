<template>
  <div class="nav-container">
    <div 
      class="nav-logo"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      :class="{ 'expanded': isHovered }"
      @click.stop
    >
      <div class="logo" @click="settingsStore.toggleShowingBg">B</div>
      
      <transition name="fade">
        <div v-if="isHovered" class="nav-items" >
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="nav-icon"
            :title="item.title"
            @click="settingsStore.resetShowingBg(item.title)"
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
import { Home, Mail, User, Settings, FileText } from 'lucide-vue-next';
import { useSettingsStore } from '@/stores/settings'
const settingsStore = useSettingsStore()

const isHovered = ref(false);

const base = '/hp-blog';

const navItems = [
  { path: base, title: 'Home', icon: Home },
  { path: base + '/about', title: 'About', icon: User },
  { path: base + '/posts', title: 'Posts', icon: FileText },
  { path: base + '/contact', title: 'Contact', icon: Mail },
  { path: base + '/settings', title: 'Settings', icon: Settings }
];
</script>

<style scoped>
.nav-container {
  position: fixed;
  top: 20px;
  left: 20px;
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
  transition: all 0.3s cubic-bezier(.65,.43,.31,1.23);
  overflow: hidden;
  box-shadow:  2px 2px 1px #dedede,
             -2px -2px 1px #dedede;
}

.nav-logo.expanded {
  backdrop-filter: blur(10px);
  height: 300px;
  border-radius: 0px;
  box-shadow:  5px 5px 1px #dedede,
             -5px -5px 1px #dedede;
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
  transition: all 0.2s ease;
}

.nav-icon:hover {
  transform: scale(1.2);
  color: #ffbe0b;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 路由激活样式 */
.router-link-active {
  color: #ffbe0b !important;
}
</style>