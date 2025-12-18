import { DefaultTheme } from 'vitepress'

export const redisSidebar: DefaultTheme.Sidebar = [
  {
    text: 'Redis 基础',
    collapsed: false,
    items: [
      { text: 'Redis 介绍', link: '/posts/redis/' }
    ]
  },
  {
    text: '数据结构',
    collapsed: false,
    items: [
      { text: 'String', link: '/posts/redis/datatype/string' },
      { text: 'List', link: '/posts/redis/datatype/list' },
      { text: 'Set', link: '/posts/redis/datatype/set' },
      { text: 'Hash', link: '/posts/redis/datatype/hash' },
      { text: 'ZSet', link: '/posts/redis/datatype/zset' }
    ]
  },
  {
    text: '高级话题',
    collapsed: false,
    items: [
      { text: '持久化', link: '/posts/redis/advanced/persistence' },
      { text: '主从复制', link: '/posts/redis/advanced/replication' },
      { text: '集群', link: '/posts/redis/advanced/cluster' },
      { text: '性能优化', link: '/posts/redis/advanced/performance' }
    ]
  }
]
