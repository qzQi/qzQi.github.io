# Go 实践指南

::: info 文章信息
- 创建时间：2025-12-14
- 标签：Go、实践、并发编程
:::

## 简介

Go 语言开发的实战经验和最佳实践总结。

## 并发编程

### Goroutine 和 Channel

Go 的并发模型基于 CSP（Communicating Sequential Processes）：

```go
package main

import (
    "fmt"
    "time"
)

func worker(id int, jobs <-chan int, results chan<- int) {
    for job := range jobs {
        fmt.Printf("Worker %d processing job %d\n", id, job)
        time.Sleep(time.Second)
        results <- job * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)
    
    // 启动 3 个 worker
    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }
    
    // 发送 5 个任务
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs)
    
    // 收集结果
    for a := 1; a <= 5; a++ {
        <-results
    }
}
```

### WaitGroup 同步

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

func task(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    
    fmt.Printf("Task %d starting\n", id)
    time.Sleep(time.Second)
    fmt.Printf("Task %d done\n", id)
}

func main() {
    var wg sync.WaitGroup
    
    for i := 1; i <= 5; i++ {
        wg.Add(1)
        go task(i, &wg)
    }
    
    wg.Wait()
    fmt.Println("All tasks completed")
}
```

## 错误处理

### 标准错误处理

```go
package main

import (
    "errors"
    "fmt"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Result:", result)
}
```

### 自定义错误类型

```go
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("%s: %s", e.Field, e.Message)
}

func validateAge(age int) error {
    if age < 0 || age > 150 {
        return &ValidationError{
            Field:   "age",
            Message: "must be between 0 and 150",
        }
    }
    return nil
}
```

## 接口设计

### 小接口原则

Go 推崇小而专注的接口：

```go
// 好的设计
type Reader interface {
    Read(p []byte) (n int, err error)
}

type Writer interface {
    Write(p []byte) (n int, err error)
}

type Closer interface {
    Close() error
}

// 组合接口
type ReadWriteCloser interface {
    Reader
    Writer
    Closer
}
```

## 性能优化

### 使用 sync.Pool 减少 GC 压力

```go
var bufferPool = sync.Pool{
    New: func() interface{} {
        return make([]byte, 1024)
    },
}

func processData(data []byte) {
    buf := bufferPool.Get().([]byte)
    defer bufferPool.Put(buf)
    
    // 使用 buf 处理数据
}
```

### 避免不必要的内存分配

```go
// 不好：每次都创建新 slice
func bad() {
    for i := 0; i < 1000; i++ {
        data := make([]int, 100)
        // 使用 data
    }
}

// 好：复用 slice
func good() {
    data := make([]int, 100)
    for i := 0; i < 1000; i++ {
        // 重置并复用 data
        data = data[:0]
        // 使用 data
    }
}
```

## 最佳实践

### 项目结构

```
my-project/
├── cmd/              # 应用入口
│   └── myapp/
│       └── main.go
├── internal/         # 私有代码
│   ├── handler/
│   ├── service/
│   └── repository/
├── pkg/              # 可被外部使用的库
├── api/              # API 定义
├── configs/          # 配置文件
└── go.mod
```

### 编码规范

- ✅ 使用 `gofmt` 格式化代码
- ✅ 遵循 [Effective Go](https://go.dev/doc/effective_go)
- ✅ 错误处理不要忽略
- ✅ 使用 `context` 传递请求级别的数据
- ✅ 接口定义在使用侧
- ❌ 不要过度使用 goroutine
- ❌ 避免共享内存，优先使用 channel 通信

## 常用工具

- `go fmt` - 代码格式化
- `go vet` - 代码静态分析
- `golangci-lint` - 代码检查
- `go test` - 单元测试
- `pprof` - 性能分析

## 参考资料

- [Go 官方文档](https://go.dev/doc/)
- [Effective Go](https://go.dev/doc/effective_go)
- Go 语言高级编程

---

*持续更新中...*
