import { execSync } from 'child_process'
import { existsSync, copyFileSync } from 'fs' // 添加 copyFileSync
import generateList from './generate-list.js'

const args = process.argv.slice(2)
const msgIndex = args.indexOf('-m')
const commitMsg = msgIndex !== -1 ? args[msgIndex + 1] : 'auto-commit'

try {
    // 1. 生成文章列表
    await generateList()

    // 2. 构建项目
    execSync('npm run build', { stdio: 'inherit' })

    // 3. 使用 Node.js 原生方法复制文件（跨平台）
    if (existsSync('dist/index.html')) {
        copyFileSync('dist/index.html', 'dist/404.html')
    } else {
        throw new Error('index.html not found in dist directory')
    }

    // 4. Git 操作
    execSync('git add .', { stdio: 'inherit' })
    execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit' })
    execSync('git push origin main', { stdio: 'inherit' })

    // 5. 部署到 gh-pages
    if (existsSync('dist')) {
        execSync('git subtree push --prefix dist origin gh-pages', { stdio: 'inherit' })
    } else {
        throw new Error('dist directory not found')
    }

    console.log('✅ 发布成功!')
} catch (error) {
    console.error('❌ 发布失败:', error.message)
    process.exit(1)
}