// 引入Eevnt模块并创建EventEmitter对象
const events = require('events');
const eventEmitter = new events.EventEmitter();

// 绑定事件处理函数
const connctHandler = function connected() {
    console.log('connected被调用');
}
eventEmitter.on('connection', connctHandler); // 完成事件绑定
// 触发事件
eventEmitter.emit('connection');
console.log('程序执行完毕');