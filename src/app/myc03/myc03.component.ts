import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc03',
  templateUrl: './myc03.component.html',
  styleUrls: ['./myc03.component.css'],
})
export class Myc03Component implements OnInit {
  logo = 'http://101.96.128.94:9999/img/header/logo.png';
  show() {
    alert('我是show方法');
  }
  count = 1;
  num = 0;
  add() {
    this.count++;
  }
  name = 'dongdong';
  product = {
    name: 'iphone',
    price: 8999,
    count: 5,
  };
  i = [1, 2, 3, 4, 5, 6, 7];
  emps = [
    { name: '东东', age: 33, phone: '13301476393' },
    { name: '东东', age: 33, phone: '13301476393' },
    { name: '东东', age: 33, phone: '13301476393' },
  ];
  score = 60;
  constructor() {}

  ngOnInit(): void {}
}
