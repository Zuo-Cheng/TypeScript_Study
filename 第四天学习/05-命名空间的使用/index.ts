
namespace Systems{
    interface Itool{
        name:string;
        age:string;
        gender:string;

        work():void;
    }


   export class userA implements Itool {
        name:string;
        age:string;
        gender:string

        constructor(name:string,age:string,gender:string){
            this.name=name;
            this.age=age;
            this.gender=gender
        }


        work():void{
            console.log(`我叫`+this.name+`，我的年龄是`+this.age+`，我的性别是`+this.gender)
        }
    }

    let temp=new userA('ZHANGSAN','20','NAN')
    temp.work();
}

// 使用命名空间中的成员
var temp=new Systems.userA('第一个System1的命名空间','20','男')
temp.work()



namespace System2{
    interface Itool{
        name:string;
        age:string
        gender:string
    }


    class person implements Itool{

        name:string;
        age:string;
        gender:string;

        constructor(name:string,age:string,gender:string){
            this.name=name;
            this.age=age;
            this.gender=gender
        }

        shyHello():string{

            return ``;
        }

    }
}


// 使用关键字namespace，创建命名空间
 namespace system3{
    export class person {
         name:string;
         age:string;
         gender:string;

         constructor(name:string,age:string,gender:string){
             this.name=name;
             this.age=age;
             this.gender=gender
         }

         styhello():string{
             return `我叫`+this.name+`,我的年龄是`+this.age
         }
     }
}
//使用命名空间中的成员，
var temps1=new system3.person('颤三','20','男')
var str=temps1.styhello()
let uName=temps1.name
console.log(str)

//导出两个命名空间
export{
    system3,
    Systems
}