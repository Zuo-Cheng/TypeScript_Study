
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


// // 属性接口：首先定义一个接口
// interface User{
//     name:string;
//     age:number
// }
// // 定义一个方法，设置方法的参数是一个接口
// function users(name:User){
//     console.log(`我叫`+name.name+`,我的年龄是`+name.age)
// }
// //实例化一个对象，这个对象必须要和接口中的字段名一摸一样，
// //并且数据类型也必须一致
// var obj={name:'张三',age:18}
//
// //将这个对象当参数传递至users方法中
// users(obj)


// 接口中的可选属性
interface Itool{
    name:string;
    //在接口的变量后面加上一个？号，
    //就可以将这个参数变成可选属性
    age?:string
}

function user(u:Itool){
    console.log(`我叫`+u.name+`我的年龄是`+u.age)
}
//可选属性可以传，也可以不传，不传的话就是undefined
user({name:'张三'})
