import "normalize.css";
import './src/scss/index.scss';

const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector(".nav");

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active_burger');
  navMenu.classList.toggle('active_nav')
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
      header.classList.add('start_scroll');
  } else {
      header.classList.remove('start_scroll');
  }
});