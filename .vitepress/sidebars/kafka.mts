import { DefaultTheme } from 'vitepress'

export const kafkaSidebar: DefaultTheme.Sidebar = [
  {
    text: 'Kafka 基础',
    collapsed: false,
    items: [
      { text: 'Kafka 介绍', link: '/posts/kafka/' }
    ]
  },
  {
    text: '核心概念',
    collapsed: false,
    items: [
      { text: 'Topic 与 Partition', link: '/posts/kafka/concepts/topic' },
      { text: 'Producer', link: '/posts/kafka/concepts/producer' },
      { text: 'Consumer', link: '/posts/kafka/concepts/consumer' },
      { text: 'Broker', link: '/posts/kafka/concepts/broker' }
    ]
  },
  {
    text: '进阶话题',
    collapsed: false,
    items: [
      { text: '事务', link: '/posts/kafka/advanced/transaction' },
      { text: '流处理', link: '/posts/kafka/advanced/stream' },
      { text: '监控与调优', link: '/posts/kafka/advanced/monitoring' }
    ]
  }
]
