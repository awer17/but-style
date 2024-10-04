import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 20,

  // loop: true,
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
      },
    440:{
        slidesPerView: 1.2,
        spaceBetween: 20,
    },
    780: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    2600:{
      slidesPerView: 2,
      spaceBetween: 40,
    }
  }
});


