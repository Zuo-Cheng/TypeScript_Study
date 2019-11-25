var Mymodule;
(function (Mymodule) {
    var proson = /** @class */ (function () {
        function proson(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        proson.prototype.shyHello = function () {
        };
        return proson;
    }());
    Mymodule.proson = proson;
    var User = /** @class */ (function () {
        function User() {
        }
        User.prototype.uShyHello = function () {
            return "\u54C8\u54C8\u54C8";
        };
        return User;
    }());
    Mymodule.User = User;
})(Mymodule || (Mymodule = {}));
