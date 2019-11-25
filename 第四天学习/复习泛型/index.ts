
//泛型的练习
// functon sum<T>(n1:T,n2:T):string{
//     return `${n1}+${n2}`;
// }
//
// console.log(sum<number>(20, 30));
//
//
// function sums<T>(arrays:T[]):T[]{
//     return arrays
// }
//
// console.log(sums([1, 2, 3, 5, 6, 9]));


// //重载的使用
// // @ts-ignore
// function person(value:string):string;
// function person(value:number):string;
// function person(value:boolean):string
// function person(value:string|number|boolean){
//         switch(typeof value){
//             case "string":
//                 return "我是第一个person";
//             case "number":
//                 return "我是第二个person";
//             case "boolean":
//                 return "我是第三个person"
//         }
// }
//
// console.log(person('zhangsan'));
// console.log(person(20));
// console.log(person(true));

//变量的作用域
// let bar=0;
// (function(){
//     let foo:number=0;
//     bar=1;
//     console.log(bar);
//     console.log(foo);
// })()
//
// console.log(bar);
// // console.log(foo);

// let Counter=(function(){
//     let _i:number=0;
//     function Conunter(){
//
//     }
//     Conunter.prototype.get=function(){
//         return _i;
//     };
//     Conunter.prototype.set=function(val:number){
//         _i=val;
//     };
//     Conunter.prototype.increment=function(){
//         _i++;
//     }
//     return Conunter
// })
//
//
// function p<T>(value:T):T{
//     return value;
// }
//
// console.log(p<string>('zs'));


// class  person<T> {
//    num1:T;
//    add:(n1:T,n2:T)=>T
// }
//
// let stu=new person<number>();
// stu.num1=200;
// console.log(stu.add(20, 30));


interface Brid{
    jiao():string;
    fei():string;
}

interface Fish {
    you():string;
    tupaopao():string
}

function pp(name:string):string{
    return `fdafdafda${name}`
}


function pp2():Brid|Fish{
    return
}
