import jsonServicse from '../json/servicss.json';

let button1 = document.querySelector('.btn.back-list');


const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.textContent = ''
  jsonServicse.forEach(item => {
    swiperWrapper.innerHTML += `
      <div class="swiper-slide">
        <img class="img-slide" src="/services-slider/${item.img1}" alt="${item.img1}">
        <div class="action-buttons">
          <button data-btn-id="${item.code}" class="detsls-service">details</button>
          <button class="link-request">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.99 4.5L14.99 8.5M14.99 8.5L10.99 13M14.99 8.5H1.98999" stroke="#4A4A49"/>
            </svg>
            Request an Estimate
          </button>
        </div>
        <h3>${item.name}</h3>
      </div>
    `;
  });

