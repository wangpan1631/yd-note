/**
 * node里面一个非常重要的模块，events
 * 在node里面，node是基于事件驱动的
 */
let EventEmitter = require('events');
let util = require('util');

// 这是一个类
function Bell(){
    EventEmitter.call(this); // 继承私有属性
}
// 进行原型继承
util.inherits(Bell, EventEmitter);
let bell = new Bell();
function studentInClassroom () {
    console.log('student in classroom');
}
function teacherInClassroom (roomNum) {
    console.log('teacher in classroom');
}
bell.addListener('响', studentInClassroom);
bell.on('响', teacherInClassroom);
// 第一个参数是事件类型，第二个参数和后面的参数会传给监听函数
bell.emit('响', '301');