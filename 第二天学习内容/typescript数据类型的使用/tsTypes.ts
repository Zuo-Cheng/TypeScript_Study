

let userName:string='张三'

let isZheng:boolean=true;

let num:number=15;

let array:string[]=['张三','李四','王五']

let numList:Array<number>=[1,2,3,4,5,6]

let objList:[number,string,boolean]=[12,'张三',false]


let objArray:any[]=[13,'张三',true,false]

let  obj:number |string|undefined|null|boolean;
obj='张三'
console.log(obj)


function stu(name:string,age:number):void{
    console.log(`我叫`+name+`,我的年龄是`+age)
}

enum gender {
    男=1,
    女=2
}

let ge:gender=gender.男
