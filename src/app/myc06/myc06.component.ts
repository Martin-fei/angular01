import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc06',
  templateUrl: './myc06.component.html',
  styleUrls: ['./myc06.component.css'],
})
export class Myc06Component implements OnInit {
  num = 1;
  // 构造方法：本质上不属于组件的生命周期，是面向对象的类初始化时必然会触发的方法
  constructor() {
    console.log('constructor:构造方法，类实例化时触发');
  }

  ngOnInit(): void {
    // 生命周期：组件开始初始化内容，相当于vue中的mount方法
    console.log('ngOnInit:组件开始初始化内容');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterViewInit:组件的数据初始化完毕');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit:组件的UI初始化完毕');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked:组件的数据发生变化');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked:组件的UI发生变化');
  }

  ngOnDestroy(): void {
    // 生命周期：组件销毁时
    console.log('ngOnDestory:组件销毁时');
  }
}
