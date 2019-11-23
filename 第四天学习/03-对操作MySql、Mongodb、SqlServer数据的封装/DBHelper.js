var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.Add = function (info) {
        return false;
    };
    MysqlDb.prototype.Delete = function (id) {
        return false;
    };
    MysqlDb.prototype.SelectInfo = function (id) {
        return [];
    };
    MysqlDb.prototype.Updata = function (info, id) {
        return false;
    };
    return MysqlDb;
}());
var SQLserver = /** @class */ (function () {
    function SQLserver() {
    }
    SQLserver.prototype.Add = function (info) {
        console.log(info);
        return true;
    };
    SQLserver.prototype.Delete = function (id) {
        return false;
    };
    SQLserver.prototype.SelectInfo = function (id) {
        return [];
    };
    SQLserver.prototype.Updata = function (info, id) {
        return false;
    };
    return SQLserver;
}());
var user = /** @class */ (function () {
    function user(params) {
        this.name = params.name;
        this.age = params.age;
        this.gender = params.gender;
    }
    return user;
}());
var u = new user({
    name: '张三',
    age: '20',
    gender: '男'
});
var sqls = new SQLserver();
sqls.Add(u);
