

class Animal {
    private name:string;

    public age:number=19;

    protected gender:string='男';


    public static Lname:string='王五'



    constructor(name:string){
        this.name=name;
    }

    public shyHello():void{
        console.log('我叫'+this.name)
    }
}


class  Cat extends Animal{

        shyHello(): void {
            alert('我是cat类'+this.age)
        }
}


let c=new Cat('左成')
c.shyHello()
