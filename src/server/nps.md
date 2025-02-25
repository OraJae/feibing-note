---
title: 服务器搭建nps服务，穿透到内网nas服务
---

# 服务器搭建nps服务，穿透到内网nas服务

## 1、安装

### 1.1 nps安装包下载

[nps安装包下载地址](https://github.com/yisier/nps/releases)

```debian11系统推荐：linux_amd64_server.tar```

### 1.2 解压安装包

使用WinSCP将安装包上传到服务器，解压到指定目录，如：/root/nps

### 1.3 nps程序配置

对目录下文件```/conf/nps.conf```进行配置

```shell
appname = nps
#Boot mode(dev|pro)
runmode = dev

##bridge
# 底层通信协议，默认tcp，可选用kcp
bridge_type=tcp
# 底层通信端口，默认8024，如已被占用请指定其他端口
bridge_port=8024

# 当客户端以配置文件模式启动时会用到的验证密钥，可自行设置，本教程不会使用到
public_vkey=AVOKTdJA6c9i // 可以随机生成一个，也可以不配置，创建客户端时可以自动生成一个

#web
web_host=38.55.198.224  // 服务器ip地址
web_username=zhangjie  // web页登录用户名
web_password=zj123  // web页登陆密码
web_port=8080    // web页端口
```

### 1.4 运行nps

```shell
# 安装nps服务
sudo ./nps install

# 出现错误 sudo: ./nps: command not found
# 运行命令 
chmod +x ./nps

# 运行nps服务
sudo nps start
```

### 1.5 测试nps是否启动成功
通过服务器ip:8024应该能访问到nps的web管理页面

ps: 服务器防火墙需要放行8024端口

### 1.6 配置nps客户端

在服务器上创建一个nps客户端