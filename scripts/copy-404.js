// 将 dist/index.html 复制为 dist/404.html
// GitHub Pages 用 404.html 做 SPA 路由兜底；
// vite build 会清空 dist，因此每次构建后都必须重新复制
import { copyFileSync, existsSync } from 'fs'

if (existsSync('dist/index.html')) {
    copyFileSync('dist/index.html', 'dist/404.html')
    console.log('✅ 404.html 已生成')
} else {
    console.error('❌ dist/index.html 不存在，无法生成 404.html')
    process.exit(1)
}
