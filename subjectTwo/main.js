// 调用Hello模块
var Hello = require('./hello');
hello = new Hello();
hello.setName('wangwang');
hello.sayHello();