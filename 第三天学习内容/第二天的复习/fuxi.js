// //数据类型的使用
// let sum:number=30;
//
// let str:string='字符串'
//
// let array:string[]=['张三','李四','王五']
//
// let renyi:any[]=[1,2,3,'张三',true,false]
//
// let tas:string|number|null|undefined;
//
// let bool:boolean=true
//
// let arrays:Array<string>=['张三','李四','王五']
//
// for (let i in arrays){
//     console.log(arrays[i])
// }
//
// for(let item in renyi){
//     console.log(renyi[item])
// }
function person(tool) {
    console.log(tool.name);
    console.log(tool.age);
    console.log(tool.work());
    console.log("\u63A5\u53E3\u4E2D\u7684\u53EF\u9009\u53C2\u6570");
}
person({
    name: '张三',
    age: '18',
    work: function () {
        return 'work';
    }
});
