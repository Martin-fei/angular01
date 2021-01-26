import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChild('m9')代表找到#m3的元素
  // 关联到变量 myc03上
  @ViewChild('m09') myc09;
  title = 'mycapp00';
  show06 = false;
  doAdd() {
    console.log(this.myc09);
    this.myc09.count++;
  }
  // 此方法在父中生成，将会传到子
  // 参数msg将在子中传递实参
  show(msg) {
    console.log(msg);
  }
}
