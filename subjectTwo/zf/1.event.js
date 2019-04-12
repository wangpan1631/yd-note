/**
 * node里面一个非常重要的模块，events
 * 在node里面，node是基于事件驱动的
 */
// let EventEmitter = require('events'); // 原生的
let EventEmitter = require('./events'); // 自己实现的

let util = require('util');

// 这是一个类
function Bell(){
    EventEmitter.call(this); // 继承私有属性
}
// 进行原型继承
util.inherits(Bell, EventEmitter);
let bell = new Bell();
function studentInClassroom (roomNum, things) {
    console.log(`student has ${things} in classroom ${roomNum}`);
}
function teacherInClassroom (roomNum, things) {
    console.log(`teacher has ${things} in classroom ${roomNum}`);
}
function masterInClassroom (roomNum, things) {
    console.log(`master has ${things} in classroom ${roomNum}`);
}
bell.addListener('响', studentInClassroom);
bell.on('响', teacherInClassroom);
bell.once('响', masterInClassroom);
console.log('===========================');
// 第一个参数是事件类型，第二个参数和后面的参数会传给监听函数
bell.emit('响', '301', '书');
bell.emit('响', '301', '书');
