<?php
/**
 * 面向对象封装特性
 * 定义一个类，学习public private protected
 */
class Person {
    public $name = 'wangpan'; // 公有的
    private $age = 26; // 私有的
    protected $money = 100; // 受保护的
    // 私有的成员方法，不能在类外部直接被访问
    private function getAge(){
        return $this -> age;
    }
    // 被保护的成员方法 ，不能在类的外部直接被访问
    protected function getMoney(){
        return $this -> money;
    }
    public function uerCard(){
        echo $this -> getAge().$this -> getMoney();
    }
}
$xw = new Person();

?>