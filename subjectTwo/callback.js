// 阻塞代码
/*const fs = require('fs'); // node内置模块，用来读取文件
let data = fs.readFileSync('data.txt'); // 同步读取，就是阻塞式读取
console.log(data.toString());*/

// 非阻塞代码
const fs = require('fs');
fs.readFile('data.txt', function(err, data){
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
})
console.log('程序执行完毕！');
