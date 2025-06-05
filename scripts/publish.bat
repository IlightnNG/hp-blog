@echo off
setlocal enabledelayedexpansion

:: 参数解析
set commit_msg=auto-commit
if "%1"=="-m" if not "%2"=="" (
    set commit_msg=%2
    shift
    shift
)

:: 1. 生成列表
echo [1/4] Generating list...
node ./scripts/generate-list.js
if errorlevel 1 (
    echo Error: Failed to generate list
    exit /b 1
)

:: 2. 构建项目
echo [2/4] Building project...
npm run build
if errorlevel 1 (
    echo Error: Build failed
    exit /b 1
)

:: 3. Git 提交
echo [3/4] Committing changes...
git add .
git commit -m "!commit_msg!"
if errorlevel 1 (
    echo Error: Git commit failed
    exit /b 1
)
git push origin main

:: 4. 部署到 gh-pages
echo [4/4] Deploying to gh-pages...
if not exist "dist\" (
    echo Error: dist\ directory missing
    exit /b 1
)
git subtree push --prefix dist origin gh-pages

echo Done!