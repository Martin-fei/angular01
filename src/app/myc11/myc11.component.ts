import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-myc11',
  templateUrl: './myc11.component.html',
  styleUrls: ['./myc11.component.css'],
})
export class Myc11Component implements OnInit {
  // 引入服务的语法糖：权限词（public/protected/private）变量名 ：类型
  // 这样写可直接引入this.ns
  constructor(public ns: NamesService) {}

  ngOnInit(): void {}
}
