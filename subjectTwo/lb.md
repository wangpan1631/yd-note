#### 录播专题二：nodejs
其实完全死板的按照内容去去记笔记不太好，应该看了之后，**根据自己的理解去总结笔记，才能达到更好的学习效果**

**node是单线程**
* 节约内存，
* 节约上下文（context）切换的时间
* 锁的问题，并发资源的处理（锁是并发才会出现的问题，而node是单线程，没有并发，就不需要锁了）
**多线程的实现**：并不是真正在同一个时间点执行多个任务，而是通过非常快速的切换时间片来实现。

语言分为：编译型和解释型 （编译型的比较快）
在node.js里，如果一个线程崩了，那么整个服务器就宕了

为什么js是单线程？这是由Js这门脚本语言的用途决定的。web worker（号称是多线程的，完全受主线程控制，不能操作DOM）并没有改变js单线程的本质
**浏览器模型：**
* 用户界面-包括地址栏、前进后退按钮、书签菜单等
* 浏览器引擎在用户界面和呈现引擎之间传递指令
* 呈现引擎又称渲染引擎，也被称为浏览器内核，在线程方面又称为UI线程
* 网络-用于网络调用，比如http请求
* 用户界面后端-用于绘制基本的窗口小部件，UI线程和JS公用一个线程
* JS解释器-用于解析和执行JS代码
* 数据存储-这是持久层，浏览器需要在硬盘上保存各种数据，例如cookie

在浏览器里  UI线程和JS线程是共用一个线程的
浏览器是多线程的

**除了JS线程和UI线程之外的其它线程**
* 浏览器事件触发线程
* 定时触发器线程
* 异步HTTP请求线程

**任务队列**
1. 所有同步任务都在主线程上执行，形成一个执行栈
2. 主线程之外，还存在一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置了一个事件
3. 一旦执行栈中的所有同步任务执行完毕，系统就会读取**任务队列，** 看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行
4. 主线程不断重复上面的第三步

**Event Loop**,主线程从 任务队列 中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop(事件循环)

异步成功之后把回调函数才放到任务队列里面，而不是刚开始调用异步任务的时候就放到队列里面（比如：事件是什么时候加入队列，比如aja，是发送ajax的时候加入队列，还是ajax返回数据的时候加入队列，答案L返回的时候加入队列）
异步的回调函数都会放到任务队列里面！

heap：堆 stack： 栈
栈里面的方法必须执行完，才会去执行任务队列里的方法

同步和异步，阻塞和非阻塞
同步和异步关注的是消息的通知方式，阻塞和非阻塞关注的是等待结果是的状态，同步异步取决于被调用者，阻塞非阻塞取决于调用者（结合打电话的场景理解）



在终端输入node会进入node的环境，要退出的话，按两次ctrl+c，或者输入.exit 退出
npm.taobao.org(npm 的中国镜像， cnpm是中国的npm服务器，要使用cnpm需要先安装：npm i cnpm)

**node repl环境**
在终端输入node 回车就进入了repl环境，可以进行一些简单运算

**常用命令：**
按tab可以给出命令提示
输入.help  可以看到更多信息

**npm包管理器（http://www.npmjs.com）**
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
事件驱动模型，
事件和事件绑定，
nodejs是单进程单线程的机制，只能通过事件或回调实现并发的效果，
nodejs里面的每个api都是异步执行的，作为独立线程在调用，所有的事件机制都是依据观察者模式

参照事件驱动模型那个图，或者自己画一画
事件处理代码流程：1、引入events对象，创建eventEmitter对象（平时说的事件对象） 2、绑定事件处理程序 3、触发事件

**nodejs模块化**
* 模块化的概念和意义，为了让Node.js的文件可以相互调用，node.js提供了一个简单的模块系统，模块是node.js应用程序的基本组成部分，文件和模块是一一对应的，一个node.js文件就是一个模块，这个文件可能是js代码，json或者编译过的C/C++扩展，Node.js中存在4类模块（原生模块（nodejs天然提供的）和3种文件模块（第三方提供的））
* node.js的模块加载方式分为：**从文件模块缓存中加载、从原生模块加载、从文件加载**
* require方法加载模块，require接受几种参数的传递：http fs path等原生模块；./mod或../mod，相对路径的文件模块（最好用相对路径）；/pathtomodule/mod，绝对路径的文件模块；mod，非原生模块的文件模块。

**nodejs函数**
node.js中函数的使用与javascript类似

**nodejs路由**
参考链接：https://blog.csdn.net/userrefister/article/details/79349780
https://blog.csdn.net/xxtnt/article/details/83151443
* localhost:8000/c/a?params (router: c->controller   a->action)  一个controller对应多个action
* url.parse(string).path  拿到url
* url.parse(string).pathname  拿到路由
* querystring(string)['foo']   拿到参数
* node.js中url模块中的parse函数提供了解析get请求参数的功能


**node.js全局对象**

* js有一个特殊的对象，称为全局对象，它及其所有属性都可以在程序的任何地方访问，及全局变量。在浏览器js中，通常window是全局对象，而Node.js中的全局对象是global，所有全局变量都是global对象的属性。
* __filename, 表示当前正在执行的脚本的文件名，它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。如果在模块中，返回的值是模块文件的路径。
* __dirname，表示当前执行脚本所在的目录。
* process ，它用于描述当前Node.js进程状态的对象，提供了一个与操作系统的简单接口，通常在你写本地命令行程序的时候，少不了要和它打交道。

推荐库：underscore

**node.js文件系统**


node.js学习资源：
https://nodeschool.io/zh-cn/
https://cnodejs.org/
https://www.oschina.net/p/nodejs/
https://nodejs.org/zh-cn/docs/ 


**day413 实战作业**
后面所有的实战都是围绕yd-books这个项目来进行的
node热部署工具（supervisor）：https://www.cnblogs.com/Leo_wl/p/3800276.html
删除某个依赖包: npm remove 包名（npm remove supervisor）


**day5-14**
1. **为什么要使用nodejs**
* 为了提供高性能的web服务
* IO性能强大
* 事件处理机制完善
* 天然能够处理DOM
* 社区非常活跃，生态圈日趋完善

2. **nodejs的优势**
* 处理大流量数据
* 适合实时交互的应用
* 完美支持对象数据库
* 异步处理大量并发连接

3. 学习nodejs的前置知识
* js
* es6
* 一些服务器相关的知识
* 最好在linux系统下进行开发

4. nodejs相关的学习资料
* nodejs官网  nodejs.org/nodejs.cn
* github 搜索nodejs项目来学习

5. 包管理器npm
* 允许用户从npm服务器下载别人编写的三方包到本地使用
* 允许用户从npm服务器下载安装别人编写的命令行程序到本地使用
* 允许用户将自己编写的包或命令行程序上传到npm 服务器供别人使用

6. 淘宝镜像： npm.taobao.org

7. nodejs REPL环境
* ctrl + c 退出当前终端
* ctrl + c 按下两次，退出node REPL
* ctrl + d 退出node REPL
* 向上/向下 键 - 查看输入的历史命令
* tab键 - 列出当前命令
* .help - 列出使用命令
* .break - 退出多行表达式
* .clear - 退出多行表达式
* .save filename - 保存当前的node REPL会话到指定文件

8. 包管理器npm详解
* 本地安装和全局安装，-g就是全局安装，不加-g直接安装在项目目录下，是局部安装
* npm的使用方法
* npm常用命令
* npm 更新：npm install npm -g