
//定义一个方法，值的类型为T(泛型)
//返回值类型也为T(泛型)
function user<T>(value:T):T{
    return value
}

//在这里你为泛型指定了什么类型，
// 那么你传入的值就必须是你指定的那个类型的参数
//但是返回值可以是任意类型
alert(user<string>('张三'))
alert(user<number>(20))