
//通过关键字import引入文件，并且引入当前文件指定的成员
//就可以使用引入的成员了
import {laoshi,names} from './Modules'

console.log(names)
console.log(laoshi())

//引入默认导入的文件，引入导出的成员
import student from './Modules'
//使用导入成员
console.log(student('关云长'))


import {students as stu} from "./Modules";
let str:string=stu('张三',20)
console.log(str)
