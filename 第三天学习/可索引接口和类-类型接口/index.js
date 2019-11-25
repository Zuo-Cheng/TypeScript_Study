// //索引接口，用于对数组的约束
// interface arrayType{
//     [index:number]:string
// }
// //如上面的接口所示，变量使用了上面的接口类型的话，
// // 这个接口类型约束了，所使用这个接口i类型的数组的值
// // 必须是一个string类型
// let strList:arrayType=['zhangsan','lisi','wangwu']
//
// console.log(strList[2])
var stu = /** @class */ (function () {
    function stu(name, age, gender) {
        this.name = name;
        this, age = age;
        this.gender = gender;
    }
    stu.prototype.work = function () {
        console.log("\u6211\u53EB" + this.name + "\uFF0C\u6211\u7684\u5E74\u9F84\u662F" + this.age + "\uFF0C\u6211\u7684\u6027\u522B\u662F" + this.gender + "\uFF0C\u6211\u7684\u5DE5\u4F5C\u662F\u8BFB\u4E66");
    };
    return stu;
}());
var zhangsan = new stu('张三', 19, '男');
zhangsan.work();
