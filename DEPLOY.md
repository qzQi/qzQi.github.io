# 快速部署指南

这是一个简化版的部署步骤说明，帮助你快速将博客部署到 GitHub Pages。

## 🎯 目标

将博客部署到 `https://<你的GitHub用户名>.github.io`，让全世界都能访问。

## 📋 前置准备

- [ ] GitHub 账号
- [ ] Git 已安装
- [ ] Node.js 已安装（18.0 或更高）

## 🚀 5 步部署流程

### Step 1: 安装 Node.js

**检查是否已安装：**
```bash
node --version
npm --version
```

**如果未安装（Ubuntu/Debian）：**
```bash
# 推荐方法：使用 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts

# 或者直接安装
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: 本地测试

```bash
# 进入项目目录
cd my-blog

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 `http://localhost:5173` 查看效果，确认无误后按 `Ctrl+C` 停止。

### Step 3: 创建 GitHub 仓库

1. 访问 https://github.com/new
2. **仓库名必须是**: `<你的用户名>.github.io`
   - 例如：如果你的用户名是 `zhangsan`，仓库名就是 `zhangsan.github.io`
3. 设置为 **Public**（公开）
4. **不要**勾选 "Add a README file"
5. 点击 **Create repository**

### Step 4: 推送代码

```bash
# 在 my-blog 目录下执行

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 添加远程仓库（替换成你的用户名）
git remote add origin https://github.com/<你的用户名>/<你的用户名>.github.io.git

# 推送（如果提示需要设置分支名）
git branch -M main
git push -u origin main
```

如果推送时需要登录，使用 GitHub Personal Access Token。

### Step 5: 启用 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 左侧菜单点击 **Pages**
4. 在 **Build and deployment** 下：
   - Source 选择：**GitHub Actions**
5. 保存后，GitHub Actions 会自动开始部署

### ✅ 验证部署

1. 进入仓库的 **Actions** 标签
2. 等待工作流运行完成（显示绿色✓）
3. 访问：`https://<你的用户名>.github.io`

🎉 恭喜！你的博客已经上线了！

## 📝 日常更新流程

以后每次更新文章，只需要：

```bash
# 1. 编辑或添加 Markdown 文件
# 2. 提交并推送
git add .
git commit -m "Add new post: 文章标题"
git push

# 3. GitHub Actions 会自动部署，无需其他操作
```

## ⚙️ 重要配置说明

### 如果仓库名不是 `<用户名>.github.io`

假设你的仓库名是 `my-blog`，需要修改 `.vitepress/config.mts`：

```typescript
export default defineConfig({
  base: '/my-blog/',  // 改成你的仓库名
  // ...
})
```

访问地址会变成：`https://<用户名>.github.io/my-blog/`

### 修改个人信息

编辑以下文件：

1. **`.vitepress/config.mts`** - 修改博客标题、描述、GitHub 链接
2. **`about.md`** - 修改个人简介
3. **`index.md`** - 修改首页内容

## 🆘 常见问题

### Q1: 推送时提示 "Permission denied"

**解决方法：** 创建 GitHub Personal Access Token

1. GitHub 设置 → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token，勾选 `repo` 权限
3. 复制 token，推送时使用 token 作为密码

### Q2: Actions 运行失败

1. 检查 Actions 标签页的错误日志
2. 确认 `.github/workflows/deploy.yml` 文件存在
3. 确认 `package.json` 中的依赖配置正确

### Q3: 页面显示 404

1. 确认 GitHub Pages 的 Source 设置为 **GitHub Actions**
2. 确认 Actions 工作流运行成功
3. 等待几分钟，GitHub Pages 有延迟

### Q4: 样式丢失或页面空白

- 如果仓库名不是 `<用户名>.github.io`，确认 `config.mts` 中的 `base` 配置正确

## 📚 下一步

- [ ] 修改个人信息
- [ ] 写第一篇真正的博客
- [ ] 自定义主题颜色
- [ ] 添加评论系统（可选）
- [ ] 绑定自定义域名（可选）

## 🎓 学习建议

作为后端工程师学习前端：

1. **先用起来**：不要纠结前端细节，先把博客跑起来
2. **边写边学**：在写博客的过程中学习 Markdown 和基础配置
3. **按需学习**：需要什么功能再去学相关知识
4. **参考示例**：多看 VitePress 官方文档的例子

## 🔗 有用的链接

- [VitePress 文档](https://vitepress.dev/)
- [Markdown 教程](https://markdown.com.cn/)
- [GitHub Pages 文档](https://docs.github.com/cn/pages)

---

**祝你的博客之旅顺利！** 🚀
