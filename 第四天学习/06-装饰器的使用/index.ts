
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

function Tools(params:any){
    console.log('hello word')
}



@Tools
 class persons{
        constructor(){

        }

        getData(){

        }


}

//ts中的箭头函数的使用
var temp :(name:string)=>string=function(){
    return '我是ts中的箭头函数，'+name
}

let str=temp('aaa')
alert(str)