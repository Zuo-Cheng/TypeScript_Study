// //泛型接口的使用1
// interface Itool<T>{
//     name:T;
//     age:T;
//     gender:T;
//
//     shyHello<T>(dongzuo:T):string;
// }
//
// class person implements Itool<string>{
//     name:string;
//     age:string;
//     gender:string;
//
//     constructor(name:string,age:string,gender:string){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
// }
//
//     shyHello<T>(dongzuo: T): string {
//         return `我叫`+this.name+`，我的年龄是`+this.age+`，我的性别是`+this.gender+`我的爱好是`+dongzuo
//     }
// }
//
//
// let pers=new person('张三','18','男')
//
// let msg=pers.shyHello<string>('打架')
// alert(msg)
// // 泛型接口的使用二(函数类型接口）
// interface Itool{
//     (value:string,value2:string):string
// }
//
//
// var temp:Itool=function(value:string,value2:string):string{
//     return `我是一个泛型接口的应用`
// }
//
// alert(temp('zhangsan','lisi'))
// // 泛型接口的使用三
// interface Itool{
//     //这里定义了一个类型规范
//     <T>(value:T):T
// }
// //当我的函数调用了上面的这个接口的话
// //就必须按照我的规范执行。
// let temp:Itool=function<T>(value:T):T{
//     return value;
// }
//
// //如何调用的时候我指定的是string类型。那么
// //上面的函数和接口中的T就表示string类型。
// //并且传入的参数也必须是string类型
// //反之：如何我指定的是number类型，那么上面的函数和
// //接口中的T就是number类型，那么传入的参数就必须是number类型
// alert(temp<string>('张三'))
// //泛型接口的使用四
// //定义一个泛型接口
// interface Itool<T>{
//     //为这个接口指定泛型约束
//     (value:T):T
// }
//
// //定义一个泛型函数
// function datas<T>(value:T):T{
//     return value
// }
// //创建一个变量，指定接口和函数的约束是string类型
// let temp:Itool<string>=datas;
//
// let str:string=temp('张三')
// alert(str)
// 将泛型类当参数使用(重点）（可以将数据库的表映射到class中）
//首先定义一个映射类
var user = /** @class */ (function () {
    //在实例化的时候为每一个属性赋值
    function user(params) {
        this.name = params.name;
        this.age = params.age;
        this.gender = params.gender;
    }
    return user;
}());
//定义另一个类，将上面的映射类当参数传递
var sqlSersers = /** @class */ (function () {
    function sqlSersers() {
    }
    //上面的映射类当参数传递
    sqlSersers.prototype.messagebox = function (info) {
        console.log(info);
        return true;
    };
    return sqlSersers;
}());
//实例化映射类
var u = new user({
    name: '张三',
    age: '20',
    gender: '男'
});
var sql = new sqlSersers();
sql.messagebox(u);
