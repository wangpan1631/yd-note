### 录播

#### 跨域
1. cookie localStorage sessionStorage的区别
cookie会自动在前端和服务端之间传递，可以存储大小只有几KB
localStorage 和sessionStorage存储大小可以达到5M，sessionStorage是会话间的存储，当浏览器关闭时，缓存会被自动清除
2. 另外两种存储方式web SQL和indexDB 存储大小可以达到50M，但是属于异步的
3. 页面布局的时候，不要进行无意义的标签包括，且能少用标签就少用标签，因为操作DOM是很昂贵的

#### CSS3D
1. 炫酷的css3D网站：https://720yun.com/
2. [css icon](https://cssicon.space "css icon")

#### HTML5陀螺仪
**概念**：陀螺仪又叫角速度传感器，是不同于加速度计（G-sensor）的，它的测量物理量是偏转、倾斜时的转动角速度。在手机上，仅用加速度计没办法测量或重构出完整的3D动作，测不到转动的动作的，G-sensor只能检测轴向的线性动作。但陀螺仪则可以对转动、偏转的动作做很好的测量，这样就可以精确分析判断出使用者的实际动作。而后根据动作，可以对手机做相应的操作！可以让document监听deviceorientation 来获取相关的数据，里面包括3个值alpha、beta和gamma。
1. alpha: 移动设备水平放置时，绕z轴旋转的角度，数值为0度到360度
![alt text](./imgs/alpha.jpg "Title")
2. beta: 移动设备水平放置时，绕X轴旋转的角度，数值为-180度到180度。
![alt text](./imgs/beta.jpg "Title")
3. gamma: 移动设备水平放置时，绕Y轴旋转的角度，数值为-90度到90度。
![alt text](./imgs/gamma.jpg "Title")

**code**
1. deviceorientation 
设备的物理方向信息，表示为一系列本地坐标系的旋角。
2. devicemotion
提供设备的加速信息
3. compassneedscalibration
用于通知web站点使用罗盘信息校准上述事件

**淘宝造物节H5**

#### CSS3 核心高级技巧
**css双飞翼布局（圣杯布局）**
**等高**：实为假等高
实现三栏布局的方法：position、felx、grid
grid api: https://www.html.cn/archives/8510

盒模型：标准盒模型和怪异盒模型
 css icon -> cssicon.space
 css hint -> css 规范

 #### BFC IFC FFC GFC
 BOX: CSS布局的基本单位
 BOX是css布局的对象和基本单位
 * block-level box: display属性为block, list-item, tabel的元素，会生成block-level box。并且参与block formatting context
 * inline-level box: dispaly属性为inline, inline-block, inline-table的元素，会生成inline-level box。并且参与inlie formatting context
 Formatting context是W3C CSS2.1规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的Formatting context 有Block formatting context (简称BFC) 和 Inline formatting context(简称IFC)

 **哪些情况下会生成BFC？**
 * 根元素
 * float属性不为none
 * position为absolute或fixed
 * display为inline-block, table-cell, table-caption, flex, inline-flex
 * overflow不为visible
 
 **BFC原则：**
 BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
 * 两个BFC之间是独立的
 * 如果生成BFC，浮动元素也跟着计算（清除浮动：为达到清除内部浮动，给父元素添加overflow:hidden生成BFC，那么在计算高度时，父元素内部浮动的子元素也会参与计算）

 **IFC**(Inline Formatting Contexts)直译为“内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响）
 
 **FFC**(Flex Formatting Contexts)直译为“自适应格式化上下文”，display值为flex或者inline-flex的元素将会生成自适应容器（flex container）
 
 **GFC**(GridLayout Formatting Contexts)直译为“网格布局格式化上下文”，当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definitiong rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（gird row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。
 
 **能用一个html实现的布局就不要用两个**
 
 伪类:after和::after的区别？？？
 img特性：clip-path: polygon() ???

 ####贝塞尔曲线
 http://cubic-bezier.com/#.25,.1,.25,1
 ####animate.css（库）


#### 后端工程师的世界
1. nodejs express koa （Node的web服务器）
2. html css js前端代码是跑在浏览器里面的（浏览器和服务器）
3. 前后端分离，不但从工程上分离，而且前端代码和后端代码部署到不同的服务器上了，做了物理分离（前后端分离的典型应用场景：H5游戏、Native开发的移动APP、浏览器插件（比如google的扩展程序）、微信小程序、Electron开发的桌面应用、各类大型网站）
4. nginx, 做反向代理，维护静态资源
5. go语言，集成了现代语言的很多优势，运行速度接近C语言，在浏览器可能会挑战JS
6. **蚂蚁笔记就是用go语言写的**，[蚂蚁笔记开源代码](https://github.com/leanote/leanote "蚂蚁笔记开源代码")