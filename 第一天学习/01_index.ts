

console.log('hello word')

function shyHello(name,age){
    console.log('我叫'+name+',年龄是'+age)
}

shyHello('张三','18')

let zuocheng:string='我是张三';
document.getElementById('div1').innerHTML=zuocheng

let nameList:string[]=['张三','李四','王五','赵六'];

var ulList= document.getElementById('ul1');


var htmlStr:string;
for (let i = 0; i < nameList.length; i++) {
    htmlStr+=`<li>`+nameList[i]+`</li>`
}

ulList.innerHTML=htmlStr

interface tool {
    name:string;
    count:number;
}

function tools(t:tool):void{
    console.log(t);
    console.log("我叫"+t.name+",数量"+t.count)
}


interface ClockInterface {
    time:Date;
}



