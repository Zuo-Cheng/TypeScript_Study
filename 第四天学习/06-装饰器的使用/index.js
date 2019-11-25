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
// 装饰器的使用
// function Tools(params:any){
//     console.log('hello word')
// }
// @Tools
//  class persons{
//         constructor(){
//         }
//         getData(){
//         }
// }
// //ts中的箭头函数的使用
// var temp :(name:string)=>string=function(){
//     return '我是ts中的箭头函数，'+name
// }
// let str=temp('aaa')
// alert(str)
var obj = 'liek zhangsan';
console.log(typeof (obj));
var str1 = obj;
console.log("\u6211\u662Fstr1\uFF0C\u6211\u7684\u7C7B\u578B\u662F\uFF1A" + typeof (str1));
