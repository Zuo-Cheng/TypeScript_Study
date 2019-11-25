
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

let obj1:any=123
//将这个obj1推断成number类型
let num:number=(<number>obj1)


let obj:any ='liek zhangsan'
//将obj推断成string类型
let str1:string=(obj as string)

console.log(`我是str1，我的类型是：`+typeof(str1))
