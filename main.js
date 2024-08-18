import "normalize.css";
import './src/scss/index.scss';

const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector(".nav");
const containerHeader = document.querySelector(".container-header")

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active_burger');
  navMenu.classList.toggle('active_nav')
  containerHeader.classList.toggle('active')
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
      header.classList.add('start_scroll');
  } else {
      header.classList.remove('start_scroll');
  }
});