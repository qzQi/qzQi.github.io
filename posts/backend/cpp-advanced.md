# C++ 进阶技巧

::: info 文章信息
- 创建时间：2025-12-14
- 标签：C++、进阶、最佳实践
:::

## 简介

记录 C++ 开发中的进阶技巧和最佳实践。

## 现代 C++ 特性

### 智能指针

使用智能指针管理内存，避免内存泄漏：

```cpp
#include <memory>
#include <iostream>

class Resource {
public:
    Resource() { std::cout << "Resource acquired\n"; }
    ~Resource() { std::cout << "Resource released\n"; }
    void use() { std::cout << "Using resource\n"; }
};

int main() {
    // 使用 unique_ptr
    auto res1 = std::make_unique<Resource>();
    res1->use();
    
    // 使用 shared_ptr
    auto res2 = std::make_shared<Resource>();
    res2->use();
    
    return 0;
}
```

### 移动语义

利用移动语义提升性能：

```cpp
#include <vector>
#include <string>

class DataBuffer {
private:
    std::vector<int> data;
    
public:
    // 移动构造函数
    DataBuffer(DataBuffer&& other) noexcept 
        : data(std::move(other.data)) {
        std::cout << "Move constructor called\n";
    }
    
    // 移动赋值运算符
    DataBuffer& operator=(DataBuffer&& other) noexcept {
        if (this != &other) {
            data = std::move(other.data);
        }
        return *this;
    }
};
```

## RAII 模式

Resource Acquisition Is Initialization（资源获取即初始化）：

```cpp
class FileHandler {
private:
    FILE* file;
    
public:
    FileHandler(const char* filename, const char* mode) {
        file = fopen(filename, mode);
        if (!file) {
            throw std::runtime_error("Failed to open file");
        }
    }
    
    ~FileHandler() {
        if (file) {
            fclose(file);
        }
    }
    
    // 禁止拷贝
    FileHandler(const FileHandler&) = delete;
    FileHandler& operator=(const FileHandler&) = delete;
};
```

## 模板编程技巧

### 类型萃取

```cpp
#include <type_traits>

template<typename T>
void process(T value) {
    if constexpr (std::is_integral_v<T>) {
        // 整数类型处理
        std::cout << "Processing integer: " << value << "\n";
    } else if constexpr (std::is_floating_point_v<T>) {
        // 浮点类型处理
        std::cout << "Processing float: " << value << "\n";
    } else {
        // 其他类型处理
        std::cout << "Processing other type\n";
    }
}
```

## 性能优化要点

1. **避免不必要的拷贝**：使用引用和移动语义
2. **内联小函数**：使用 `inline` 关键字
3. **缓存友好**：注意数据结构的内存布局
4. **编译器优化**：使用 `-O2` 或 `-O3` 编译选项

## 最佳实践

- ✅ 使用智能指针替代裸指针
- ✅ 遵循 RAII 原则管理资源
- ✅ 优先使用 STL 容器和算法
- ✅ 使用 const 保证不可变性
- ✅ 合理使用异常处理
- ❌ 避免使用 `new/delete`
- ❌ 避免 C 风格的类型转换

## 参考资料

- [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/)
- Effective Modern C++ by Scott Meyers

---

*持续更新中...*
