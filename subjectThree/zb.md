#### 前端工程化直播课
* mac内核是unix，建议装一个虚拟机，parallels desktop   vmware
* macos远程登录Linux的命令
* $ ssh root@192.168.0.21
* 分辨主进程和子进程
* 命令筛选 grep
* macos上用launchctl，linux上用systemctl
* nginx中是没有线程的, 是IO密集型的
* 一个进程里至少有一个线程
* **linux免密远程登录**
> 免密登录的原理：配置免密登录的步骤：
1. 生成秘钥对
> ssh-keygen -t  rsa -C "你自己的名字" -f "你自己的名字_rsa"
2. 上传配置公钥
> 上传公钥到服务器对应账号的home路径下的.ssh/中(ssh-copy-id -i "公钥文件名" 用户名@服务器ip或域名)
> 配置公钥文件访问权限为600
3. 配置本地私钥
> 把第一步生成的私钥复制到你的home目录下的.ssh/路径下
> 配置你的私钥文件访问权限为600
> chmod600 你的私钥文件名
4. 免密登录功能的本地配置文件
> 编辑自己home目录的.ssh/路径下的config文件
> 配置config文件的访问权限为644

* 怎样找到暂用网络端口的进程
> ss命令 netstat命令
> ss -anp | grep 80(-a是全部，n指网络，p指查看进程信息。查看80端口的使用情况)

* linux远程免密登陆

* 架构师，算法专家，设计师才是有技术含量，码农是没有技术含量的。。。