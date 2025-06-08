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

        const list = files.map(file => {
            const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
            const { attributes } = fm(content);
            return {
                id: file.replace('.md', ''),
                path: `/posts/${file}`,
                title: attributes.title || '无标题',
                date: attributes.date || new Date().toISOString().split('T')[0],
                tags: Array.isArray(attributes.tags) ? attributes.tags : [],
                excerpt: attributes.excerpt || ''
            };
        });

        // 按日期降序排序
        list.sort((a, b) => new Date(b.date) - new Date(a.date));

        fs.writeFileSync(outputFile, JSON.stringify(list, null, 2));
        console.log(`成功生成文章列表，共 ${list.length} 篇文章`);
    } catch (error) {
        console.error('生成文章列表失败:', error);
        process.exit(1);
    }
}
//generateList();
export default generateList;
