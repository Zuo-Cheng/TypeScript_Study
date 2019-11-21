var psn = function (data) {
    alert(data);
};
psn('张三');
var psn2 = function (data, item) {
    alert(data + item);
};
//定义函数
function stu() {
    return '我是一个string返回值的函数';
}
//使用函数
stu();
//定义匿名函数
var stu2 = function () {
    return '我是一个匿名函数';
};
//调用
stu2();
//传递参数
var stu3 = function (name, age) {
    return name + age;
};
//可选参数
function getInfo(name, age) {
    console.log('我叫' + name);
}
// 默认参数
function getDefualt(name, age) {
    if (age === void 0) { age = 20; }
    console.log('我叫' + name + '，我的年龄是' + age);
}
// 使用
getDefualt('左乘');
// 三点运算符
function getdata() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    console.log(sum);
    return sum;
}
// 使用
alert(getdata(1, 2, 3, 4, 5, 6, 7, 8, 9));
var temp = function (_data) {
    alert(_data);
};
temp('张三');
function dataInfo(str) {
    if (typeof str === 'string') {
        return '我是一个方法，我叫' + str;
    }
    else {
        return "\u6211\u662F\u7B2C\u4E8C\u4E2A\u65B9\u6CD5\uFF0C\u6211\u7684\u5E74\u9F84\u662F" + str;
    }
}
alert(dataInfo('张三'));
alert(dataInfo(20));
