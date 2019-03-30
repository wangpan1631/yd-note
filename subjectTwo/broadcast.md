#### 专题二：nodejs
其实完全死板的按照内容去去记笔记不太好，应该看了之后，**根据自己的理解去总结笔记，才能达到更好的学习效果**
在终端输入node会进入node的环境，要退出的话，按两次ctrl+c，或者输入.exit 退出
npm.taobao.org(npm 的中国镜像， cnpm是中国的npm服务器，要使用cnpm需要先安装：npm i cnpm)

node repl环境
在终端输入node 回车就进入了repl环境，可以进行一些简单运算

常用命令：
按tab可以给出命令提示
输入.help  可以看到更多信息

npm包管理器（http://www.npmjs.com）
分为全局安装和局部安装(局部安装就是安装到当前项目的路径下)
升级npm， 在终端输入npm install npm -g
安装依赖：npm i 依赖名（例如：npm install express -g）
卸载依赖：npm uninstall 依赖名（例如：npm uninstall express -g）
查找依赖：npm search 依赖名（例如：npm search express）
查看npm的子命令： npm help
查看某个子命令的帮助文档：npm install help（退出文档按字母q）

**node回调机制**
什么是回调？
函数的调用方式分为三种：**同步**调用、**回调**和**异步**调用
回调是一种双向调用模式
可以通过回调函数来实现回调
阻塞和非阻塞：关注的是程序在**等待调用结果（消息，返回值）时的状态**。阻塞就是做不完不准回来，非阻塞是你先做，我现在看看有其它事没有，完了告诉我一声。

**node事件驱动机制**
事件驱动模型
事件和事件绑定
nodejs是单进程单线程的机制，只能通过事件实现并发的效果
nodejs里面的每个api都是异步执行的，是观察者模式

参照事件驱动模型那个图，或者自己画一画
事件处理代码流程：1、引入events对象，创建eventEmitter对象（平时说的事件对象） 2、绑定事件处理程序 3、触发事件

**nodejs模块化**
* 模块化的概念和意义，为了让Node.js的文件可以相互调用，node.js提供了一个简单的模块系统，模块是node.js应用程序的基本组成部分，文件和模块是一一对应的，一个node.js文件就是一个模块，这个文件可能是js代码，json或者编译过的C/C++扩展，Node.js中存在4类模块（原生模块（nodejs天然提供的）和3种文件模块（第三方提供的））
* node.js的模块加载方式分为：**从文件模块缓存中加载、从原生模块加载、从文件加载**
* require方法加载模块，require接受几种参数的传递：http fs path等原生模块；./mod或../mod，相对路径的文件模块（最好用相对路径）；/pathtomodule/mod，绝对路径的文件模块；mod，非原生模块的文件模块。

**nodejs函数**
node.js中函数的使用与javascript类似

**nodejs路由**

