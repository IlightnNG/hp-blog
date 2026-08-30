import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fm from 'front-matter';
console.log("Start to generate list.json")
// 获取当前模块的路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDir = path.join(__dirname, '../public/posts');
const outputFile = path.join(postsDir, 'list.json');
async function generateList() {
    try {

        // 读取posts目录下的所有.md文件
        const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

        const list = [];
        for (const file of files) {
            const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
            const { attributes } = fm(content);
            // 跳过缺少 front matter 的草稿文件（如未整理的笔记），避免生成"无标题"条目上线
            if (!attributes || (!attributes.title && !attributes.date)) {
                console.warn(`⚠️  跳过 ${file}：缺少 front matter（title/date），整理完成后运行 npm run list 即可收录`);
                continue;
            }
            list.push({
                id: file.replace('.md', ''),
                path: `/posts/${file}`,
                title: attributes.title || '无标题',
                date: attributes.date || new Date().toISOString().split('T')[0],
                tags: Array.isArray(attributes.tags) ? attributes.tags : [],
                excerpt: attributes.excerpt || ''
            });
        }

        // 按日期降序排序
        list.sort((a, b) => new Date(b.date) - new Date(a.date));

        fs.writeFileSync(outputFile, JSON.stringify(list, null, 2));
        console.log(`成功生成文章列表，共 ${list.length} 篇文章`);
    } catch (error) {
        console.error('生成文章列表失败:', error);
        process.exit(1);
    }
}

export default generateList;
