

//通过export关键字引出成员
 export let names:string='张三'

export function laoshi():string {
    return `我是老师`
}


 function student(name):string{
    return  `我是是一个学生，我的名字叫`+name
}
//将当前模块中名字为student的成员导出
export default  student;


export function students(name:string,age:number):string{
        return `我是`+name+`我的年龄是`+age
}


