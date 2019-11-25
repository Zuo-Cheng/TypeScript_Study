
interface userInf{
    name:string;
    age:number;
    gender:string;
}

module Mymodule{
    export class proson implements userInf{

         name:string;
         age:number;
         gender:string;


         constructor(name:string,age:number,gender:string){
             this.name=name;
             this.age=age;
             this.gender=gender;
         }


         public shyHello():void{

         }

    }

    export class User {
        name:string;
        age:number;
        gender:string;


        uShyHello():string{

            return `哈哈哈`
        }
    }
}