import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的技术博客",
  description: "后端工程师的技术笔记 - C++ / Go",
  
  // 部署到 GitHub Pages 时的 base 路径
  // 如果你的仓库名是 username.github.io，则保持为 '/'
  // 如果是其他仓库名如 my-blog，则设置为 '/my-blog/'
  base: '/',
  
  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '后端笔记', link: '/posts/backend/' },
      { text: '未分类', link: '/posts/cookies/' },
      { text: '关于', link: '/about' }
    ],

    // 侧边栏
    sidebar: {
      '/posts/backend/': [
        {
          text: '后端开发',
          items: [
            { text: '开发语言', link: '/posts/backend/language/' },
            { text: '中间件', link: '/posts/backend/middleware/' },
            { text: '工具', link: '/posts/backend/build-tool/' }
          ]
        }
      ],
      '/posts/cookies/': [
        {
          text: '杂项',
          items: [
            { text: 'Cookies 笔记', link: '/posts/cookies/' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/qzQi' }
    ],

    // 页脚
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2025-present'
    },

    // 搜索
    search: {
      provider: 'local'
    },

    // 文档页脚
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 大纲配置
    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true, // 代码块显示行号
    image: {
      lazyLoading: true
    }
  },

  // 站点地图
  sitemap: {
    hostname: 'https://qzQi.github.io'
  }
})
