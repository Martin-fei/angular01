// ts语言最大的特性：静态类型分析
// 有点：在代码不执行的情况下，编程软件就可以分析出有可能的错误；还可以提供丰富的代码提示
// 静态类型声明：变量名：类型名
function show(name: string) {
  // 1.有丰富的提示
  return name.toUpperCase();
}
// 不需运行，就可以侦测到报错
// show(123)
show('dongdong');
// 浏览器不支持ts文件，只识别html，js，css
// 需要转化ts为js之后再运行
// 转化命令
// 全局方法：tsc xxx.ts
// 局部方式： npx tsc xxx.ts
