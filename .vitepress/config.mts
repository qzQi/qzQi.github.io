import { defineConfig } from 'vitepress'
import { cppSidebar } from './sidebars/cpp.mts'
import { goSidebar } from './sidebars/go.mts'
import { mysqlSidebar } from './sidebars/mysql.mts'
import { mongodbSidebar } from './sidebars/mongodb.mts'
import { redisSidebar } from './sidebars/redis.mts'
import { kafkaSidebar } from './sidebars/kafka.mts'
import { grpcSidebar } from './sidebars/grpc.mts'

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
      {
        text: '后端',
        items: [
          {
            text: '开发语言',
            link: '#',
            items: [
              { text: 'C++', link: '/posts/cpp/' },
              { text: 'Go', link: '/posts/go/' }
            ]
          },
          { text: '', divider: true },
          {
            text: '数据库相关',
            link: '#',
            items: [
              { text: 'MySQL', link: '/posts/mysql/' },
              { text: 'MongoDB', link: '/posts/mongodb/' }
            ]
          },
          { text: '', divider: true },
          {
            text: '中间件相关',
            link: '#',
            items: [
              { text: 'Redis', link: '/posts/redis/' },
              { text: 'Kafka', link: '/posts/kafka/' }
            ]
          },
          { text: '', divider: true },
          {
            link: '#',
            text: 'RPC 相关',
            items: [
              { text: 'gRPC', link: '/posts/grpc/' },
              { text: 'Sofa-PBRPC', link: '/posts/sofa-pbrpc/' }
            ]
          }
        ]
      },
      { text: '关于', link: '/about' }
    ],

    // 侧边栏
    sidebar: {
      '/posts/cpp/': cppSidebar,
      '/posts/go/': goSidebar,
      '/posts/mysql/': mysqlSidebar,
      '/posts/mongodb/': mongodbSidebar,
      '/posts/redis/': redisSidebar,
      '/posts/kafka/': kafkaSidebar,
      '/posts/grpc/': grpcSidebar
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
