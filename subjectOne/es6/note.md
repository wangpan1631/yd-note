阮一峰的ES6
ES6是2015年发布的，所有它又叫做ECMAScript 2015
v8 引擎就是chrome引擎
编译:
* babel 是一个广泛使用的ES6转码器，可以把ES6代码转化为ES5代码，从而在现有环境执行
需要在项目根目录配置.bablerc文件
```
{
    "preset": ["es2015"], //指定需要编译的版本
    "plugins": [] 
}
```
* Traceur(sudo npm i traceur -g)
严格模式 "use strict"

shim polyfill区别 ，自行google
css polyfill

#### 对象

#### Set(集合)和Map 二者区别是什么，使用场景是什么，（使用的比较少，自行收集资料总结）
Set的使用场景
快速数组去重(Set里面的元素都是独一无二的)

#### async await

ECMAScript5.1 张鑫旭 博客文章

http://www.cnblogs.com/xiaochaohuashengmi


