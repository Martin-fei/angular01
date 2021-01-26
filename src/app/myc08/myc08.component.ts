import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-myc08',
  templateUrl: './myc08.component.html',
  styleUrls: ['./myc08.component.css'],
})
export class Myc08Component implements OnInit {
  // 接受事件的属性
  // (showMsg)="show()" :把show()方法存储到showMsg中
  // EventEmitter：事件触发器
  @Output() showMsg = new EventEmitter();
  // output表示向外传输消息
  constructor() {}

  ngOnInit(): void {}
}
