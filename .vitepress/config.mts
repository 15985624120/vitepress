import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点级配置
  base:'/',
  lang: 'en-US',
  title: "小明前端开发文档", // 站点标题
  description: "站点描述", // 站点描述
  outDir: 'docs', // 输出到docs ，可以直接在 github pages 使用
  head: [
    ['link', { rel: 'icon', href: 'log.svg' }],// 页签logo配置
  ],
  lastUpdated: true,
  // 主题配置
  themeConfig: {
    aside:true, // 章节菜单控制
    outline:{level:1},// 大纲控制器
    // https://vitepress.dev/reference/default-theme-config
    logo: 'log.svg', // 站点标题logo
    search: {
      provider: 'local'
    },
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-examples' },
      { 
        text: '二级菜单', items: [
          { text: '二级菜单1', link: '/假路径' },
        ]
      }
    ],
    // 侧边栏菜单配置
    sidebar: [
      {
        text: '概要',
        collapsed:true, // 是否可以折叠
        items: [
          { text: 'md简要使用文档', link: '/markdown-examples' },
          { text: '运行时API示例', link: '/api-examples' },
          { 
            text: '团队成员',link: '/team', items:[
              {text: '二级菜单1', link: '/假路径',collapsed:true},
            ]
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
