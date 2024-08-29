import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

var swiper = new Swiper('.mySwiper2', {
  slidesPerView: 2,
  loop: true,
  grid: {
    rows: 2,
  },
  // spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  allowTouchMove: true,
  breakpoints: {
    // 300:{
    //   slidesPerView: 1,
    //   spaceBetween: 20,
    //   },
    // 440:{
    //     slidesPerView: 1.2,
    //     spaceBetween: 20,
    // },
    780: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    1275: {
      spaceBetween: 78,
    },

  }
});

