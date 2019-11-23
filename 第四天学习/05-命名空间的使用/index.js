"use strict";
exports.__esModule = true;
var Systems;
(function (Systems) {
    var userA = /** @class */ (function () {
        function userA(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        userA.prototype.work = function () {
            console.log("\u6211\u53EB" + this.name + "\uFF0C\u6211\u7684\u5E74\u9F84\u662F" + this.age + "\uFF0C\u6211\u7684\u6027\u522B\u662F" + this.gender);
        };
        return userA;
    }());
    Systems.userA = userA;
    var temp = new userA('ZHANGSAN', '20', 'NAN');
    temp.work();
})(Systems || (Systems = {}));
exports.Systems = Systems;
// 使用命名空间中的成员
var temp = new Systems.userA('第一个System1的命名空间', '20', '男');
temp.work();
var System2;
(function (System2) {
    var person = /** @class */ (function () {
        function person(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        person.prototype.shyHello = function () {
            return "";
        };
        return person;
    }());
})(System2 || (System2 = {}));
// 使用关键字namespace，创建命名空间
var system3;
(function (system3) {
    var person = /** @class */ (function () {
        function person(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        person.prototype.styhello = function () {
            return "\u6211\u53EB" + this.name + ",\u6211\u7684\u5E74\u9F84\u662F" + this.age;
        };
        return person;
    }());
    system3.person = person;
})(system3 || (system3 = {}));
exports.system3 = system3;
//使用命名空间中的成员，
var temps1 = new system3.person('颤三', '20', '男');
var str = temps1.styhello();
var uName = temps1.name;
console.log(str);
