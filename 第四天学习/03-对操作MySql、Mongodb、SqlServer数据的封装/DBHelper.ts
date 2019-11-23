
//定义一个约束的泛型接口
interface DBH<T>{
    Add(info:T):boolean;

    Updata(info:T,id:number):boolean;

    Delete(id:number):boolean;

    SelectInfo(id:number):any[]
}

class MysqlDb<T> implements DBH<T>{
    Add(info: T): boolean {
        return false;
    }

    Delete(id: number): boolean {
        return false;
    }

    SelectInfo(id: number): any[] {
        return [];
    }

    Updata(info: T, id: number): boolean {
        return false;
    }
}

class SQLserver<T> implements DBH<T>{
    Add(info: T): boolean {
        console.log(info)
        return true;
    }

    Delete(id: number): boolean {
        return false;
    }

    SelectInfo(id: number): any[] {
        return [];
    }

    Updata(info: T, id: number): boolean {
        return false;
    }

}

//创建一个user类和数据库中的表做映射
class user{
    name:string |undefined
    age:string |undefined
    gender:string|undefined

    constructor(params:{
        name:string|undefined
        age:string|undefined
        gender:string|undefined
    }){
        this.name=params.name;
        this.age=params.age;
        this.gender=params.gender
    }
}

//实例化这个类
let u=new user({
    name:'张三',
    age:'20',
    gender:'男'
})

let sqls=new SQLserver()
sqls.Add(u)
