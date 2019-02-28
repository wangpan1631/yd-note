#### yd-note

1. 单元测试
* 目的：单元测试能够让开发者明确知道代码结果
* 原则：单一职责、接口抽象、层次分离
* 断言库：保证最小单元是否正常运行检测方法
* 测试风格：测试驱动开发（Test-Driven Development,TDD）、（Behavior Driven Development,BDD）行为驱动开发均为敏捷开发方法论。
**TDD**关注所有的功能是否被实现（每一个功能都必须有对应的测试用例），suite配合test利用assert（'tobi' == user.name）;
**BDD**关注整体行为是否符合整体预期，编写的每一行代码都有目的提供一个全面的测试用例集
* 单元测试框架
better-assert(TDD断言库)；should.js(BDD断言库);expect.js(BDD断言库)；chai.js(TDD BDD双模)；Jasmine.js(BDD)

* 单测运行流程
