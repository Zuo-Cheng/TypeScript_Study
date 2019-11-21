

let psn=data=>{
    alert(data)
}

psn('张三')

let psn2=(data,item)=>{
    alert(data+item)
}

//定义函数
function stu():string{
    return '我是一个string返回值的函数'
}
//使用函数
stu();

//定义匿名函数
var stu2=function():string{
    return '我是一个匿名函数'
}
//调用
stu2()

//传递参数
var stu3=function(name:string,age:number):string{
    return name+age
}

//可选参数
function getInfo(name:string,age?:number){
    console.log('我叫'+name)
}


// 默认参数
function getDefualt(name:string,age:number=20){
    console.log('我叫'+name+'，我的年龄是'+age)
}
// 使用
getDefualt('左乘')

// 三点运算符
function getdata(...result:number[]):number{
        var sum:number=0;
    for (let i = 0; i < result.length; i++) {
        sum+=result[i]
    }
    console.log(sum)
    return sum;
}
// 使用
alert(getdata(1,2,3,4,5,6,7,8,9))


var temp=_data=>{
    alert(_data)
}

temp('张三')


// 函数的重载
function dataInfo(name:string):string;//第一个方法
function dataInfo(age:number):string;//第二个方法
function dataInfo(str:any):any{
    if(typeof str==='string'){
        return '我是一个方法，我叫'+str
    }else
    {
        return `我是第二个方法，我的年龄是`+str
    }
}
// 使用方法
alert(dataInfo('张三'))
alert(dataInfo(20))