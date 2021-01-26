import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc09',
  templateUrl: './myc09.component.html',
  styleUrls: ['./myc09.component.css'],
})
export class Myc09Component implements OnInit {
  count = 1;
  show(){
    alert(this.count)
  }
  constructor() {}

  ngOnInit(): void {}
}
