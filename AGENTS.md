# AGENTS.md — 本项目对代码 Agent 的工作约定

本文件用于约束在本仓库中工作的代码 Agent（如 DeepSeek Harness / Cursor 等）的行为，请始终遵守。

## 发布与提交规则（重要）

1. 每次执行 `npm run publish` 上线时，**必须**通过 `-m "<摘要>"` 提供简短的 **英文** commit 摘要，**禁止**出现 `auto-commit` 之类的默认占位消息。
2. 摘要风格：一行、≤ 72 字符、动词开头（`feat:` / `fix:` / `chore:` / `docs:` / `refactor:` / `perf:` 等）。
3. 摘要必须概括本次实际改动内容。注意：通过 npm 传参时**必须加 `--` 分隔符**（否则 npm 会拦截 `-m`），例如：
   - `npm run publish -- -m "feat: add 2026 anime entries"`
   - `npm run publish -- -m "fix: background theme color persistence"`
   - `npm run publish -- -m "chore: enforce commit message rules"`
   （直接运行 `node scripts/publish.js -m "..."` 则不需要 `--`）
4. gh-pages 部署分支的提交（`deploy: <timestamp>`）由 `scripts/publish.js` 自动生成，**无需**手动指定。
5. 若本次没有需要上线的内容变更，不要强行发布（脚本会自动跳过无变更的 commit/push）。

## 数据维护约定

- 文章源数据：`public/posts/*.md`（front matter + markdown），改完后运行 `npm run list` 重新生成 `list.json`。
- 媒体源数据：`public/medias/*.yaml`（按年份组织，**不要**直接编辑 `list.json`），改完后运行 `npm run medias` 重新生成。
- 两处 `list.json` 都是脚本产物，禁止手改。
- 新增文章/媒体后，通过一次 `publish` 一并上线。

## 其他

- 仓库已有 `scripts/publish.js`（发布工作流，含 gh-pages worktree 隔离部署）、`scripts/_test-deploy.mjs`（发布流程回归测试）。
- 修改发布相关代码后，先运行 `node scripts/_test-deploy.mjs` 验证再发布。
