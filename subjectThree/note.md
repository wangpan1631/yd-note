#### 专题三 前端工程化

**录播课**
> 模块化是一种将系统分离成独立功能部分的方法，严格定义模块接口、模块间具有透明性。引入模块化是为了**高内聚低耦合**
> 现代化模块化
* commonjs (const path = require('path'))
* ES6模块化 (import a from 'a')

webpack configuration
* entry: 配置入口资源
* output: 配置编译后的资源
* module: 资源处理
* resolve: 配置资源别名/扩展名等
* plugins: 插件，比loader更强大

**录播课**
> 4.16
> 讲讲操作系统
* 那些古老的操作系统
* 更适合工作和娱乐的windows
* 适合开发的linux
* 非常好用的macOs
* ubuntu、CentOS、redhat、Fadora、Debian(linux发行版)哪个好？
> 远程登录linux
1. windows系统下
* putty
* Xshell
* 在Cmder终端环境下使用ssh命令
2. Linux和macOS系统下
* ssh命令($ ssh root@192.168.0.21)
> 重要的常用Linux命令
* 行编辑器 vi/vim
> 按字母i 左下角出现insert 可以进行编辑，按下esc键退出insert模式，然后按冒号进入命令模式，输入小写字母q，再按回车键
* 服务器管理命令 systemctl（Mac电脑上不能用systemctl，而是launchctl）
* 网络管理命令 ifconfig ip命令 router
* 命令行下载命令 curl wget
* $ ip addr (和 ifconfig用处一样 ，只是格式不一样)
* 怎么查看linux命令的帮助
* 在终端下不小心按了ctrl + s怎么办？
> 常用linux终端快捷键
* ctrl+c 结束正在运行的程序（ping telnet等）
* ctrl+d 结束输入或退出shell
* ctrl+s 暂停屏幕输出
* ctrl+q 恢复屏幕输出
> 进程、线程和协程
* 进程的目的就是担当分配系统资源（CPU时间、内存）的实体
* 线程是操作系统能够进行运算调度的最小单位
* 协程是一种用户态的轻量级线程，无法利用多核资源
* IO密集型应用的发展：多进程->多线程->事件驱动->协程
* CPU密集型应用的发展：多进程->多线程
* 调度和切换的时间：进程->线程->协程

