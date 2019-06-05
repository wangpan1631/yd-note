#### 专题六 MVVM框架那些事，主要学习Vue和React，把React放在第一位！！！

#### Vue源码解读

*在学习Vue源码之前我们先来了解一下Object.defineProperty, 语法是Object.defineProperty(object, propertyname, descriptor)
[参考资料](https://segmentfault.com/a/1190000007434923 "参考资料")
顾名思义，**为对象定义属性**，常规的定义对象的方法就此略过~
```
// 数据描述
let obj = {};
Object.defineProperty(obj, 'name', {
    value; 'wangpan',
    writable: false, // 是否可写，默认为false
    configurable: false, // 是否可删除，默认为false
    enumerable: false // 是否可枚举，默认为false
})
// 存取器描述 getter(获取属性值)、 setter(设置属性值)
let obj = {};
let initValue = 'hello';
Object.defineProperty(obj, 'newKey', {
	get: function(){
		console.log('我是获取值');
		return initValue;
	},
	set: function(value){
		console.log('我是设置值');
		initValue = value;
	}
})
// 获取值
console.log(obj.newKey);
// 设置值
obj.newKey = 'change value';
console.log(obj.newKey);
<!-- 注：get和set不是必须成对出现，任写其一就可以，如果不设置方法，则get和set的默认值为undefined -->

```


#### 讲给前端工程师的C语言
* CPU的指令集：x86/x64指令集、ARM指令集、MIPS指令集、RISC指令集
* CPU的组成：控制器、运算器、存储器
**了解汇编语言**
* 汇编语言是最贴近底层的计算机语言
* 汇编语言是直接操作硬件的，没有任何理由
* 汇编语言由指令与数据组成，没有任何语句
* 汇编指令受到硬件平台限制，可移植性很低
* 了解一些底层语言知识，对理解计算机的运作机制和内存管理大有好处
**C语言沉浮录**
* 天生的系统级语言
* 最早用来编写Unix内核
* 曾经最流行的语言
* 至今仍在不断发展

**C语言和JS的异同**
* C语言是编译型语言
* JS是解释型语言
* C语言要借助编译器转换成可执行程序
* JS要借助解释器引擎运行

**C语言与C++语言的区别**
* C++是新的编程语言，并不是C的扩展
* C语言是面向过程的，C++是面向对象的
* C和C++语言都有标准库
* 目前C大多用在网络相关和嵌入式等方面
* 目前C++大多用在复杂度引擎和应用软件方面

**内存和指针**，保存地址的变量就是指针
* 内存与内存地址
* 指针、地址与引用
* 指向变量的指针
* 指向指针的指针
* 指向函数的指针
* 动态内存分配

**内存动态分配**：分为堆区、栈区、全局区或静态区、程序代码区