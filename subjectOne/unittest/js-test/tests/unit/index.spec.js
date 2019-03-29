describe("函数基本的api测试", function(){
    it("+1函数是否可用", function(){
        expect(window.add(1)).toBe(1);
        expect(window.add(3)).toBe(4);
    })
})

// describe("函数基本的api测试", function(){
//     it("+1函数是否可用", function(){
//         expect(window.add(1)).toBe(2);
//     })
// })