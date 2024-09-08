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
  console.log(itemDetailsElement)
  itemDetailsElement.innerHTML = `
                  <div class="_title">
                    <h2 class="detal">
                      <span>Engineered Hardwood:</span> Key Benefits and Installation Tips
                    </h2>
                  </div>
                  <div class="descripcion">
                    <div class="text">
                      <p>Engineered hardwood is a popular choice for homeowners seeking the beauty of natural wood with added durability. This flooring option combines a real wood veneer with layers of plywood, creating a stable and resilient surface that’s perfect for various environments. In this article, we delve into the benefits of engineered hardwood and offer tips for a successful installation.
                      </p>
                      <p>
                        Preparation is the first step to a successful installation. Ensure the subfloor is clean, dry, and level, as these factors are critical for the longevity of your hardwood floor. Acclimating the planks to the room’s temperature and humidity for at least 48 hours is also essential to prevent warping.
                      </p>
                    </div>
                    <img src="./src/image/services/services-slider/engineered_hardwood.jpg" alt="Engineered Hardwood">
                  </div>
                  <div class="descripcion _next">
                    <div class="text">
                      <p>Selecting the right installation method depends on your specific needs and the type of subfloor. Floating, glue-down, and nail-down methods each have their advantages, and the choice will depend on factors like room size, subfloor material, and personal preference. Professional advice can be invaluable in making this decision.
                      </p>
                      <p>
                        During installation, precision is key. Start by laying out the planks to ensure the best visual appeal, and use spacers to maintain proper expansion gaps around the room’s perimeter. Cutting planks with care and following manufacturer instructions will ensure a seamless finish.
                      </p>
                      <p>
                        Engineered hardwood is not only a stylish and durable flooring choice but also an investment in your home’s value. When installed correctly, it provides the warmth and elegance of wood, with the added benefits of stability and resistance to moisture. For the best results, consider hiring professionals who can guarantee a flawless installation.
                      </p>
                    </div>
                    <img src="./src/image/services/services-slider/engineered_hardwood2.jpg" alt="Engineered Hardwood">
                  </div>
                  <button class="btn btn-estimat1">
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow">
                      <path d="M11.46 5L15.46 9M15.46 9L11.46 13.5M15.46 9H2.45996" stroke="#D9D9D9"></path>
                    </svg>
                    Calculate cost online
                  </button>
                `
}

