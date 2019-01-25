import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'ngx-useful-swiper';

@Component({
  selector: 'app-swiper-testimony',
  templateUrl: './swiper-testimony.component.html',
  styleUrls: ['./swiper-testimony.component.scss']
})
export class SwiperTestimonyComponent implements OnInit {

  @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;

  config: any = {
    paginationClickable: true,
    spaceBetween: 0,
    centeredSlides: true,

    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  listBusiness = [
    { name: 'image1' },
    { name: 'image2' },
    { name: 'image3' },
    { name: 'image4' },
    { name: 'image1' },
    { name: 'image2' },
    { name: 'image2' },
    { name: 'image3' },
    { name: 'image4' }
  ];

  // config: any = {
  //   autoplay: 3000, // Autoplay option having value in milliseconds
  //   initialSlide: 0, // Slide Index Starting from 0
  //   slidesPerView: 1, // Slides Visible in Single View Default is 1
  //   pagination: '.swiper-pagination', // Pagination Class defined
  //   paginationClickable: true, // Making pagination dots clicable
  //   nextButton: '.swiper-button-next', // Class for next button
  //   prevButton: '.swiper-button-prev', // Class for prev button
  //   spaceBetween: 30, // Space between each Item
  //   dynamicBullets: true,
  // };

  constructor() { }

  ngOnInit() {
  }

}
