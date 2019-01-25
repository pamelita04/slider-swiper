import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'ngx-useful-swiper';

@Component({
  selector: 'app-swiper-business',
  templateUrl: './swiper-business.component.html',
  styleUrls: ['./swiper-business.component.scss']
})
export class SwiperBusinessComponent implements OnInit {
  @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;

  config: any = {
    pagination: {
      el: '.swiper-pagination',
    },
    paginationClickable: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 10,
    autoplay: 1000,
  };

  listBusiness = [
    {name: 'image1'},
    {name: 'image2'},
    {name: 'image3'},
    {name: 'image4'},
    {name: 'image1'},
    {name: 'image2'},
    {name: 'image2'},
    {name: 'image3'},
    {name: 'image4'}
  ];



  // next() {
  //   this.usefulSwiper.swiper.slideNext();
  // }

  constructor() { }

  ngOnInit() {
  }

}
