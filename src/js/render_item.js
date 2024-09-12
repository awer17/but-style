export default  function renderItem(code) {
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
