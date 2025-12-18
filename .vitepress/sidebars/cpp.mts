import { DefaultTheme } from 'vitepress'

export const cppSidebar: DefaultTheme.Sidebar = [
  {
    text: 'C++ 基础',
    collapsed: false,
    items: [
      { text: 'C++ 介绍', link: '/posts/cpp/' }
    ]
  },
  {
    text: 'STL 容器',
    collapsed: false,
    items: [
      { text: 'vector', link: '/posts/cpp/stl/vector' },
      { text: 'map', link: '/posts/cpp/stl/map' },
      { text: 'set', link: '/posts/cpp/stl/set' }
    ]
  },
  {
    text: '内存管理',
    collapsed: false,
    items: [
      { text: '内存模型', link: '/posts/cpp/memory/model' },
      { text: '指针与引用', link: '/posts/cpp/memory/pointer' },
      { text: '智能指针', link: '/posts/cpp/memory/smart-ptr' }
    ]
  }
]
