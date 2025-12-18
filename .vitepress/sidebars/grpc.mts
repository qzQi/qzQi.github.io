import { DefaultTheme } from 'vitepress'

export const grpcSidebar: DefaultTheme.Sidebar = [
  {
    text: 'gRPC 基础',
    collapsed: false,
    items: [
      { text: 'gRPC 介绍', link: '/posts/grpc/' }
    ]
  },
  {
    text: '核心特性',
    collapsed: false,
    items: [
      { text: 'Protocol Buffers', link: '/posts/grpc/core/protobuf' },
      { text: '客户端开发', link: '/posts/grpc/core/client' },
      { text: '服务器开发', link: '/posts/grpc/core/server' },
      { text: '通信模式', link: '/posts/grpc/core/communication' }
    ]
  },
  {
    text: '进阶应用',
    collapsed: false,
    items: [
      { text: '拦截器', link: '/posts/grpc/advanced/interceptor' },
      { text: '负载均衡', link: '/posts/grpc/advanced/load-balance' },
      { text: '最佳实践', link: '/posts/grpc/advanced/best-practice' }
    ]
  }
]
