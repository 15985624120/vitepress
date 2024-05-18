---
outline: deep
---

# 运行时API示例

本页演示了VitePress提供的一些运行时API的用法。

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:
:::info 大致翻译一下就是
主`useData（）`neneneba API可用于访问当前页面的网站、主题和页面数据。它在“.md”和“.vue”文件中都有效：
:::
**输入代码案例**
```md
<!-- 这段代码为运行时代码，不会被解析到页面上 -->
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```
<!-- 这段代码为运行时代码 -->
<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 效果

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## 更多

关于更多的运行时Api [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
