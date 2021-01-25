import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc02',
  templateUrl: './myc02.component.html',
  styleUrls: ['./myc02.component.css'],
})
export class Myc02Component implements OnInit {
  name = '东东';
  age = 19;
  names = ['东东', '然然', '亮亮'];
  boss = {
    name: '文化',
    age: 32,
  };
  constructor() {}

  ngOnInit(): void {}
}
