import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base: '/hp-blog/',
  // 配置静态资源处理
  assetsInclude: ['**/*.md'],
  server: {
    fs: {
      strict: false // 允许访问项目根目录外的文件（如果需要）
    }
  }
})
