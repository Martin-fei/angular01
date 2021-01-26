import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow',
})
export class PowPipe implements PipeTransform {
  // {{xxx | pow :n :m :.....}} 语法糖
  // 本质： new Powpipe().transform(xxx)
  transform(value, exp): unknown {
    // ** 是计算次幂的数学运算符
    return value ** exp;
  }
}
