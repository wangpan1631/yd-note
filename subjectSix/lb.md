#### 专题六MVC MVVM框架那些事 录播笔记
- MVC -> MVP -> MVVM（MVVM的由来是MVP）
#### MVC: model view controler

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


前端发展方向：
前端图形化算法工程师
前端架构
前端全栈
高阶组件

#### React(关键几点: jsx、props、state、生命周期)，专注UI层的库，适用于大型应用项目的库，可以动态的感知state的变化
* 特点： 单向数据流（vue是双向数据流吗，双向绑定？）
**Flux**，是一种架构思想，专门解决软件的结构问题。它跟MVC架构是同一类东西，但是更加简单和清晰。
* View: 视图层
* Action(动作): 视图层发出的消息（比如mouseClick）
* Dispatcher(派发器): 用来接收Actions、执行回调函数
* Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒View要更新页面。

**React性能调优**
shouldComponentUpdate
mixins: [React.addons.PureRenderMixin]
```
shouldComponentUpdata: function(nextProps, nextState) {
    return nextProps.label !== this.props.label;
}

construct(props){
    super(props);
    this.shouldComponentUpdata = React.addons.PureRenderMixin.shouldComponentUpdate.bind(this);
}
```
* 收到初始化一个react项目的步骤
1. $ mkdir reactDemo 来创建一个项目文件夹
2. $ npm init -y 来初始化项目
3. 安装webpack，先全局安装：$ npm i webpack -g，然后通过命令**webpack -h**查看(npm info webpack是查看webpack版本信息)
4. 进入项目目录再次安装webpack(这步是局部安装)，$ npm i webpack --save-dev




**CPU 和 GPU的区别？**  CPU即中央处理器，GPU即图形处理器
**堆和栈的区别？**  
* 栈区(stack) - 由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈
* 堆区(heap) - 一般由程序员分配释放，若程序员不释放，程序结束时可能由OS回收。

#### 0830
* MVVM MVC MVP
* DI IOC AOP OOP
* ORM RESTFUL

前端路在何方
- 前端架构工程师
- 前端全栈工程师(想做全栈得学java)
- 前端图形化算法工程师（有这方面的课）
**学有所用，学到的框架要用到业务中**