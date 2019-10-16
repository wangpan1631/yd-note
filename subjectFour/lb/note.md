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