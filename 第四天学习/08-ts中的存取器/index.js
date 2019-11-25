//
// class  newPerson{
//     private pName:string;
//
//     get pName(value:string):string{
//             return ``;
//     }
//
// }
//静态属性的使用
var person = /** @class */ (function () {
    function person() {
    }
    person.syhello = function () {
        console.log('hello word');
    };
    person.Name = 'woshizuocheng';
    return person;
}());
console.log(person.Name);
person.syhello();
