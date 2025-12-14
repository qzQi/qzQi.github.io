# My Blog - 个人技术博客

基于 VitePress 构建的个人技术博客，记录后端开发（C++/Go）学习笔记。

## 📦 项目结构

```
my-blog/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions 自动部署配置
├── .vitepress/
│   └── config.mts            # VitePress 配置文件
├── posts/
│   ├── backend/              # 后端笔记
│   │   ├── index.md
│   │   ├── cpp-advanced.md   # C++ 进阶
│   │   └── go-practice.md    # Go 实践
│   └── frontend/             # 前端学习
│       ├── index.md
│       └── html-css-basics.md
├── public/                   # 静态资源（图片等）
├── index.md                  # 首页
├── about.md                  # 关于页面
├── package.json              # 项目依赖
└── README.md                 # 本文件
```

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装 Node.js

如果系统中还没有安装 Node.js，请按照以下步骤安装：

#### Ubuntu/Debian

```bash
# 方法1: 使用 NodeSource 仓库（推荐）
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 方法2: 使用 apt 包管理器
sudo apt update
sudo apt install nodejs npm

# 验证安装
node --version
npm --version
```

#### 使用 nvm（推荐，适用于所有系统）

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 重新加载配置
source ~/.bashrc

# 安装最新 LTS 版本
nvm install --lts

# 使用该版本
nvm use --lts
```

### 本地开发

1. **安装依赖**

```bash
cd my-blog
npm install
```

2. **启动开发服务器**

```bash
npm run dev
```

开发服务器将在 `http://localhost:5173` 启动，支持热重载。

3. **构建静态文件**

```bash
npm run build
```

构建产物将输出到 `.vitepress/dist` 目录。

4. **本地预览构建结果**

```bash
npm run preview
```

## 📝 写作指南

### 创建新文章

1. 在 `posts/backend/` 或 `posts/frontend/` 目录下创建新的 `.md` 文件
2. 在文件开头添加文章信息：

```markdown
# 文章标题

::: info 文章信息
- 创建时间：2025-12-14
- 标签：C++、Go、最佳实践
:::

## 内容...
```

3. 在 `.vitepress/config.mts` 的 `sidebar` 配置中添加链接：

```typescript
sidebar: {
  '/posts/backend/': [
    {
      text: '后端开发',
      items: [
        { text: '新文章标题', link: '/posts/backend/new-article' }
      ]
    }
  ]
}
```

### Markdown 扩展功能

VitePress 支持丰富的 Markdown 扩展：

#### 信息提示框

```markdown
::: info
这是一个信息提示
:::

::: tip
这是一个技巧提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::
```

#### 代码高亮

支持行号和行高亮：

````markdown
```js{1,4-6}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

#### 代码组

```markdown
::: code-group

```js [config.js]
export default {
  name: 'config'
}
```

```ts [config.ts]
export default {
  name: 'config'
}
```

:::
```

## 🌐 部署到 GitHub Pages

### 步骤 1: 创建 GitHub 仓库

两种方式：

**方式 A: 用户/组织页面（推荐）**
- 创建名为 `<username>.github.io` 的仓库
- 访问地址：`https://<username>.github.io`

**方式 B: 项目页面**
- 创建任意名称的仓库（如 `my-blog`）
- 需要修改 `.vitepress/config.mts` 中的 `base: '/my-blog/'`
- 访问地址：`https://<username>.github.io/my-blog/`

### 步骤 2: 推送代码

```bash
cd my-blog

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: VitePress blog setup"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/<username>/<repository>.git

# 推送到 GitHub（如果你的默认分支是 main）
git branch -M main
git push -u origin main
```

### 步骤 3: 启用 GitHub Pages

1. 进入 GitHub 仓库的 **Settings** 页面
2. 点击左侧菜单的 **Pages**
3. 在 **Source** 下选择 **GitHub Actions**

### 步骤 4: 自动部署

推送代码后，GitHub Actions 会自动：
1. 安装依赖
2. 构建静态网站
3. 部署到 GitHub Pages

查看部署状态：
- 进入仓库的 **Actions** 标签页
- 查看工作流运行状态

部署成功后，访问你的博客：
- 用户页面: `https://<username>.github.io`
- 项目页面: `https://<username>.github.io/my-blog/`

## 🔄 日常使用流程

1. **写新文章**
   ```bash
   # 在 posts/ 目录下创建新的 .md 文件
   # 更新 .vitepress/config.mts 中的导航配置
   ```

2. **本地预览**
   ```bash
   npm run dev
   ```

3. **提交并推送**
   ```bash
   git add .
   git commit -m "Add new post: xxx"
   git push
   ```

4. **自动部署**
   - GitHub Actions 自动构建并部署
   - 几分钟后即可在线访问

## 🎨 自定义配置

### 修改博客标题和描述

编辑 `.vitepress/config.mts`：

```typescript
export default defineConfig({
  title: "你的博客名称",
  description: "你的博客描述",
  // ...
})
```

### 修改主题颜色

创建 `.vitepress/theme/index.ts` 和自定义 CSS。

### 添加评论系统

可以集成 Giscus、Gitalk 等评论系统。

## 📚 后续迁移到云服务器

由于是静态网站，迁移非常简单：

### 方式 1: 使用 Nginx

```bash
# 构建项目
npm run build

# 将 .vitepress/dist 目录复制到服务器
scp -r .vitepress/dist/* user@server:/var/www/html/

# Nginx 配置
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 方式 2: 继续使用 GitHub Pages

服务器只用于运行后端 API，前端继续托管在 GitHub Pages。

### 方式 3: 使用 CDN

将静态文件上传到云存储（阿里云 OSS、腾讯云 COS）+ CDN 加速。

## 🛠️ 技术栈

- **VitePress**: 基于 Vue 3 的静态站点生成器
- **Markdown**: 文章编写格式
- **GitHub Actions**: CI/CD 自动部署
- **GitHub Pages**: 免费静态网站托管

## 📖 学习资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Markdown 语法指南](https://markdown.com.cn/)
- [GitHub Actions 文档](https://docs.github.com/cn/actions)

## 🤝 参考项目

- [VitePress 官方示例](https://github.com/vuejs/vitepress/tree/main/docs)
- [Vue.js 文档](https://vuejs.org/) - 也是用 VitePress 构建的

## 📄 许可

MIT License

---

**开始你的博客之旅吧！** ✨
