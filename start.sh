#!/bin/bash

# 博客项目快速启动脚本

echo "🚀 My Blog 快速启动脚本"
echo "===================="
echo ""

# 检查 Node.js 是否安装
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未检测到 Node.js"
    echo ""
    echo "请先安装 Node.js (推荐使用 nvm):"
    echo ""
    echo "  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    echo "  source ~/.bashrc"
    echo "  nvm install --lts"
    echo "  nvm use --lts"
    echo ""
    exit 1
fi

echo "✅ Node.js 版本: $(node --version)"
echo "✅ npm 版本: $(npm --version)"
echo ""

# 检查依赖是否已安装
if [ ! -d "node_modules" ]; then
    echo "📦 正在安装依赖..."
    npm install
    echo ""
fi

echo "🎯 选择操作:"
echo "  1) 启动开发服务器 (npm run dev)"
echo "  2) 构建生产版本 (npm run build)"
echo "  3) 预览构建结果 (npm run preview)"
echo ""
read -p "请输入选项 (1-3) [默认: 1]: " choice
choice=${choice:-1}

case $choice in
    1)
        echo ""
        echo "🔥 启动开发服务器..."
        echo "访问地址: http://localhost:5173"
        echo "按 Ctrl+C 停止服务器"
        echo ""
        npm run dev
        ;;
    2)
        echo ""
        echo "📦 构建生产版本..."
        npm run build
        echo ""
        echo "✅ 构建完成！输出目录: .vitepress/dist"
        ;;
    3)
        echo ""
        echo "👀 预览构建结果..."
        npm run preview
        ;;
    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac
