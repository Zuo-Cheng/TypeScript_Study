
// //抽象类person
// abstract class Person{
//     abstract work():string;
//
//     abstract name:string;
//
//     age:string;
// }
//
// //声明一个子类，继承至抽象类
// class  stu extends Person {
//     name:string
//
//     gender:string
//     work(): string {
//         return "我是子类";
//     }
//
//
// }
//
// //创建一个父类person类型的变量
// let zs:Person;
// //用父类person类型的变量new出一个stu子类对象
// zs=new stu()
// console.log(zs.work());
// zs.age


// // 接口函数的使用
// //定义一个类
// class person{
//     name:string;
//     age:string
// }
// //声明一个接口，并且继承至person类
// interface Iperson extends person{
//     gender:string
// }
// //当我们创建这个Iperson接口类型的变量时，
// //不仅仅要实现接口中所有的成员，还要实现它的父类所有成员
// let pson:Iperson={
//     name:'zhangsan',
//     age:'20',
//     gender:'nan '
// }
// console.log(pson);

// //默认参数的使用
// function stu(num1:number=0,num2:number=0,num3:number=0){
//         return num1+num2+num3
// }
//
// console.log(stu(1, 2));


// // 剩余参数的使用
// function nums2(name:string,...nums:number[]):number{
//     let sum:number=0;
//     for (let i = 0; i < nums.length; i++) {
//         sum+=nums[i];
//     }
//     return sum
// }
//
// console.log(nums2('zhangsan', 1, 2, 5, 8, 9, 6, 5, 4, 7, 8));
