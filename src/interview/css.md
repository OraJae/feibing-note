---
title: css面试题
# icon: lightbulb
---

### 1.说一下CSS的盒模型。😃♥️🧊
在HTML页面中的所有元素都可以看成是一个盒子

盒子的组成：内容content、内边距padding、边框border、外边距margin

盒模型的类型：

标准盒模型

margin border padding content

IE盒模型

margin content(border padding)

控制盒模型的模式：box-sizing:content-box(默认值，标准盒模型)、border-box(IE盒模型)；



### 2.CSS选择器的优先级？
CSS的特性：继承性、层叠性、优先级

优先级：写CSS样式的时候，会给同一个元素添加多个样式，此时谁的权重高就显示谁的样式

标签、类/伪类/属性、全局选择器、行内样式、id、!important



### 3.隐藏元素的方法有哪些？
**display:none;**

完全消失 不占任何空间 不能点击

**opacity:0;**

不会消失 占据空间 可点击

**visibility:hidden;**

不会消失 占据空间 不可点击

**position:absolute;**

**clip-path**



### 4.px和rem的区别是什么？
px是像素，显示器上给我们呈现画面的像素，每个像素的大小是一样，绝对单位长度

rem,相对单位，相对于html根节点的font-size的值，直接给html节点的font-size:62.5

1rem=10px;(16px*62.5%=10px)



### 5.重绘重排有什么区别？

布局引擎会根据所有的样式计算出盒模型在页面上的位置和大小

重绘

计算好盒模型的位置、大小和其他一些属性之后，浏览器就会根据每个盒模型的特性进行绘制

浏览器的渲染机制

对D0M的大小、位置进行修改后，浏览器需要重新计算元素的这些几何属性，就叫重排

对D0M的样式进行修改，比如color和background-color,浏览器不需要重新计算几何属性的时候，直接绘制了该元素的新样式，那么这里就只触发了重绘



### 6.让一个元素水平垂直居中的方式有哪些？
定位+margin

```css
postion:absolute;
left:0;
top:0;
right:0;
bottom:0;
margin:auto
```

定位+transform

```css
postion:absolute;
left:50%;
top:50%;
transform: translate(-50%,-50%);
```

flex布局

grid布局

table布局



### 7.CSS的哪些属性哪些可以继承？哪些不可以继承？
CSS的三大特性：继承、层叠、优先级

子元素可以继承父类元素的样式

1.字体的一些属性：font

2.文本的一些属性：line-height

3.元素的可见性：visibility:hidden

4.表格布局的属性：border-spacing

5.列表的属性：list-style

6.页面样式属性：page

7.声音的样式属性



### 8.居中为什么要使用transform（为什么不使用marginLeft/Top）
transform	合成属性

top/left	布局属性	属性变化	导致重排	



### 9.png8、png24、png32的区别及png压缩原理
+ png8	2^8大小	存储一张图片的颜色种类	256种颜色
+ png24	rgb	256*256*256种颜色
+ png32	rgba  png24+颜色透明色道	256种透明颜色

****

压缩原理

+ 预解析 预处理 方便后续压缩
+ 压缩 deflate压缩 LZ77算法 huffman算法



### 10.清除浮动的方法
+ clear 清除浮动 ```{clear:both;height:0;overflow:hidden}```
+ 给浮动元素父级设置高度
+ 父级元素设置成inline-block  margin: 0 auto方式无效
+ 父级元素 overflow:hidden
+ 万能消除法 ```::after{content:"";display:block;clear:both}```

### 11.requestAnimationframe

优势
- cup节能 处于未激活的状态下 刷新任务被暂停 停止渲染
- 每个刷新间隔内  函数只被执行一次
- 减少dom操作 每一帧吧所有dom操作集中起来 60帧/s
  
