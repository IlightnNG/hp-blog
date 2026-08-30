# HP's Blog

https://ilightnng.github.io/hp-blog/

## 本地开发

```bash
npm install      # 安装依赖
npm run dev      # 本地开发
npm run list     # 扫描 public/posts 生成 list.json
npm run build    # 构建到 dist/（自动生成 404.html）
```

## 发布上线

```bash
npm run publish              # 全流程：生成列表 → 构建 → 推送 main → 部署 gh-pages
npm run publish -m "消息"     # 指定提交信息
npm run publish -- --deploy-only   # 仅部署 gh-pages（用现有 dist/）
npm run publish -- --no-deploy     # 只构建并推送 main
npm run deploy                # 仅部署 gh-pages（等价 --deploy-only）
```

说明：
- gh-pages 部署使用 **git worktree 临时目录**，不会切换或清空本地工作区
- 无变更时自动跳过 commit/push，不会因 "nothing to commit" 中断
- 免密码部署：设置环境变量 `GITHUB_TOKEN`（CI / 自动上线推荐）
  - 复制 `.env.example` 为 `.env` 填入 token 即可（`.env` 已被 git 忽略，不会泄露）
  - 或 `git config --global credential.helper manager` 登录一次永久免密
- 任一步失败都会汇总报告并以非 0 退出码结束
- 回归测试：`node scripts/_test-deploy.mjs`（在临时仓库中模拟部署，不碰真实仓库）
