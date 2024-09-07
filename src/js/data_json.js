import jsonServicse from '../json/servicss.json';





// Получаем текущий URL страницы
const currentPage = window.location.pathname;

// Проверяем, находится ли пользователь на страницах index.html или services.html
if (currentPage.endsWith('index.html') || currentPage.endsWith('services.html')) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.textContent = ''
  jsonServicse.forEach(item => {
    swiperWrapper.innerHTML += `
      <div class="swiper-slide">
        <img class="img-slide" src="src/image/services/services-slider/${item.img1}" alt="${item.img1}">
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
} else {
  console.log('Script is not running on this page.');
}

document.querySelectorAll('.detsls-service').forEach(button => {
  button.addEventListener('click', (event) => {
    const btnId = event.target.getAttribute('data-btn-id');
    if (currentPage === '/' || currentPage.endsWith('index.html') ) {
      window.location.href = `services.html?id=${btnId}`;
    }
    else{
    }
  });
});

document.querySelectorAll('.link-request' , ).forEach(button => {
  button.addEventListener('click', (event) => {
    const btnId = event.target.getAttribute('data-btn-id');
    if (currentPage.endsWith('index.html') || currentPage.endsWith('services.html')) {
      window.location.href = `estimat.html`;
    }
  });
});
