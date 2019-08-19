<?php
/**
 * 接口，定义一些动作，不干具体的活
 * 接口声明的关键字是interface
 * 接口可以声明常量也可以抽象方法
 * 接口中的方法都是抽象方法，必须要实现，不需要用abstract去人肉的定义
 * 接口不能被实例化，需要一个类去实现它
 * 一个类不能继承多个类，但是可以实现多个接口
 */

interface Person {
    const NAME = 'Lily';
    public function run();
    public function eat();
}
interface Study {
    public function study();
}
class Student implements Person,Study {
    public function run(){
        echo "run";
    }
    public function eat(){
        echo "eat";
    }
    public function study(){
        echo "study";
    }
}
$xw = new Student;
$xw -> eat();
?>