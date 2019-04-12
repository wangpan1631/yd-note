function EventEmitter () {
    this.events = {}; // 会把所有的事件监听函数放在这个对象里保存
}
// 给指定的事件绑定事件处理函数，1参数是事件类型，2参数是事件监听函数
EventEmitter.prototype.on = EventEmitter.prototype.addListener = 
function (type, listener) {
    if (this.events[type]) {
        this.events[type].push(listener);
    } else {
        this.events[type] = [listener];
    }
}
EventEmitter.prototype.once = function (type, listener) {
    // 用完即焚
    let wrapper = (...rest) => {
        listener.apply(this, rest); // 先让原始的监听函数执行
        this.removeListener(type, wrapper);
    }
    this.on(type, wrapper)
}
EventEmitter.prototype.removeListener = function (type, listener) {
   if (this.events[type]) {
       this.events[type] = this.events[type].filter(l => l != listener);
   } 
}
EventEmitter.prototype.removeAllListener = function (type) {
   delete this.events[type];
 }
EventEmitter.prototype.emit = function(type, ...rest){
    this.events[type] && this.events[type].forEach(listener => listener.apply(this, rest));
}
module.exports = EventEmitter;