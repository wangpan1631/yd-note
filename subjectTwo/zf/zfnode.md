进程是操作系统分配资源和调度任务的基本单位（是一个比较大的）
一个进程里面可以有多个线程，比如一个浏览器可以开多个tab 就是多个线程

console.trace()  查看调用栈
程序是从上往下执行，栈是先进后出


4.5
**global全局对象**
windows里也有全局对象，但是不能直接访问，我们在浏览器里访问global是通过window实现的
* global的变量都是全局变量
* 所有的全局变量都是global的属性

重要的几个属性：
console
process: 当前进程
chdir
cwd
nextTick
stdout stderr stdin
buffer
clearImmediate clearInterval clearTimeout
setImmediate setInterval setTimeout

**4.11 event**
microtask 微任务 ajax 、setTimeout、setInterval、script
macrotask 宏任务 promise process.nextclick()
微任务在同步任务的尾部

node 断点调试(具体方法可以去node官网看)
$ node inspect app.js
$ n  执行下一步

process.nextTick()是一个独立的队列

**module**

