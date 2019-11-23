"use strict";
exports.__esModule = true;
//通过关键字import引入文件，并且引入当前文件指定的成员
//就可以使用引入的成员了
var Modules_1 = require("./Modules");
console.log(Modules_1.names);
console.log(Modules_1.laoshi());
//引入默认导入的文件，引入导出的成员
var Modules_2 = require("./Modules");
//使用导入成员
console.log(Modules_2["default"]('关云长'));
var Modules_3 = require("./Modules");
var str = Modules_3.students('张三', 20);
console.log(str);
