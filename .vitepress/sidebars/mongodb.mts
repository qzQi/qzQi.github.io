import { DefaultTheme } from 'vitepress'

export const mongodbSidebar: DefaultTheme.Sidebar = [
  {
    text: 'MongoDB 基础',
    collapsed: false,
    items: [
      { text: 'MongoDB 介绍', link: '/posts/mongodb/' }
    ]
  },
  {
    text: '核心概念',
    collapsed: false,
    items: [
      { text: '文档模型', link: '/posts/mongodb/core/document' },
      { text: '集合与数据库', link: '/posts/mongodb/core/collection' },
      { text: 'BSON 格式', link: '/posts/mongodb/core/bson' }
    ]
  },
  {
    text: '查询与操作',
    collapsed: false,
    items: [
      { text: 'CRUD 操作', link: '/posts/mongodb/operations/crud' },
      { text: '聚合管道', link: '/posts/mongodb/operations/aggregation' },
      { text: '索引', link: '/posts/mongodb/operations/index' },
      { text: '事务', link: '/posts/mongodb/operations/transaction' }
    ]
  },
  {
    text: '高级应用',
    collapsed: false,
    items: [
      { text: '副本集', link: '/posts/mongodb/advanced/replication' },
      { text: '分片集群', link: '/posts/mongodb/advanced/sharding' },
      { text: '备份与恢复', link: '/posts/mongodb/advanced/backup' }
    ]
  }
]
