
// //数据类型的使用
// let sum:number=30;
//
// let str:string='字符串'
//
// let array:string[]=['张三','李四','王五']
//
// let renyi:any[]=[1,2,3,'张三',true,false]
//
// let tas:string|number|null|undefined;
//
// let bool:boolean=true
//
// let arrays:Array<string>=['张三','李四','王五']
//
// for (let i in arrays){
//     console.log(arrays[i])
// }
//
// for(let item in renyi){
//     console.log(renyi[item])
// }


// //ts中的函数
// function person():number[]{
//     let sum:number=0;
//     let num_1:number=0;
//     let num_2:number=0;
//
//     for (let i = 1; i <= 100; i++) {
//         if(i%2==0){
//             num_1+=i;
//         }else{
//             num_2+=i;
//         }
//
//         sum+=i;
//     }
//
//      let a:number[]= [sum,num_1,num_2]
//     return a;
// }
//
// for (let i = 0; i < person().length; i++) {
//     console.log(person()[i])
// }
//


// //ts中的类
// class person{
//     name:string;
//     age:number;
//     gender:string;
//
//     constructor(name:string,age:number,gender:string){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
//
//     shyHello():string{
//         return `我叫`+this.name+`，我的年龄是`+this.age+`，我的年龄是`+this.gender
//     }
// }
//
// let pson=new person('张三',18,'男');
//
// alert(pson.shyHello())


// //ts中的静态方法和静态属性和修饰符的使用
// class person{
//
//     public  static  names:string='张三'
//     private age:number=20
//     public gender:string;
//
//     public static  myWork():string{
//         return '我叫'+this.names;
//     }
// }
//
// console.log(person.names)
//
// console.log(person.myWork())


// // ts中的继承和多态
//
// class person {
//     name:string;
//     age:number;
//     gender:string
//
//     constructor(name:string,age:number,gender:string){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
//
//     work():void{
//         console.log('人类在工作')
//     }
// }
//
//
// class stu extends person{
//
//     work(): void {
//         console.log('我是学生，我的工作是学习')
//     }
// }
//
// class LaoShi extends person{
//     work(): void {
//         console.log('我是老师，我的工作是教学')
//     }
// }
//
//
// let zhangsan=new stu('张三',18,'男');
// zhangsan.work();
//
// let lisi=new LaoShi('李四',20,'男')
// lisi.work();


// // ts中的重载
// function hello(name:string):string;
// function hello(gender:boolean):string;
// function hello(age:number):string;
// function hello(obj:any):any{
//     if(typeof obj==='string'){
//         return `我是第一个方法`
//     }else if(typeof obj==='boolean'){
//         return true
//     }else{
//         return 666
//     }
// }
//
// alert(hello('张三'))
// alert(hello(true))
// alert(hello(20))


// // ts中的三点运算符,就是可变参数数组
// function person(name:string,...moneyList:any[]):any[]{
//
//     let content:any[]=[name,moneyList]
//     return content;
// }
//
// let contents=person('张三',1,2,3,'李四','wangwu',true,false)
// console.log(contents[0])
// console.log(contents[1])


// // ts中的抽象类
// abstract class person {
//
//     abstract chifan():string;
//
//     abstract Name:string;
//
//     abstract Age:number;
//
//     abstract Gender:string;
// }
//
// class student extends person{
//     Name:string;
//     Age:number;
//     Gender:string;
//
//     chifan(): string {
//         return "我是学生。我喜欢吃饭";
//     }
//
// }
//
// var temp=new student();
// console.log(temp.chifan())


// //ts中的接口
// interface Itool{
//     name:string;
//     age:number;
//
//    work():string;
// }
//
//
// function gongren(tool:Itool):void{
//     console.log(`工具叫`+tool.name+`，过期日期是`+tool.age+`，我会`+tool.work())
// }
//
//
// gongren({
//     name:'扳手',
//     age:20,
//     work():string{
//         return `我会抠图钉`
// }
// })


// // ts中类与接口的配合
// interface Itool{
//     name:string;
//     age:number;
//
//     work():string;
// }
//
// interface DongZuo{
//     jiao:string;
//
//     tiao:string
//
//     taiowu():string;
//
// }
//
// class User implements Itool,DongZuo{
//         name:string;
//         age:number;
//
//         work(): string {
//             return '我是要实现工具接口中的work方法';
//         }
//
//         tiao:string;
//
//         jiao:string
//
//         taiowu(): string {
//             return '我是要实现动作接口中的taniwu方法';
//         }
//
// }
//
//
// let u=new User()
// alert(u.work())
// alert(u.taiowu())

// // 接口中的可选参数
// interface Itool{
//     name:string;
//     age:string;
//
//     work():string;
// }
//
// function person(tool:Itool):void{
//
//     console.log(tool.name)
//     console.log(tool.age)
//     console.log(tool.work())
//     console.log(`接口中的可选参数`)
// }
//
// person({
//     name:'张三',
//     age:'18',
//     work(): string {
//         return 'work'
//     }
// })



