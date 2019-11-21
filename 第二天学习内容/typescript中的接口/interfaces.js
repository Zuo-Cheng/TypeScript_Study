// //定义接口
// interface Itool{
//     name:string;
//     age:string;
//     gender:string;
//
//     shyHello():void
// }
//
// //声明一个类，实现一个接口
// class person implements Itool {
//     name:string;
//     age:string;
//     gender:string;
//
//     shyHello(): void {
//         console.log('hello word 我是实现了接口Itool的person类')
//     }
// }
// // 实例化这个类
// let pson=new person()
// pson.shyHello()
function user(u) {
    console.log("\u6211\u53EB" + u.name + "\u6211\u7684\u5E74\u9F84\u662F" + u.age);
}
user({ name: '张三' });
