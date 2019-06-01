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
