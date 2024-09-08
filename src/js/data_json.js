import jsonServicse from '../json/servicss.json';
const currentPage = window.location.pathname;
const currentUrl = window.location.href;

const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');

let button1 = document.querySelector('.btn.back-list');
const swiperElement = document.querySelector('.swiper');
const itemDetailsElement = document.querySelector('.item_details');
let itemCode = "";

console.log('ID:', id);

if( id > 0){
  renderItem(id)
}


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
}

document.querySelectorAll('.detsls-service').forEach(button => {
  button.addEventListener('click', (event) => {
    const btnId = event.target.getAttribute('data-btn-id');
    if (currentPage === '/' || currentPage.endsWith('index.html') ) {
      window.location.href = `services.html?id=${btnId}#context`;
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


if (currentPage.endsWith('services.html')) {
  listServicer();
  document.querySelectorAll('.detsls-service').forEach(button => {
    button.addEventListener('click', (event) => {
    itemCode = event.target.getAttribute('data-btn-id');
    renderItem(itemCode)
    });
  })
  const selectList = document.querySelector('.select-list');
  selectList.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    let savedValue = selectedValue;
    renderItem(savedValue)
});


change();
}

function btnLink(params) {
  const btnLing = document.querySelectorAll('.btn-estimat')
  console.log(btnLing)
  btnLing.forEach (item => {
    item.addEventListener('click', (event) => {
      console.log(event)
      window.location.href = 'estimat.html';
    })
  })
}
btnLink()

const listItems = document.querySelectorAll('.list-name li');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    const value = item.getAttribute('value');
    renderItem(value)
  });
});


function listServicer  () {
  let ulList = document.querySelector('.list-name')
  const listSelect = document.querySelector('.select-list');
  listSelect.innerHTML = ''
  ulList.innerHTML = ""
  jsonServicse.forEach(item =>{
    ulList.innerHTML += `<li value="${item.code}">${item.name}</li>`;
    listSelect.innerHTML += `<option value="${item.code}">${item.name}</option>
    `
  })
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
                  <button class="btn btn-estimat active">
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow">
                      <path d="M11.46 5L15.46 9M15.46 9L11.46 13.5M15.46 9H2.45996" stroke="#D9D9D9"></path>
                    </svg>
                    Calculate cost online
                  </button>
                `
    swiperElement.classList.remove('active');
    itemDetailsElement.classList.add('active');
    button1.classList.add('active');
    btnLink()
}

