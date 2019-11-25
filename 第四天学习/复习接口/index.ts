
// //普通接口的使用
// interface Person{
//     pName:string;
//     pAge:string;
//     pGender:string;
// }
//
// let psn:Person={
//   pName:'zhangsan',
//   pAge:'20',
//   pGender:'nan'
// }
//
// function ps(psn):string{
//
//     return `${psn.pName},${psn.pAge},${psn.pGender}`
// }
//
// console.log(ps(psn))


// //接口中可选参数的使用可多种类型的使用
// interface Person{
//     pName:string|number|undefined|boolean
//     pAge?:string;
//     pGender?:string;
// }
//
// function stu(psn:Person):string{
//     return `${psn.pName},${psn.pGender}`
// }
//
// let stuInfo= stu({
//     pName:'颤三',
//     pGender:'女'
// })
//
// let stuInfo2=stu({
//     pName:true,
//     pGender:'nan'
// })
//
// console.log(stuInfo)
// console.log(stuInfo2)

// //接口的练习
// interface Yuan{
//     color:string;//颜色
//     area:number;//半径
// }
//
// interface TuoYuan{
//     color?:string;//颜色
//     radius?:number;//半径
// }
//
// function Y(tuoyuan:TuoYuan):Yuan{
//     let a ={color:'rad',area:20}
//
//     if(tuoyuan.color!=null||tuoyuan.color!=undefined){
//         a.color=tuoyuan.color
//     }
//
//     if(tuoyuan.radius!=undefined){
//         a.area=a.area*tuoyuan.radius
//     }
//     return a;
// }
//
// console.log(Y({
//     color:'geend',
//     radius:50
// }))
//
// class Person implements Yuan,TuoYuan{
//     color:string;
//     area:number;
//
//     radius:number;
//
// }


// //接口中只读属性的使用
// interface Iperson{
//     readonly name:string;
//     readonly age:string;
//     readonly  gender:string
//
// }
//
// let p:Iperson={name:'张三',age:'20',gender:'男'}
// console.log(p.name)

// //只读数组的使用：使用ReadonlyArray<数据类型>
// let array:ReadonlyArray<string>=['张三','李四','王五','赵六']
//
// console.log(array)


// //参数的默认值
// interface Itool{
//     name:string;
//     age?:string
//     gender?:string
// }
//
// //let ar:Itool={name:'张三',age:'李四',gender:'男'}

// // 函数接口的使用
// interface Iperson{
//     (name:string):string
// }
//
// let pson:Iperson=function(name:string):string{
//     return `我的名字叫${name}`
// }
//
// let pson2:Iperson=(a:string):string=>{
//     return `我的名字是${a}`
// }
//
// console.log(pson('zuocheng'))
// console.log(pson2('赵六'))

// //可索引接口的使用
// interface Itoop{
//     [index:number]:string
// }
//
// let arr:Itoop=['张三','lisi','wangwu']
// console.log(arr[2])


// // 类类型
// interface Iperson{
//     name:string;
//     age:string;
//     gender:string;
//
//     work():string;
// }
//
// class person implements Iperson{
//     name:string;
//     age:string;
//     gender:string;
//
//     constructor(name:string,age:string,gender:string){
//         this.name=name
//         this.age=age;
//         this.gender=gender
//     }
//
//     work(): string {
//         return `我叫${this.name},我的年龄是${this.age},我的性别是${this.gender}`
//     }
// }
//
// let pson=new person('张三','12','安安')
// console.log(pson.work())

// 类类型接口的使用
interface Iperson{
    name:string;
    age:string;
    gender:string;


}

class person implements Iperson{
    name:string;
    age:string;
    gender:string;

    constructor(tool:Iperson){

    }
}
