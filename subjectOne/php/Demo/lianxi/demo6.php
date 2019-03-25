<?php
/**
 * 接口
 * 1、声明的关键字是interface
 * 2、接口可以声明常量也可以抽象方法
 * 3、接口中的方法都是抽象方法，必须得实现，不需要手动的用abstract去定义
 * 4、接口不能被实例化，需要一个类去实现它
 * 5、一个类不能继承多个类，一个类可以实现多个接口
 */

 interface Person {
    const NAME = 'xiaowang';
    public function run();
    public function eat();
 }
 interface Study {
    public function study();
 }
 class Student implements Person, Study {
     const data = '333';
    public function run(){
        echo "run";
    }
    public function eat(){
        echo "eat";
    }
    public function study(){
        echo "study";
    }
    public function test(){
        echo self::data;
    }
 }
 $huahua = new Student;
 $huahua -> eat();
 echo $huahua::NAME;
?>