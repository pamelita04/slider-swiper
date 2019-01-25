import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SwiperModule } from 'ngx-useful-swiper';

import { AppComponent } from './app.component';
import { SwiperBusinessComponent } from './components/swiper-business/swiper-business.component';
import { SwiperTestimonyComponent } from './components/swiper-testimony/swiper-testimony.component';

@NgModule({
  declarations: [
    AppComponent,
    SwiperBusinessComponent,
    SwiperTestimonyComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
