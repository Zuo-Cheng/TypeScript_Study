var Proson = /** @class */ (function () {
    function Proson(width, height) {
        this.width = width;
        this.height = height;
    }
    Proson.prototype.shyHello = function () {
        return this.width + this.height;
    };
    return Proson;
}());
var p = new Proson(200, 200);
alert(p.shyHello());
