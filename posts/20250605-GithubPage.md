---
title: "前端项目部署到 GitHub Pages"
date: "2025-06-05"
tags: ["Github", "Vue"]
excerpt: "在前端开发过程中，项目部署是一个重要环节。本文将详细介绍如何将基于 Vite 创建的前端项目部署到 GitHub Pages 上，帮助你轻松实现项目的线上展示。"
---

## GitHub Pages 部署基础概念

GitHub Pages 是 GitHub 提供的静态页面托管服务，非常适合托管个人、组织或项目的静态页面。它具有以下特点：

- 免费托管
- 基于 Git 版本控制
- 支持自定义域名
- 自动构建部署

---
## 简单部署方式（非 GitHub Actions）

### 1. 创建并准备项目

1. 使用 Vite 创建项目

```
npm create vite@latest my-vue-project --template vue
```

2. 进入项目目录并安装依赖
```
cd my-vue-project
npm install
```

3. 编写好项目逻辑后，进行打包。得到打包文件dist
```
npm run build
```

### 2. 使用 gh-pages 分支部署

整体思路是，先将整个网站项目上传到新的Github项目中，再将打包后生成的dist文件夹同步到新的gh-pages分支中。通过设置，Github会基于该分支部署一个个人网站。理论上一个用户只能拥有一个该类静态网站，网址是https://username.github.io/project-name/

下面的方法会先上传网站项目源代码，即公开所有源码，如果不想全部公开，可以仅将dist文件上传。仅公开dist。但注意，**该Github项目必须是public公开的**。

1. 修改项目中的.gitignore，移除 dist 文件夹，即允许 dist 上传
2. 在Github中新建**public**项目，并上传整个网站项目
3. 新建一条 gh-pages 分支
4. 将main分支中的dist文件夹中内容同步到gh-pages分支中
```
git subtree push --prefix dist origin gh-pages
```
5. 在 settings -> pages 的Source中选择Deploy from a branch，然后在Branch中选择gh-pages的根目录作为网页代码根目录。可能需要等一会，应该可以看到上方有了新的网页网址，点击即可访问。注意：从更新代码到网页改变需要几分钟的等待时间。

6. 点击网址后大概率是无法访问的，由于我们部署的网站的默认url为：https://username.github.io/project-name/ ，在这种情况之下，我们发现，vite 项目中的静态资源，默认访问路径是从根目录开始访问的 /assets/...。这可以通过查看dist/index.html文件看到


```
<link rel="stylesheet" crossorigin href="/assets/index-DgiQsQqT.css">
```
7. 于是我们要在打包时，把静态资源的绝对路径，修改为相对路径。继续修改 vite.config.js,添加 **base: './'** ，将根目录改为当前目录。
```
export default defineConfig({
  plugins: [
    VineVitePlugin(),
    tailwindcss()
  ],
  build: {
    outDir: 'docs'
  },
+ base: './'
})
```

此时如果你的页面本来就只有一个页面或者比较简单，这时应该就可以成功访问。但如果使用到了路由，那么你就会发现跳转路由和刷新出了各种问题，造成无法访问。下面我会说明如何处理。

### 3. 调整路由路径

该类路由问题是因为我使用了**history路由**。客户端路由与服务端路由是不同的。

由于我们部署的网站的默认url为：https://username.github.io/project-name/ ，而一般本地调试的url为：http://localhost:XXXX/ ，我们会发现，如果要适配github网站url，不产生定向错误，需要手动加上我们的项目名。

##### 1. 解决页面跳转问题，修改 index.js，添加 base 配置，并在每个路由的path前都加上base
```
const base = '/project-name';
const routes = [
    { path: base, name: 'Home', component: HomeHome },
    { path: base + '/posts', name: 'Posts', component: PostsView },
];
```

##### 2. 解决刷新问题，当前情况刷新会导致404，有个简单的方法，我们可以把打包文件中的 index.html复制一份，重命名为 404.html 就可以了。然后再将dist文件夹上传。
```
cp docs/index.html docs/404.html
```

最后我们可以写一个脚本文件，将cp，同步分支等命令放在一起，以下是最基础的脚本。
```
npm run build
cp dist/index.html dist/404.html
git add .
git commit
git push origin main
git subtree push --prefix dist origin gh-pages

```