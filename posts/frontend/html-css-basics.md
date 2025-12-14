# HTML & CSS 基础

::: info 文章信息
- 创建时间：2025-12-14
- 标签：HTML、CSS、前端基础
:::

## 简介

作为后端工程师学习前端基础知识的笔记。

## HTML 基础结构

### 标准 HTML 文档

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>网站标题</h1>
        <nav>
            <ul>
                <li><a href="#home">首页</a></li>
                <li><a href="#about">关于</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <h2>文章标题</h2>
            <p>文章内容...</p>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2025 版权信息</p>
    </footer>
</body>
</html>
```

### 常用 HTML 标签

```html
<!-- 文本标签 -->
<h1>一级标题</h1>
<p>段落文本</p>
<strong>粗体</strong>
<em>斜体</em>

<!-- 列表 -->
<ul>
    <li>无序列表项</li>
</ul>

<ol>
    <li>有序列表项</li>
</ol>

<!-- 链接和图片 -->
<a href="https://example.com">链接文本</a>
<img src="image.jpg" alt="图片描述">

<!-- 表单 -->
<form action="/submit" method="post">
    <input type="text" name="username" placeholder="用户名">
    <input type="password" name="password" placeholder="密码">
    <button type="submit">提交</button>
</form>
```

## CSS 基础

### CSS 选择器

```css
/* 元素选择器 */
p {
    color: #333;
}

/* 类选择器 */
.container {
    width: 100%;
    max-width: 1200px;
}

/* ID 选择器 */
#header {
    background-color: #f0f0f0;
}

/* 属性选择器 */
input[type="text"] {
    border: 1px solid #ccc;
}

/* 伪类 */
a:hover {
    color: blue;
}
```

### 盒模型

```css
.box {
    /* 内容宽高 */
    width: 200px;
    height: 100px;
    
    /* 内边距 */
    padding: 10px;
    
    /* 边框 */
    border: 2px solid #000;
    
    /* 外边距 */
    margin: 20px;
    
    /* 盒模型计算方式 */
    box-sizing: border-box;
}
```

### Flexbox 布局

```css
.container {
    display: flex;
    justify-content: space-between;  /* 水平对齐 */
    align-items: center;             /* 垂直对齐 */
    flex-wrap: wrap;                 /* 换行 */
}

.item {
    flex: 1;        /* 弹性增长 */
    margin: 10px;
}
```

### Grid 布局

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3列等宽 */
    gap: 20px;                               /* 间距 */
}

.grid-item {
    background: #f0f0f0;
    padding: 20px;
}
```

## 响应式设计

### 媒体查询

```css
/* 移动端优先 */
.container {
    width: 100%;
    padding: 10px;
}

/* 平板 */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
    }
}

/* 桌面端 */
@media (min-width: 1024px) {
    .container {
        width: 1000px;
    }
}
```

## 实用技巧

### 居中对齐

```css
/* Flexbox 居中 */
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Grid 居中 */
.grid-center {
    display: grid;
    place-items: center;
}

/* 传统方法 */
.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

### 常用样式

```css
/* 清除浮动 */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

/* 文本溢出省略 */
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* 图片响应式 */
img {
    max-width: 100%;
    height: auto;
}
```

## 学习资源

- [MDN Web Docs](https://developer.mozilla.org/zh-CN/)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) - 浏览器兼容性查询

## 后端工程师的前端视角

作为后端工程师学习前端：
- HTML 类似于数据结构定义
- CSS 类似于配置文件
- 响应式设计类似于根据环境变量调整行为
- Flexbox/Grid 类似于布局算法

---

*持续学习中...*
