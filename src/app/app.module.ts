import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Myc01 } from './myc01/myc01';
import { Myc02Component } from './myc02/myc02.component';
import { Myc03Component } from './myc03/myc03.component';
import { FormsModule } from '@angular/forms';
import { Myc04Component } from './myc04/myc04.component';
import { Myc05Component } from './myc05/myc05.component';
import { HiddenDirective } from './hidden.directive';
import { PowPipe } from './pow.pipe';
import { Myc06Component } from './myc06/myc06.component';
import { Myc07Component } from './myc07/myc07.component';
import { Myc08Component } from './myc08/myc08.component';
import { Myc09Component } from './myc09/myc09.component';
import { Myc10Component } from './myc10/myc10.component';
import { Myc11Component } from './myc11/myc11.component';

// 引入form模块

@NgModule({
  declarations: [
    AppComponent,
    Myc01,
    Myc02Component,
    Myc03Component,
    Myc04Component,
    Myc05Component,
    HiddenDirective,
    PowPipe,
    Myc06Component,
    Myc07Component,
    Myc08Component,
    Myc09Component,
    Myc10Component,
    Myc11Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
