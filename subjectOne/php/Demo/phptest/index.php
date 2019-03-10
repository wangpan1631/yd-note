<!DOCTYPE html>
<html>
<meta charset="utf-8" />
<title>my first php</title>
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<body>
    <?php
        $arrayTest = array('0' => "苹果", 1 => "测试");
        // echo json_encode($arrayTest);
    ?>
    <form>
    <p>
        <label for="username">用户名：</label>
        <input type="text" name="username" id="username"/>
    </p>
    <p>
        <label for="password">密码：</label>
        <input type="text" name="password" id="password"/>
    </p>
        <input type="submit" value="提交" id="btn"/>
    </form>
</body>
<script>
    $('#btn').click(function(e){
        // alert(1)
        //e.preventDefault(); // 阻止默认事件
        $.ajax({
            url: 'a.php',
            type: 'post',
            data: {
                username: $('#username').val()
            },
            dataType: "json",
            success: function(data){
                alert(data.msg)
            },
            error: function(){
                alert('登录失败')
            }
        });
    })
</script>
</html>