<template>
    <div class="settings-container">
      <div class="blog-card" :class="{ 'glass-effect': settingsStore.settings.isGlassMode }">
        <h1>Blog Settings</h1>
        
        <div class="settings-section">
          <h2>Nothing here : )</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useSettingsStore } from '@/stores/settings'
  const settingsStore = useSettingsStore()
  </script>
  
  <style scoped>
  .settings-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 40px 20px;
  }
  
  .style-switcher {
    margin: 20px 0;
  }
  
  .style-toggle {
    padding: 12px 24px;
    border: 2px solid var(--accent-color);
    background: transparent;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 6px;
  }
  
  .style-toggle.active {
    background-color: var(--accent-color);
    color: white;
  }
  
  .setting-item {
    margin: 20px 0;
  }
  
  .setting-item label {
    display: block;
    margin-bottom: 8px;
    color: var(--text-primary);
  }
  
  .setting-item input[type="range"] {
    width: 100%;
    accent-color: var(--accent-color);
  }
  
  .setting-item input[type="color"] {
    width: 50px;
    height: 50px;
    border: 2px solid var(--border-primary);
    border-radius: 8px;
    cursor: pointer;
  }
  </style>