
//创建一个接口
interface Itool{
    (key:string,value:string):string
}
//定义接口类型的变量
var md5:Itool=function(key:string,value:string):string{
    return  key+value;
}
// 使用接口
alert(md5('zhangsan','lsii'))