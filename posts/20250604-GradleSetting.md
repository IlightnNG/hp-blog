---
title: "Gradle下载慢问题简易解决方法"
date: "2025-06-04"
tags: ["Gradle"]
excerpt: "单次解决Gradle下载慢问题，但每次新项目初始化Gradle时都要重新修改"
---

## 问题出现背景

Gradle项目初始化，与Gradle服务器连接超时。

## 解决方法

在项目的 *gradle/wrapper/gradle-wrapper.properties* 中将下载地址改为国内镜像源，非常的简单。

以8.0为例：

```Python
distributionUrl=https://mirrors.cloud.tencent.com/gradle/gradle-8.0-bin.zip
```

注意：只是单次解决Gradle问题，所以每次新项目初始化Gradle时都要重新修改。
