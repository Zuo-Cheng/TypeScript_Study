//失败的例子
// function logHost(params:any){
//         console.log(params)
// }
//
// //错误示例
// // // @ts-ignore
// // @logHost
// // class person{
// //
// //     constructor(){
// //
// //     }
// //
// //     getdata(){
// //
// //     }
// // }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Tools(params) {
    console.log('hello word');
}
var persons = /** @class */ (function () {
    function persons() {
    }
    persons.prototype.getData = function () {
    };
    persons = __decorate([
        Tools
    ], persons);
    return persons;
}());
var temp = function () {
    return '我是ts中的箭头函数，' + name;
};
var str = temp('aaa');
alert(str);
