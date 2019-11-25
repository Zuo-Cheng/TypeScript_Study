var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var proson = /** @class */ (function () {
    function proson(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    proson.prototype.massage = function () {
        alert('我是一个消息');
    };
    proson.prototype.shyHello = function () {
        alert('我叫' + this.name + ',我的年龄是' + this.age + '，我是' + this.gender + '的');
    };
    return proson;
}());
var psn = new proson('左成', 19, '男');
psn.shyHello();
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.shyHello = function () {
        console.log('我叫' + this.name + ',我的年龄是' + this.age + '，我是' + this.gender + '的');
    };
    return Cat;
}(proson));
var Cars = new Cat('李四', 25, '女');
Cars.shyHello();
Cars.massage();
