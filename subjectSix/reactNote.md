#### react note
1. 很棒的资源查询网站：MDN 和 javascript.info

2. JSX 可以防止注入攻击，因为React DOM在渲染所有输入内容之前，默认会进行转义，可以有效地防止XSS（cross-site-scripting, 跨站脚本）攻击
3. JSX , Babel会把JSX转译成一个名为React.createElement()函数调用。

4. **元素渲染，** 元素是构成React应用的最小砖块，与浏览器的DOM元素不同，React元素是创建开销极小的普通对象。ReactDOM会负责更新DOM来与React元素保持一致。
```
<div id="root"></div>
```
上面代码，我们将称其为“根”DOM节点，因为该节点内的所有内容都将由React DOM管理。
5. React只更新它需要更新的部分，**难道新版本做了这么好的性能优化？**

6. **组件&Props**, 组件允许你将UI拆分为独立可复用的代码片段，并对每个片段进行独立构思。**React有不同类型的组件，老袁课上讲的很全面，记得复习补笔记**，这里就先简单说说**函数组件与class组件**
```
// 函数组件
function Welcome (props) {
    return <h1>Hello, {props.name}</h1>
}
// class组件
class Welcome extends React.Component {
    render () {
        return <h1>Hello, {this.props.name}</h1>
    }
}
// 注：组件名称必须以大写字母开头
```
7. **Props的只读性**，组件无论是使用函数声明还是通过class声明，都决不能修改自身的props。来看下面这个sum函数：
```
function sum (a, b) {
    return a + b;
}
```
这样的函数被称为**纯函数**，因为该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。React非常灵活，但它也有一个严格的规则：**所有React组件都必须像纯函数一样保护它们的props不被更改**

8. **State & 生命周期**，生命周期需要单独拿出来细学，看下新版增加了哪些生命周期，废弃了哪些生命周期？
* State的更新可能是异步的，出于性能考虑，React可能会把多个setState()调用合并成一个调用。因为this.props和this.state可能会异步更新，所以不要依赖他们的值来更新下一个状态。
```
// wrong
this.setState({
    counter: this.state.counter + this.props.increment
})
// correct
this.setState((state, props) => {
    counter: state.counter + props.increment
})
```
* 数据是向下流动的（这通常就是所说的“自上而下”或是“单向数据流”的数据流），任何的state总是所属于特定的组件，而且从改state派生的任何数据或UI只能影响树中“低于”它们的组件。

9. **事件处理**，React元素的事件处理和DOM元素的很相似，但是语法上有一些不同：React事件的命名采用小驼峰式，而不是纯小写，使用JSX语法时需要传入一个函数作为事件处理函数，而不是一个字符串。如下例子：
```
// 传统的HTML
<button onclick="activateLasers()">Activate Lasers</button>

// React中
<button onClick={activateLasers}>Activate Lasers</button>
```
* 在React中不能通过返回false来阻止默认行为，必须显示的使用preventDefault
* React中的事件（合成事件）和普通事件的区别（曾经面试被问到过）？
* **还有一点需要谨记，JSX回调函数中的this，在js中，class的方法默认不会绑定this，如果忘记绑定this.handleClick并把它传入了onClick，当你调用这个函数的时候this的值为undefined**, 分别通过箭头函数和 Function.prototype.bind （是一个面试点）来解决。