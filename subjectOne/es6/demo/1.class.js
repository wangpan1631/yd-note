/**
 * class
 */
class Person {
    constructor(age){
        this.age = age;
    }
    tell () {
        console.log(`年龄是${this.age}`);
    }
}
class Man extends Person {
    constructor (age) {
        super(age);
        this.arr = [];
    }
    set menu (data) {
        this.arr.push(data);
    }
    get menu () {
        return this.arr;
    }
    // 重写父类的方法
    tell () {
        super.tell();
        console.log('hello!');
    }
    static init () {
        console.log('static');
    }
}
const xiaowang = new Man(26);
xiaowang.menu = 'fruits';
console.log(xiaowang.menu);

Man.init(); // 调用静态方法