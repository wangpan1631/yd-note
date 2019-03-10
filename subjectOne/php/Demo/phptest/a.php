<?php
    // 设置header
    // header("Content-type: text/html; charset=utf-8");
    header("Content-type: application/json; charset=utf-8");

    // $GLOBALS['b'] = 'test123';

    // 如何处理前端提交过来的数据
    // echo $_GET['username']; get请求
    // echo $_POST['username']; post请求

    $username = $_REQUEST['username'];

    if ($username == "admin") {
        // echo "登录成功";
        echo json_encode(array('msg' => '登录成功', 'errorCode' => 'OK'));
    } else {
        // echo "登录失败";
        echo json_encode(array('msg' => '登录失败', 'errorCode' => 'no'));
    }


?>