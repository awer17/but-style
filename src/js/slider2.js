import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

var swiper = new Swiper('.mySwiper2', {
  slidesPerView: 2,
  loop: true,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  allowTouchMove: true,
  breakpoints: {
    300:{
      slidesPerView: 1,
      spaceBetween: 20,
      grid: {
        rows: 1,
      },
      },
    480:{
      slidesPerView: 1.2,
      spaceBetween: 20,
      grid: {
        rows: 1,
      },
      },
    606:{
      slidesPerView: 1.5,
      spaceBetween: 20,
      grid: {
        rows: 1,
      },
    },
    820: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    1275: {
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

