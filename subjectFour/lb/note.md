<!-- 录播笔记 -->
* [雅虎军规](https://juejin.im/post/5b73ef38f265da281e048e51 "雅虎军规")
* Aspect Oriented Programming(AOP),面向切面编程，是一个比较热门的话题。AOP主要实现的目的是针对业务处理过程中的切面进行提取，它所面对的是处理过程中的某个步骤或阶段，以获得逻辑过程中各部分之间低耦合性的隔离效果。

* 性能优化之 performance.timing
* timeLine掌控帧渲染模式
> 网页动画能够做到每秒60帧，就会跟显示器同步刷新，一秒之内进行60次重新渲染，每次重新渲染的时间不能超过16.66毫秒。
- 蓝色： 网络通信和HTML解析
- 黄色：JS执行
- 紫色：样式计算和布局，即重排
- 绿色：重绘
- window.requestAnimationFrame()下一次、window.requestIdleCallback()下几次重新渲染时
> 触发分层
- 获取DOM并将其分割为多个层
- 将每个层独立的绘制进位图中
- 将层作为纹理上传至GPU(GPU是显卡)
- 复合多个层来生成最终的屏幕图像。

* 引起Nodejs内存泄漏的几个方面
- 全局变量需要进程退出才能释放
- 闭包引用中间函数，中间函数也不会释放，会使原始的作用域也不会释放，作用域不被释放它产生的内存占用也不会被释放。所以使用过后**重置为NULL**等待垃圾回收。
- 谨慎使用内存当做缓存，建议采用redis或者memcached。好处：外部缓存软件有着良好的缓存过期淘汰策略以及自有的内存管理，不影响Node主进程的性能。减少内部常驻内存的对象数量垃圾回收更高效率，进程间共享缓存。

* 浏览器的缓存策略，有些浏览器可能不支持
* 离线缓存 localForage库
* [basketjs](https://www.giuem.com/use-basketjs/ "basketjs")

* 性能优化学徒工：四字箴言---雅虎军规、缓存策略、网站协议、小字为先（什么大就把什么变小）
* 渲染中性能优化：四字箴言---重绘影响、如何规避、重排影响、高效渲染
* 页面加载性能优化：CSR FMP SSR TTI(用户可交互的时间)
* nodejs性能优化：四字箴言---内存回收、内存快照、压力测试、监控异常
* 重排和重绘 网页整体渲染过程
- 获取dom 分割层
- 根据每层节点计算样式结果recalculate style
- 为每个节点生成图形和位置layout
- 将每个节点绘制填充到当前帧的图层为图中 paint
- 将图层上传到gpu gpu bitmap专门处理图像
- 把符合要求的多个图层合并成图像， composite layerz
* 总结渲染阶段 ：layout -> paint -> composite -> layers
* 什么情况下分层？
- 根元素、position、transform、半透明、滤镜、canvas、video、overflow
* gpu直接参与的情况：css3d、video、webgl、transform、滤镜   ---开启硬件加速
* 重排一定会引起重绘，重绘不一定会引起重排
* 真路由是要真正的到服务端去落地，假路由页面不会刷新（history）

* 为什么会出现白屏？
> css & js文件获取，JS文件解析，DOM生成，CSSOM生成。首帧html包含内容 -> 基本的DOM和基本的CSS

* requestAnimationFrame()
* requestIdleCallback() --- react 16.8 fiber
