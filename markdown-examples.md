# 章节概要

本文主要描述md文档的大致使用方法

## 二级标题会解析到右则带单

二级菜单作为章节标题
# Markdown扩展示例

本页展示了VitePress提供的一些内置降价扩展

## 语法突出显示

VitePress提供语法高亮显示，由 by [Shiki](https://github.com/shikijs/shiki), 具有线条突出显示等附加功能：

**输入案例**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出效果**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**输入案例**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**效果**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## 更多

查看文档 [full list of markdown extensions](https://vitepress.dev/guide/markdown).
