
//
// class person {
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
//
//     shyHello():string{
//         return  `我叫`+this.name
//     }
// }
//
//
// var temp=new person('张三','18','男')
// let msg:string= temp.shyHello();
// alert(msg)


//
// class person {
//     name:string;
//     age:number;
//     gender:string;
//
//
//     shyHello():void{
//         console.log('hello word')
//         console.log(this.name)
//         console.log(this.age)
//         console.log(this.gender)
//     }
// }


// //创建类
// class person{
//     //声明字段
//     name:string;
//     age:number;
//
//     //创建构造函数
//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//     }
//
//     //声明方法
//     shyHello():void{
//         console.log('hello word')
//     }
// }
//
// // 实例化类
// let psn=new person('张三',18)
// //调用方法
// psn.shyHello()


// // 创建父类person
// class person{
//     //设置父类的一些属性
//     name:string;
//     age:number;
//     gender:string;
//
//     //设置父类的构造函数
//     constructor(name:string,age:number,gender:string){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
//
//     //在父类中定义一个方法
//     shyHello():void{
//         console.log('我叫'+this.name+'我的年龄是'+this.age+',我是'+this.gender+'的')
//     }
// }
//
// //创建第一个子类
// class stu extends person{
//     //在子类的方法中调用父类的属性
//     Message():void{
//         console.log('我叫'+this.name+'我的年龄是'+this.age+',我是'+this.gender+'的')
//     }
// }
//
// //创建第二个子类
// class stu2 extends person{
//     Message_2():void{
//         console.log('我叫'+this.name+'我的年龄是'+this.age+',我是'+this.gender+'的')
//     }
// }
//
// // 实例化子类
// var temmp=new stu('张三',20,'男');
// temmp.Message();
//
// var temp_2=new stu2('李四',20,'女')
// temp_2.Message_2()


// 修饰符
//
//  class person{
//     public name:string;
//     private  age:number
//     protected gender:string
//
//     constructor(name:string,age:number,gender:string){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
// }
//
//
// class stu extends person {
//
//     shyHello():void{
//         console.log(this.name)
//     }
// }



// // es5中的实例方法和静态方法
//
// function person1(){
//
//    tihs.msg_1=function(){
//         alert('hello word')
//     }
// }
//
// let  ps=new person1();
// ps.run=function(){
//     alert('hello word_2')
// }
//
// \
//
// ps.run()


// // typescript中的静态方法
// class person{
//
//     //静态属性
//     static name_1:string='张三';
//     //实例属性
//     gender:string='男'
//
//     static msg():void{
//         console.log('我是一个静态方法')
//     }
//
//     msg_2():void{
//         console.log('我是一个实例方法')
//     }
//
// }
// //静态方法可以直接用类名点出来
// person.msg()
// //实例方法必须要实例化对象后点出来
// var temp=new person();
// temp.msg_2()



// // typescript中的多态
//
// class person{
//     name:string;
//     age:number;
//     gender:string;
//
//     shyHello():void{
//         console.log('我是人类')
//     }
// }
//
//
// class student extends person {
//
//     shyHello(): string {
//        return  `我是学生`
//     }
// }
//
// class laoshi extends person {
//
//     shyHello(): string {
//         return  `我是老师`
//     }
// }
//
// class siji extends person {
//
//     shyHello(): string {
//         return  `我是司机`
//     }
// }


//定义抽象方法
abstract class   person {
    public abstract shyHello ():void;

    public abstract Name:string;
}
//在子类中重写抽象类中的成员
class stu extends person {
    Name:string
    shyHello(): void {
        console.log('我是学生')
    }
}

var temp=new stu();
temp.shyHello();

