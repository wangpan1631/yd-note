1. php变量前面要有个$符号,比如： $a = "test"
2. isset(变量名)，判断一个变量是否声明
3. 引入文件的写法
```
<?php
    require_once(文件名) // 法一
    include_once(文件名) // 法二

?>
```
4. 数组
```
<?php
    $arrayTest = array('0' => "苹果", 1 => "测试");
    echo json_encode($arrayTest);
?>
```
5. session 会话间的机制
6. php设置header
```
header("Content-type: text/html; charset=utf-8");
```
7. 处理（or获取）其它页面（前端页面）提交过来的数据
```
echo $_GET['username'] // get method
echo $_POST['username'] // post method
echo $_REQUEST['username'] // 通用方法
```
8. 请求的时候，如果有入参的值是undefined，传递的时候这个参数会被过滤掉

