import jsonServicse from '../json/servicss.json';

console.log(jsonServicse[1].name);

const swiperWrapper = document.querySelector('.swiper-wrapper');

swiperWrapper.textContent = '';

jsonServicse.forEach(item =>{
  swiperWrapper.textContent += '1'
})
