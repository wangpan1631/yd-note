<?php
/**
 * 测试构造方法和析构方法
 */
class Person {
    public function __construct ($name, $age)
    {
        // 当这个类new的时候自动执行
        $this -> name = $name;
        $this -> age = $age;
    }
    public function data(){
        return $this -> age;
    }
    public function __destruct(){
        // 用途 可以进行资源的释放操作 数据库关闭
        // 对象被销毁的时候执行，没有代码再去运行了
        echo "bye bye {$this -> name}";
    }
}
$xiaowang = new Person("first", 30); // new一个实例
$xiaowang -> data(); // 调用方法data
?>