// 统计一下当前的所有的函数谁耗时最长

function test () {
    alert(2);
    return 'me test';
}
Function.prototype.before = function (fn) {
    var __self = this;
    fn();
    __self.apply(this, arguments);
}
Function.prototype.after = function (fn) {
    var __self = this;
    __self.apply(this, arguments);
    fn(); 
}
test.after(function(){
    alert(3);
})