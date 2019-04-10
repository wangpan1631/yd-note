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
EventEmitter.prototype.emit = function(type){
    this.events[type] && this.events[type].forEach(listener => listener());
}
module.exports = EventEmitter;