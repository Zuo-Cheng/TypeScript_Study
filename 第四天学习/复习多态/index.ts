//多态的使用
// class person {
//     name:string;
//     age:string;
//     gender:string;
//
//     constructor(name:string,age:string,gender:string){
//         this.name=name
//         this.age=age
//         this.gender=gender
//     }
//
//     work():string{
//         return `我是父类中的work方法`
//     }
//
// }
//
// class Tool extends person {
//
//     Tname:string;
//
//     // constructor(name:string,age:string,gender){
//     //     super(name,age,gender)
//     // }
//
//     work():string{
//         console.log( `我是Tool类中的work方法`)
//         console.log(super.work())
//         return ``;
//
//     }
// }
// let t=new Tool('znagnsan','fda','fds')
// t.work();
//
// class student extends Tool {
//
//     syHello():string{
//         return ``
//     }
// }


//只读属性的使用
// class person{
//     name:string
//     age:string;
//     gender:string;
//
//     work():string{
//         return ``
//     }
// }
//
// class student extends person{
//
//     readonly tofa:string='hei'
// }
//
// let stu=new student()
//
// console.log(stu.t


// //参数属性的使用
// //声明一个类
// class person1{
//     //不使用参数属性是这样写的
//     name:string;//声明
//     constructor(name:string){
//         this.name=name//赋值
//     }
//
// }
//
// let p1=new person1('李四')
// console.log(p1.name);
//
// //参数属性的使用:就是一种简写形式
// class person{
//     //直接简写成这样就可以了
//     constructor(public name:string){
//
//     }
// }
// let p=new person('张三丰')
// console.log(p.name);

//
// class  person {
//
//     constructor(public name:string){
//
//     }
//
// }

// //接口的练习
// interface Itool{
//     name:string;
//     age:string;
//     gender:string;
// }
//
// interface GuiFan{
//     (value:string):string
// }
//
// let p:GuiFan=function (name:string):string {
//     return `我是按照接口规范的函数`
// }
//
// console.log(p('zs')
// )
//
// class person implements Itool{
//     name:string;
//     age:string;
//     gender:string;
//
//     constructor(name:string,age:string,gender:string){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
//
//     work():string{
//         return `name是${this.name},年龄是${this.age},性别是${this.gender}`;
//     }
// }
//
//
// let pson=new person('zx','20','nan')
//
// console.log(pson.work())

// //泛型接口的使用
// interface Itool<T>{
//     (value:T):T;
// }
//
// let a:Itool<string>=function(name:string):string{
//     return  ``;
// }

// //复习参数属性的使用
// class person{
//     constructor(public name:string)
//     {
//
//     }
//
//
// }
//
// let pson=new person('zs')
// console.log(pson.name);

