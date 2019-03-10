**常见linux操作系统**
ubuntu 、centos 、redhat
虚拟机软件 VMware 、Virtural 、VirtualPC
后面使用http://www.vmware.com/cn.html

下载好vmware虚拟机和ubuntu，先安装虚拟机，然后新建一个虚拟机，在里面添加ubuntu镜像。

**linux常用命令**
1. 查看当前目录下的文件和文件夹(短格式目录)   -> ls
2. 查看当前目录下的文件和文件夹(长格式目录)  -> ls -l
3. 显示隐藏文件(文件名前面有个点号)  -> ls -a
4. 切换目录   -> cd 目录名（cd desktop）
5. 退回上一级目录  -> cd ..
6. 创建目录   -> mkdir 文件名或文件夹名
7. 复制文件 复制一个纯粹的目录   -> cp 想要复制的文件 目标目录/复制的文件名
(eg: cp example.text aaa/example.test)
8. 退回两级目录   -> cd ../..
9. 显示当前目录的全部路径  -> pwd
10. 删除命令  -> rm 要删除的文件（eg: rm example.text）
rm -r 文件夹（eg: rm -r aaa）
11. clear 清除
12. 搜索文件 -> find 目录 参数(比如你可以通过以下命令在用户文件夹中搜索名字中包含screen的文件
Find ~ -iname “screen*”)
13. 查看当前文件  -> cat 文件名

**windows 常用命令**
1. 查看当前目录下的文件 ->  dir
2. 跳转到当前目录下的某个文件 -> cd 目标文件名
3. 新建文件夹   -> md 文件夹名字
4. 返回上级目录 -> cd ..
5. 复制 -> copy 要复制的文件 要复制到的文件目录 （copy a.html file1）
6. 删除 -> del 要删除的文件名称（删除文件系统没有给任何提示，使用的时候需要小心，被删除的文件不会出现在回收站里面）
7. 修改文件名 -> rename 想修改的文件名 要修改成什么文件名(rename aaa.exe bbb.exe)

#### windows 平台下 模拟的unix模拟环境 Cygwin

#### web服务器基础原理和概念

mac xampp
windows IIS

vim

#### Linux 开发环境初准备
带GUI的服务器
Linux and macos   操作系统的内核很像
Linux没有磁盘分区的概念，是一个目录树的概念
Bin  存放一些命令
Etc   放的是配置文件，重要的脚本
Dev 开发用的东西
Home  （Linux是多用户操作系统）
Media 一般接入U盘就来这个目录找
proc 动态的数据，系统的信息
Boot  引导文件  （Linux的内核都在这里）
opt 
Root 系统管理员
关机： shutdown now -h

centOS下面安装命令Yum:linux下安装软件的命令；    ubuntu: 下面安装软件的命令apt-get
Mac下面 brew  需要自己配置

windows可以往虚拟机里的linux传文件吗  可以
共享文件的方式

端口就是提供服务的门
HTTP默认端口是80
https 默认端口是443
mysql 默认端口是3306
端口冲突：两个服务用的是一个端口号，就会产生冲突
一个端口在同一时间只能被一个服务使用

大商场相当于服务器，小商店就是端口，每个小商店都有门


pid 就是进程的编号

什么是服务？
服务是一种特殊的进程，随着操作系统的启动而启用，关机而关闭
什么是终端？
提供人家操作的界面
终端是一种协议  windows可以下载xshell putty 终端软件

安装Linux 开发环境
安装node.js

mac 终端下面不带 brew  需要去它的官网