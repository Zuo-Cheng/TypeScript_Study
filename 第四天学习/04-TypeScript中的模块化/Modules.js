"use strict";
exports.__esModule = true;
//通过export关键字引出成员
exports.names = '张三';
function laoshi() {
    return "\u6211\u662F\u8001\u5E08";
}
exports.laoshi = laoshi;
function student(name) {
    return "\u6211\u662F\u662F\u4E00\u4E2A\u5B66\u751F\uFF0C\u6211\u7684\u540D\u5B57\u53EB" + name;
}
//将当前模块中名字为student的成员导出
exports["default"] = student;
function students(name, age) {
    return "\u6211\u662F" + name + "\u6211\u7684\u5E74\u9F84\u662F" + age;
}
exports.students = students;
