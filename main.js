import "normalize.css";
import './src/scss/index.scss';
import './src/js/animacia_about';
import './src/js/slider';
import './src/js/slider-rev';

document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero');
  let currentScale = 120; // Начальный масштаб фона в процентах
  const targetScale = 128; // Конечный масштаб фона
  const duration = 4000; // Длительность анимации в миллисекундах
  const interval = 1000 / 60; // Время между кадрами для 60fps
  const increment = (targetScale - currentScale) / (duration / interval); // Шаг увеличения

  const zoomInBackground = () => {
    if (currentScale < targetScale) {
      currentScale += increment;
      heroSection.style.backgroundSize = `auto ${currentScale}%`;
      requestAnimationFrame(zoomInBackground);
    }
  };

  // Запускаем анимацию при загрузке страницы
  zoomInBackground();
});


const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector(".nav");
const containerHeader = document.querySelector(".container-header")
const body = document.querySelector('body')

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active_burger');
  navMenu.classList.toggle('active_nav')
  containerHeader.classList.toggle('active')
  body.classList.toggle('active_burger')
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
      header.classList.add('start_scroll');
  } else {
      header.classList.remove('start_scroll');
  }
});

function liClick(event) {
  if (event.target.classList.contains('click-li')) {
    burgerMenu.classList.toggle('active_burger');
    navMenu.classList.toggle('active_nav')
    containerHeader.classList.toggle('active')
    body.classList.toggle('active_burger')
    // console.log('Item clicked:', event.target.textContent);
  }
}

document.addEventListener('click', liClick);