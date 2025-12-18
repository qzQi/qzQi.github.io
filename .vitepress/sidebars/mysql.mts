import { DefaultTheme } from 'vitepress'

export const mysqlSidebar: DefaultTheme.Sidebar = [
  {
    text: 'MySQL 基础',
    collapsed: false,
    items: [
      { text: 'MySQL 介绍', link: '/posts/mysql/' }
    ]
  },
  {
    text: '核心概念',
    collapsed: false,
    items: [
      { text: '数据类型', link: '/posts/mysql/core/datatype' },
      { text: '字符集与排序', link: '/posts/mysql/core/charset' },
      { text: '索引', link: '/posts/mysql/core/index' },
      { text: '存储引擎', link: '/posts/mysql/core/engine' }
    ]
  },
  {
    text: 'SQL 优化',
    collapsed: false,
    items: [
      { text: '查询优化', link: '/posts/mysql/optimization/query' },
      { text: '执行计划', link: '/posts/mysql/optimization/explain' },
      { text: '慢查询日志', link: '/posts/mysql/optimization/slow-log' }
    ]
  },
  {
    text: '高可用',
    collapsed: false,
    items: [
      { text: '主从复制', link: '/posts/mysql/ha/replication' },
      { text: '读写分离', link: '/posts/mysql/ha/read-write' },
      { text: 'MHA', link: '/posts/mysql/ha/mha' },
      { text: '集群方案', link: '/posts/mysql/ha/cluster' }
    ]
  }
]
