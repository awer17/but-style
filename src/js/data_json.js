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

let button1 = document.querySelector('.btn.back-list');
const swiperElement = document.querySelector('.swiper');
const itemDetailsElement = document.querySelector('.item_details');
let itemCode = "";

if (currentPage.endsWith('services.html')) {

  document.querySelectorAll('.detsls-service').forEach(button => {
    button.addEventListener('click', (event) => {
    itemCode = event.target.getAttribute('data-btn-id');
    renderItem(itemCode)
    swiperElement.classList.remove('active');
    itemDetailsElement.classList.add('active');
    button1.classList.add('active');
    });
  })

change();
}

function change (){
  button1.addEventListener('click', () => {
    swiperElement.classList.add('active');
    itemDetailsElement.classList.remove('active');
    button1.classList.remove('active');
  });
}

function renderItem(code) {
  const foundService = jsonServicse.filter(item => item.code === code);
  console.log(foundService[0])
  itemDetailsElement.innerHTML = `
                  <div class="_title">
                    <h2 class="detal">
                      ${foundService[0].title}
                    </h2>
                  </div>
                  <div class="descripcion">
                    <div class="text">
                      <p>${foundService[0].description1}</p>
                      <p>${foundService[0].description2}</p>
                    </div>
                    <img src="./src/image/services/services-slider/${foundService[0].img1}" alt="${foundService[0].name}">
                  </div>
                  <div class="descripcion _next">
                    <div class="text">
                      <p>${foundService[0].description3}</p>
                      <p>${foundService[0].description4}</p>
                      <p>${foundService[0].description5}</p>
                    </div>
                    <img src="./src/image/services/services-slider/${foundService[0].img2}" alt="${foundService[0].name}">
                  </div>
                  <button class="btn btn-estimat1">
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow">
                      <path d="M11.46 5L15.46 9M15.46 9L11.46 13.5M15.46 9H2.45996" stroke="#D9D9D9"></path>
                    </svg>
                    Calculate cost online
                  </button>
                `
}

