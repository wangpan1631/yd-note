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
