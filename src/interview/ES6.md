---
title: ES6面试题
---

### 1.es5 和 es6 的区别

1. let const 块级作用域 var 变量提升
2. 箭头函数 this 指向
3. class 类
4. promise async await
5. 模块化 import export
6. 解构赋值
7. 默认参数 rest 参数
8. 模板字符串
9. for of 循环
10. Map Set 数据结构
11. Symbol 类型
12. Proxy Reflect 代理
13. Generator 迭代器、生成器

### 2.箭头函数和普通函数的区别

1. 箭头函数没有 this，this 指向外层作用域
2. 箭头函数没有 arguments
3. 箭头函数没有原型
4. 箭头函数不能当做构造函数
5. yeild 关键字不能在箭头函数中使用

### 3.Set 与数组的区别

- Set 成员唯一 不能重复
- Set 成员是按顺序排列的
- Set 可以实现数组去重
- Set 可以实现交集、并集、差集
- Set 有 size 属性，可以通过 size 属性获取成员个数
- Set 没有索引，不能通过索引获取值

### promise 有几种状态，什么时候进入 catch

- pending
- fulfilled
- rejected

状态不可逆

- pending -> fulfilled 成功
- pending -> rejected 异常 catch

### 将 for 循环改为 for of 形式

```javascript
let arr = [1, 2, 3, 4, 5]
let sum = 0
for (let item of arr) {
  sum += item
}

for (value of arr) {
  sum += value
}
```

### Set、Map、WeakSet、WeakMap 的区别

**Set**
- 类数组结构 成员唯一
- 接受数组作为参数
- 可以遍历

**WeakSet 和 Set 区别**
- WeakSet 成员都是对象 不能是其他类型的值
- WeakSet 成员都是弱引用 不可遍历 没有 size 属性
- WeakSet 用作存储dom节点

**Map**
- 类对象结构 键值对集合 键名可以是任意类型的值
- 可以接收数组作为参数  键值对数组
- Map的键 跟内存地址绑定 内存地址不一样 视为不同的键
- 简单类型值作为键时 值严格相等 视为同一个键
- Map 遍历的顺序就是插入的顺序

**WeakMap 和 Map 区别**
- WeakMap 只接受对象作为键名 不能是其他类型的值
- WeakMap 的键名是弱引用 不可遍历 没有 size 属性
- WeakMap 

### 字符串新增了哪些方法
- includes()
- startsWith()
- endsWith()
- repeat()
- padStart() 填充开头
- padEnd() 填充结尾

### 数组新增了哪些方法
- Array.from() 将类数组转换为数组
- Array.of() 将一组值转换为数组

```javascript
Array.of(1, 2, 3) // [1, 2, 3]
```

- fill() 填充数组
- find()
- findIndex()
- includes()
- flat() 扁平化数组
- flatMap() // 返回一个新数组 每个元素都是回调函数的返回值
- keys()
- values()
- entries() // 返回一个遍历器对象


