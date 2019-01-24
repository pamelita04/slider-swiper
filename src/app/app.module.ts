import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SwiperModule } from 'ngx-useful-swiper';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
