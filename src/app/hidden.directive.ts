import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHidden]',
})
export class HiddenDirective {
  // 构造方法：会自动接受指令所在的标签作为初始化参数！
  constructor(e: ElementRef) {
    // console.log(e.nativeElement);
    e.nativeElement.hidden = true;
  }
}
// 静态类型分析
// js
// function show(x){
//   return x.toUpperCase();
// }
// show(123)
// ts
// function show(x:string){
//   return x.toUpperCase();
// }
// show('123')
// ts在编写代码时发现类型不对直接提示
