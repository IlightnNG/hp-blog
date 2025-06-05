import { execSync } from 'child_process'
import { existsSync, copyFileSync } from 'fs'
import generateList from './generate-list.js'

// 改进的参数解析逻辑
function parseArgs() {
    const args = process.argv.slice(2)
    let commitMsg = 'auto-commit'

    // 支持两种传参方式：
    // 1. npm run publish -- -m "message"
    // 2. npm run publish "message" (简写形式)
    if (args.includes('-m')) {
        const index = args.indexOf('-m')
        if (args[index + 1]) {
            commitMsg = args[index + 1]
        }
    } else if (args.length > 0) {
        // 如果没有 -m 参数，但提供了参数，则直接使用第一个参数作为消息
        commitMsg = args[0]
    }

    return commitMsg
}

async function main() {
    try {
        const commitMsg = parseArgs()
        console.log(`使用提交信息: "${commitMsg}"`)

        // 1. 生成文章列表
        await generateList()

        // 2. 构建项目
        execSync('npm run build', { stdio: 'inherit' })

        // 3. 复制404页面
        if (existsSync('dist/index.html')) {
            copyFileSync('dist/index.html', 'dist/404.html')
        } else {
            throw new Error('index.html not found in dist directory')
        }
        // 添加 .nojekyll，防止github处理md文件
        execSync('echo "">dist/.nojekyll', { stdio: 'inherit' })

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
}

main()