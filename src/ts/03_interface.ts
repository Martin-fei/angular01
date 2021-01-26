// 自定义对象类型
let boss1 = {
  name: '文化老师',
  age: 33,
  sex: '男',
};

let boss2 = {
  name: '物化老师',
  age: 33,
  sex: '男',
};

let boss3 = {
  name: '丽娟老师',
  age: 33,
  sex: '男',
};
// 抽象出上方对象的类型
// 新的关键词 class 类  function 函数
// 新的关键词 ：interface接口；声明类型

// 类型：用大驼峰写法

interface Boss {
  name: string;
  age: number;
  sex: string;
}

let boss4: Boss;
boss4 = {
  name: 'a',
  age: 1,
  sex: 'bb',
};
