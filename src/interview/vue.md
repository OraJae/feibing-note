---
title: vue面试题
---

# vue面试题

### 组件之间的通信方式有哪些？

- 父子组件通信
  - props
  - $emit
  - $attrs
  - ref
  - $parent
  - $children
- 兄弟组件通信
  - EventBus
  - Vuex
- 跨级组件通信
  - EventBus
  - Vuex
  - provide/inject

### vue 响应式原理

在 Vue 实例创建时，会对 data 选项中的数据进行遍历。通过 Object.defineProperty()方法来进行数据劫持,当对属性进行读取的时候就会触发 getter，对属性修改的时候就会触发 setter。

### vue2和vue3的区别
- 响应式原理
  - vue2 采用的是 Object.defineProperty()方法来进行数据劫持
  - vue3 采用的是 Proxy()方法来进行数据劫持
- 虚拟dom
  - vue2 采用的是虚拟dom
  - vue3 采用的是diff算法
- 编译
  - vue2 采用的是静态标记
  - vue3 采用的是基于AST的静态标记
