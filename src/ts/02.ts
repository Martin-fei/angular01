// 数据类型
// 数字类型：number
var a: number;
// 声明类型的变量，只能赋值对应类型的值
// a ='1';
a = 5;

var b: string; //字符串
var c: boolean; //布尔类型 true    false
var d: any; //任意类型    不写类型，默认any
d = 5;
d = 'a';
d = true;
d = '123';
// 混合类型
var e: number | boolean;
e = 55;
e = true;
// e='124'

var f: Array<string>; //数组类型，其中元素都是字符串
f = ['a', 's', 'd'];
// 简化写法
var g: string[]; //等价于Array<string>
g = ['s', 'w'];
var h: number[];
h = [1, 2, 3];

// 数组中每个值的类型
var i: [number, string, boolean];
i = [1, '1', false];
