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
  }
}

document.addEventListener('click', liClick);

// document.querySelector('.btn-estimat1').addEventListener('click', function() {
//   window.location.href = 'estimat.html';
// });


