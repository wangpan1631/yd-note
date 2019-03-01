#### 单元测试

* 目的：单元测试能够让开发者明确知道代码结果
* 原则：单一职责、接口抽象、层次分离
* 断言库：保证最小单元是否正常运行检测方法
* 测试风格：测试驱动开发（Test-Driven Development,TDD）、（Behavior Driven Development,BDD）行为驱动开发均为敏捷开发方法论。

**TDD**关注所有的功能是否被实现（每一个功能都必须有对应的测试用例），suite配合test利用assert（'tobi' == user.name）;

**BDD**关注整体行为是否符合整体预期，编写的每一行代码都有目的提供一个全面的测试用例集
* 单元测试框架
better-assert(TDD断言库)；should.js(BDD断言库);expect.js(BDD断言库)；chai.js(TDD BDD双模)；Jasmine.js(BDD)

* 单测运行流程
* karma 自动化runner集成phantomjs无刷新
* 报告和单测覆盖率检查

* 性能测试 
面向切面编程AOP无侵入式统计
* 压力测试
对网络接口做压力测试需要检查的几个常用指标有吞吐率、响应时间和并发数，这些指标反映了服务器并发处理能力。

pv网站当日访问人数，uv独立访问人数。pv每天几十万甚至上百万就需要考虑压力测试。换算公式QPS=PV/t ps:1000000/10*60*60-27.7(100万请求集中在10个小时，服务器每秒处理27.7个业务请求)

常用的压力测试工具是ab  siege   http_load

* 安全测试
xss    sql    csrf

* 用户真实性检查

1. selenium-webdriver
2. protractor selenium-standalone
3. http://webdriver.io/ 
4. 冒烟测试smoketest自由测试的一种，找到一个bug开放修复，然后专门针对此bug,有点节省时间
5. 回归测试