---
title: pm2管理node进程
---

# pm2管理node进程

### 1.安装pm2
```
npm i pm2 -g
```

### 2.启动pm2管理node项目

```shell
# 启动入口文件
pm2 start ./app.js
```

==报错处理：-sh: pm2: command not found==


1. 找到全局 npm 安装目录
```npm config get prefix```

2. 确认 pm2 是否已安装
```ls /share/CACHEDEV1_DATA/.qpkg/NodeJS18/lib/node_modules/pm2```

3. 将 pm2 添加到 PATH
```export PATH=$PATH:/share/CACHEDEV1_DATA/.qpkg/NodeJS18/bin```

    为了永久生效，可以将这行命令添加到你的 shell 配置文件（如 ~/.bashrc 或 ~/.profile）中

    ```shell
    echo 'export PATH=$PATH:/share/CACHEDEV1_DATA/.qpkg/NodeJS18/bin' >> ~/.bashrc
    source ~/.bashrc
    ```

4. 验证 pm2 是否可用
```pm2 --version```


### 3. 常用命令

```shell
# 启动项目
pm2 start app.js --watch --name vue3-study-bd
# 查看进程
pm2 list
# 停止进程
pm2 stop vue3-study-bd
# 重启进程
pm2 restart vue3-study-bd
# 查看日志
pm2 logs vue3-study-bd
# 删除进程
pm2 delete vue3-study-bd
```

![img.png](./img/s34302424.jpg)
