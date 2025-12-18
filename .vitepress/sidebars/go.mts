import { DefaultTheme } from 'vitepress'

export const goSidebar: DefaultTheme.Sidebar = [
  {
    text: 'Go 基础',
    collapsed: false,
    items: [
      { text: 'Go 介绍', link: '/posts/go/' }
    ]
  },
  {
    text: '核心特性',
    collapsed: false,
    items: [
      { text: 'Goroutine', link: '/posts/go/concurrency/goroutine' },
      { text: 'Channel', link: '/posts/go/concurrency/channel' },
      { text: '同步机制', link: '/posts/go/concurrency/sync' }
    ]
  },
  {
    text: '标准库',
    collapsed: false,
    items: [
      { text: '网络编程', link: '/posts/go/stdlib/net' },
      { text: '文件操作', link: '/posts/go/stdlib/file' },
      { text: 'JSON 处理', link: '/posts/go/stdlib/json' }
    ]
  }
]
