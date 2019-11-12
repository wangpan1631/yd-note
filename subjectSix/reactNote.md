#### react note(react是用于构建用户界面的js库，专注于UI层)
#### 核心概念
1. 很棒的资源查询网站：MDN 和 javascript.info

2. JSX 是一个看起来像XML的JS语法扩展。元素是构成React应用的最小单位，JSX就是用来声明React当中的元素，React使用JSX来描述用户界面；可以防止注入攻击，因为React DOM在渲染所有输入内容之前，默认会进行转义，可以有效地防止XSS（cross-site-scripting, 跨站脚本）攻击（JSX优点：JSX执行更快，因为它在编译为js代码后进行了优化）
3. JSX , Babel会把JSX转译成一个名为React.createElement()函数调用。所以，本质上来讲，JSX只是为React.createElement(component, props, ...children)方法提供的语法糖。

4. **元素渲染，** 元素是构成React应用的最小单位，与浏览器的DOM元素不同，React元素是创建开销极小的普通对象。ReactDOM会负责更新DOM来与React元素保持一致。
```
<div id="root"></div>
```
上面代码，我们将称其为“根”DOM节点，因为该节点内的所有内容都将由React DOM管理。

5. React只更新它需要更新的部分，**难道新版本做了这么好的性能优化？**

6. **组件&Props**, 组件允许你将UI拆分为独立可复用的代码片段，并对每个片段进行独立构思。**React有不同类型的组件，老袁课上讲的很全面，记得复习补笔记**，这里就先简单说说**函数组件与class组件**
* 有状态组件，除了使用外部传入的数据以外（通过this.props访问传入数据），组件还可以拥有其内部的状态数据(通过this.state访问状态数据)。当组件的状态数据改变时，组件会调用render()方法重新渲染。
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

10. **条件渲染**，React中的条件渲染和js中的一样，使用js运算符**if**或者**条件运算符(与运算符&& 和三目运算符)**去创建元素来表现当前的状态。然后让React根据它们来更新UI ；在少数情况下，可能需要隐藏组件，可以让render方法直接返回null，而不进行任何渲染。

11. **列表 && Key**，不建议使用索引来用作key值，因为这样做会导致性能变差，还可能引起组件状态的问题。**key只是在兄弟节点之间必须唯一，**数组元素中使用的key在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组是，我们可以使用相同的key值。

12. **表单**，很重要的一块知识，因为是晚上看，看的有些晕乎，后面再**着重看一下，**
* 受控组件和非受控组件(input textarea select都是受控组件；file input是非受控组件)
* 官网推荐的form完整的解决方案[formik](https://jaredpalmer.com/formik/ "formik")

13. **状态提升**，多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。（估计这里是为状态管理redux or mbox做准备）
* 在 React 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。通常，state 都是首先添加到需要渲染数据的组件中去。然后，如果其他组件也需要这个 state，那么你可以将它提升至这些组件的最近共同父组件中。你应当依靠自上而下的数据流，而不是尝试在不同组件间同步 state。

14. **React哲学**
* 组件的划分，可以将组件当做一种函数或者对象来考虑，根据**单一功能原则**来判定组件的范围，也就是说，**一个组件原则上只能负责一个功能。如果他需要负责更多的功能，这个时候应该考虑将它拆分成更小的组件。**
* 最好将渲染UI和添加交互这两个过程分开。

#### 高阶指引
1. **Context**, Context提供了一个无需为每层组件手动添加props，就能在组件树间进行数据传递的方法；使用场景：如果组件树一层层嵌套的很深，底层的子组件需要顶层的父组件一层一层往下传递数据给它，这个时候就可以使用context，它可以共享那些对于一个组件树而言是“全局”的数据，其实就是**context可以实现跨层级的组件数据传递**。（没有在实际项目中使用过，还是有些晕乎！）
2. [context参考资料](https://juejin.im/post/5a90e0545188257a63112977 "context参考资料")

3. **错误边界**，是一种React组件，这种组件**可以捕获并打印发生在其子组件树任何位置的js错误、并且，它会渲染出备用UI**，而不是渲染那些崩溃了的子组件树。错误边界在渲染期间、声明周期方法和整个组件树的构造函数中捕获错误。(可以使用错误边界，而非每次出现错误时卸载整个应用。错误边界是用以在子树内部捕获错误并在其位置展示回退UI的特殊组件，可以认为错误边界类似于try-catch语句，但针对React组件)
* 如果一个class组件中定义了static getDerivedStateFromError()或componentDidCatch()这两个生命周期方法中的任意一个(或两个)时，那么它就变成一个错误边界。
4. 错误边界无法捕获以下场景中的错误：事件处理、异步代码、服务端渲染、它自身抛出来的错误。
5. 自React16起，任何未被错误边界捕获的错误将会导致整个React组件树被卸载。

6. **Refs转发**是一项将ref自动地通过组件传递到其一子组件的技巧。
- 不能在函数式组件上使用ref属性。因为它们没有实例。
```
const FancyButton = React.forwardRef((props, ref) => {
    <button ref={ref} className="FancyButton>
        {props.children}
    </button>
})

// 你可以直接获取 DOM button的 ref：
const ref = React.createRef();
<FancyButton ref={ref}> Click me!</FancyButton>
```

7. **Fragments** <></> ，官方说目前这种写法还没有得到大多数工具的支持
```
class Colums extends React.Component {
    render() {
        return (
            <>
                <td>Hello</td>
                <td>World</td>
            </td>
        );
    }
}
```

8. **高阶组件(HOC--higher order component)**，高阶组件是参数为组件，返回值为新组件的函数。（不太好理解，晕乎！）

9. **深入JSX**，它仅仅只是React.createElement(component, props, ...children)函数的语法糖。
```
// 属性展开，如果已经有了一个props对象，可以使用展开运算符...来在JSX中传递整个props对象，以下两个组件是等价的：
function App1() {
    return <Greeting firstName="Ben" lastName="Hector" />;
}
function App2() {
    const props = {firstName: 'Ben', lastName='Hector'};
    return <Greeting {...props} />
}
```

10. 非DOM属性介绍
* dangerouslySetInnerHTML警告，应该被用来表明净化后的数据。
* ref在react里的应用（ref获取真实的DOM节点，是真实DOM，不再是js虚拟出来的DOM对象）
* key提高渲染性能

11. webapp的优缺点
- web基于DOM，而DOM很慢
- DOM拖慢JS
- 网页是单线程的
- 网页没有硬件加速
- **跨平台：所有系统都能运行**
- **免安装：打开浏览器，就能使用**
- **快速部署：升级只需在服务器更新代码**
- **超链接：可以与其他网站互联，可以被搜索引擎检索**
- **（如果将网页变成了一个个canvas,这样就绕开了DOM,降低了操作时滞，canvas可以被硬件加速，这样就提高了性能，再造一套HTML+CSS。）**

12. react-canvas，使用这个库可以抛开JSX，构建高性能的应用（使用这个库需要canvas功底好）

13. 状态的介绍：
- 状态：事物所处的状况
- 状态是由事物自行处理，不断变化的
- 对于react来讲一切变化全部基于状态
- setState来更新状态（setState -> diff算法 -> 如果变化了就更新）

14. 属性和状态的区别
- 都是纯JS对象
- 都会触发render更新
- 都具有确定性
- 组件在运行时**需要修改**的数据就是状态
- **属性值传递一次，是组件与组件之间信息传递的载体，状态在不停的更新，是在组件内部更新的**

15. 生命周期
> 组件本质上是**状态机，**输入确定，输出一定确定。状态发生
* 初始化阶段
- getDefaultProps(ES6 defaultProps)：只调用一次，实例之间**共享引用**
- getInitialState(ES6 super(props){})：初始化每个实例特有的状态
- componentWillMount：render之前最后一次**修改状态**的机会
- render：只能访问this.props和this.state，只有一个顶层组件，**不允许**修改状态和dom输出。
- componentDidMount：成功render并渲染完成真实DOM之后触发，可以修改DOM（ReactDOM.findDOMNode(this.refs.myText)）(可以在这个方法中调用setTimeout、setInterval或者发送AJAX请求等操作)
* 运行时阶段
- componentWillReceiveProps：父组件修改属性触发，可以修改新属性和状态（在组件接收到一个新的prop时被调用）
- shouldComponentUpdate：判断一个节点是否需要更新，返回false会阻止render调用（在组件接收到新的props或state时被调用）
- componentWillUpdate：不能修改属性和状态（在组件接收到新的props或state但没有render时被调用）
- render：只能访问this.props和this.state，只有一个顶层组件，不允许修改状态和dom输出
- componentDidUpdate：更新完成（在组件完成更新之后立即调用）
* 销毁阶段
- componentWillUnmount：在删除组件之前进行一些删除操作，比如删除定时器

16. 可控和不可控控件
- 可控控件：符合react的数据流，数据存储在state中，便于使用;便于对数据进行处理；defaultValue和value={this.state.value}
- 不可控，未完。。。待续

17. PropTypes进行类型检查，注意：PropTypes自从Reactv15.5起已弃用，需要使用prop-types库代替。
- 随着应用日渐庞大，你可以通过类型检查捕获大量错误。对于某些应用来说，可以使用**Flow or TypeScript**这样的JS扩展来对整个应用程序进行类型检查。对于更大的代码库我们建议使用Flow or TypeScript来替代PropTypes。

18. 性能优化
* shouldComponentUpdate
* PureComponent
* Immutable.js [Immutable.js了解](https://juejin.im/post/5ac437436fb9a028c97a437c "Immutable.js了解")

19. 自动绑定this
- 对于使用class关键字创建的React组件，组件中的方法是不会自动绑定this的。类似地，通过ES6 class生成的实例，实例上的方法也不会绑定this。以下三种方法可以绑定this：
* 把方法绑定给构造器(constructor)
* 使用箭头函数，比如这样写：onClick={e => this.handleClick(e)}
* 使用createReactClass

20. Portals---提供了一种将子节点渲染到存在于父组件以外的DOM节点的优秀的方案。



