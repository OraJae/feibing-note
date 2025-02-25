---
title: js面试题
---

### 1、打的

### 2、如何提取url中当前的参数
```javascript
let url = "https://alibaba?a=sh&b=22&c=3#nd";
function getUrlParams(URL) {
  let url = URL.split("?")[1];
  const urlSearchParams = new URLSearchParams(url);
  const result = Object.fromEntries(urlSearchParams.entries());
  return result;
}
getUrlParams(url) 	// {a: 'sh', b: '22', c: '3#nd'}
```

> 扩展
>
> 
>

