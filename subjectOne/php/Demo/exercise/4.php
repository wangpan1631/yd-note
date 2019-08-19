<?php
/**
 * 父类
 */
class Person {
    public $name;
    private $age;
    protected $money;
    function __construct($name,$age,$money){
        $this -> name = $name;
        $this -> age = $age;
        $this -> money = $money;
    }
    public function userCard(){
        echo "name->".$this -> name." age->".$this->age."money->".$this->money;
    }
}
class Yellow extends Person {
    function __construct($name,$age,$money){
        $this -> name = $name;
        $this -> age = $age;
        $this -> money = $money;
    }
}
$xw = new Yellow("wangpan", 26, 100);
$xw -> userCard();

?>