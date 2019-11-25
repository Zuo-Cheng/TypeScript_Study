console.log('hello word');
function shyHello(name, age) {
    console.log('我叫' + name + ',年龄是' + age);
}
shyHello('张三', '18');
var zuocheng = '我是张三';
document.getElementById('div1').innerHTML = zuocheng;
var nameList = ['张三', '李四', '王五', '赵六'];
var ulList = document.getElementById('ul1');
var htmlStr;
for (var i = 0; i < nameList.length; i++) {
    htmlStr += "<li>" + nameList[i] + "</li>";
}
ulList.innerHTML = htmlStr;
