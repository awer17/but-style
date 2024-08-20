var swiper = new Swiper('.mySwiper-reviews', {
  slidesPerView: 3,
  spaceBetween: 60,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  allowTouchMove: true,
  breakpoints: {
    200:{
      slidesPerView: 1.4,
      spaceBetween: 20,
      },
    440:{
        slidesPerView: 1.4,
        spaceBetween: 20,
    },
    780: {
        slidesPerView: 2.4,
        spaceBetween: 40,
    },
    1210: {
      slidesPerView: 3.4,
      spaceBetween: 60,
    },
  }
});