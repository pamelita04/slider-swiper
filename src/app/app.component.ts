import { Component, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperModule } from 'ngx-useful-swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoSwiper';
  @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;

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

  config: any = {
    pagination: {
      el: '.swiper-pagination',
    },
    paginationClickable: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 10
  };

  listBusiness = [
    {name: "image1"},
    {name: "image2"},
    {name: "image3"},
    {name: "image4"},
    {name: "image1"},
    {name: "image2"},
    {name: "image2"},
    {name: "image3"},
    {name: "image4"}
  ]



  next() {
    this.usefulSwiper.swiper.slideNext();
  }
}


