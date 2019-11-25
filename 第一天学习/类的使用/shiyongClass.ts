


class proson {
    name:string;
    age:number;
    gender:string

    constructor(name:string,age:number,gender:string){
        this.name=name;
        this.age=age;
        this.gender=gender
    }

    massage():void{
        alert('我是一个消息')
    }

    shyHello():void{
        alert('我叫'+this.name+',我的年龄是'+this.age+'，我是'+this.gender+'的')
    }
}

let psn=new proson('左成',19,'男');
psn.shyHello();


class Cat extends proson {
    shyHello(): void {
        console.log('我叫'+this.name+',我的年龄是'+this.age+'，我是'+this.gender+'的')
    }

}

var Cars=new Cat('李四',25,'女')
Cars.shyHello()
Cars.massage();