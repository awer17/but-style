import "normalize.css";
import './src/scss/index.scss';
// import './src/js/data_json.js'
import './src/js/animacia_about';
import './src/js/slider';
import './src/js/slider-rev';
// import './src/js/slider2';
// import './src/scss/services.scss';
import './src/js/slider-data.js'
import './src/js/burger-menu.js'
import './src/js/formHandler.js'


// link to service with key

document.querySelectorAll('.detsls-service').forEach(button => {
  button.addEventListener('click', (event) => {
    const btnId = event.target.getAttribute('data-btn-id');
      window.location.href = `/services/index.html?id=${btnId}#context`;
  });
});

document.querySelector('.btn-estimat').addEventListener('click', function() {
  window.location.href = './estimat/';
});

document.querySelectorAll('.link-request').forEach(button => {
  button.addEventListener('click', (event) => {
    const btnId = event.target.getAttribute('data-btn-id');
      window.location.href = `/estimat/`;
  });
});