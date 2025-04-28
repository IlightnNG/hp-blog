@echo off
setlocal

:: 默认 commit 消息
set commit_msg=auto-commit

:: 检查是否有 -m 参数
if "%1" == "-m" (
    if "%2" == "" (
        echo Error: -m requires a commit message.
        exit /b 1
    )
    set commit_msg=%2
)

:: 执行 Git 操作
git add .
git commit -m "%commit_msg%"
git push origin master

:: 检查 dist/ 是否存在并部署到 gh-pages
if exist "dist\" (
    git subtree push --prefix dist origin gh-pages
) else (
    echo Error: "dist\" directory not found. Run "npm run build" first.
    exit /b 1
)