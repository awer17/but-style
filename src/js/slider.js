// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';

// // import Swiper and modules styles




var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2.5,
  spaceBetween: 60,
  loop: true,
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
    1080: {
      slidesPerView: 2.5,
      spaceBetween: 60,
    },

  }

});

