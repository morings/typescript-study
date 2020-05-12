//参数定义
var f = function (name, age) {
};
//下面是getInfo函数的实现
function getInfo(s) {
    if (typeof s === 'string') {
        return '我叫:' + s;
    }
    else {
        return '我的年龄是' + s;
    }
}
console.log(getInfo('张三')); //正确
console.log(getInfo(20)); //正确
