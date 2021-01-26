import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc07',
  templateUrl: './myc07.component.html',
  styleUrls: ['./myc07.component.css'],
})
export class Myc07Component implements OnInit {
  // 声明接受外来参数的属性 name
  @Input() name: string;
  @Input() phone: string;
  @Input() married: boolean;
  // @Input() boss: object;
  @Input() boss: Boss;
  // name:string 代表一个字符串类型的变量，名字是name
  // @input()代表此变量是组件的属性
  // 相当于vue的 props:['name']
  constructor() {}

  ngOnInit(): void {}
}
interface Boss {
  name: string;
  age: number;
}
