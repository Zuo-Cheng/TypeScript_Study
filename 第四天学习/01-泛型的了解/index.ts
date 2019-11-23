
// // 变量泛型
// function person<T>(value:T):string{
//     return `我是一个泛型接口`+`，传过来的值是：`+value
// }
//
// let str=person<string>('张三')
// console.log(str)
//
// function user<T>(name:T,age,T):string{
//
//     return `泛型name参数的值是`+name+`，泛型age参数的值是`+age
// }

// // 普通传参，没有类型检查
// function user_1(name:any):string{
//     return `name的值是`+name;
// }
//
// alert(user_1('张三'))


// //使用泛型变量严格约束了，传出参数类型和
// // 传出参数类型必须要保持一致
// function user<T>(name:T):T{
//     return name;
// }
// //调用
// alert(user<number>(80))


// // 普通方式计算案例
// class jisuan{
//     public  numList:number[]=[];
//
//     add(num:number):void{
//         this.numList.push(num)
//     }
//
//     min():number{
//         let manNum:number=this.numList[0];
//         for (let i = 0; i < this.numList.length; i++) {
//             if(manNum>this.numList[i]){
//                 manNum=this.numList[i]
//             }
//         }
//
//         return manNum;
//     }
// }
//
// let mins=new jisuan();
// mins.add(20)
// mins.add(52)
// mins.add(14)
// mins.add(75)
//
// alert(mins.min())

// //使用泛型类计算案例
// class person<T>{
//
//     public numList:T[]=[]
//
//     add(num1:T):void{
//
//         this.numList.push(num1)
//     }
//
//     min(){
//         let minNum:T=this.numList[0];
//         for (let i = 0; i < this.numList.length; i++) {
//             if(minNum<this.numList[i]){
//                 minNum=this.numList[i];
//             }
//         }
//         return minNum
//     }
// }
// //在实例化的时候，如何我规定了这个类
// //必须是用什么类型的话，那么他就是按这个
// //类型的约束，对其中的变量进行约束
// let minSum=new person<string>();
// minSum.add('z')
// minSum.add('f')
// minSum.add('a')
// minSum.add('e')
// minSum.add('w')
//
// minSum.min()
// alert(minSum.min())


