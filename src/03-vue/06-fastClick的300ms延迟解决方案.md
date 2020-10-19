点击事件会有300ms延迟的问题:
* 原因：
* 解决方案：
1. 安装 fastClick:
```
cnpm install fastclick -S
```

2. 在main.js中引入fastClick和初始化:
```
import FastClick from 'fastclick'; // 引入插件
FastClick.attach(document.body); // 使用 fastclick
```