#### 专题六MVC MVVM框架那些事 录播笔记

#### Typescript
* ts安装
1. MacOS
安装homebrew 略过 --> 安装npm 略过 --> 安装ts（npm i typescript -g）--> 输入tsc查看是否安装成功
2. windows
安装node --> 安装ts（npm i -g typescript）--> 输入tsc查看

* ts数据类型：Boolean Number String Array Enum Any Void
> 初始化变量的时候，可以指定数据类型（const name: String = 'wangpan'）

3. 函数function参数
```
// 指定函数参数类型
function tell(name:string, age:number){
    return name + age;
}
// 指定函数可选参数
function tell2(firstName?:string, lastName?:string){
    return firstName + " " + lastName;
}
// 指定函数默认参数值
function tell3(firstName:string, lastName="pan"){
    return firstName + " " + lastName;
}
// 设置函数可变参数 ...
function tell4(firstName:string, ...restOfname:string[]){
    return firstName + " " + restOfname.join("-");
}
var pn = peopleName('iwen', 'imy', 'hua', 'li');
```

4. lambads 和 this 关键字
```
// js
var people = {
    name: ['iwen', 'ime', 'if', 'bean'],
    getName: function(){
        return function(){
            var i = Math.floor(Math.random() * 4);
            return {
                n: this.name[i]
            }
        }
    }
}
var myName = people.getName();
console.log(myName().n) // 这个时候打印输出是undefined， 因为this指向的是window

// ts 使用lambads（箭头函数）
var people = {
    name: ['iwen', 'ime', 'if', 'bean'],
    getName: function(){
        return () => {
            var i = Math.floor(Math.random() * 4);
            return {
                n: this.name[i]
            }
        }
    }
}
var myName = people.getName();
console.log(myName().n) // 可以正常的随机打印
```

5. ts函数重载
```
function fn1(name:string):string{}
```




#### Vue
vue是数据驱动的组件，为现代化的web界面而生，vue不是一个框架，它只是一个提供mvvm风格的双向数据绑定的库，专注于UI层面。
vue核心就是object.definepropterty