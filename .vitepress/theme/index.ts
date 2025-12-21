import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import GiscusComment from './components/GiscusComment.vue'
import { h } from 'vue'

const theme: Theme = {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(GiscusComment)
    })
  }
}

export default theme
