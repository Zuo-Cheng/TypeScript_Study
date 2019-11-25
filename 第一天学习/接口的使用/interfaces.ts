

interface ParName{
    parWidth:number
    parHiehgt;number
}

interface ForeName{
    foreWidth:number;
    foreHeigth:number;
}


interface isName extends ForeName,ParName{
    width:number;
    height:number;
}

class Proson implements isName {
    width:number;
    height:number;

    foreWidth:number;
    foreHeigth:number;

    parWidth:number
    parHiehgt;number

    constructor(width:number,height:number){
        this.width=width;
        this.height=height;
    }


    public shyHello():number{
        return this.width+this.height
    }
}


var p=new Proson(200,200)

alert(p.shyHello())

