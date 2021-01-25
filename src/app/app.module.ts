import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Myc01 } from './myc01/myc01';
import { Myc02Component } from './myc02/myc02.component';
import { Myc03Component } from './myc03/myc03.component';
import { FormsModule } from '@angular/forms';
import { Myc04Component } from './myc04/myc04.component';

// 引入form模块

@NgModule({
  declarations: [AppComponent, Myc01, Myc02Component, Myc03Component, Myc04Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
