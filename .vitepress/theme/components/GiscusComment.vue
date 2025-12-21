<script setup lang="ts">
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { page } = useData()

// 仅在 posts/ 下的文档页面显示评论
const isPostPage = computed(() => {
  const path = page.value.relativePath || ''
  return path.startsWith('posts/')
})

// TODO: 将下面这些配置替换为你在 https://giscus.app 上生成的实际值
// repo: 仓库 "owner/repo" 形式，例如 "qzQi/qzQi.github.io"
// repoId, category, categoryId: 在 giscus.app 上配置后复制
// mapping: 建议使用 "pathname"，适合静态博客
</script>

<template>
  <ClientOnly>
    <div v-if="isPostPage" class="giscus-wrapper">
      <Giscus
        id="comments"
        host="https://giscus.app"
        :repo="'qzQi/qzQi.github.io'"
        repo-id="R_kgDOQoVRPQ"
        category="General"
        category-id="DIC_kwDOQoVRPc4C0EKX"
        mapping="pathname"
        strict="0"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="bottom"
        theme="light"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  </ClientOnly>
</template>

<style scoped>
.giscus-wrapper {
  margin-top: 2rem;
}
</style>

