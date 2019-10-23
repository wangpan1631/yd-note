<!-- 直播笔记 -->
* 发现都记录到录播笔记里面了

* js错误，错误捕获，错误处理
```
try {
    var wp = 'pandora'；// 这里的分号写成中文的，try catch是捕获不到的
} catch (e) {
    console.log(e);
}
```

```
try{}catch(){}
window.addEventListener('error', (msg, url, row, col, error) => {
    console.log('error', msg);
    return false;
}, true)
```
* 