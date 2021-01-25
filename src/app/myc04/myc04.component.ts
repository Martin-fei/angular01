import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc04',
  templateUrl: './myc04.component.html',
  styleUrls: ['./myc04.component.css'],
})
export class Myc04Component implements OnInit {
  data = '<h1>Hello World!</h1>';
  size = 17;
  r = 10;
  score = 60;
  constructor() {}

  ngOnInit(): void {}
}
