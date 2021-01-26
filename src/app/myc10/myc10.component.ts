import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-myc10',
  templateUrl: './myc10.component.html',
  styleUrls: ['./myc10.component.css'],
})
export class Myc10Component implements OnInit {
  // 服务的使用
  // 声明属性：保存传入的值
  ns: NamesService;
  // 声明依赖：当前组件实例化要求，NamesService类型的参数
  // 注入操作：系统在使用当前组件时，就会根据依赖的要求，自动传入指定类型的参数
  // 系统会检测到需要NamesService类型的参数，所以就会let obj=new NamesService();
  // 然后实例化当前组件new Myc10Component(obj)
  constructor(ns: NamesService) {
    this.ns = ns; //把传入的ns保存到自身属性this.ns中
  }

  ngOnInit(): void {}
}

// js 面向对象
// class Demo {
// names;
// constructor(names: string) {}
// }
// new Demo('aa');

// 依赖注入机制；
// 声明依赖：构造方法中声明要什么类型
// 注入：使用时，就必须提供指定类型的参数
