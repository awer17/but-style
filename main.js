import "normalize.css";
import './src/scss/index.scss';

const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector(".nav");

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active_burger');
  navMenu.classList.toggle('active_nav')
});
