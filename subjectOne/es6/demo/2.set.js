/**
 * Set,成员的值都是唯一的，可以实现快速去重
 */
let arr = new Set("112233");
// arr.add('banana');
// arr.add('peach');
console.log(arr.size); // 3 去重了
console.log(arr.has('3'));