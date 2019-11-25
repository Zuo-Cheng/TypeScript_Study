

// //索引接口，用于对数组的约束
// interface arrayType{
//     [index:number]:string
// }
// //如上面的接口所示，变量使用了上面的接口类型的话，
// // 这个接口类型约束了，所使用这个接口i类型的数组的值
// // 必须是一个string类型
// let strList:arrayType=['zhangsan','lisi','wangwu']
//
// console.log(strList[2])

// //索引接口的第二种写法，对对象的约束
// interface obj{
//     [index:string]:string
// }
// //这种索引接口中对使用这个类型的对象进行了约束。
// //如上面的接口所示：它规定了使用这个接口的对象
// // 的值必须是string类型
// let temp:obj={name:'张三',gender:'男'}
// console.log(temp)


// 接口的继承
//定义一个obj接口
interface Ojb{
    name:string;
    age:number;
    gender:string
}
//定义一个person接口
interface person{
    work():void
}
//定义一个老师接口，并且这个老师接口继承
// 至obj接口和person接口
interface laoshi extends Ojb,person {

}
//创建一个学生类，继承至老师接口。
//注意：当一个类继承至一个接口，
//这个类必须实现这个接口中所有的成员。
//如何这个接口也有继承，那么这个类必须也要实现这个
//接口的父接口的所有成员
class stu implements laoshi{
    name:string;
    age:number;
    gender:string;

    constructor(name:string,age:number,gender:string){
        this.name=name;
        this.age=age;
        this.gender=gender
    }

    work(): void {
        console.log(`我叫`+this.name+`，我的年龄是`+this.age+`，我的性别是`+this.gender+`，我的工作是读书`)
    }
}

let zhangsan=new stu('张三',19,'男')
zhangsan.work()