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
* 常用的linux命令(查看PPT)
- find 

#### 从小到大论前端项目持续集成
* CI 在持续继承环境中，开发人员将会频繁的提交代码到主干，这些新提交在最终合并到主线之前，都需要通过编译和自动化测试流进行验证。这样做是基于之前持续集成过程中很重视自动化测试验证结果，以保障所有的提交在合并主干之后的质量问题，对可能出现的一些问题进行预警。
* CD 包含持续交付和持续部署
* 上线权力
* 每个分支上线前一定要先merge主干(master)
* git tags 和 branches的区别：tag就像一个里程碑一个标志一个点，branch是一个新的征程一条线，稳定版本备份用tag，新功能多人开发用branch（开发完成后merge到master）,tag就是一个只读的branch，一般为每一个可发布的里程碑版本打一个tag
* lsof -i:80 命令可以查看是否用程序在使用80端口
* 要会基本shell书写

* AMD CMD比较
- CMD依赖是就近声明，通过内部require方法进行声明，但是因为是异步模块，加载器需要提前加载这些模块，所有模块真正使用前需要提模块里面所有的依赖
- 不能直接压缩，require局部变量如果替换无法加载资源
- CMD路径参数不能进行字符串运算
- AMD的依赖是提前声明。这种优势的好处就是依赖不需要通过静态分析，无论是加载器还是自动化工具都可以很直接的获取到依赖。
- AMD依赖提前声明在代码书写上不是那么友好
- AMD模块内部与nodejs的modules有一定的差异

* package.json的生命周期
- 准备执行某些命令时会提前挂一些钩子，前面加pre
- scripty
- 得到当前系统的环境参数
```
const argv = require('yargs-parser');
// 或者
process.argv

const argv = require('yargs-parser')(process.argv.slice(2));
```

* 第三周作业比较重要


