

// let arr:number[]=[1,6,3,5,8,9,7];

// let [num1,num2]=arr
// console.log(num1) //num1=1
// console.log(num2);//num2=6

// //变换
// [num1,num2]=[num2,num1]
// console.log(num1)//num1=6
// console.log(num2)//num2=1

// // 三点运算符
// let [n1,...n2]=[1,2,5,6,9,9,6,3,8,45,56]
// console.log(n1) //n1=1
// console.log(n2)//n2=[2,5,6,9,9,6,3,8,45,56]


// 对象的解构
interface Person{
    Sname:string;
    age:string;
    gender:string;
}

//创建一个对象
//@ts-ignore
let stu:Person={
    Sname:'zhangsan',
    age:'20',
    gender:'男'
};

//解构这个对象
//@ts-ignore
let {gender,Sname,age}=stu
console.log(gender)
console.log(Sname)
console.log(age)