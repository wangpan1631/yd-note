<?php
/**
 * 抽象类
 * 含有抽象方法的类必须是抽象类
 * 抽象类不一定非得含有抽象方法
 * 抽象类可以存在普通方法
 * 抽象类不能被实例化，必须有一个子类去继承，并且把抽象类的抽象方法都实现了
 */
abstract class Person {
    // 抽象方法没有方法体
    abstract function eat()
}
class Man extends Person {
    public function eat(){
        echo "eat";
    }
}
?>