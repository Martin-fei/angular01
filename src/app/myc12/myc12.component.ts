// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc12',
  templateUrl: './myc12.component.html',
  styleUrls: ['./myc12.component.css'],
})
export class Myc12Component implements OnInit {
  res;
  // ng使用网路服务来发送网络请求，但是！网络服务模块默认不加载，需要到app.module.ts中加载
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    let url = 'https://api.apiopen.top/getWangYiNews';

    // axios:axios.get(url).then(res=>{})
    // http:this.http.get(url).subscribe(res=>{})
    // then 然后 subscribe 订阅
    this.http.get(url).subscribe((res) => {
      this.res = res;
    });
  }
}
