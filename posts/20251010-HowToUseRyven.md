---
title: Ryven上手指南
date: 2025/10/10
tags: [Ryven]
excerpt: "Ryven 是一个基于 Python 的可视化编程工具，它采用节点式编程范式，让用户能够通过连接不同的节点来创建复杂的数据处理流程。"
---

# Ryven 可视化编程工具完整上手指南

## 什么是 Ryven？

Ryven 是一个基于 Python 的可视化编程工具，它采用节点式编程范式，让用户能够通过连接不同的节点来创建复杂的数据处理流程。类似于 Unreal Engine 的 Blueprints 或者 Blender 的 Geometry Nodes，Ryven 让编程变得更加直观和可视化。

---

## 核心概念

### 节点 (Node)
- 每个节点代表一个独立的功能单元
- 包含输入端口、输出端口和参数配置
- 可以是数据源、数据处理函数或数据输出

### 数据流 (Data Flow)
- 数据从输出端口流向输入端口
- 当输入数据变化时，节点自动更新
- 支持实时数据流处理

### 端口 (Port)
- **输入端口**：接收来自其他节点的数据
- **输出端口**：向其他节点提供数据
- 类型系统确保数据兼容性

---
## 安装与环境配置

### 基础安装
```bash
pip install ryven
```

### 验证安装
```python
import ryven
print(ryven.__version__)
```

---

## 创建你的第一个自定义节点

### 基础节点结构

```python
from ryven.node_env import *
import ryven.gui.std_input_widgets as inp_widgets

export_nodes = []

class NumberNode(Node):
    """数字输入节点"""
    title = '数字节点'
    init_outputs = [NodeOutputBP()]
    
    def __init__(self, params):
        super().__init__(params)
        self.val = 0
        
    def update_event(self, inp=-1):
        self.set_output_val(0, self.val)
    
    def view_place_event(self):
        # 创建用户界面控件
        self.le = inp_widgets.QLabelEdit('数值:')
        self.le.set_val(str(self.val))
        self.le.text_changed.connect(self.text_changed)
        return self.le
    
    def text_changed(self, text):
        try:
            self.val = float(text)
            self.update()  # 触发数据流更新
        except ValueError:
            pass

export_nodes.append(NumberNode)
```

### 数据处理节点

```python
class AddNode(Node):
    """加法运算节点"""
    title = '加法节点'
    init_inputs = [NodeInputBP(), NodeInputBP()]
    init_outputs = [NodeOutputBP()]
    
    def update_event(self, inp=-1):
        a = self.input(0) or 0
        b = self.input(1) or 0
        result = a + b
        self.set_output_val(0, result)

export_nodes.append(AddNode)
```

### 输出节点
```python
class PrintNode(Node):
    """结果输出节点"""
    title = '打印节点'
    init_inputs = [NodeInputBP()]
    
    def update_event(self, inp=-1):
        value = self.input(0)
        print(f"计算结果: {value}")

export_nodes.append(PrintNode)
```

## 运行 Ryven 的三种方式

### 方式一：直接启动 GUI
```python
# start_ryven.py
from ryven.main import run_ryven

# 从 my_nodes.py 导入节点
from my_nodes import export_nodes

if __name__ == "__main__":
    run_ryven(
        node_classes=export_nodes,
        gui=True
    )
```

### 方式二：命令行启动

```bash
# 在节点文件所在目录运行
python -m ryven --nodes-dir .

# 或者直接运行
ryven --nodes-dir .
```
### 导入现有节点文件
- 启动 Ryven GUI
- 点击 "File" → "Import Nodes"
- 选择你的节点定义文件（如 my_nodes.py）
- 节点将出现在右侧面板中


## 资源链接
Github: https://github.com/leon-thomm/Ryven


